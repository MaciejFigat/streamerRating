import AboutScreen from './screens/AboutScreen'
import HomeScreen from './screens/HomeScreen'
import { Routes, Route, useLocation } from 'react-router-dom'

function App () {
  const location = useLocation()
  return (
    <>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
      </Routes>
    </>
  )
}

export default App
