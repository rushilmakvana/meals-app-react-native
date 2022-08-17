import { createContext, useState } from "react";

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealId, setFavoriteMealId] = useState([]);
  function addFavorite(id) {
    setFavoriteMealId((meal) => [...meal, id]);
  }
  function removeFavorite(id) {
    setFavoriteMealId((favorite) => favorite.filter((ele) => ele !== id));
  }
  const value = {
    ids: favoriteMealId,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
