import { useEffect, useRef, useState } from "react";
import type { FC } from "react";
import { AccountCard } from "@/components/AccountCard";

type Account = {
  name: string;
  mask: string;
  balance: string;
};

type AccountsCarouselProps = {
  accounts: Account[];
};

export const AccountsCarousel: FC<AccountsCarouselProps> = ({ accounts }) => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const safeAccounts = accounts ?? [];
  const total = safeAccounts.length;

  const scrollToIndex = (index: number) => {
    if (!total) return;
    const nextIndex = Math.max(0, Math.min(index, total - 1));
    setCurrent(nextIndex);
    itemRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  const next = () => scrollToIndex(current + 1);
  const prev = () => scrollToIndex(current - 1);

  useEffect(() => {
    if (total > 0) {
      scrollToIndex(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  if (!total) return null;

  return (
    <div className="relative">
      {/* Controles */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-1 pr-2 sm:pl-2">
        <button
          type="button"
          onClick={prev}
          disabled={current === 0}
          className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-surface-outline bg-white/90 text-brand-forest shadow-sm transition hover:bg-white disabled:opacity-40"
        >
          ‹
        </button>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex items-center pl-2 pr-1 sm:pr-2">
        <button
          type="button"
          onClick={next}
          disabled={current === total - 1}
          className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-surface-outline bg-white/90 text-brand-forest shadow-sm transition hover:bg-white disabled:opacity-40"
        >
          ›
        </button>
      </div>

      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory gap-9 overflow-x-auto px-9 py-2 sm:gap-0.5 sm:px-1 md:px-1.5"
      >
        {safeAccounts.map((account, index) => (
          <div
            key={account.name}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className="snap-start"
            style={{
              minWidth: "72%",
            }}
          >
            <div className="w-[64vw] sm:w-[50vw] md:w-[42vw] lg:w-[36vw] xl:w-[34vw]">
              <AccountCard {...account} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        {safeAccounts.map((_, index) => {
          const isActive = index === current;
          return (
            <button
              key={index}
              type="button"
              aria-label={`Ir a la cuenta ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                isActive ? "bg-brand-forest" : "bg-gray-300"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AccountsCarousel;
