import React from "react";

function CityButtons() {
  const cities = [
    {
      id: 1,
      title: "Point Reyes",
    },
    {
      id: 2,
      title: "Half Moon Bay",
    },
    {
      id: 3,
      title: "Santa Cruz",
    },
    {
      id: 4,
      title: "Pacifica",
    },
    {
      id: 5,
      title: "Fort Bragg",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button key={city.id} className="text-white text-large f">
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default CityButtons;
