import { useState } from "react";
import { ArrowLeftRight, Banknote, Wallet } from "lucide-react";
import ActionTile from "@/components/ActionTile";
import ModalAlias from "@/components/ModalAlias";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

export const Deposit = () => {
    const navigate = useNavigate();
    const [openAlias, setOpenAlias] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const volver = () => {
        navigate(-1);
    }
    return (

    <div className="min-h-screen flex flex-col bg-surface-base text-brand-forest">
    <Header userName="Juan" onMenuClick={() => setIsMenuOpen(true)} />

    {/* CONTENIDO */}
    <main className="flex-1 bg-gray-100 p-6">
    
    <button className="mb-4 text-sm flex items-center gap-2" onClick={() => volver()}>← Volver </button>

    <h1 className="text-xl font-semibold mb-8 text-left">
        Elegí como ingresar tu dinero
    </h1>

    <div className="space-y-5 max-w-3xl mx-auto">
        <ActionTile
        label="Transferencia Bancaria"
        icon={<ArrowLeftRight size={20} />}
        borderColor="#d4d4d4"
        textColor="#222"
        onClick={() => setOpenAlias(true)}
        />

        <ActionTile
        label="Ingresar desde otra cuenta"
        icon={<Banknote size={20} />}
        borderColor="#d4d4d4"
        textColor="#222"
        />

        <ActionTile
        label="Efectivo"
        icon={<Wallet size={20} />}
        borderColor="#d4d4d4"
        textColor="#222"
        />
    </div>

    <ModalAlias open={openAlias} onClose={() => setOpenAlias(false)} />
    </main>

    {/* FOOTER */}
    <Footer />
</div>
    );
    };

    export default Deposit;
