import './App.css';
import { Route, BrowserRouter, Routes} from "react-router-dom"
import RoutesList from './RoutesList';
import Nav from './Nav.js';

function App() {
  // dogNames is what we are going to get back from the AJAX request
  return (
    <div className="App">
      <Nav dogNames={dogNames}/>
      <RoutesList />

    </div>
  );
}

export default App;
