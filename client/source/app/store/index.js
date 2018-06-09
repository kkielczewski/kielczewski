import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reduxThunk from 'redux-thunk';
import userReducer from '../reducers/user';
import authenticationReducer from '../reducers/authentication';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  user: userReducer,
  form: formReducer
});

const configureStore = initialState => createStoreWithMiddleware(rootReducer, initialState);
export default configureStore;
