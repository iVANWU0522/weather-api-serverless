import { openWeatherApi } from '../api';
import { HttpException } from '../utils';

type Zip = {
  postCode: string;
  countryCode: string;
}

export interface Weather {
  lon: number;
  lat: number;
  main: string;
  description: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export const getWeather = async (payload: Zip): Promise<Weather> => {
  try {
    const { data } = await openWeatherApi(`{payload.postCode},{payload.countryCode}`);
    return {
      lon: data.coord.lon,
      lat: data.coord.lat,
      main: data.weather[0].main,
      description: data.weather[0].description,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      pressure: data.main.pressure,
      humidity: data.main.humidity
    }
  } catch (e) {
    throw new HttpException(e.message, e.status || 500);
  }
};
