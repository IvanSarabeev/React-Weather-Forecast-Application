import React from "react";
import { iconUrlFromCode } from "../services/weatherServices";

function Forecast({ title, items }) {
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <h2 className="text-white font-medium uppercase">{title}</h2>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center">
              <p className="font-light text-sm">{item.title}</p>
              <img
                src={iconUrlFromCode(item.code)}
                alt="weather"
                className="w-12 my-1"
              />
              <p className="font-medium">{`${item.temp.toFixed}°`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forecast;
