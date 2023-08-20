import './App.css'
import Counter from './components/Counter'
import ListExample from './components/ListExample'

const App = () => {
  return (
    <div className='App'>
      <h1>Пример со счетчиком</h1>
      <Counter />

      <h1>Пример с формой и списком</h1>
      <ListExample />
    </div>
  )
}

export default App
