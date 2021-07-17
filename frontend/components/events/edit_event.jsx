import React from 'react';

class EditEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.fetchEvent(this.props.match.params.eventId)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateEvent(this.state)
            .then(event => {
                this.props.history.push(`/events/${event.event.id}`)
                }
                );
        }

    update(field) {
        return e => this.setState({ 
            [field]: e.currentTarget.value 
        });
    }

    render() {
        let currentDate = new Date().toISOString();
        // currentDate = currentDate.slice(0, 16);

        return (
            <div className="event-form-container">
                <h2 className="form-header">Edit Your Event</h2>
                <form  onSubmit={this.handleSubmit} className="event-form">
                    <div className="event-form-fields">
                    <div className="basic-info">
                        {/* <h1 className="basic-header">Basic Info</h1> */}
                        <div className="login-container">
                            <label className="event-title">Event Title
                                <input className="create-input" type="text"
                                placeholder="Give it a name"
                                value={this.state.title}
                                onChange={this.update('title')}
                                />
                            </label>
                        </div>
                        <div className="login-container">
                            <label className="event-description">Event Description
                                <textarea className="create-input" value={this.state.description} 
                                onChange={this.update('description')}
                                />
                            </label>
                        </div>
                    </div>

                    <div className="location-container"> <h1>Location</h1>
                        <label className="event-location">
                            <input type="text"
                            value={this.state.location}
                            onChange={this.update('location')}/>
                        </label>
                    </div>
                    <div className="date-container">
                        <label className="event-date">Date
                            <input type="date"
                            value={this.state.start_date}
                            onChange={this.update('start_date')}/>
                        </label>
                    </div>
                </div>
                    <input className="button-submit" type="submit" value="Save" />
                </form>
            </div>
        )
    }
}

export default EditEventForm;