import { useState, createContext } from "react";

// We use a context to update states across the whole application
const FavoritesContext = createContext({
    favorites: [], 
    totalFavorites: 0, 
    addFavorite: (newFavorite) => {}, 
    removeFavorite: (idRemove) => {}, 
    isFavorite: (idCheck) => {}
})

// We want to wrap everything that might be affected by favorites with FavoritesContextProvider.
// The easiest way to do so is to apply the wrapper in index.js
export function FavoritesContextProvider(props) {
    // Create states to track favorites
    const [userFavorites, setUserFavorites] = useState([]);

    // Create functions to update the state (thus the context below)
    function addFavoritesHandler(newFavorite) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(newFavorite);
        })
    }

    function removeFavoriteHandler(idRemove) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== idRemove);
        })
    }

    function isFavoriteHandler(idCheck) {
        return userFavorites.some(meetup => meetup.id === idCheck);
    }

    // Create a context depending on the favorites state
    // as well as functions that manages the state
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler, 
        removeFavorite: removeFavoriteHandler, 
        isFavorite: isFavoriteHandler
    }

    // This component listens to the value of context
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;