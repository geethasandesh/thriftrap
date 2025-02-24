
import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './Components/Routers/Routers'
import Header from './Components/Comp/Header'
import Footer from './Components/Comp/Footer'
function App() {
  return (
    <Router>
      <Header/>
      <Routers/>
      <Footer/>
    </Router>
  )
}

export default App
