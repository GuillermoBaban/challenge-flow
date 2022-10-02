import { useEffect, useState } from "react";
import weaterCall from "./api/weatherCall";
import CardWeater from "./components/CardWeater";
import Header from "./components/Header";

function App() {
  const [Coordenadas, setCoordenadas] = useState("");

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(async (position) => {
  //     setCoordenadas(
  //       await weaterCall(position.coords.latitude, position.coords.longitude)
  //     );
  //   });
  // }, []);

  const setCity = async (lat, lon) => {
    // setCoordenadas(await weaterCall(lat, lon));
    console.log(lat, lon); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
  };

  return (
    <div className="h-full">
      <Header func={setCity} />
      <CardWeater Coordenadas={"Coordenadas"} />
    </div>
  );
}

export default App;
