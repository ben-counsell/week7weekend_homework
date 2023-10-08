import MonsterContainer from './containers/MonsterContainer'
import './App.css'

function App() {
  
  return (
    <>
      <h1>D&D Monster Sheet</h1>
      <hr/>
      <div className='monster-container'>
        <MonsterContainer/>
      </div>
    </>
  )
}

export default App