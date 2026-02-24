import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ModalAlias = ({ open, onClose }: Props) => {
  const [editing, setEditing] = useState(false);

  const cbu = "0000003100000000000001";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      alias: "juan.perez-1",
    },
  });

  const alias = watch("alias");

  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const onSubmit = (data: any) => {
    console.log("Alias guardado:", data.alias);
    setEditing(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-[#f7f7ee] p-6 rounded-2xl shadow-xl">
        <div className="bg-[#f7f7ee] border border-gray-400 rounded-xl p-6 w-[520px] shadow-md relative">

          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xl"
          >
            ✕
          </button>

          {/*FORM*/}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/*ALIAS*/}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-2xl font-bold">Alias</h2>

                {!editing && (
                  <button
                    type="button"
                    onClick={() => setEditing(true)}
                    className="text-sm font-semibold"
                  >
                    [Editar]
                  </button>
                )}
              </div>

              <div className="flex gap-4">
                <input
                  disabled={!editing}
                  className="flex-1 border border-[#9aa06b] rounded px-4 py-3 text-base disabled:bg-gray-100"
                  {...register("alias", {
                    required: "El alias es obligatorio",
                    minLength: {
                      value: 6,
                      message: "Mínimo 6 caracteres",
                    },
                    maxLength: {
                      value: 20,
                      message: "Máximo 20 caracteres",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9.-]+$/,
                      message:
                        "Solo letras, números, puntos (.) y guión (-). Sin espacios.",
                    },
                  })}
                />

                {!editing ? (
                  <button
                    type="button"
                    onClick={() => copy(alias)}
                    className="border border-[#9aa06b] px-6 rounded text-base bg-gray-100 hover:bg-[#B4BF89] transition "
                  >
                    Copiar
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="border border-[#9aa06b] px-6 rounded text-base bg-green-200"
                  >
                    Guardar
                  </button>
                )}
              </div>

              {/* ERROR */}
              {errors.alias && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.alias.message as string}
                </p>
              )}

              {editing && (
                <p className="text-sm mt-3 text-gray-600">
                  Usá entre 6 y 20 caracteres, sin espacios.<br />
                  Solo podés usar letras, números, puntos (.) y guión del medio (-).
                </p>
              )}
            </div>
          </form>

          {/*CBU*/}
          <div>
            <h2 className="text-2xl font-bold mb-2">CBU</h2>

            <div className="flex gap-4">
              <input
                value={`N° ${cbu}`}
                disabled
                className="flex-1 border border-[#9aa06b] rounded px-4 py-3 text-base bg-gray-100"
              />

              <button
                onClick={() => copy(cbu)}
                disabled={editing}
                className="border border-[#9aa06b] px-6 rounded text-base bg-gray-100 hover:bg-[#B4BF89] transition disabled:opacity-50 "
              >
                Copiar
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ModalAlias;
