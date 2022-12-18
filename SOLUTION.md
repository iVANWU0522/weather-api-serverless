# Setup

1. Should set an Environment Variable called `OPEN_WEATHER_API_KEY`. The value of this variable should be the API key for the Open Weather API.

# Solution
As this boilerplate project includes `api` and `services` folders, the solution is split into two parts.

1. The `api` folder contains the `openWeatherApi` function. This function is responsible for making the API call to the Open Weather API. It should return the response from the API call.
2. The `services` folder contains the `getWeather` function. This function is responsible for calling the `openWeatherApi` function and returning the weather data from the response.
