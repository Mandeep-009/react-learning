import './App.css';
import Header from './Components/Header'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Insta from './Components/Insta'
import Mail from './Components/Mail'
import Error from './Components/Error'
import User from './Components/User'


function App() {
  
  return (
    <div className="App">
      <Router>
      <Header />
      <Routes>
        <Route path='/' >
          <Route index element={<Home />} />
          <Route path='/app' element={<Home />} />
        </Route>
        <Route path='/about' element={<About />} />
        {/* <Route path='/:id' element={<User />} /> */}
        <Route path='/contact' element={<Contact />} >
{/*             
            <Route path='/contact/insta' element={<Insta />} />
            <Route path='/contact/mail' element={<Mail />} /> */}
        </Route>
        <Route path='*' element={<Error/>}/>
      </Routes>
      
      
    </Router>
    </div>
  );
}

export default App;
