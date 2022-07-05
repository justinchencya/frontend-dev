import { Link } from "react-router-dom";

const BlogList = (props) => { // BlogList receives props in Home.js
    const blogs = props.blogs;
    const title = props.title;
    const handleDelete = props.handleDelete;

    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <h3>{blog.author}</h3>
                        <button onClick={() => handleDelete(blog.id)}>Delete</button>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;