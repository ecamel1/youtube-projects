import { useState } from 'react';

function Home() {
    //let name = "Mario";
    const [name, setName] = useState("Mario");
    const [age, setAge] = useState(20);

    const handleClick = () => {
        setName("Luigi");
        setAge(30);
    };

    // Both work
    function handleClick2(name){
        console.log("Hello " + name);
    }

    return ( 
        <div className="Home">
            <h2> Homepage </h2>
            <p> Hello, my name is { name } and I am { age } years old.</p>
            

            {/* if you add handleClick() it will invoke the function on startup*/}
            <button onClick={handleClick}>Click Me</button>

            {/* Avoid it by making an anonymous function */}
            <button onClick={() => handleClick2(name)}>Click Me, The Sequel</button>
        </div>
    );
}
 
export default Home;