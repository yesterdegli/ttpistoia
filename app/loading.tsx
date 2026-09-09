/** Feedback immediato durante la navigazione tra pagine */
export default function Loading() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] bg-line"
      aria-hidden
    >
      <div className="h-full w-2/5 animate-pulse bg-red" />
    </div>
  );
}
