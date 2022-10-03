import SelectCity from "./SelectCity";
import { SunIcon } from "@heroicons/react/24/solid";

const Header = (props) => {
  return (
    <header>
      <div className="sm:flex justify-center lg:flex">
        <div className="flex items-center justify-center pt-5"></div>
        <SelectCity setCity={props.func} />
      </div>
    </header>
  );
};

export default Header;
