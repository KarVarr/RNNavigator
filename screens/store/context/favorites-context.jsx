import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  ids: [],
  addFavorite: id => {},
  removeFavorite: id => {},
});

function FavoritesContextProvider({ children }) {
    const [favotiteMealIds, setFaboriteMEalIds] = useState([])

  return <FavoritesContextProvider> {children}</FavoritesContextProvider>;
}

export default FavoritesContextProvider;
