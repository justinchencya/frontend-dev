import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>This is page is not found.</p>

            <Link to='/'>Back to Home</Link>
        </div>
     );
}
 
export default NotFound;