import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { getWeatherSaga } from '../actions/actionsCreators'
import rootReducder from '../reducers';

const sagaMiddleware = createSagaMiddleware()

function configureStore(initialState) {
    const store = createStore(
        rootReducder,
        initialState,
        applyMiddleware(sagaMiddleware)
    );

    sagaMiddleware.run(getWeatherSaga);

    return store;
}



export default configureStore;