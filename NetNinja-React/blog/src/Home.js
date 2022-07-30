import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
    const [blogs, setBlogs] = useState([null]);

    //Uncaught TypeError: handleDelete is not a function
    const handleDelete = (id) => {
        // blogs.filter does NOT change the original data.
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            });
    }, []);

    return ( 
        <div className="Home">   
            {/* Prop Example Below */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
        </div>
    );
}
 
export default Home;