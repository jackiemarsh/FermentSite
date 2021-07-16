import React from 'react';

class EditEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.event;
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("constructor", this.props)
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
        console.log("CDM", this.state)
        this.props.fetchEvent(this.props.match.params.eventId)
        console.log(this.props.match.params.eventId)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateEvent(this.state)
            .then(event => this.props.history.push(`/events/${event.id}`));
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
                <h2>Edit Your Event</h2>
                <form className="form-header" onSubmit={this.handleSubmit}>
                    <div className="event-form-fields"> <label className="event-title">Event Title
                            <input className="create-input" type="text"
                                placeholder="Give it a name"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                        </label> <label className="event-description">Event Description
                            <textarea value={this.state.description}
                                onChange={this.update('description')}
                                />
                        </label>  
                        <div className="location-container"> <h1>Location</h1>
                            <label className="event-location">
                                <input type="text"
                                value={this.state.location}
                                onChange={this.update('location')}/>
                            </label>
                        </div>
                        <label id="event-start">Date
                            <input type="date"
                                min={currentDate}
                                value={this.state.start_date}
                                onChange={this.update('start_date')} />
                        </label>
                    </div>
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

export default EditEventForm;