import React, { useState } from "react";

import { UilLocationPoint, UilSearch } from "@iconscout/react-unicons";
import DatePicker from "react-widgets/DatePicker";
import TimeInput from "react-widgets/TimeInput";

function CitySearch({ initialValue }) {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="flex flex-col justify-around my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          className="text-xl capitalize font-light p-2 w-full shadow-xl focus:outline-none placeholder:lowercase"
          placeholder="enter city for data..."
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          className="text-xl capitalize font-light p-2 w-full shadow-xl focus:outline-none placeholder:lowercase"
          placeholder="enter city for data..."
        />
      </div>
      <TimeInput value={value} onChange={(value) => setValue(value)} />
      <h1>Choose which days of the week that work with your schedule:</h1>
      <Multiselect
        defaultValue={["Saturday"]}
        data={["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
      />
      ;
      <DatePicker placeholder="m/dd/yy" />;
    </div>
  );
}

export default CitySearch;

// https://jdewit.github.io/bootstrap-timepicker/
// https://jquense.github.io/react-widgets/docs/TimeInput
