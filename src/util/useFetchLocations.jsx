import { useEffect } from "react";
import axios from "axios";
import { data } from "../mockData";

export const useFetchLocations = async (dispatch) => {
  useEffect(() => {
    const fetchLocations = async () => {
      const { data } = await axios.get(
        "https://my.api.mockaroo.com/locations.json?key=a45f1200"
      );

      dispatch("fetch_locations", { payload: data });
    };
    fetchLocations();

    // dispatch({ type: "fetch_locations", payload: data });
  }, []);
};
