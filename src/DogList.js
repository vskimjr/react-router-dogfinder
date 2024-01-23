import { Link } from "react-router-dom";

/** Displays all of the dog info */
function DogList({dogs}){
  // [{name: ... }, {name: ...}]

  return (
    <div>
      {
        dogs.map(d => (
          <li key={d}>
            <p>{d.picture}</p>
            <p>{d.name}</p>
            <Link to={`/dogs/${d.name}`}>{d.name}</Link>
          </li>))
      }
    </div>
  )



}

export default DogList;