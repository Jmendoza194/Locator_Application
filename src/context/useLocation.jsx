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
    case "get_directions": {
      return {
        ...state,
        selected_location: action.payload,
        map: true,
        open_cardTab: false,
        open_mapTab: true,
      };
    }
    case "more_info": {
      return {
        ...state,
        selected_location: action.payload,
        modal: true,
        open_cardTab: false,
        open_mapTab: true,
      };
    }
    case "close_modal": {
      return {
        ...state,
        modal: false,
      };
    }
    case "today": {
      return {
        ...state,
        today: action.payload,
      };
    }
    case "open_card_list": {
      return {
        ...state,
        open_cardTab: true,
        open_mapTab: false,
      };
    }
    case "open_map": {
      return {
        ...state,
        modal: false,
        open_cardTab: false,
        open_mapTab: true,
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
    modal: false,
    map: false,
    today: null,
    open_cardTab: true,
    open_mapTab: false,
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
