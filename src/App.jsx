import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Report from './Components/Report/Report'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Report />}></Route>
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App