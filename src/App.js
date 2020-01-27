import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from './components/presentational/Header';
import WeatherInfo from './components/container/WeatherInfo';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Route path='/weather/:city'><WeatherInfo /></Route>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
