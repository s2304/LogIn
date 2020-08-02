import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import UserLogInPage from './Components/UserLogIn';
import LandingPage from './Components/LandingPage';
import UnknownPage from './Components/404'; 
import { render } from 'react-dom';


class App extends Component {
  
  render()
  {
   
    return(
    <div>
          <Switch>            
            <Route path='/User/LogIn' exact component={UserLogInPage}/>
            <Route path='/User/Landing' exact component={LandingPage}/> 
            <Route path='/'  component={UnknownPage}/>        
          </Switch>
      </div>
    );
  }
}

export default App;
