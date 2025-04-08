import { useState, ReactNode } from "react";
import { blogProps } from "../types";
import { FavouritesContext } from "./FavouritesContext";

type FavouriteProviderProps = {
  children: ReactNode;
};

export function FavouritesProvider({ children }: FavouriteProviderProps) {
  const [favourites, setFavourites] = useState<blogProps[]>([]);

  const addToFavourites = (blog: blogProps) => {
    return setFavourites([blog, ...favourites]);
  };

  const removeFromFavourites = (id: number) => {
    setFavourites((favourites) => favourites.filter((blog) => blog.id !== id));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
