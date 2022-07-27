function Home() {

    const handleClick = (e) => {
        console.log("Hello there", e);
    };

    // Both work
    function handleClick2(name){
        console.log("Hello " + name);
    }

    return ( 
        <div className="Home">
            <h2> Homepage </h2>
            {/* if you add handleClick() it will invoke the function on startup*/}
            <button onClick={handleClick}>Click Me</button>

            {/* Avoid it by making an anonymous function */}
            <button onClick={() => handleClick2("Mario")}>Click Me, The Sequel</button>
        </div>
    );
}
 
export default Home;