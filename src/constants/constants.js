import { APPID } from "./secret"

export const GET_WEATHER_URL = function(prop) {
    return `http://api.openweathermap.org/data/2.5/weather?q=${prop}&APPID=${APPID}`
}