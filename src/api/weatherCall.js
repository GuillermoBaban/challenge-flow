// https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&appid=${API_KEY}
const weatherCall = async (lat, lon) => {
  const API_KEY = import.meta.env.VITE_WEATHERMAP_KEY;
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&appid=${API_KEY}`;
  const response = await fetch(url);
  return await response.json();
};

export default weatherCall;
