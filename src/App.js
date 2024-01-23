import './App.css';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import RoutesList from './RoutesList';
import Nav from './Nav.js';
import { useState } from 'react';

import DogList from './DogList.js';

function App() {

  const [dogInfo, setDogInfo] = useState([]);
  const [dogInfoHasLoaded, setDogInfoHasLoaded] = useState(false);
  // getDogInfo(); // Make sure to call this once only.
  // Track in state whether you've made the call to getDogInfo.
  // Maybe have a second piece of state like hasLoaded.

  async function getDogInfo() {

    console.log("***** YOU MADE IT TO getDogInfo() FUNCTION");
    const dogInfo = await fetch('http://localhost:5001/dogs');
    console.log("***** dogInfo: ", dogInfo);
    const dogInfoJson = await dogInfo.json();
    console.log("*****dogInfoJson INSIDE ASYNC FUNCTION", dogInfoJson);
    setDogInfo(() => dogInfoJson);
    setDogInfoHasLoaded(true);

  }

  // const dogs = Promise.allSettled([getDogInfo()]);
  // const dogsSettled = Promise.all([dogs])
  // console.log("***** dogs: ", dogsSettled)
  // console.log("***** GETTING DOG INFORMATION", getDogInfo())

  if (!dogInfoHasLoaded) getDogInfo();

  // dogNames is what we are going to get back from the AJAX request
  return (
    <div className="App">
      <BrowserRouter>

        {dogInfoHasLoaded
          ? <div><Nav dogs={dogInfo} />
            <RoutesList dogs={dogInfo} />
            {/* <DogList dogs={dogInfo} /> */}
            </div>
          : ''
        }
      </BrowserRouter >
    </div>




  );
}

export default App;
