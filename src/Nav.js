import { Link } from "react-router-dom";

/**  Shows all the names of the dogs with links to each dog
 *
 * Props:
 * - dogs: Array of dog objects
 *
 * State:
 * - none
*/

function Nav({ dogs }) {

  // we need to loop through the dogNames and create a link for each dog
  // similar to the foods example:
  //
  // <ul>
  // {foods.map(food => (
  //   <li key={food}>
  //     <Link to={`/food/${food}`}>Show me {food}!</Link>
  //   </li>
  // ))}
  // </ul>

  // async function getDogInfo(){
  //   return await(dogs);
  // }

  console.log("dogs in Nav: ", dogs);

  const dogNames = dogs.map(d => d.name);
  console.log(dogNames);

  return (
    <div>
      <Link to={`/`}>Dogs</Link>
      {/* {dogNames.map(d => (<Link to={d.name}>{d.name}</Link>))} */}
      {dogNames.map(d => (<Link> </Link>))}
    </div>

  );
}

export default Nav;