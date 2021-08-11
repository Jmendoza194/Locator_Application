import React from "react";
import { Grommet } from "grommet";

import Home from "./pages/Home";

const customTheme = {
  global: {
    font: {
      family: "Open Sans",
    },
  },
};

const App = () => {
  return (
    <Grommet theme={customTheme}>
      <Home />
    </Grommet>
  );
};

export default App;
