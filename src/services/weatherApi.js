import axios from 'axios';
import { GET_WEATHER_URL } from '../constants/constants';

export const weatherApi = city => axios.get(GET_WEATHER_URL(city))
    .then(responce => responce.data.main.temp);