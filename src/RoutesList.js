import { Route, Routes, useParams } from "react-router-dom";


function RoutesList() {

  const {name} = useParams();

  return (
    < Routes >
      <Route element={<DogList />} path="/" />
      <Route element={<DogDetails dog={dog} />} path="/dogs/:name" />
    </Routes>
  );
}

export default RoutesList;