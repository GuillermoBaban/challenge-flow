const CardWeater = ({ Coordenadas }) => {
  //"temp": 297.54,
  //"temp_min": 297.54,
  //"temp_max": 297.54,
  //"humidity": 85,
  //url to stract the icon https://openweathermap.org/img/wn/{param}@2x.png

  return <div class="grid grid-cols-4 gap-4">{Coordenadas}</div>;
};

export default CardWeater;
