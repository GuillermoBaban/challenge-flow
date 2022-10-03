import { useEffect, useState } from "react";
import weaterCall from "./api/weatherCall";
import CardWeater from "./components/CardWeater";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

function App() {
  const [weatherForecast, setWeatherForecast] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setWeatherForecast(
        await weaterCall(position.coords.latitude, position.coords.longitude)
      );
    });
  }, []);

  const setCity = async (lat, lon) => {
    setWeatherForecast(await weaterCall(lat, lon));
  };

  return (
    <div className="h-full">
      <Header func={setCity} />
      <div className="text-center flex justify-center">
        <p className="text-2xl font-bold">
          {weatherForecast && weatherForecast.city ? (
            weatherForecast.city.name
          ) : (
            <Spinner />
          )}
        </p>
      </div>
      <CardWeater weatherForecast={weatherForecast} />
    </div>
  );
}

export default App;
