import React, { useContext, useEffect, useState } from "react";
import Character from "../components/Character";
import { ThemeContext } from "../context/ThemeContext";

import "../styles/containers/MainContent.scss";

const MainContent = () => {
  const [{ theme }] = useContext(ThemeContext);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await fetch("https://rickandmortyapi.com/api/character");
      const data = await results.json();
      setCharacters(data.results);
    })();
  }, []);

  return (
    <main className={`main-content ${theme}`}>
      {characters.map((character) => (
        <Character key={character.id} {...character} />
      ))}
    </main>
  );
};

export default MainContent;
