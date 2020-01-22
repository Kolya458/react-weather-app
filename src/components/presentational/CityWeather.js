import React from 'react';
import PropTypes from 'prop-types';

function CityWeather(props) {
    
    return (
        <React.Fragment>
            <h2>{props.city}</h2>
            <p>{props.weather}</p>
        </React.Fragment>
    )
}

CityWeather.propTypes = {
    city: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired
}

export default CityWeather;