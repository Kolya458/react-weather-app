import { createSelector } from 'reselect';

const getWeather = state => state.weather;

const getcelsius = weather => (weather - 270).toFixed(1);

export const getCurrentWeatherSelector = createSelector(getWeather, getcelsius);
