import React from 'react';
import EventIndexItem from './event_index_item';
import { withRouter } from 'react-router-dom';
// import * as eventImages from '../../../app/assets/images'
// import mainLogo from '../../../app/assets/images/beer-wall.jpg'


class EventIndex extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     index: 0
        // };

        // this.selectCategory = this.selectCategory.bind(this);
    }

    componentDidMount() {
        this.props.fetchEvents();
    }

    render() {
            
        return (
          <div className="event-show">
              <h1>Events</h1>
              <div className="index-header">
                <h4 className="index-header-top">Drink life to the last drop</h4>
                <h2 className="index-header-bottom">Beer events near you</h2>
                <img src={mainLogo} alt="beer wall image" className="hero-img"/>
              </div>
              <ul>
                {this.props.events.map(event => (
                  <EventIndexItem key={event.id} event={event} />
                ))}
              </ul>
          </div>
        );
    }
}

export default withRouter(EventIndex);