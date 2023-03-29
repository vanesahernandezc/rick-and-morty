import { useState } from "react";
import "./App.css";
import homeImg from "./img/rick-morty.png";
import { Characters } from "./components/Characters";
function App() {
  const [characters, setCharacters] = useState(null);

  const getCharacters = async () => {
    const charactersResponse = await fetch(
      "https://rickandmortyapi.com/api/character"
    );
    const charactersApi = await charactersResponse.json();
    setCharacters(charactersApi.results);
  };
  console.log(characters);
  return (
    //Falta hacer la interface para el useState y quitar los any type
    <div className="App">
      <div className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img src={homeImg} alt="img-home" className="img-home" />
            <button onClick={getCharacters} className="btn-search">
              Search characters
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
