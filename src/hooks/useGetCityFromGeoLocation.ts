import { useEffect, useState } from "react";
import { GEO_DB_CITY_API, RAPIDAPI_HOST, RAPIDAPI_KEY } from "../constants";

const useGetCityFromGeoLocation = (
  lat: number,
  long: number
): [string | undefined] => {
  const [city, setCity] = useState<string | undefined>();

  useEffect(() => {
    const fetchCityName = async () => {
      try {
        const latitudeParam = `${lat > 0 ? encodeURIComponent("+") : ""}${lat}`;
        const longitudeParam = `${long > 0 ? encodeURIComponent("+") : ""}${long}`;
        const response = await fetch(
          `${GEO_DB_CITY_API}${latitudeParam}${longitudeParam}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": RAPIDAPI_HOST,
              "x-rapidapi-key": RAPIDAPI_KEY,
              Accept: "application/json",
            },
          }
        );
        const json = await response.json();
        const { name, region, country } = json.data[0];
        setCity(`${name}, ${region}, ${country}`);
      } catch (error) {}
    };
    if (typeof lat === "number" && typeof long === "number") {
      fetchCityName();
    }
  }, [lat, long]);

  return [city];
};

export default useGetCityFromGeoLocation;
