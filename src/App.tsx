import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage, HomePage } from "./pages";
import "./styles/sizes.scss";
import "./styles/sizes.scss";
import "./index.scss";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
