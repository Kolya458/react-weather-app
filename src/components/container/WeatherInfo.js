import React, { useEffect, useCallback } from 'react';
import { weatherNewRequest } from '../../actions/actionsCreators';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CityWeather from '../presentational/CityWeather';
import { getCurrentWeatherSelector } from '../../selectors/selectors';



export default function WeatherInfo(props) {

    const weather = useSelector(state => getCurrentWeatherSelector(state));
    const hasError = useSelector(state => state.weatherHasError);
    const isLoading = useSelector(state => state.weatherIsLoading);

    const dispatch = useDispatch();

    const { city } = useParams();

    const fetchData = useCallback(() => {
        dispatch(weatherNewRequest(city));
    }, [city, dispatch])

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    if (hasError) {
        return <p>Sorry! there was an error loading the weather</p>
    }

    if (isLoading) {
        return <p>loading...</p>
    }

    return (
        <CityWeather weather = {weather} city = {city} />
    )
    
}
