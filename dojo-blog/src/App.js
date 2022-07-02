import Navbar from './Navbar';
import Home from './Home';

function App() {
  // We can create variables so that we have dynamic values for components with {}
  // const name = "Justin"
  // const numLikes = Math.round(Math.random() * 100, 0);
  // const link = "http://www.google.com";
  // const array = [1, 2, 3];

  return (
    // What's returned is something called JSX
    // The syntax is almost identical as HTML, but with some differences
    // One difference is that since class is already a concept in Javascript, we use className in the line below
    // If it's HTML we should just use the class parameter
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>
      </div>

      {/* <div className="content">
        <h1>Welcome to {name}'s blog</h1>
        <p>Likes: {numLikes}</p>
        <p>Array: {array}</p>
        <a href={link}>Google Site</a>
      </div> */}
    </div>
  );
}

export default App; // becase we export App here, we are able to import App in index.js
