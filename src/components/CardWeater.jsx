import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import Spinner from "./Spinner";

const CardWeater = ({ weatherForecast }) => {
  return (
    <div
      className={
        Object.keys(weatherForecast).length > 0
          ? "sm:grid grid-cols-4 gap-4 p-6"
          : "flex justify-center items-center h-screen fixed top-0 left-0 right-0 bottom-0 w-full z-50 overflow-hidden bg-gray-700 opacity-75"
      }
    >
      {console.log(weatherForecast)}
      {weatherForecast.list ? (
        weatherForecast.list.map((weather) => (
          <Card key={weather.dt} className="w-90 mb-6 mt-3 ">
            <CardHeader floated={false} className="h-100 flex justify-center">
              {}
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt="profile-picture"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Temperature {weather.main.temp}°C
              </Typography>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Humidity {weather.main.humidity}%
              </Typography>
              <Typography className="text-sm">
                Temp max {weather.main.temp_max}°C
              </Typography>
              <Typography className="text-sm">
                Temp min {weather.main.temp_min}°C
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
              <Tooltip content="Like">
                <Typography
                  as="a"
                  href="#facebook"
                  variant="lead"
                  color="blue"
                  textGradient
                >
                  <i className="fab fa-facebook" />
                </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href="#twitter"
                  variant="lead"
                  color="light-blue"
                  textGradient
                >
                  <i className="fab fa-twitter" />
                </Typography>
              </Tooltip>
              <Tooltip content="Follow">
                <Typography
                  as="a"
                  href="#instagram"
                  variant="lead"
                  color="purple"
                  textGradient
                >
                  <i className="fab fa-instagram" />
                </Typography>
              </Tooltip>
            </CardFooter>
          </Card>
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default CardWeater;
