import React, { useEffect } from 'react';
import { weatherNewRequest } from '../../actions/actionsCreators';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import CityWeather from '../presentational/CityWeather';
import { getCurrentWeatherSelector } from '../../selectors/selectors';
import PropTypes from 'prop-types';

function WeatherInfo(props) {

    const { city } = useParams();

    useEffect(() => {
        async function fetchData() {
            await props.fetchData(city);
        }
        fetchData();
    });

    if (props.hasError) {
        return <p>Sorry! there was an error loading the weather</p>
    }

    if (props.isLoading) {
        return <p>loading...</p>
    }

    return (
        <CityWeather weather = {props.weather} city = {city} />
    )
    
}

const mapStateToProps = state => ({
    weather: getCurrentWeatherSelector(state),
    hasError: state.weatherHasError,
    isLoading: state.weatherIsLoading
});

const mapDispatchToProps = dispatch => ({
    fetchData: (city) => dispatch(weatherNewRequest(city))
});

WeatherInfo.propTypes = {
    weather: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);