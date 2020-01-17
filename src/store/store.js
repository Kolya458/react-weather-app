import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import rootReducder from '../reducers';

function configureStore(initialState) {
    return createStore(
        rootReducder,
        initialState,
        applyMiddleware(thunk)
    );
}

export default configureStore;