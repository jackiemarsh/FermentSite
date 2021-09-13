import React from 'react';
import EventIndexItem from './event_index_item';
import { withRouter, NavLink, Link } from 'react-router-dom';
import LoadingIcon from './loader'

// import * as eventImages from '../../../app/assets/images'
// import mainLogo from '../../../app/assets/images/beer-wall.jpg'


class EventIndex extends React.Component {
    constructor(props) {
        super(props);
           }

    componentDidMount() {
        this.props.fetchEvents();
    }

    toggleButton() {
      if (this.props.currentUser.id) {
        return (
          <NavLink to="/event/create" className="nav-create-submit splash">
              <div className="event-create-arrow">
                  <span>Start something</span>
                  <i className="fas fa-arrow-right"></i>
              </div>
          </NavLink>
        )
      } else {
        return (
          <Link to="/login" className="nav-create-submit splash">
              <div className="event-create-arrow">
                <span>Start something</span>
                <i className="fas fa-arrow-right"></i>
              </div>
          </Link>
        )
      }
    }

    render() {
        if (!this.props.events[this.props.events.length-1]) {
          return (<LoadingIcon/>)
        } else {
        return (
          <div className="event-page">
              <div className="index-header">
                <div className="index-header-bgbox"></div>
                <div className="index-header-main">
                  <div className="index-header-content"> 
                    <div className="index-header-content-text">
                      <h3 className="index-header-top">Drink life to the last drop</h3>
                      <h1 className="event-create-link">Make plans</h1>
                      {this.toggleButton()}
                    </div>
                    <img src={mainLogo} alt="beer cheers image" className="index-header-img"/>
                  </div>
                </div>
              </div>

              <div className="index-header-bottom">
                <h2 className="event-feed-title">Beer events near you</h2>
                <ul className="event-feed">
                    {this.props.events.map(event => (
                    <EventIndexItem key={event.id} event={event} />
                    ))}
                </ul>
              </div> 
          </div>
        );
        }
    }
}

export default withRouter(EventIndex);