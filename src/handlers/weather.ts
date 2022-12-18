import { getWeather } from "../services";
import { returnOK, returnError } from "./return";

export const myhandler = async (event) => {
  // this is my code, this is my destiny\
  try {
    const params = event.queryStringParameters;

    if (!params || !params.postCode || !params.countryCode) {
      return returnError({
        statusCode: 400,
        message: "Missing parameters",
      });
    }

    const weather = await getWeather(params);

    returnOK(weather);
  } catch (e) {
    return returnError(e);
  }
}

export const handler = myhandler;