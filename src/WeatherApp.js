import "./WeatherApp.css";

export default function Weather(props) {
  let weatherData = {
    city: "London,UK",
    temperature: 20,
    imgUrl: "http://openweathermap.org/img/wn/10d@2x.png",
    description: "Clear sky",
    humidity: 49,
    wind: 3
  };
  return (
    <body>
      <div className="app-style">
        <form className="search-btn">
          <div className="row">
            <div className="col-7">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
              />
              <div
                pseudo="-webkit-search-cancel-button"
                aria-label="cancel"
                role="button"
              >
                {" "}
              </div>
            </div>
            <div className="col-1">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary search-control "
              />
            </div>
            <div className="col-3">
              <button className="btn btn-success location-button">
                Location
              </button>
            </div>
          </div>
        </form>
        <div className="weather-informations">
          <div className="row">
            <div className="col-5">
              <h1> {weatherData.city}</h1>
              <ul>
                <li>Description:{weatherData.description}</li>
                <li> Humidity:{weatherData.humidity}%</li>
                <li> Wind: {weatherData.wind} m/s</li>
              </ul>
            </div>
            <div className="col-7">
              <h2>
                {" "}
                <img
                  src={weatherData.imgUrl}
                  alt="clear"
                  width="100"
                  className="icon"
                />
                <span className="units">{weatherData.temperature}Cº</span>
              </h2>
            </div>
          </div>
          <a href="https://github.com/Olgakiz/w-react">Open-source code</a>, by Olga
        </div>
      </div>
    </body>
  );
}
