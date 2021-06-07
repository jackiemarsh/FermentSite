import React from 'react';
import EventIndexItem from './event_index_item';
import { withRouter } from 'react-router-dom';
import LoadingIcon from './loader'

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
        // this.props.events[this.props.events.length-1] ? <LoadingIcon/> :
        return (
          <div className="event-show">
              <div className="index-header">
                <div className="index-header-bgbox"></div>
                <div className="index-header-main">
                  <div className="index-header-content"> 
                    <div className="index-header-content-text">
                      <h3 className="index-header-top">Drink life to the last drop</h3>
                      <h1 className="event-create-link">Make plans</h1>
                      <div className="event-create-arrow">
                        <span>Browse events</span>
                        <i className="fas fa-arrow-right"></i>
                      </div>
                    </div>
                    <img src={mainLogo} alt="beer cheers image" className="index-header-img"/>
                  </div>
                </div>
              </div>

                <h2 className="event-feed-title">Beer events near you</h2>
                <ul className="event-feed">
                    {this.props.events.map(event => (
                    <EventIndexItem key={event.id} event={event} />
                    ))}
                </ul>
          </div>
        );
    }
}

export default withRouter(EventIndex);