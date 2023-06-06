import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Moscow",
    },
  ];
  return (
    <div className="flex item-center justify-around my-6">
      {cities.map((item, index) => {
        return (
          <button
            key={index}
            className="text-white text-lg font-medium"
            onClick={() => setQuery({ q: cities.title })}
          >
            {cities.title}
          </button>
        );
      })}
    </div>
  );
}

export default TopButtons;
