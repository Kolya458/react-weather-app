import { createSelector } from 'reselect';

const getWeather = state => state.weather;

const getCelsius = weather => (weather - 270).toFixed(1);

export const getCurrentWeatherSelector = createSelector(getWeather, getCelsius);
