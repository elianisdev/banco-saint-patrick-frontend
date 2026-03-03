import logo from "@/assets/logo.png";
import Footer from "@/components/Footer";
import { toast } from "react-toastify";
import { useRef } from "react";

export const Verificacion = () => {

    const validarCodigo = () => {
        const codigoCorrecto = true; // aquí va tu lógica real

        if (codigoCorrecto) {
            toast.success("Datos validados");
        } else {
            toast.error("Error");
        }
    };
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <div className="flex flex-col items-center justify-center flex-grow">
                <img src={logo} alt="Banco Saint Patrick" className="w-14 mb-2" />

                <h1 className="text-lg font-semibold text-gray-800">
                    Banco Saint Patrick
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                    Nos importa tu tranquilidad
                </p>

                <div className="w-full max-w-sm bg-[#fbfde9] border border-gray-300 rounded-lg shadow-md p-6 text-center">
                    <p className="text-sm text-gray-700 mb-4">
                        Te enviamos el código de acceso al email
                        <br />
                        <strong>juan_xxxx</strong>
                        <br />
                        Por favor completa las casillas con el mismo
                    </p>

                    <div className="flex justify-center gap-3 mb-5">
                        {[0, 1, 2, 3].map((_, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                ref={(el) => {
                                    inputsRef.current[index] = el;
                                }}
                                className="w-12 h-12 bg-gray-300 text-center rounded text-lg font-bold focus:outline-none focus:ring-2 focus:ring-gray-500"
                                onChange={(e) => {
                                    const value = e.target.value;

                                    // Solo permitir números
                                    if (!/^[0-9]?$/.test(value)) {
                                        e.target.value = "";
                                        return;
                                    }

                                    // Saltar al siguiente input
                                    if (value && index < 3) {
                                        inputsRef.current[index + 1]?.focus();
                                    }
                                }}
                                onKeyDown={(e) => {
                                    // Si presiona Backspace y está vacío → ir al anterior
                                    if (
                                        e.key === "Backspace" &&
                                        !inputsRef.current[index]?.value &&
                                        index > 0
                                    ) {
                                        inputsRef.current[index - 1]?.focus();
                                    }
                                }}
                            />
                        ))}
                    </div>

                    <button
                        onClick={validarCodigo}
                        className="w-full border border-gray-400 rounded py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                        Ingresa el código
                    </button>
                </div>

                <p className="text-xs text-gray-400 mt-6">
                    Protegido con encriptación de 256 bits
                </p>
            </div>

            <Footer />
        </div>
    );
};

export default Verificacion;