import BlogList from './BlogList';
import useFetch from './useFetch';
import { useHistory } from "react-router-dom"

function Home() {
    // Define a name variable that changes when the button is clicked
    // However, name defined in this way won't be reactive
    // let name = 'Justin';

    // Instead, we define reactive variables using UseState
    // const [name, setName] = useState('Unknown');
    // const [numClicks, setNumClicks] = useState(0);

    // Define reactive variable of a list of blog previews
    // Each item in the list needs a unique id
    // But we'll eventually fetch this data from the json server
    // const [blogs, setBlogs] = useState([
    //     {'title': 'BLOG 1', 'author': 'Justin', 'body': 'This is blog 1.', id: 1},
    //     {'title': 'BLOG 2', 'author': 'Justin', 'body': 'This is blog 2.', id: 2},
    //     {'title': 'BLOG 3', 'author': 'Mario', 'body': 'This is blog 3.', id: 3}
    // ])

    // const [blogs, setBlogs] = useState(null);

    // Define handleDelete
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs)
    // }

    const history = useHistory();
    const handleDelete = (id) => {
        // We use fetch() to call the DELETE method with additional parameters
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    // const [name, setName] = useState('Unknown');

    // Adding a conditional loading state
    // const [isLoading, setIsLoading] = useState(true);

    // Add a error state
    // const [err, setErr] = useState(null);

    // The useEffect hooker fires at every render by default.
    // The second argument lists the dependies only the state of which changes causes this function to fire.
    // useEffect(() => {
    //     console.log("useEffect ran");
    //     console.log(name);
    // }, [name]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         fetch('http://localhost:8000/blogss')
    //         .then(res => {
    //             console.log(res);

    //             if (!res.ok) {
    //                 throw Error('Failed to fatch resource');
    //             }

    //             return res.json();
    //         })
    //         .then(data => {
    //             setBlogs(data);
    //             setIsLoading(false);
    //             setErr(null);
    //         }).catch(err => {
    //             // console.log(err.message);
    //             setErr(err);
    //             setIsLoading(false);
    //         });
    //     }, 1000);
    // }, []);

    const isLoading = useFetch('http://localhost:8000/blogs').isLoading;
    const data = useFetch('http://localhost:8000/blogs').data;
    const err = useFetch('http://localhost:8000/blogs').err;


    // Define a function to handle clicks
    // We can pass an e parameter to track event info
    // const handleClick = (e) => {
    //     // name = 'Someone clicks';
    //     // console.log(name, e);

    //     setName('Justin');
    //     setNumClicks(numClicks + 1);
    // }

    // Define a function that takes a parameter
    // In the button element below, we'll actually use a reference to this function
    // Which calls this function with a given name parameter
    // Instead of invoking this function directly
    // const handleClickAgain = (name, e) => {
    //     console.log("Clicked by " + name + "!", e);
    // }

    return (
        <div className="Home">
            {/* <h1>Homepage</h1> */}
            {/* <p>{name} clicked {numClicks} times!</p> */}
            {/* 
            <button onClick={handleClick}> Click Me</button>
            <button onClick={(e) => {handleClickAgain("Justin", e)}}>Click Again</button> 
            */}

            {/* In this {} below, we loop through the blogs list using the map() mathe.
                For each blog, we create a blog-preview div that displays info about this blog.
                But since we might neeed to use this BlogList structure on multiple pages, 
                we can actually create it as a prop.
            */}

            {/* {
            blogs.map((blog => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <h2>{blog.author}</h2>
                    <p>{blog.body}</p>
                </div>
            )))
            } */}

            {isLoading && <div>Loading...</div>}

            {/*pass the dynmaic value of blogs into BlogList*/}
            {/* <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>  */}

            {/* Here, wer are using conditional rendering.
            The div is only rendered if blogs is not null. */}
            {/* {blogs && <BlogList blogs={blogs} title='All Blogs' handleDelete={handleDelete}/>} */}
            {data && <BlogList blogs={data} title='All Blogs' handleDelete={handleDelete}/>}

            {err && <div>{err.message}</div>}

            {/*Reuse the BlogList object with additional filters*/}
            {/* <BlogList blogs={blogs.filter((blog) => {return blog.author === 'Justin'})} title="Justin's Blogs" handleDelete={handleDelete}/> */}

            {/* <button onClick={() => {setName('Justin')}}>Change Name</button> */}

        </div>

    );
}

export default Home;