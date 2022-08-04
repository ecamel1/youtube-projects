import Navbar from "./Navbar";
import Home from './Home';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Create from './Create';

//We can write as much javascript as we want before the return();
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/create"><Create /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

//We will alway export the compoent
// so we can use it in other files
export default App;
