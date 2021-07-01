import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/components/Header.scss";

const Header = () => {
  const [{ theme }, setTheme] = useContext(ThemeContext);

  const handleChange = (event) => {
    if (event.target.checked) {
      setTheme({ theme: "dark" });
    } else {
      setTheme({ theme: "light" });
    }
  };

  return (
    <header className={`header ${theme}`}>
      <section className="title">
        <h1>Rick and Morty</h1>
      </section>
      <section className="theme">
        <input
          id="toggleTheme"
          type="checkbox"
          onChange={handleChange}
          className="toggle"
        />
        <label htmlFor="toggleTheme" className="label">
          {theme}
        </label>
      </section>
    </header>
  );
};

export default Header;
