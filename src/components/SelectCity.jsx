import { Fragment, useState } from "react";
import Select from "react-select";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const options = [
  { label: "Ámsterdam", value: "52.37403", lon: "4.88969" },
  { label: "Barcelona", value: "41.390205", lon: "2.154007" },
  { label: "Beijing", value: "39.9042", lon: "116.4074" },
  { label: "Bergen", value: "60.39126", lon: "5.32206" },
  { label: "Brujas", value: "51.20935", lon: "3.2247" },
];

const SelectCity = (props) => {
  const handleChange = (e) => props.setCity(e.value, e.lon);

  return (
    <div className="w-72 mt-5 m-auto lg:m-5 mb-0 pt-5">
      <Select options={options} onChange={handleChange} />
    </div>
  );
};

export default SelectCity;
