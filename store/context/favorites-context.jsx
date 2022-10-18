import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

function FavoritesContextProvider({ children }) {
  const [favotiteMealIds, setFavoriteMEalIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMEalIds(currentFavIds => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoriteMEalIds(currentFavIds =>
      currentFavIds.filter(mealId => mealId !== id)
    );
  }

  const value = {
    ids: favotiteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
