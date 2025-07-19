import { useState } from 'react'
import './App.css'
import AddProductButton from './components/AddProductButton/AddProductButton'
import AllProducts from './components/AllProducts/AllProducts'
import SortComponent from './components/SortComponent/SortComponent'

function App() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <AddProductButton setShowCreateForm={setShowCreateForm} />
        <SortComponent />
      </div>
      <AllProducts showCreateForm={showCreateForm} setShowCreateForm={setShowCreateForm} />
    </>
  )
}

export default App
