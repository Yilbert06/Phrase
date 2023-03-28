import "./App.css";
import React, { useState } from "react";
import Button from "./componets/Button";
import Phrase from "./componets/Phrase";
import quotes from "./utils/quotes.json";
import getRandomArray from "./utils/getRandomArray";

const bgImages = [1, 2, 3, 4];

function App() {
  
  const [phrase, setPhrase] = useState(getRandomArray(quotes));
  const [numBackg, setnumBackg] = useState(getRandomArray(bgImages))

  const backg = {
    backgroundImage: `url('/backgroundImg/fondo${numBackg}.jpg')`
  }

  return (
      <div style={backg} className="App">
        <div className="box">
            <h1 className="tittle"> GALLETAS DE LA FORTUNA </h1>
      <Phrase phrase={phrase} />
      <Button setPhrase={setPhrase} setnumBackg={setnumBackg} />
        </div>
    <footer className="footer">
      <h4>HECHO CON ❤️ EN ACADEMLO </h4>
      </footer>
    </div>
  );
}

export default App;
