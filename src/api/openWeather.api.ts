import { HttpClient } from "../utils";
import HttpResponse from "../utils/httpResponse";
import { OpenWeatherApiResponse } from "./openWeatherApiResponse.interface";

export const openWeatherApi = async (zip: string): Promise<HttpResponse<OpenWeatherApiResponse>> => {
    const httpClient = new HttpClient(
        'https://api.openweathermap.org/data/2.5',
    );

    return await httpClient.get(
        '/weather',
        {
            zip,
            appid: process.env.OPEN_WEATHER_API_KEY,
        }
    );
}