import Layout from './components/Layout'
import Home from './components/Home'
import About from "./components/About"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ContactUs from "./components/ContactUs"
import User from './components/User'
import Github from './components/Github'


function App() {

  return (
    <>
     

    <BrowserRouter>
    <Routes >

      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/params/:userId' element={<User/>}/>
        <Route path='/github' element={<Github/>}/>
      </Route>

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
