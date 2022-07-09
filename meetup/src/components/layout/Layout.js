import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'

// Similar to Card, Layout is another wrapper component
// We use Layout to wrap everything in App.js
// so that App.js is only used for routing configuration
function Layout(props) {
    return (
        <div>
            <MainNavigation></MainNavigation>
            <main className={classes.main}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;