import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "@/pages/Login";
import { Balance } from "@/pages/Balance";
import { Transactions } from "@/pages/Transactions";
import { NewTransaction } from "@/pages/NewTransaction";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/transactions" element={<Transactions />} />
      <Route path="/transactions/new" element={<NewTransaction />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
