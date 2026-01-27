import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BalancePage } from "@/pages/BalancePage";
import { LoginPage } from "@/pages/LoginPage";
import { SessionClosedPage } from "@/pages/SessionClosedPage";
import { NewTransactionPage } from "@/pages/NewTransactionPage";
import TransactionsPage from "@/pages/TransactionsPage";
import { TransactionConfirmationPage } from "@/pages/TransactionConfirmationPage";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/session-closed" element={<SessionClosedPage />} />
      <Route path="/balance" element={<BalancePage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/transactions/new" element={<NewTransactionPage />} />
      <Route
        path="/transactions/confirm"
        element={<TransactionConfirmationPage />}
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
