import './App.css';
import { Route, BrowserRouter, Routes} from "react-router-dom"
import RoutesList from './RoutesList';
import Nav from './Nav.js';

function App() {

  async function getDogInfo() {
    const dogInfo = await fetch('http://localhost:5001/dogs');
    const dogInfoJson = await dogInfo.json();
    console.log(dogInfoJson);
  }


  console.log(getDogInfo());

  const dogs = getDogInfo();

  // dogNames is what we are going to get back from the AJAX request
  return (
    <div className="App">
      <Nav dogs={dogs}/>
    </div>
  );
}

export default App;
