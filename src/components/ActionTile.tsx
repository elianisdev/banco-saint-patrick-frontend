import type { FC, ReactNode } from "react";

type ActionTileProps = {
  label: string;
  icon: ReactNode;
  borderColor: string;
  textColor: string;
};

export const ActionTile: FC<ActionTileProps> = ({ label, icon, borderColor, textColor }) => {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-md border bg-surface-card px-4 py-4 text-sm font-semibold shadow-sm transition hover:shadow-md"
      style={{ borderColor, color: textColor }}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
};

export default ActionTile;
