import './App.css';

//We can write as much javascript as we want before the return();
function App() {
  const title = "Welcome to the New Blog";
  const likes = 50;
  //const person = { name: "Yo", age: 10 };
  const link = "https://www.google.com/";

  return (
    <div className="App">
      <div className="content">

        {/* React will look for the variable and display it */}
        <h1>{ title }</h1>
        <p>Liked { likes } times </p>

        {/* <p>{ person }</p> */}
        <p>{10}, {"Hello"}, {[1,2,3]}, {Math.random() * 10}</p>

        <a href={ link }>Google </a>
      </div>
    </div>
  );
}

//We will alway export the compoent
// so we can use it in other files
export default App;
