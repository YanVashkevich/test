import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Shop from './Components/Shop'
import Contact from './Components/Contact'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
      <Router>
        <div className='app-route'>
          <div className='header'>
            <Navbar/>
          </div>

          <div className='content-route'>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>

              <Route exact path = '/shop'>
                <Shop/>
              </Route>
              
              <Route exact path='/contact'>
                <Contact/>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
  )
}

export default App
