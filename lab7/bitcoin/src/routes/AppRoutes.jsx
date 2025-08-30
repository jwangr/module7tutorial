import Homepage from "../pages/Homepage";
import BitcoinEmojiPage from "../pages/BitcoinEmojiPage";
import LoginPage from "../pages/LoginPage";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/bitcoin" element={<BitcoinEmojiPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
}
