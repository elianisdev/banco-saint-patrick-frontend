import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";

type AccountOption = {
  id: string;
  name: string;
  alias: string;
  cbu: string;
  balance: string;
};

const accounts: AccountOption[] = [
  {
    id: "1",
    name: "Caja de Ahorro",
    alias: "JUAN.AHORRO.BSP",
    cbu: "0720001188000036985874",
    balance: "$500.450,50",
  },
  {
    id: "2",
    name: "Cuenta corriente",
    alias: "JUAN.AHORRO.BSP",
    cbu: "0999999847623855543523",
    balance: "$450.450,50",
  },
  {
    id: "3",
    name: "Plazo fijo",
    alias: "JUAN.AHORRO.BSP",
    cbu: "0563784981234234244444",
    balance: "$2.450.000,50",
  },
];

export const NewTransaction = () => {
  const [tab, setTab] = useState<"mis" | "otro">("mis");
  const [selectedAccount, setSelectedAccount] = useState<string>(accounts[0]?.id ?? "");
  const [reference, setReference] = useState("");
  const navigate = useNavigate();

  const charsLeft = 50 - reference.length;
  const currentAccount = accounts.find((acc) => acc.id === selectedAccount);

  return (
    <div className="min-h-screen bg-surface-base text-brand-forest">
      <Header userName="Juan" />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-3 py-6 sm:px-4 md:px-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex w-fit items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold text-brand-forest transition hover:bg-surface-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-olive focus-visible:ring-offset-2"
        >
          <span className="text-base">←</span>
          <span>Volver</span>
        </button>

        <section className="rounded-lg border border-dashed border-brand-olive/80 bg-white/60 px-4 py-3 text-lg font-semibold text-brand-forest">
          ¿A quién Transferís?
        </section>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_1fr]">
          {/* Columna izquierda: lista de cuentas */}
          <section className="flex flex-col gap-4 rounded-lg border border-surface-outline bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTab("mis")}
                className={`rounded-md border px-3 py-2 text-sm font-semibold transition ${
                  tab === "mis"
                    ? "border-brand-olive bg-brand-olive/30 text-brand-forest"
                    : "border-surface-outline bg-white text-brand-forest hover:bg-surface-base"
                }`}
              >
                Mis cuentas
              </button>
              <button
                type="button"
                onClick={() => setTab("otro")}
                className={`rounded-md border px-3 py-2 text-sm font-semibold transition ${
                  tab === "otro"
                    ? "border-brand-olive bg-brand-olive/30 text-brand-forest"
                    : "border-surface-outline bg-white text-brand-forest hover:bg-surface-base"
                }`}
              >
                Otro
              </button>
            </div>

            <div className="text-sm text-gray-700">Selecciona la cuenta destino</div>

            <div className="flex flex-col gap-3">
              {accounts.map((account) => {
                const isActive = selectedAccount === account.id;
                return (
                  <button
                    key={account.id}
                    type="button"
                    onClick={() => setSelectedAccount(account.id)}
                    className={`flex w-full items-start gap-3 rounded-md border px-4 py-3 text-left shadow-sm transition ${
                      isActive
                        ? "border-brand-olive bg-surface-base"
                        : "border-surface-outline bg-white hover:bg-surface-base"
                    }`}
                  >
                    <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-surface-base text-brand-forest">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 8.25h13.5m-13.5 3h13.5m-13.5 3h13.5" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-brand-forest">{account.name}</p>
                      <p className="text-xs text-gray-600">N° 4521-3698-5874</p>
                      <p className="text-xs text-gray-600">Alias: {account.alias}</p>
                      <p className="text-xs text-gray-600">CBU: {account.cbu}</p>
                      <p className="pt-1 text-sm font-semibold text-brand-forest">{account.balance}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Columna derecha: formulario */}
          <section className="flex flex-col gap-4 rounded-lg border border-surface-outline bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-center text-brand-forest">Datos de la transferencia</h2>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-brand-forest">
                Cuenta de origen *
                <select className="mt-1 w-full rounded-md border border-surface-outline bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-olive">
                  <option>
                    Caja de Ahorro - N° 4521-3698-5874 - $500.450,50
                  </option>
                  <option>Cuenta corriente - N° 4521-3698-5874 - $450.450,50</option>
                  <option>Plazo fijo - N° 4521-3698-5874 - $2.450.000,50</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-brand-forest">
                Monto *
                <input
                  type="text"
                  placeholder="$ 0,00"
                  className="mt-1 w-full rounded-md border border-surface-outline bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-olive"
                />
              </label>

              <label className="text-sm font-semibold text-brand-forest">
                Hacia tu otra cuenta *
                <select className="mt-1 w-full rounded-md border border-surface-outline bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-olive">
                  <option>Selecciona una cuenta</option>
                  <option>Alias - CBU destino</option>
                </select>
              </label>

              <label className="text-sm font-semibold text-brand-forest">
                Referencia (opcional)
                <input
                  type="text"
                  placeholder="Ej: Pago mes de enero"
                  maxLength={50}
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  className="mt-1 w-full rounded-md border border-surface-outline bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-olive"
                />
              </label>

              <div className="text-xs text-gray-600">{charsLeft}/50 caracteres</div>
            </div>

            <button
              type="button"
              className="mt-2 w-full rounded-md bg-brand-olive px-4 py-3 text-sm font-semibold text-brand-forest shadow-sm transition hover:brightness-95"
            >
              Continuar
            </button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default NewTransaction;
