import logo from "@/assets/logo.png";
import Footer from "@/components/Footer";

export const Verificacion = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            {/* Logo y Subtitulos */}
            <div className="flex flex-col items-center justify-center flex-grow">
                <img src={logo} alt="Banco Saint Patrick" className="w-14 mb-2" />

                <h1 className="text-lg font-semibold text-gray-800">
                    Banco Saint Patrick
                </h1>
                <p className="text-sm text-gray-500 mb-6">
                    Nos importa tu tranquilidad
                </p>

                {/* Card de verificación */}
                <div className="w-full max-w-sm bg-[#fbfde9]  border border-gray-300 rounded-lg shadow-md p-6 text-center">
                    <p className="text-sm text-gray-700 mb-4">
                        Te enviamos el código de acceso al email
                        <br />
                        <strong>juan_xxxx</strong>
                        <br />
                        Por favor completa las casillas con el mismo
                    </p>
                    
                    {/* Inputs para el código de verificación */}
                    <div className="flex justify-center gap-3 mb-5">
                        <input className="w-12 h-12 bg-gray-300 text-center rounded" />
                        <input className="w-12 h-12 bg-gray-300 text-center rounded" />
                        <input className="w-12 h-12 bg-gray-300 text-center rounded" />
                        <input className="w-12 h-12 bg-gray-300 text-center rounded" />
                    </div>

                    <button className="w-full border border-gray-400 rounded py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                        Ingresa el código
                    </button>
                </div>
                {/* Texto de protección */}
                <p className="text-xs text-gray-400 mt-6">
                    Protegido con encriptación de 256 bits
                </p>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Verificacion;
