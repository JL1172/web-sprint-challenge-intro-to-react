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
const redLightSaber ="https://i.pinimg.com/originals/e8/d1/49/e8d14973203c1ae5a23490ee2b7983f9.png";

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
              redLightSaber = {redLightSaber}
              selected = {char.name === "Darth Vader"}
          />
        })
      }
    </div>
  );
}

export default App;
