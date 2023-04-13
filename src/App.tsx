import { useState } from "react";
import "./App.css";
import homeImg from "./img/rick-morty.png";
import { Characters } from "./components/Characters";
import { ICharacters } from "./interface/ICharacters";
function App() {
  const [characters, setCharacters] = useState<ICharacters[] | undefined>(
    undefined
  );

  const getCharacters = async () => {
    const charactersResponse = await fetch(
      "https://rickandmortyapi.com/api/character"
    );
    const charactersApi = await charactersResponse.json();
    setCharacters(charactersApi.results);
  };
  console.log(characters);
  return (
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
