import { useEffect } from "react";

export const useDay = (dispatch) => {
  useEffect(() => {
    const dayTable = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };

    const today = new Date().getDay();
    dispatch({ type: "today", payload: dayTable[today] });
  }, []);
};
