import React from "react";
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
      <ul>
        <li>
          <Link to="/"> Dogs </Link>
        </li>
      </ul>
      {
        dogNames.map(d => (
          <li key={d}>
            <Link to={`/dogs/${d}`}>{d}</Link>
          </li>))
      }
    </div>

  );
}

export default Nav;