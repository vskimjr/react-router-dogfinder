import { Route, Routes, useParams } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


function RoutesList({ dogs }) {

  const {name} = useParams();
  console.log("RoutesList dogs: ", dogs);
  const dogNames = dogs.map(d => d.name);
  return (
    < Routes >
      <Route element={<DogList />} path="/" />
      {/* map over dog names.  */}
      {/* <Route element={<DogDetails dog={dog} />} path="/dogs/:name" /> */}


      {/* {
        dogNames.map(d => (
          <Route path={d} element={<DogDetails dog={d} />} /> ))
      } */}

      <Route path='/dogs/whiskey' element={ <DogDetails dog={dogs[0]} />} />
      <Route path='/dogs/duke' element={ <DogDetails dog={dogs[1]} />} />

    </Routes>
  );
}

export default RoutesList;