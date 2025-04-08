import { createRoot } from "react-dom/client";
import App from "./App";
import { FavouritesProvider } from "./context/FavouritesProvider";

import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <FavouritesProvider>
    <App />
  </FavouritesProvider>
);
