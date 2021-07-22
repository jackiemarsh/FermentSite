import React from "react";
import { Route, Switch } from "react-router-dom";
import GreetingContainer from './greeting/greeting_container'
import SignUpFormContainer from './session/signup_form_container.jsx';
import LogInFormContainer from './session/login_form_container';
import {AuthRoute, ProtectedRoute} from '.././util/route_util'
import NavBarContainer from './nav/nav_container'
import UserProfileContainer from './users/user_profile_container'
import EventIndexContainer from './events/events_index_container'
import EventShowContainer from './events/event_show_container'
import CreateEventContainer from './events/create_event_container'
import EditEventContainer from './events/edit_event_container'
import Modal from './modal';

<link href="https://db.onlinewebfonts.com/c/a14ee85c79dd38d7271d1e04f79a3b93?family=Neue+Plak" rel="stylesheet" type="text/css"/>

const App = () => (
  <div>
      {/* <header>
        <GreetingContainer />
       </header> */}
       <Modal />
        <NavBarContainer />
  <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route exact path="/events/:eventId/edit" component={EditEventContainer} />
      <Route path="/events/:eventId" component={EventShowContainer} />
      <ProtectedRoute exact path="/users/:userId" component={UserProfileContainer}/>
      <ProtectedRoute exact path="/event/create" component={CreateEventContainer}/>
      <Route exact path="/" component={EventIndexContainer} />
  </Switch>
  </div>
);

export default App;