import React from 'react';
import EventIndexItem from './event_index_item';
import { withRouter } from 'react-router-dom';

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