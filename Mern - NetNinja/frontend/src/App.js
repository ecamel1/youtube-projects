/** BrowserRouter -- wraps everywhere you want to use the router
 * Routes -- wraps individual routes
 * Route -- idividual route
 */
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Pages & Componets 
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
          <Route 
            path="/"
            element={<Home />}
          />
        </Routes>
      </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
