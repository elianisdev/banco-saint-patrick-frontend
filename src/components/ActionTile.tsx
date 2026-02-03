import type { FC, ReactNode } from "react";

type ActionTileProps = {
  label: string;
  icon: ReactNode;
  borderColor: string;
  textColor: string;
  onClick?: () => void;
};

export const ActionTile: FC<ActionTileProps> = ({ label, icon, borderColor, textColor, onClick }) => {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-md border bg-surface-card px-4 py-4 text-sm font-semibold shadow-sm transition hover:bg-surface-base hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive focus-visible:ring-offset-2"
      onClick={onClick}
      style={{ borderColor, color: textColor }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default ActionTile;
