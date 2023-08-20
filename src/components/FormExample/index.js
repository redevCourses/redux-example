import { v4 as uuidv4 } from 'uuid'
import { useSelector, useDispatch } from 'react-redux'
import { addName } from '../../redux/actions/formActions'
import { addNewUser } from '../../redux/actions/listActions'

const FormExample = () => {
  const dispatch = useDispatch()
  const { name } = useSelector(state => state.form) // Получение name через useSelector

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(addNewUser({ id: uuidv4(), name: name })) // вызываем actionCreater и передаем туда нового пользователя
    dispatch(addName('')) // почистим поле ввода
  }
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input value={name} onChange={e => dispatch(addName(e.target.value))} />
      <button type='submit'>Создать</button>
    </form>
  )
}

export default FormExample
