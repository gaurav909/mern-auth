import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SingIn from './pages/SingIn'
import SingnUp from './pages/SingnUp'
import Profile from './pages/Profile'
import Header from './componests/Header'

const App = () => {
  return (
    <BrowserRouter>
    {/*header */}
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/sign-in' element={<SingIn/>}/>
      <Route path='/sign-up' element={<SingnUp/>}/>
      <Route path='/profile' element={<Profile/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App