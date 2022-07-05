import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  // We can create variables so that we have dynamic values for components with {}
  // const name = "Justin"
  // const numLikes = Math.round(Math.random() * 100, 0);
  // const link = "http://www.google.com";
  // const array = [1, 2, 3];

  return (
    // We wrap everything with Router so that we can navigate across multiple pages
    <Router>
      {/* // What's returned is something called JSX
      // The syntax is almost identical as HTML, but with some differences
      // One difference is that since class is already a concept in Javascript, we use className in the line below
      // If it's HTML we should just use the class parameter */}
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          {/* <Home></Home> */}
          <Switch>
            {/*  We need to add the exact argument here, otherwise the router will also consider "/" to match "/create" */}
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/create"> 
              <Create></Create>
            </Route>

            {/* We want to append blog ids dynamically to the links */}
            <Route path="/blogs/:id"> 
              <BlogDetails></BlogDetails>
            </Route>

            {/* Use a not found page to catch all other visits */}
            <Route path="*"> 
              <NotFound></NotFound>
            </Route>
            
          </Switch>
        </div>

        {/* <div className="content">
          <h1>Welcome to {name}'s blog</h1>
          <p>Likes: {numLikes}</p>
          <p>Array: {array}</p>
          <a href={link}>Google Site</a>
        </div> */}
      </div>
    </Router>

  );
}

export default App; // becase we export App here, we are able to import App in index.js
// To launch the app, the following command in terminal
// npm run start