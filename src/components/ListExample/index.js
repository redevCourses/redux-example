import React from 'react'
import { useSelector } from 'react-redux'
import FormExample from '../FormExample'

const ListExample = () => {
  const { users } = useSelector(state => state.list)
  // Получаем объект list из store и сразу деструктурируем, чтобы взять только users

  return (
    <>
      <FormExample />
      {users.length === 0 && <div> Список пуст 😐</div>}
      <ul>
        {users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  )
}

export default ListExample
