import { useEffect, useState } from "react";
import weaterCall from "./api/weatherCall";
import CardWeater from "./components/CardWeater";

function App() {
  const [Coordenadas, setCoordenadas] = useState("");

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(async (position) => {
  //     setCoordenadas(
  //       await weaterCall(position.coords.latitude, position.coords.longitude)
  //     );
  //   });
  // }, []);

  return (
    <div className="h-full">
      <CardWeater Coordenadas={"Coordenadas"} />
    </div>
  );
}

export default App;
