const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form action="POST">
                <label>Blog Title:</label>
                <input 
                    type="text"
                    
                />
                <label>Blog Body:</label>
                <textarea 
                    required>
                </textarea>
                <label>Blog Author:</label>
                <select>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default Create;