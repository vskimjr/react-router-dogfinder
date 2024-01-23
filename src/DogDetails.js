import { useParams } from "react-router-dom";

/** Shows all of the info about a single dog */
function DogDetails({dogs}) {

  // [{name: ... }, {name: ...}]

  const { name } = useParams();

  console.log("DogDetails: ", dogs)

  const targetDog = dogs.filter(d => d.name === name)[0];



  // if dog name is whiskey, then we show all information about whiskey
  // to do this we actually need the dog info from the app parent component

  return (
    <div>
      <h1>{targetDog.name}</h1>
      <p>{targetDog.picture}</p>
      <p>{targetDog.description}</p>
    </div>
  );

}

export default DogDetails;

// /whiskey

// <h1> WHISKEY </h1>
// <img>Picture of Whiskey</img>
// <p> Whiskey like to play fetch, etc </p>