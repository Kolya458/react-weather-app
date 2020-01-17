import { combineReducers } from 'redux';
import { weatherHasError, weatherIsLoading, weather} from './weather';

export default combineReducers ({
    weather,
    weatherIsLoading,
    weatherHasError
})