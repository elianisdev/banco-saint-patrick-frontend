import logo from "@/assets/logo.png";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      {/* Contenido centrado */}
      <div className="flex flex-col items-center justify-center flex-grow">
        
        {/* Logo y título */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Banco Saint Patrick" className="w-14 mb-2" />
          <h1 className="text-lg font-semibold text-gray-800">
            Banco Saint Patrick
          </h1>
          <p className="text-sm text-gray-500">
            Nos importa tu tranquilidad
          </p>
        </div>

        {/* Card del login */}
        <div className="w-full max-w-sm bg-[#fbfde9] border border-gray-300 rounded-lg shadow-md p-6">
          {/* Usuario */}
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-1">
              Usuario
            </label>
            <input
              type="text"
              placeholder="Ingrese su Usuario"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          {/* Contraseña */}
          <div className="mb-5">
            <label className="block text-sm text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            />
          </div>

          <button 
          onClick={() => navigate("/verificacion")}
          className="w-full border border-gray-400 rounded py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
            Acceso Seguro
          </button>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          Protegido con encriptación de 256 bits
        </p>
      </div>

      {/* Footer real */}
      <Footer />
    </div>
  );
};

export default Login;
