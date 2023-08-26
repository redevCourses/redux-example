import './App.css'
import Counter from './components/Counter'
import ListExample from './components/ListExample'
import ListReduxThunk from './components/ListReduxThunk'

const App = () => {
  return (
    <div className='App'>
      <h1>Пример со счетчиком</h1>
      <Counter />

      <h1>Пример с формой и списком</h1>
      <ListExample />

      {/* раскомментируй чтобы увидеть работу redux-thunk */}

      {/* <h1>Пример с redux-thunk</h1>
      <ListReduxThunk /> */}
    </div>
  )
}

export default App
