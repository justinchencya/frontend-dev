import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Commands for running the program
// To start the development server: nmp start
// To start the json server: npx json-server --watch data/db.json --port 8000

function App() {
  return (
    // We wrap everything with Router so that we can navigate across multiple pages
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            {/*  We need to add the exact argument here, otherwise the router will also consider "/" to match "/create" */}
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/create"> 
              <Create></Create>
            </Route>

            {/* We use :id to append blog ids dynamically to the links */}
            <Route path="/blogs/:id"> 
              <BlogDetails></BlogDetails>
            </Route>

            {/* Use a NotFound page to catch all other urls entered */}
            <Route path="*"> 
              <NotFound></NotFound>
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App; 