import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import InstrumentePage from "./pages/InstrumentePage.jsx";
import InstrumentDetaliuPage from "./pages/InstrumentDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<InstrumentePage />} />
        <Route path="/instrumente/:id" element={<InstrumentDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}