import React from "react";
import { Route } from "react-router";
import GreetingContainer from './greeting/greeting_container'
import AuthRoute from './util/route_util'

const App = () => (
  <div>
      <header>
        <h1>FermentSite is brewing</h1>
        <GreetingContainer />
       </header>
  
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;