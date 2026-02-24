import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { AccountCard } from "@/components/AccountCard";
import { ActionTile } from "@/components/ActionTile";
import { TransactionItem } from "@/components/TransactionItem";
import { Sidebar } from "@/components/Sidebar";
import { AccountsCarousel } from "@/components/AccountsCarousel";
import { ModalAlias } from "@/components/ModalAlias";

const accounts = [
  { name: "Caja de Ahorro", mask: "4521", balance: "$3.325.000" },
  { name: "Cuenta Sueldo", mask: "9981", balance: "$2.100.500" },
  { name: "Cuenta USD", mask: "7310", balance: "U$D 4.200" },
  { name: "Inversión Fondo A", mask: "3021", balance: "$1.050.000" },
  { name: "Plazo Fijo", mask: "1187", balance: "$850.000" },
  { name: "Cuenta Euro", mask: "4470", balance: "€ 3.500" },
];

const transactions = Array.from({ length: 9 }).map((_, idx) => ({
  id: idx,
  title: "Transferiste - Mercado pago",
  date: "Miér. 26/01/25",
  amount: "150.000",
}));

export const Balance = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAliasModal, setOpenAliasModal] = useState(false);

  return (
    <div className="min-h-screen bg-surface-base text-brand-forest">
      <Header userName="Juan" onMenuClick={() => setIsMenuOpen(true)} />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-3 py-6 sm:px-4 md:px-6">
        <h2 className="font-arimo text-[32px] font-bold leading-[1] text-black">Tus cuentas</h2>

        <AccountsCarousel accounts={accounts} />

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <ActionTile
            label="Ingresar"
            borderColor="#E8B47A"
            textColor="#B66D1D"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4" />
              </svg>
            }
          />
          <ActionTile
            label="Transferencia Nueva"
            borderColor="#6CAF7F"
            textColor="#2D6C43"
            onClick={() => navigate("/transactions/new")}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h9m0 0l-3.5-3.5M13 12l-3.5 3.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 6.75h3.5a1.75 1.75 0 0 1 1.75 1.75v7a1.75 1.75 0 0 1-1.75 1.75H14" />
              </svg>
            }
          />
          <ActionTile
            label="Tu CBU/ALIAS"
            borderColor="#5C74A4"
            textColor="#2B3A5C"
            onClick={() => setOpenAliasModal(true)}
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14M5 12h14M5 17h9" />
              </svg>
            }
          />
        </section>

        <section className="space-y-3 pb-6">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold text-brand-forest">Movimientos del Mes</h3>
            <button type="button" className="text-sm font-medium text-brand-accent underline decoration-1 underline-offset-4">
              Ver todos
            </button>
          </div>
          <div className="space-y-2">
            {transactions.map((tx) => (
              <TransactionItem key={tx.id} title={tx.title} date={tx.date} amount={tx.amount} />
            ))}
          </div>
        </section>
      </main>

      {/* Menú lateral */}
      <div
        className={`fixed inset-0 z-40 transform transition ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute inset-y-0 left-0 w-72 max-w-full transform bg-white transition-transform duration-200 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar onClose={() => setIsMenuOpen(false)} />
        </div>
      </div>
      <ModalAlias open={openAliasModal} onClose={() => setOpenAliasModal(false)} />
    </div>
  );
};

export default Balance;
