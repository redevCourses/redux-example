import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../redux/actions/listReduxThunkActions'

const ListReduxThunk = () => {
  const { data, loading, error } = useSelector(state => state.listReduxThunk)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div>
      {data && data?.results.map(item => <h3 key={item.name}>{item.name}</h3>)}
    </div>
  )
}

export default ListReduxThunk
