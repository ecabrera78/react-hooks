import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

import "../styles/components/Footer.scss";

const Footer = () => {
  const [{ theme }] = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <span>ecabrera 2021</span>
    </footer>
  );
};

export default Footer;
