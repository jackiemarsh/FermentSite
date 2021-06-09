import React from 'react';

class CreateEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.event;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ 
            [field]: e.currentTarget.value 
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const event = Object.assign({}, this.state);
        this.props.createEvent(event)
    }

    render() {
        let currentDate = new Date().toISOString();
        currentDate = currentDate.slice(0, 16);

        return (
            <div className="event-form-container">
                <h2>Create An Event</h2>
                <form onSubmit={this.handleSubmit} className="event-form">
                    <div className="event-form-content">
                        <label id="event-title">Event Title
                            <input type="text"
                            placeholder="Give it a short distinct name"
                            value={this.state.title}
                            onChange={this.update('title')}
                            />
                        </label>
                        <span className="form-field-error">{this.checkError("Title can't be blank")}</span>
                        <label id="event-date">Date
                            <input type="event-date"
                            value={this.state.start_date}
                            onChange={this.update('start_date')}/>
                        </label>
                        {/* <span className="form-field-error">{this.checkError("Start date can't be blank")}</span> */}
                        <label className="event-desc">Event Description
                            <textarea value={this.state.description} 
                            onChange={this.update('description')}
                            />
                        </label>
                        {/* <span className="form-field-error">{this.checkError("Category can't be blank")}</span> */}
                    </div>
                    <input className="button-submit" type="submit" value="Save" />
                </form>
            </div>
        )
    }
}

export default CreateEventForm;