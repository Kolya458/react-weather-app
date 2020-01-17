import { WEATHER_IS_LOADING, WEATHER_HAS_ERROR, FETCH_WEATHER_SUCCESS } from '../actions/actionsTypes';

export function weatherHasError(state = false, action) {
    switch(action.type) {
        case WEATHER_HAS_ERROR:
            return action.hasError;
        default:
            return state;
    }
}

export function weatherIsLoading(state = false, action) {
    switch(action.type) {
        case WEATHER_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function weather(state = null, action) {
    switch(action.type) {
        case FETCH_WEATHER_SUCCESS:
            return action.degrees;
        default: 
            return state;
    }
}