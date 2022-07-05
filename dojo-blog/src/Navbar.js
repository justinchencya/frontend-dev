import { Link } from 'react-router-dom'

// We create Navbar.js for the navigation bar component
// We then import it in App.js to nest it in the root component
function Navbar() {
    return (
        <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            {/* We can use hrefs to add multiple links to the nav bar.*/}
            {/* <a href="/">Home</a> */}

            {/* For the stype parameter below, we use a dynamic value that takes an object (like a dictionary), what's why we have two layers of brackets*/}
            {/* <a href="/create" style={{
                color: 'white', 
                backgroundColor: '#f1356d', 
                borderRadius: '8px'
            }}>New Blog</a> */}

            {/* <a href="/create">New Blog</a> */}

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