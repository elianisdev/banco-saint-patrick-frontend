import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { LoginPage } from "@/auth/pages/LoginPage";
import { BalancePage } from "@/accounts/pages/BalancePage";
import { NewTransactionPage } from "@/transactions/pages/NewTransactionPage";
import TransactionsPage from "@/transactions/pages/TransactionsPage.tsx";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Auth */}
                <Route path="/login" element={<LoginPage />} />

                {/* Accounts */}
                <Route path="/balance" element={<BalancePage />} />

                {/* Transactions */}
                <Route path="/transactions" element={<TransactionsPage />} />
                <Route path="/transactions/new" element={<NewTransactionPage />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
};