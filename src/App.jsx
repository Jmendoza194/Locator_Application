import React from "react";
import { Grommet } from "grommet";

import styled from "styled-components";
import Home from "./pages/Home";
import { LocationProvider } from "./context/useLocation";

const customTheme = {
  global: {
    font: {
      family: "Open Sans",
    },
  },
};

const App = () => {
  return (
    <LocationProvider>
      <FullGrommet full={true} theme={customTheme}>
        <Home />
      </FullGrommet>
    </LocationProvider>
  );
};

const FullGrommet = styled(Grommet)`
  /* height: 100%; */
`;

export default App;
