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

type ContactOption = {
  id: string;
  name: string;
  bank: string;
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

const contacts: ContactOption[] = [
  {
    id: "c1",
    name: "María Gonzales",
    bank: "Banco Galicia",
    alias: "MARIA.GALICIA",
    cbu: "0720001189008365823",
    balance: "$15.450,50",
  },
  {
    id: "c2",
    name: "Carlos Rodriguez",
    bank: "Banco Nación",
    alias: "CARLOS.R.NA",
    cbu: "0893637467657777",
    balance: "$100.000",
  },
  {
    id: "c3",
    name: "Ana Martinez",
    bank: "Banco Santander",
    alias: "ANA.M.SANTAN",
    cbu: "000000897654365274",
    balance: "$30.000",
  },
];

export const NewTransaction = () => {
  const [tab, setTab] = useState<"mis" | "otro">("mis");
  const [selectedAccount, setSelectedAccount] = useState<string>(accounts[0]?.id ?? "");
  const [selectedContact, setSelectedContact] = useState<string>(contacts[0]?.id ?? "");
  const [reference, setReference] = useState("");
  const [origin, setOrigin] = useState("Caja de Ahorro - N° 4521-3698-5874 - $500.450,50");
  const [amount, setAmount] = useState("");
  const [concept, setConcept] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const charsLeft = 50 - reference.length;
  const currentAccount = accounts.find((acc) => acc.id === selectedAccount);
  const currentContact = contacts.find((c) => c.id === selectedContact);

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

        <h1 className="text-lg font-semibold text-brand-forest">
          Nueva transferencia {tab === "otro" ? "OTRO CONTACTO" : ""}
        </h1>

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

            <div className="text-sm text-gray-700">
              {tab === "mis" ? "Selecciona la cuenta destino" : "Selecciona un contacto"}
            </div>

            {tab === "mis" ? (
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
            ) : (
              <div className="flex flex-col gap-3">
                {contacts.map((contact) => {
                  const isActive = selectedContact === contact.id;
                  return (
                    <button
                      key={contact.id}
                      type="button"
                      onClick={() => setSelectedContact(contact.id)}
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
                        <p className="text-sm font-semibold text-brand-forest">{contact.name}</p>
                        <p className="text-xs text-gray-600">{contact.bank}</p>
                        <p className="text-xs text-gray-600">Alias: {contact.alias}</p>
                        <p className="text-xs text-gray-600">CBU: {contact.cbu}</p>
                        <p className="pt-1 text-sm font-semibold text-brand-forest">{contact.balance}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </section>

          {/* Columna derecha: formulario */}
          <section className="flex flex-col gap-4 rounded-lg border border-surface-outline bg-white p-5 shadow-sm">
            <h2 className="text-xl font-semibold text-center text-brand-forest">Datos de la transferencia</h2>

            <div className="space-y-3">
              <label className="text-sm font-semibold text-brand-forest">
                Cuenta de origen *
                <select
                  className="mt-1 w-full rounded-md border border-surface-outline bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-olive"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                >
                  <option value="Caja de Ahorro - N° 4521-3698-5874 - $500.450,50">
                    Caja de Ahorro - N° 4521-3698-5874 - $500.450,50
                  </option>
                  <option value="Cuenta corriente - N° 4521-3698-5874 - $450.450,50">
                    Cuenta corriente - N° 4521-3698-5874 - $450.450,50
                  </option>
                  <option value="Plazo fijo - N° 4521-3698-5874 - $2.450.000,50">
                    Plazo fijo - N° 4521-3698-5874 - $2.450.000,50
                  </option>
                </select>
              </label>

              <label className="text-sm font-semibold text-brand-forest">
                Monto *
                <input
                  type="text"
                  placeholder="$ 0,00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
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
                Concepto
                <input
                  type="text"
                  placeholder="Ej: Alquiler"
                  value={concept}
                  onChange={(e) => setConcept(e.target.value)}
                  className="mt-1 w-full rounded-md border border-surface-outline bg-white px-3 py-2 text-sm shadow-sm focus:border-brand-olive focus:outline-none focus:ring-2 focus:ring-brand-olive"
                />
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
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
            />

            <section className="mt-2 rounded-md border border-surface-outline bg-surface-base/60 p-3 text-sm text-brand-forest">
              <h3 className="mb-2 text-base font-semibold text-brand-forest">Verifica los datos:</h3>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                <span className="text-xs font-semibold text-gray-700">Desde:</span>
                <span className="text-xs text-gray-800">{origin}</span>
                <span className="text-xs font-semibold text-gray-700">Hacia:</span>
                <span className="text-xs text-gray-800">
                  {tab === "mis" && currentAccount
                    ? `${currentAccount.name} - ${currentAccount.balance}`
                    : tab === "otro" && currentContact
                    ? `${currentContact.name} - ${currentContact.balance}`
                    : "Selecciona destino"}
                </span>
                <span className="text-xs font-semibold text-gray-700">Alias:</span>
                <span className="text-xs text-gray-800">
                  {tab === "mis" && currentAccount
                    ? currentAccount.alias
                    : tab === "otro" && currentContact
                    ? currentContact.alias
                    : "—"}
                </span>
              </div>
            </section>

            <button
              type="button"
              className="mt-3 w-full rounded-md bg-brand-olive px-4 py-3 text-sm font-semibold text-brand-forest shadow-sm transition hover:brightness-95"
              onClick={() => setShowModal(true)}
            >
              Continuar
            </button>
          </section>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-3">
          <div className="w-full max-w-3xl rounded-lg bg-white shadow-2xl">
            <div className="flex flex-col items-center gap-2 border-b border-surface-outline px-6 py-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-olive/30 text-brand-forest">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <p className="text-base font-semibold text-brand-forest">Confirmar Transferencia</p>
              <p className="text-xs text-gray-600">Revisá los datos antes de confirmar</p>
            </div>

            <div className="flex flex-col gap-3 px-6 py-4">
              <div className="rounded-md border border-surface-outline bg-white p-3 text-xs text-gray-800">
                <div className="mb-2 text-[11px] uppercase text-gray-500">Desde</div>
                <div className="text-sm font-semibold text-brand-forest">{origin}</div>
              </div>

              <div className="rounded-md border border-surface-outline bg-white p-3 text-xs text-gray-800">
                <div className="mb-2 text-[11px] uppercase text-gray-500">Hacia</div>
                <div className="text-sm font-semibold text-brand-forest">
                  {tab === "mis" && currentAccount
                    ? `${currentAccount.name} - ${currentAccount.balance}`
                    : tab === "otro" && currentContact
                    ? `${currentContact.name} - ${currentContact.balance}`
                    : "Selecciona destino"}
                </div>
                <div className="text-xs text-gray-600">
                  {tab === "otro" && currentContact ? currentContact.bank : ""}
                </div>
              </div>

              <div className="rounded-md border border-surface-outline bg-white p-3 text-xs text-gray-800">
                <div className="mb-2 text-[11px] uppercase text-gray-500">Monto a transferir</div>
                <div className="text-sm font-semibold text-brand-forest">{amount || "$ 0,00"}</div>
              </div>

              <div className="rounded-md border border-surface-outline bg-white p-3 text-xs text-gray-800">
                <div className="mb-2 text-[11px] uppercase text-gray-500">Concepto</div>
                <div className="text-sm text-brand-forest">{concept || "—"}</div>
              </div>

              <div className="rounded-md border border-surface-outline bg-white p-3 text-xs text-gray-800">
                <div className="mb-2 text-[11px] uppercase text-gray-500">Referencia</div>
                <div className="text-sm text-brand-forest">{reference || "—"}</div>
              </div>
            </div>

            <div className="flex justify-between gap-4 border-t border-surface-outline px-6 py-4">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-1/2 rounded-md border border-surface-outline bg-white px-4 py-2 text-sm font-semibold text-brand-forest shadow-sm transition hover:bg-surface-base"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="w-1/2 rounded-md bg-brand-olive px-4 py-2 text-sm font-semibold text-brand-forest shadow-sm transition hover:brightness-95"
                onClick={() => {
                  setShowModal(false);
                  setShowSuccess(true);
                }}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-3">
          <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-olive/30 text-brand-forest">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-brand-forest">Transferencia confirmada</h3>
            <p className="mt-2 text-sm text-gray-700">Se procesó tu transferencia.</p>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="w-1/2 rounded-md border border-surface-outline bg-white px-4 py-2 text-sm font-semibold text-brand-forest shadow-sm transition hover:bg-surface-base"
              >
                Cerrar
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowSuccess(false);
                  navigate("/balance");
                }}
                className="w-1/2 rounded-md bg-brand-olive px-4 py-2 text-sm font-semibold text-brand-forest shadow-sm transition hover:brightness-95"
              >
                Ir al inicio
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewTransaction;
