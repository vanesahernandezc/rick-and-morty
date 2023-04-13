import { ICharacters } from "../interface/ICharacters";

export function Characters(props: any) {
  const { characters, setCharacters } = props;

  const resetCharacters = () => {
    setCharacters(null);
  };

  return (
    <div className="characters">
      <h1>Characters</h1>
      <span className="back-home" onClick={resetCharacters}>
        Back to home
      </span>
      <div className="container-characters">
        {characters.map((character: ICharacters, index: number) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                {character.status === "Alive" ? (
                  <>
                    <span className="alive" />
                    Alive
                  </>
                ) : (
                  <>
                    <span className="dead" />
                    Dead
                  </>
                )}
              </h6>
              <p>
                <span className="text-grey">Episode: </span>
                <span>{character.episode.length}</span>
              </p>
              <p>
                <span className="text-grey">Specie: </span>
                <span>{character.species}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>
        Back to home
      </span>
    </div>
  );
}
