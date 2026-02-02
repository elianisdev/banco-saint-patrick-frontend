import type { FC } from "react";

type HeaderProps = {
  userName?: string;
  onMenuClick?: () => void;
};

export const Header: FC<HeaderProps> = ({ userName = "Juan", onMenuClick }) => (
  <header
    className="flex items-center justify-between px-3 py-3 text-brand-forest sm:px-4"
    style={{ backgroundColor: "#B4BF89" }}
  >
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label="Menú"
        onClick={onMenuClick}
        className="flex h-9 w-9 items-center justify-center rounded-md bg-white/70 text-brand-forest shadow-sm transition hover:bg-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-xs">BS</span>
        <span>Banco Saint Patrick</span>
      </div>
    </div>

    <div className="flex items-center gap-3 text-sm font-medium">
      <span className="hidden sm:inline">¡Hola {userName}!</span>
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/70 font-semibold">
        JP
      </div>
    </div>
  </header>
);

export default Header;
