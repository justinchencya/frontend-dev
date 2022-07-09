import { Link } from 'react-router-dom'
import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import classes from './MainNavigation.module.css'

function MainNavigation() {
    const favoritesContext = useContext(FavoritesContext);

    return (
        <header className={classes.header}> 
            <div className={classes.logo}>Meetup</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>
                            Favorites
                            <span className={classes.badge}>{favoritesContext.totalFavorites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;