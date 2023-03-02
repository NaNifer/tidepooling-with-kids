import React from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import TimePicker from "react-dropdown-timepicker";

function CitySearch() {
  return (
    <div className="flex flex-row justify-center my-6">
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
        {/* <TimePicker
          time={this.state.time}
          onChange={this.handleTimeChange.bind(this)}
        />
      </div> */}
    </div>
  );
}

export default CitySearch;

// https://jdewit.github.io/bootstrap-timepicker/
