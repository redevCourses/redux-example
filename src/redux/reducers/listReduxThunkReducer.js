const initialState = {
  data: null,
  loading: false,
  error: null
}

const listReduxThunkReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null }
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload }
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default listReduxThunkReducer
