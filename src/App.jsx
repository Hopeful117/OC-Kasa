
import {Routes,Route,Router, BrowserRouter,Link} from 'react-router-dom'

import Header from './assets/components/header'
import Footer from './assets/components/footer'
import Home from './assets/pages/home'
import Fiche from './assets/pages/fiche'
import About from './assets/pages/about'




function App() {
  

  return (
    <>
     <Header />
     
     <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<Fiche />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
     
     <Footer />
    
    </>
   
   
  )
}

export default App
