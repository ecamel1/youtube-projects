// This is a stateless functional component (sfc)
//It doesn't have to be an arrow function
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dogo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;