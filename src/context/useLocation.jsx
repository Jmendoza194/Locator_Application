import React, { createContext, useReducer, useContext } from "react";

const LocationContext = createContext();

const locationReducer = (state, action) => {
  switch (action.type) {
    case "fetch_locations": {
      return {
        ...state,
        locations: action.payload,
      };
    }
    case "select_location": {
      console.log(action.payload);
      return {
        ...state,
        selected_location: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, {
    locations: [],
    selected_location: {},
  });
  const value = { state, dispatch };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};

const useLocation = () => {
  const context = useContext(LocationContext);

  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { LocationProvider, useLocation };
