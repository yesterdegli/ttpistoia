import { execSync, spawn } from "node:child_process";

const PORT = Number(process.env.PORT ?? 3000);
const useTurbo = process.argv.includes("--turbo");
const clean = process.argv.includes("--clean");

function listListeningPids(port) {
  const pids = new Set();

  try {
    if (process.platform === "win32") {
      const output = execSync("netstat -ano", {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      });
      for (const line of output.split("\n")) {
        if (!line.includes("LISTENING")) continue;
        if (!line.includes(`:${port}`)) continue;
        const pid = line.trim().split(/\s+/).at(-1);
        if (pid && pid !== "0") pids.add(pid);
      }
      return pids;
    }

    const output = execSync(`lsof -ti tcp:${port}`, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    for (const pid of output.trim().split(/\s+/)) {
      if (pid) pids.add(pid);
    }
  } catch {
    // Nothing listening.
  }

  return pids;
}

function freePort(port) {
  const pids = listListeningPids(port);
  for (const pid of pids) {
    if (pid === String(process.pid)) continue;
    try {
      if (process.platform === "win32") {
        execSync(`taskkill /PID ${pid} /F`, { stdio: "ignore" });
      } else {
        execSync(`kill -9 ${pid}`, { stdio: "ignore" });
      }
      console.log(`Stopped stale process on port ${port} (PID ${pid})`);
    } catch {
      // Process may already be gone.
    }
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

if (clean) {
  await import("./clean-next.mjs");
}

const stalePids = listListeningPids(PORT);
if (stalePids.size > 0) {
  console.warn("");
  console.warn(`Port ${PORT} is already in use (PIDs: ${[...stalePids].join(", ")}).`);
  console.warn("Stopping previous dev server(s) to avoid broken CSS and cache errors...");
  freePort(PORT);
  await delay(1000);
}

if (listListeningPids(PORT).size > 0) {
  console.error("");
  console.error(`Could not free port ${PORT}. Close the other dev server manually, then retry.`);
  console.error("");
  process.exit(1);
}

const args = ["dev", "-p", String(PORT)];
if (useTurbo) args.push("--turbo");

console.log(`Starting dev server at http://localhost:${PORT}`);

const child = spawn("npx", ["next", ...args], {
  stdio: "inherit",
  env: process.env,
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));
