export default function HexagonBackground({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-0 opacity-100 ${className}`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='103.92304845413264' viewBox='0 0 60 103.92304845413264' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='hg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23c33b3b' /%3E%3Cstop offset='100%25' stop-color='%23e78282' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M30 103.92304845413264L0 86.60254037844386V51.96152422706632L30 34.64101615137754l30 17.32050807568878v34.64101615137754L30 103.92304845413264zM30 34.64101615137754L0 17.32050807568878V-17.32050807568877L30-34.64101615137754l30 17.32050807568877v34.64101615137755L30 34.64101615137754z' stroke='url(%23hg)' stroke-width='1.5' fill='none' stroke-opacity='0.4'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 103.92px",
        maskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 70%)"
      }}
    />
  );
}
