// https://openweathermap.org/api/one-call-3?collection=one_call_api_3.0&collection=one_call_api_3.0&collection=one_call_api_3.0#parameter

// TODO: refine these comments, and expand

// For `Current`, `Daily`, and `Hourly`
type Weather = {
  id: number; // Weather condition id
  main: string; // Group of weather parameters (Rain, Snow etc.)
  description: string; // Weather condition within the group, all descriptions: https://openweathermap.org/weather-conditions?collection=other#Weather-Condition-Codes-2
  icon: string; // Weather icon id, all icons: https://openweathermap.org/weather-conditions?collection=other#How-to-get-icon-URL
};

type Current = {
  dt: Date; // Time of the forecasted data, unix, UTC
  sunrise: Date; // Sunrise time, Unix, UTC
  sunset: Date; // Sunset time, Unix, UTC
  temp: number; // Temperature. Units - default: kelvin, metric: Celsius, imperial: Fahrenheit
  feels_like: number; // Temperature (human). Units - default: kelvin, metric: Celsius, imperial: Fahrenheit
  pressure: number; // Atmospheric pressure on the sea level, hPa
  humidity: number; // Humidity, %
  dew_point: number; // Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit
  uvi: number; // The maximum value of UV index for the day
  clouds: number; // Cloud cover, %
  visibility: number; // Average visibility, metres
  wind_speed: number; // Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour
  wind_gust?: number; // Wind gust. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour
  wind_deg: number; // Wind direction, degrees (meteorological)
  weather: Weather[];
};

type Minutely = {
  dt: Date; // Time of the forecasted data, unix, UTC
  precipitation: number; // Precipitation, mm/h.
};

type Hourly = {
  dt: Date; // Time of the forecasted data, unix, UTC
  temp: number; // Temperature. Units - default: kelvin, metric: Celsius, imperial: Fahrenheit
  feels_like: number; // Temperature (human). Units - default: kelvin, metric: Celsius, imperial: Fahrenheit
  pressure: number; // Atmospheric pressure on the sea level, hPa
  humidity: number; // Humidity, %
  dew_point: number; // Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit
  uvi: number; // The maximum value of UV index for the day
  clouds: number; // Cloud cover, %
  visibility: number; // Average visibility, metres
  wind_speed: number; // Wind speed. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour
  wind_gust?: number; // Wind gust. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour
  wind_deg: number; // Wind direction, degrees (meteorological)
  weather: Weather[];
  pop: number; // Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
};

type Daily = {
  dt: Date; // Time of the forecasted data, unix, UTC
  sunrise: Date; // Sunrise time, Unix, UTC
  sunset: Date; // Sunset time, Unix, UTC
  moonrise: number; // The time of when the moon rises for this day, Unix, UTC
  moonset: number; // The time of when the moon sets for this day, Unix, UTC
  moon_phase: number; // Moon phase. 0 and 1 are 'new moon', 0.25 is 'first quarter moon', 0.5 is 'full moon' and 0.75 is 'last quarter moon'. The periods in between are called 'waxing crescent', 'waxing gibbous', 'waning gibbous', and 'waning crescent', respectively. Moon phase calculation algorithm: if the moon phase values between the start of the day and the end of the day have a round value (0, 0.25, 0.5, 0.75, 1.0), then this round value is taken, otherwise the average of moon phases for the start of the day and the end of the day is taken
  summary: string; // Human-readable description of the weather conditions for the day
  temp: {
    min: number; // Min daily temperature
    max: number; // Max daily temperature
    day: number; // Day temperature
    night: number; // Night temperature
    morn: number; // Morning temperature
    eve: number; // Evening temperature
  };
  feels_like: {
    day: number; // Day temperature
    night: number; // Night temperature
    morn: number; // Morning temperature
    eve: number; // Evening temperature
  };
  pressure: number; // Atmospheric pressure on the sea level, hPa
  humidity: number; // Humidity, %
  dew_point: number; // Atmospheric temperature (varying according to pressure and humidity) below which water droplets begin to condense and dew can form. Units – default: kelvin, metric: Celsius, imperial: Fahrenheit
  wind_speed: number;
  wind_gust?: number; // Wind gust. Units – default: metre/sec, metric: metre/sec, imperial: miles/hour
  wind_deg: number; // Wind direction, degrees (meteorological)
  weather: Weather[];
  clouds: number; // Cloud cover, %
  pop: number; // Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100%
  rain?: number; // Precipitation volume, mm
  uvi: number; // The maximum value of UV index for the day
};

export type WeatherResponse = {
  lat: number; // Latitude of the location, decimal (−90; 90)
  lon: number; // Longitude of the location, decimal (-180; 180)
  timezone: string; // Timezone name for the requested location
  timezone_offset: number; // Shift in seconds from UTC
  current: Current; // Current weather data API response
  minutely: Minutely[]; // Minute forecast weather data API response
  hourly: Hourly[]; // Hourly forecast weather data API response
  daily: Daily[]; // Daily forecast weather data API response
};
