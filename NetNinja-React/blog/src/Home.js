import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
    const [blogs, setBlogs] = useState([
        {title: "New Blog Website", body: "Today I created...", author: "Me", id: 1},
        {title: "Developer Tips and Tricks", body: "These are 5 tips and tricks all developers should know...", author: "You", id: 2},
        {title: "Learning Material", body: "List of Free Materials ....", author: "Them", id: 3}
    ]);

    const [name, setName] = useState("Marioin");

    //Uncaught TypeError: handleDelete is not a function
    const handleDelete = (id) => {
        // blogs.filter does NOT change the original data.
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("useEffect Runs");
        console.log(name);
    }, [name]);

    return ( 
        <div className="Home">   
            {/* Prop Example Below */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={(() => setName("Luigi"))}>Change Name</button>
            <p>{ name }</p>
        </div>
    );
}
 
export default Home;