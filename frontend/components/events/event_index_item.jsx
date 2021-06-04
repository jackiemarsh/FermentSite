import React from 'react';
import { Link } from 'react-router-dom';

class EventIndexItem extends React.Component{
  constructor(props){
    super(props);
  }

  render() {

    return(
      <li className="event-item">
        <Link to={`/events/${this.props.event.id}`}>
          <span>{this.props.event.id}</span>
          <span>{this.props.event.title}</span>
          <img src={this.props.event.imageUrl}/>
          <span>{this.props.event.description}</span>
          <span>{this.props.event.location}</span>
          <span>{this.props.event.start_date}</span>
        </Link>
      </li>
    )
  }
}

export default EventIndexItem;