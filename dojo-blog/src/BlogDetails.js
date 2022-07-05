import useFetch from './useFetch';
import { useHistory, useParams } from "react-router-dom";

const BlogDetails = () => {
        const { id } = useParams(); // we use useParams to extrac id from the link, as set by the Router in App.js

        const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

        const history = useHistory();

        const handleDelete = () => {
            // We use fetch() to call the DELETE method with additional parameters
            fetch('http://localhost:8000/blogs/' + id, {
                method: 'DELETE'
            }).then(() => {
                // Once hit delete, we can jump to the previous page
                history.go(-1);
            })
        }

        return (
            <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { blog && (
                <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
                </article>
            )}

            <button onClick={() => {
                handleDelete();
            }}>Delete</button>
            </div>
        );
}
 
export default BlogDetails;