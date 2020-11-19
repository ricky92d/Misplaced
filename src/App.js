import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './Containers/Navbar'
import Home from './Pages/Home';
import './App.css';
import UploadPage from './Pages/UploadPage';
import Contact from './Pages/Contact';

const App = () => {
  return(
    <div>

      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/upload' exact component={UploadPage}/>
          <Route path='/contact' exact component={Contact}/>
        </Switch>
      </BrowserRouter>

    </div>
    
  )
}

export default App;