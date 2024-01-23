import { Route, Routes, useParams } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


function RoutesList({ dogs }) {

  // const {name} = useParams();
  console.log("RoutesList dogs: ", dogs);
  const dogNames = dogs.map(d => d.name);

  const baseRoute = "/dogs/"
  return (
    < Routes >
      <Route element={<DogList dogs={dogs}/>} path="/" />
      {/* map over dog names.  */}
      {/* <Route element={<DogDetails dog={dog} />} path="/dogs/:name" /> */}

      <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>} />


    </Routes>
  );
}

export default RoutesList;