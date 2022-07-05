import { useState } from "react";
import { useHistory } from "react-router-dom"

const Create = () => {
    // Create states to track title, body, and author from user input
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Justin');

    // Create a state to show adding status when adding new blog
    const [isPending, setIsPending] = useState(false);

    // Create a history to jump to another page after submission
    const history = useHistory();

    const handleSubmit = (e) => {
        // Stop the button from refreshing the page by default
        e.preventDefault();
        const blog = { title, body, author};

        setIsPending(true);

        // We use fetch() to call the POST method with additional parameters
        fetch('http://localhost:8000/blogs/', {
            method: 'POST', 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);

            // Once hit submission, we can jump to the previous page
            history.go(-1);

            // Or, we can jump back to the homepage
            // history.push('/');
        })
    }

    return ( 
        <div className="create">
            <h2>New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                    type="text" 
                    required
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Body</label>
                <textarea 
                    required
                    value = {body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Author</label>
                <select
                    value = {author}
                    onChange = {(e) => setAuthor(e.target.value)}
                >
                    <option value="Justin">Justin</option>
                    <option value="Guest">Guest</option>
                </select>

                {! isPending && <button>Add Blog</button>}
                {isPending && <button>Adding Blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;