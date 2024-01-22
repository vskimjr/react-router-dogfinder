import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RoutesList from './RoutesList';
import Nav from './Nav.js';

function App() {

  async function getDogInfo() {

    console.log("***** YOU MADE IT TO getDogInfo() FUNCTION")

    const dogInfo = await fetch('http://localhost:5001/dogs');

    console.log("***** dogInfo: ", dogInfo)

    const dogInfoJson = await dogInfo.json();

    console.log("*****dogInfoJson INSIDE ASYNC FUNCTION", dogInfoJson)
    return dogInfoJson;

  }

  const dogs = Promise.allSettled([getDogInfo()]);

  const dogsSettled = Promise.all([dogs])

  console.log("***** dogs: ", dogsSettled)



  console.log("***** GETTING DOG INFORMATION", getDogInfo())










  // dogNames is what we are going to get back from the AJAX request
  return (
    <div className="App">
      <Nav dogs={dogs} />
    </div>
  );
}

export default App;
