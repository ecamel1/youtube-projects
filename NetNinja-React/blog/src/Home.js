import { useState, useEffect } from 'react';
import BlogList from './BlogList';

function Home() {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok){
                        throw Error("Unable to Fetch the Data. Please reload.");
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err.message);
                })
    }, []);

    return ( 
        <div className="Home">  
            {/* Error message only display if error isnt null */}
            { error && <div>{ error }</div>} 
            {/* If loading is true do ... */}
            { isLoading && <div>Loading . . .</div>}
            
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}
 
export default Home;