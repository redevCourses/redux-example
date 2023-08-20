import { ADD_NEW_USER } from '../actions/listActions'

const initialState = {
  users: [] // Сюда будем добавлять новых пользователей
}

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, { ...action.payload }] // Возвращаем массив, куда записываем все что есть в state.users и
      }                                                // добавялем объект куда записываем все свойства из action.payload
    default:
      return state
  }
}

export default listReducer
