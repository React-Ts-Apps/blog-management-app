import { createContext } from "react";
import { blogProps } from "../types";

type FavouriteContextProps = {
  favourites: blogProps[];
  addToFavourites: (blog: blogProps) => void;
  removeFromFavourites: (id: number) => void;
};

export const FavouritesContext = createContext<
  FavouriteContextProps | undefined
>(undefined);
