import type { FC } from "react";

type SidebarProps = {
  onClose?: () => void;
};

const items = [
  "Inicio",
  "Tarjetas de crédito",
  "Historial de Transferencias",
  "Configuración",
  "Cerrar sesión",
];

export const Sidebar: FC<SidebarProps> = ({ onClose }) => (
  <aside className="flex h-full w-full max-w-xs flex-col bg-white shadow-2xl">
    <div
      className="bg-brand-olive px-5 py-6 text-2xl font-semibold text-brand-forest"
      style={{ minHeight: "88px" }}
    >
      Banco Saint Patrick
    </div>

    <nav className="flex-1 divide-y divide-brand-olive/60">
      {items.map((label) => (
        <button
          key={label}
          type="button"
          onClick={onClose}
          className="flex w-full items-center px-5 py-4 text-lg text-brand-forest transition hover:bg-surface-base"
        >
          {label}
        </button>
      ))}
    </nav>

    <div className="px-4 py-4">
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar menú"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-forest text-brand-forest transition hover:bg-surface-base"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25L12 12m0 0L8.25 15.75M12 12l3.75 3.75M12 12L8.25 8.25" />
        </svg>
      </button>
    </div>
  </aside>
);

export default Sidebar;
