import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
// import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleUnitsChange = (event) => {
    const selectedUnit = event.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      // toast.info(`Fetching user location`);
      navigator.geolocation.getCurrentPosition((position) => {
        // toast.success(`Location fetched!`);
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;

        setQuery({
          latitude,
          longitude,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          placeholder="Search for city..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          onClick={handleSearchClick}
          className="text-white cursor-pointer transition ease-in-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          onClick={handleLocationClick}
          className="text-white cursor-pointer transition ease-in-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          onClick={handleUnitsChange}
          className="text-xl text-white font-light hover:scale-125 transition ease-in-out"
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          onClick={handleUnitsChange}
          className="text-xl text-white font-light hover:scale-125 transition ease-in-out"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
