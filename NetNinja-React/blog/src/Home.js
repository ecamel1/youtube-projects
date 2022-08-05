import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
    // *In this context call the data blogs
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');
    

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