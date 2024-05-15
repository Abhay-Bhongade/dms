import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Report from './Components/Report/Report'
import CustomerScoreCard from './Components/CustomerScoreCard/CustomerScoreCard'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
<Route path='/' element={<CustomerScoreCard />}></Route>
    
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App