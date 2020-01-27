import { WEATHER_IS_LOADING, WEATHER_HAS_ERROR, FETCH_WEATHER_SUCCESS, WEATHER_NEW_REQUEST } from './actionsTypes';
import { call, put, takeEvery } from "redux-saga/effects";
import { weatherApi } from '../services/weatherApi';

function weatherIsLoading(bool) {
    return {
        type: WEATHER_IS_LOADING,
        isLoading: bool
    }
}

function weatherHasError(bool) {
    return {
        type: WEATHER_HAS_ERROR,
        hasError: bool
    }
}

function weatherFetchDataSuccess(degrees) {
    return {
        type: FETCH_WEATHER_SUCCESS,
        degrees
    }
}

export function weatherNewRequest(city) {
    return {
        type: WEATHER_NEW_REQUEST,
        city
    }
}

export function* fetchWeatherSaga(action) {
    try {
        yield put(weatherIsLoading(true));
        const weather = yield call(weatherApi, action.city);
        yield put(weatherIsLoading(false));
        yield put(weatherFetchDataSuccess(weather));
    } catch (err) {
        yield put(weatherHasError(err));
    }
}

export function* getWeatherSaga() {
    yield takeEvery(WEATHER_NEW_REQUEST, fetchWeatherSaga);
}

