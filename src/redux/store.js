import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './reducers/counterReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
	//example: exampleReducer, (пример, что можно добавлять еще редьюсеры)
});

const store = createStore(rootReducer,  composeWithDevTools());

export default store;