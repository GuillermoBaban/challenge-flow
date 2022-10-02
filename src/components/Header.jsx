import SelectCity from "./SelectCity";
import { SunIcon } from "@heroicons/react/24/solid";

const Header = (props) => {
  return (
    <header>
      <div className="sm:flex justify-center ">
        <div className="flex items-center justify-center pt-5">
          <h1 className="text-4xl font-bold text-center">Weather App</h1>
          <SunIcon className="h-6 w-6 mt-2 text-yellow-500" />
        </div>
        <SelectCity setCity={props.func} />
      </div>
    </header>
  );
};

export default Header;
