import { useState } from "react";
import "./WeatherPage.css";

export default function WeatherPage() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState();
  const [isClicked, setIsClicked] = useState(false);
  console.log({ weather });

  const fetchWeatherReport = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${input}&appid=453a4b9803cd55b40c3f2853ce2d39cc&units=metric`
    );
    const json = await response.json();
    setWeather(json?.list?.[0]);
  };

  const getBackgroundStyle = () => {
    // Default style when no weather data is loaded
    if (!weather) {
      return { backgroundColor: "#f4f4f9" };
    }
    // Get the weather condition from the API response
    const condition = weather.weather[0].main;
    switch (condition) {
      case "Clear":
        return {
          backgroundImage:
            "url('https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=')",
          backgroundSize: "cover",
        };
      case "Clouds":
        return {
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/05/13/26/73/360_F_513267391_QEmNGeOFLLqrILTnoq21dReUPp5UsoNr.jpg')",
          backgroundSize: "cover",
        };
      case "Rain":
      case "Drizzle":
        return {
          backgroundImage:
            "url('https://img.freepik.com/free-photo/weather-effects-composition_23-2149853295.jpg')",
          backgroundSize: "cover",
        };
      case "Snow":
        return {
          backgroundImage:
            "url('https://thumbs.dreamstime.com/b/snowfall-street-tree-branches-benches-alley-snow-covers-air-lot-snowflakes-flying-headlights-cars-winter-133698774.jpg')",
          backgroundSize: "cover",
        };
      case "Haze":
        return {
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3W_5TZXk6CNE2eqIyrnj9paImzjyim1DMJA&s')",
          backgroundSize: "cover",
        };
      default:
        return { backgroundColor: "#f4f4f9" };
    }
  };

  const renderedWeather = weather ? (
    <>
      <div>Temperature : {weather?.main?.feels_like}</div>
      <div>Humidity : {weather?.main?.humidity}%</div>
      <div>Pressure : {weather?.main?.pressure}Pa</div>
    </>
  ) : (
    <></>
  );

  let alert = "";
  if (!weather && isClicked) {
    alert = "Please enter city !";
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="weather-app" style={getBackgroundStyle()}>
        <input
          type="text"
          placeholder="Enter city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        {alert && <div className="alert">{alert}</div>}
        <div>
          <button
            type="submit"
            style={{
              marginTop: "1rem",
            }}
            onClick={() => {
              fetchWeatherReport();
              setIsClicked(true);
            }}
          >
            Search
          </button>
        </div>
        <div className="weather-info">{renderedWeather}</div>
      </div>
    </form>
  );
}
