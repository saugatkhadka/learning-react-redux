import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from '../middleware/index';

// const storeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

const middlewares = [thunk];
middlewares.push(forbiddenWordsMiddleware);

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middlewares))   //spread operator for middlewares
);

export default store;