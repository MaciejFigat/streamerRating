import AboutScreen from './screens/AboutScreen'
import { GlobalStyle } from './styles/GlobalStyles'
import HomeScreen from './screens/HomeScreen'
import { Routes, Route, useLocation } from 'react-router-dom'
import Nav from './modules/nav/Nav'
import { ColumnWrapper } from './styles/misc.styles'

function App () {
  const location = useLocation()
  return (
    <>
      <GlobalStyle />
      <ColumnWrapper>
        <Nav />
        <Routes location={location} key={location.key}>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/about' element={<AboutScreen />} />
        </Routes>
      </ColumnWrapper>
    </>
  )
}

export default App
