import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import eventsReducer from "./events_reducer";
import EventRsvpsReducer from "./event_rsvp_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer,
  eventRSVP: EventRsvpsReducer
});

export default entitiesReducer;