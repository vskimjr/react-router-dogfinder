
/** Shows all of the info about a single dog */
function DogDetails({ dog }){

// if dog name is whiskey, then we show all information about whiskey
// to do this we actually need the dog info from the app parent component

return (
  <div>
    <h1>{dog.name}</h1>
    <p>{dog.picture}</p>
    <p>{dog.description}</p>
  </div>
);

}

export default DogDetails;

// /whiskey

// <h1> WHISKEY </h1>
// <img>Picture of Whiskey</img>
// <p> Whiskey like to play fetch, etc </p>