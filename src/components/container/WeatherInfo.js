import React from 'react';
import { weatherFetchData } from '../../actions/actionsCreators';
import { connect } from 'react-redux';
import CityWeather from '../presentational/CityWeather';
import { GET_WEATHER_URL } from '../../constants/constants';
import { getCurrentWeatherSelector } from '../../selectors/selectors';
import PropTypes from 'prop-types';

class WeatherInfo extends React.PureComponent {

    componentDidUpdate = (prevProps) => {
            if(this.props.city !== prevProps.city) {
            this.props.fetchData(GET_WEATHER_URL(this.props.city));
        };
    };

    componentDidMount() {
        this.props.fetchData(GET_WEATHER_URL(this.props.city));
    }

    render() {
        if (this.props.hasError) {
            return <p>Sorry! there was an error loading the weather</p>
        }

        if (this.props.isLoading) {
            return <p>loading...</p>
        }

        return (
            <CityWeather weather = {this.props.weather} city = {this.props.city} />
        )
    }
}

const mapStateToProps = state => ({
    weather: getCurrentWeatherSelector(state),
    hasError: state.weatherHasError,
    isLoading: state.weatherIsLoading
});

const mapDispatchToProps = dispatch => ({
    fetchData: (url) => dispatch(weatherFetchData(url))
});

WeatherInfo.propTypes = {
    city: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
    hasError: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);