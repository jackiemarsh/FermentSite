import React from "react";
import { Route } from "react-router-dom";
import GreetingContainer from './greeting/greeting_container'
import SignUpFormContainer from './session/signup_form_container.jsx';
import LogInFormContainer from './session/login_form_container';
import {AuthRoute} from '.././util/route_util'
import NavBarContainer from './nav/nav_container'
<link href="//db.onlinewebfonts.com/c/a14ee85c79dd38d7271d1e04f79a3b93?family=Neue+Plak" rel="stylesheet" type="text/css"/>

const App = () => (
  <div>
      <header>
        {/* <GreetingContainer /> */}
        <NavBarContainer />
       </header>
  
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;