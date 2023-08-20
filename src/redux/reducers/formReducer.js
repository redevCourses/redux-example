import { ADD_NAME } from '../actions/formActions'
const initialState = {
  name: ''
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.payload
      }
    default:
      return state
  }
}

export default formReducer
