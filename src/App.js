import React, {useState, useEffect} from "react";
import axios from "axios";
import Character from './components/Character';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [characters,setCharacters] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const base_url = "https://swapi.dev/api/people/";
const imgSrc =" https://e7.pngegg.com/pngimages/796/822/png-clipart-death-star-r2-d2-anakin-skywalker-star-wars-the-clone-wars-computer-icons-22-monochrome-silhouette.png";


useEffect(()=> {
async function GetData() {
  const res = await axios.get(base_url) 
  try {
    setCharacters(res.data)
  } catch {
    console.log(new Error)
  }
} 
GetData(); 
},[])

  return (
    <div className="App">
      {
        characters.map((char,index) => {
          return <Character key = {index}
              name = {char.name}
              dataOfCharacter = {char} 
              birthYear = {char.birth_year}
              imgSrc = {imgSrc}
          />
        })
      }
    </div>
  );
}

export default App;
