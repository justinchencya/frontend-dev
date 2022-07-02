// We create Navbar.js for the navigation bar component
// We then import it in App.js to nest it in the root component
function Navbar() {
    return (
        <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            <a href="/">Home</a>
            {/* For the stype parameter below, we use a dynamic value that takes an object (like a dictionary), what's why we have two layers of brackets*/}
            <a href="/create" style={{
                color: 'white', 
                backgroundColor: '#f1356d', 
                borderRadius: '8px'
            }}>New Blog</a>
        </div>
    </nav>
    );
}

export default Navbar;