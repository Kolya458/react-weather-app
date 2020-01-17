import React from 'react';

function CityWeather(props) {
    
    return (
        <React.Fragment>
            <h2>{props.city}</h2>
            <p>{props.degrees}</p>
        </React.Fragment>
    )
}

export default CityWeather;