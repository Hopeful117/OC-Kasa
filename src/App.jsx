
import {Routes,Route,Router, BrowserRouter,Link} from 'react-router-dom'

import Header from './assets/components/header'
import Footer from './assets/components/footer'
import Home from './assets/pages/home'


import './App.css'

function App() {
  

  return (
    <>
     <Header />
     
     <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
     
     <Footer />
    
    </>
   
   
  )
}

export default App
