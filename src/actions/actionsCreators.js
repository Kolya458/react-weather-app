import { WEATHER_IS_LOADING, WEATHER_HAS_ERROR, FETCH_WEATHER_SUCCESS } from './actionsTypes';
import axios from 'axios';

export function weatherIsLoading(bool) {
    return {
        type: WEATHER_IS_LOADING,
        isLoading: bool
    }
}

export function weatherHasError(bool) {
    return {
        type: WEATHER_HAS_ERROR,
        hasError: bool
    }
}

export function weatherFetchDataSuccess(degrees) {
    return {
        type: FETCH_WEATHER_SUCCESS,
        degrees
    }
}

export function weatherFetchData(url) {
    return (dispatch) => {

        dispatch(weatherIsLoading(true));

        axios.get(url)
            .then(response => {
                dispatch(weatherIsLoading(false))
                return response.data.main.temp;
            })
            .then(degrees => dispatch(weatherFetchDataSuccess(degrees)))
            .catch(() => dispatch(weatherHasError(true)));
    }
}

