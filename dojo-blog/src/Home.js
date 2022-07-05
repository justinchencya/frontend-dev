import BlogList from './BlogList';
import useFetch from './useFetch';
import { useHistory } from "react-router-dom"

function Home() {
    const history = useHistory();

    const handleDelete = (id) => {
        // We use fetch() to call the DELETE method with additional parameters
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    const isLoading = useFetch('http://localhost:8000/blogs').isLoading;
    const data = useFetch('http://localhost:8000/blogs').data;
    const err = useFetch('http://localhost:8000/blogs').err;

    return (
        <div className="Home">
            {isLoading && <div>Loading...</div>}

            {data && <BlogList blogs={data} title='All Blogs' handleDelete={handleDelete}/>}

            {err && <div>{err.message}</div>}

        </div>

    );
}

export default Home;