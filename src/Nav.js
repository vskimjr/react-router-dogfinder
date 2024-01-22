import { Link } from "react-router-dom";

/**  Shows all the names of the dogs with links to each dog
 *
 * Props:
 * - dogNames
 *
 * State:
 * - none
*/
function Nav({ dogNames }) {

  // we need to loop through the dogNames and create a link for each dog
  // similar to the foods example:
  //
  // <ul>
  // {foods.map(food => (
  //   <li key={food}>
  //     <Link to={`/food/${food}`}>Show me {food}!</Link>
  //   </li>
  // ))}

</ul>
  return (

    <Link to={`/dogs`}>Show Me All the Dogs</Link>

  );
}

export default Nav;