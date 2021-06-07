import React from 'react';
import { Link } from 'react-router-dom';


class EventIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render() {

    return(
      <li>
        <Link className="event-item" to={`/events/${this.props.event.id}`}>
          <img src={this.props.event.imageUrl} className="event-item-image"/>
          <span className="event-item-title">{this.props.event.title}</span>
          <span className="event-item-description">{this.props.event.description}</span>
          <span className="event-item-location">{this.props.event.location}</span>
          <span className="event-item-date">{this.props.event.start_date}</span>
        </Link>
      </li>
    )
  }
}

export default EventIndexItem;