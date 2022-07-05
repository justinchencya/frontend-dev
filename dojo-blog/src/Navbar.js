import { Link } from 'react-router-dom'

// We create Navbar.js for the navigation bar component
// We then import it in App.js to nest it in the root component
function Navbar() {
    return (
        <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            {/* Alternatively, we can use React's Link.
            In this way, we won't be sending new request everytime we navigate,
            Instead, the Router will match the corresponding URL and render. */}
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
        </div>
    </nav>
    );
}

export default Navbar;