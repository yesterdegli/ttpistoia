export type FixtureRow = {
  date: string;
  match: string;
  venue: string;
  time: string;
};

export type StandingsRow = {
  position: number;
  team: string;
  points: number;
  id: number;
  iv: number;
  ipa: number;
  ip: number;
  pav: number;
  pap: number;
  sv: number;
  sp: number;
  pv: number;
  pp: number;
  pe: number;
};

export type CategoryData = {
  code: string;
  /** ID girone Portale Risultati FITeT (parametro CAM). 0 = non ancora pubblicato. */
  camId: number;
  fixtures: FixtureRow[];
  standings: StandingsRow[];
};

const baseFixtures: FixtureRow[] = [
  { date: "2 ago 2026", match: "TT Pistoia asd vs TT Elmridge Nord", venue: "Casa", time: "19:00" },
  { date: "9 ago 2026", match: "Pongisti Valverde vs TT Pistoia asd", venue: "Trasferta", time: "18:30" },
  { date: "16 ago 2026", match: "TT Pistoia asd vs Circolo Sandonà", venue: "Casa", time: "19:00" },
];

const baseStandings: StandingsRow[] = [
  { position: 1, team: "TT Pistoia asd", points: 28, id: 14, iv: 9, ipa: 0, ip: 5, pav: 42, pap: 18, sv: 198, sp: 142, pv: 742, pp: 601, pe: 0 },
  { position: 2, team: "TT Elmridge Nord", points: 24, id: 14, iv: 8, ipa: 0, ip: 6, pav: 39, pap: 22, sv: 191, sp: 150, pv: 722, pp: 621, pe: 0 },
  { position: 3, team: "Pongisti Valverde", points: 19, id: 14, iv: 7, ipa: 0, ip: 7, pav: 36, pap: 26, sv: 184, sp: 158, pv: 702, pp: 641, pe: 0 },
  { position: 4, team: "Circolo Sandonà", points: 15, id: 14, iv: 6, ipa: 0, ip: 8, pav: 33, pap: 30, sv: 177, sp: 166, pv: 682, pp: 661, pe: 0 },
  { position: 5, team: "Circolo Monteverde", points: 12, id: 14, iv: 5, ipa: 1, ip: 8, pav: 30, pap: 34, sv: 170, sp: 174, pv: 662, pp: 681, pe: 1 },
  { position: 6, team: "TT Casalnuovo", points: 9, id: 14, iv: 4, ipa: 0, ip: 10, pav: 27, pap: 38, sv: 163, sp: 182, pv: 642, pp: 701, pe: 0 },
  { position: 7, team: "Pongistica Belverde", points: 5, id: 14, iv: 3, ipa: 0, ip: 11, pav: 24, pap: 42, sv: 156, sp: 190, pv: 622, pp: 721, pe: 0 },
  { position: 8, team: "Amatori Rovereto", points: 2, id: 14, iv: 2, ipa: 0, ip: 12, pav: 21, pap: 46, sv: 149, sp: 198, pv: 602, pp: 741, pe: 1 },
];

export const categories: CategoryData[] = [
  "C2",
  "D1/A",
  "D1/B",
  "D2/A",
  "D2/B",
  "D3",
].map((code, index) => ({
  code,
  camId: 0,
  fixtures: baseFixtures,
  standings: baseStandings.map((row) =>
    row.team === "TT Pistoia asd"
      ? { ...row, position: [1, 2, 3, 2, 4, 1][index] ?? 1 }
      : row,
  ),
}));
