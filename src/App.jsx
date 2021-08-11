import React from "react";
import { Grommet } from "grommet";

import styled from "styled-components";
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
    <FullGrommet full={true} theme={customTheme}>
      <Home />
    </FullGrommet>
  );
};

const FullGrommet = styled(Grommet)`
  height: 100%;
`;

export default App;
