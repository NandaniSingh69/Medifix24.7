import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAappointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

  const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%'>
      <Navbar />
      <Routes>
        <Route path = '/' element ={<Home />} />
        <Route path = '/doctors' element ={<Doctors />} />
        <Route path = '/doctors/:speciality' element ={<Doctors />}  />
        <Route path = '/login' element ={<Login />} />
        <Route path = '/contact' element ={<Contact />} />
        <Route path = '/MyAppointment' element ={<MyAappointment />} />
        <Route path = '/About' element ={<About />} />
        <Route path = '/MyProfile' element ={<MyProfile />} />
        <Route path = '/appointment/:docId' element ={<Appointment />} />  "nandani"
      </Routes>
      <Footer />
    </div>
  )
}
export default App
