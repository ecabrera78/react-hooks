import React, { useState } from "react";

/* Se crea el context que contiene un objeto vacío el cual,
almacenará el tema seleccionado y una función que se encargará de
actualizar el contexto */
const ThemeContext = React.createContext([{}, () => {}]);

/* Se crea el provider que ser utilizará para pasar el contexto
a los componentes hijos */
const ThemeProvider = (props) => {
  const [theme, setTheme] = useState({ theme: "light" });

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
