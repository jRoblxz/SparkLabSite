import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext"; // Importar hook

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
