import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import counterReducer from './reducers/counterReducer'
import listReducer from './reducers/listReducer'
import formReducer from './reducers/formReducer'
import listReduxThunkReducer from './reducers/listReduxThunkReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  form: formReducer,
  list: listReducer,
  listReduxThunk: listReduxThunkReducer
  //example: exampleReducer, (пример, что можно добавлять еще редьюсеры)
})

const store = createStore(
  rootReducer,
  composeWithDevTools()
  // applyMiddleware(thunk)  // раскомментируй чтобы увидеть работу redux-thunk
)

export default store
