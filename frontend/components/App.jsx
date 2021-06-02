import React from "react";
import { Route } from "react-router";
import GreetingContainer from './greeting/greeting_container'

const App = () => (
  <div>
      <header>
        <h1>FermentSite is brewing</h1>
        <GreetingContainer />
       </header>
  
        <Route path='/login' component={LoginFormContainer}/>
        <Route path='/signup' component={SignupFormContainer}/>
  </div>
);

export default App;