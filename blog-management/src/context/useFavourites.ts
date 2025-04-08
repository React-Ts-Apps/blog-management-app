import { useContext } from "react";
import { FavouritesContext } from "./FavouritesContext";

export function useFavourites() {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error("Empty context not allowed");
  }
  return context;
}
