import { legacy_createStore as createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import counterReducer from './reducers/counterReducer'
import listReducer from './reducers/listReducer'
import formReducer from './reducers/formReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  form: formReducer,
  list: listReducer
  //example: exampleReducer, (пример, что можно добавлять еще редьюсеры)
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
