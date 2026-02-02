import type { FC } from "react";

type AccountCardProps = {
  name: string;
  mask: string;
  balance: string;
};

export const AccountCard: FC<AccountCardProps> = ({ name, mask, balance }) => {
  return (
    <div className="h-full rounded-lg border border-surface-outline bg-white px-4 py-4 shadow-sm sm:px-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-lg font-semibold text-brand-forest md:text-xl">{name}</p>
          <p className="text-xs text-gray-500">*** {mask}</p>
          <p className="mt-3 text-sm text-gray-600">Saldo Disponible</p>
          <p className="text-2xl font-semibold text-brand-forest md:text-3xl">{balance}</p>
        </div>
        <button
          type="button"
          aria-label="Ver saldo"
          className="text-gray-600 transition hover:text-brand-forest"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12s2.917-6.75 9.75-6.75S21.75 12 21.75 12s-2.917 6.75-9.75 6.75S2.25 12 2.25 12z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
