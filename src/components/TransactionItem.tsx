import type { FC } from "react";

type TransactionItemProps = {
  title: string;
  date: string;
  amount: string;
};

export const TransactionItem: FC<TransactionItemProps> = ({ title, date, amount }) => (
  <div className="flex items-center justify-between rounded-md border border-surface-outline bg-white px-4 py-3 text-sm shadow-sm">
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-outline bg-surface-base text-brand-forest">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3-3 3 3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75v2.25A2.25 2.25 0 0 0 6.75 20.25h10.5A2.25 2.25 0 0 0 19.5 18v-2.25" />
        </svg>
      </div>
      <div>
        <p className="font-semibold text-brand-forest">{title}</p>
        <p className="text-xs text-gray-600">{date}</p>
      </div>
    </div>
    <span className="text-sm font-semibold text-brand-forest">${amount}</span>
  </div>
);

export default TransactionItem;
