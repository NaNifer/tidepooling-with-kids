import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { UilSearch } from "@iconscout/react-unicons";
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";
import "@wojtekmaj/react-timerange-picker/dist/TimeRangePicker.css";
import "react-clock/dist/Clock.css";


const convert = require('convert-zip-to-gps');
// Called function will return GPS coordinates for valid U.S. 5-digit ZIP codes, entered as integers or strings.
const zip = 97230;
convert.zipConvert(zip);



function CitySearch({ initialValue }) {
  const [value, onChange] = useState(["10:00", "12:00"]);

  return (
    <div className="flex flex-col justify-around my-6">
      <Form>
        <Form.Group className="mb-3" controlId="locationSearch">
          <Form.Label className="text-info">
            Search for the perfect tidepooling conditions near you
          </Form.Label>
          <Form.Control size="lg" type="text" placeholder="enter city for data..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <TimeRangePicker onChange={onChange} value={value} />
        </Form.Group>
        <Button variant="info" type="submit">
          <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
          />
        </Button>
      </Form>
    </div>
  );
}

export default CitySearch;
