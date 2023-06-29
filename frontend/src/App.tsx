import { GlobalStyle } from './styles/GlobalStyles'
import HomeScreen from './screens/HomeScreen'
import { Routes, Route, useLocation } from 'react-router-dom'
import DetailsScreen from './screens/DetailsScreen'

function App () {
  const location = useLocation()
  return (
    <>
      <GlobalStyle />

      <Routes location={location} key={location.key}>
        <Route path='/' element={<HomeScreen />} />

        <Route path='/details/:streamerId' element={<DetailsScreen />} />
      </Routes>
    </>
  )
}

export default App
