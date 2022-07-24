import Navbar from "./Navbar";
import Home from './Home';

//We can write as much javascript as we want before the return();
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

//We will alway export the compoent
// so we can use it in other files
export default App;
