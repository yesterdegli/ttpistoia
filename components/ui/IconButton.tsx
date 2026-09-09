"use client";

type Props = {
  onClick?: () => void;
  ariaLabel: string;
  children: React.ReactNode;
  size?: "default" | "slider";
};

export function IconButton({
  onClick,
  ariaLabel,
  children,
  size = "default",
}: Props) {
  const dim = size === "slider" ? "h-[38px] w-[38px]" : "h-10 w-10";

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`${dim} flex shrink-0 items-center justify-center rounded-full border-0 bg-grad-bg text-base font-semibold text-white shadow-[0_4px_12px_rgb(1_1_123/0.22)] transition-transform duration-[180ms] hover:-translate-y-0.5`}
    >
      {children}
    </button>
  );
}
