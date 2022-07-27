import { useState } from 'react';

function Home() {
    const [blogs, setBlogs] = useState([
        {title: "New Blog Website", body: "Today I created...", author: "Me", id: 1},
        {title: "Developer Tips and Tricks", body: "These are 5 tips and tricks all developers should know...", author: "You", id: 2},
        {title: "Learning Material", body: "List of Free Materials ....", author: "Them", id: 3}
    ]);

    return ( 
        <div className="Home">   
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;