import {useState} from "react";

const NewForm = () => {
    const [title, setTitle] = useState('Hello');
    const [body, setBody] = useState('Hello');
    const [author, setAuthor] = useState('Oleg');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added')
            setIsPending(false);
        })
    }
    return (
        <div className="create">
            <h2>Add new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Blog Author:</label>
                <select value={author}
                        onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Oleg">Oleg</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Send blog...</button>}
            </form>
        </div>
    );
}

export default NewForm;
