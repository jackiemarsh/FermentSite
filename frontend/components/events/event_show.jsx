import React from 'react';
import EventIndexItem from './event_index_item';

class EventShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

    componentDidMount() {
        this.props.fetchEvent(this.props.match.params.eventId)
        .then(() => this.setState({ loading: false}));

        this.setState({ loading: false });
    }

    render() {
        if (this.state.loading) return null;
        if (this.props.event === undefined) return null;

        return (
            <div>Test Show
                <section className="event-show">
                    <div className="event-show-top">
                        <figure>
                            <img src={this.props.event.imageUrl} alt="event pic" className="event-show-img"/>
                        </figure>
                        <div className="top-side">
                            <h4 className="event-show-date">{this.props.event.start_date}</h4>
                            <h2 className="event-show-title">{this.props.event.title}</h2>
                            <h3 className="event-show-author">by {this.props.event.author_id}</h3>
                        </div>
                    </div>
                    <div className="event-show-bottom">
                        <h2 className="event-show-title">{this.props.event.title}</h2>
                        <h1 className="event-show-header">About this event</h1>
                        <h4 className="event-show-description">{this.props.event.description}</h4>
                    </div>
                </section>
            </div>
        )
    }
}
export default (EventShow)