import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Main from './components/Main';
import About from './components/About';
import Welcome from './pages/Welcome';



function App() {



  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/main' element={<Main/>}/>

      </Routes>
    </BrowserRouter>




    </>
  )
}

export default App
