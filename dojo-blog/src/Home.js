function Home() {
    // Define a function to handle clicks
    // We can pass an e parameter to track event info
    const handleClick = (e) => {
        console.log("Clicked!", e);
    }

    // Define a function that takes a parameter
    // In the button element below, we'll actually use a reference to this function
    // Which calls this function with a given name parameter
    // Instead of invoking this function directly
    const handleClickAgain = (name, e) => {
        console.log("Clicked by " + name + "!", e);
    }

    return (
        <div className="Home">
            <h1>Homepage</h1>
        <button onClick={handleClick}> Click Me</button>
        <button onClick={(e) => {handleClickAgain("Justin", e)}}>Click Again</button>
        </div>
    );
}

export default Home;