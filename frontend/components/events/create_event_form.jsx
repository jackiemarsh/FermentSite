import React from 'react';

class CreateEventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        title: "",
        description: "",
        start_date: "",
        location: "",
        image: null,
        imageUrl: null,
        author_id: this.props.currentUser.id
        };
        console.log(this.state)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this)
    }

    update(field) {
        return e => this.setState({ 
            [field]: e.currentTarget.value 
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        // const event = Object.assign({}, this.state);
        // this.props.createEvent(event)
        const formData = new FormData();
        formData.append("event[title]", this.state.title);
        formData.append("event[description]", this.state.description);
        formData.append("event[location]", this.state.location);
        formData.append("event[start_date]", this.state.start_date);
        formData.append("event[author_id]", this.state.author_id)
        if (this.state.image) {
            formData.append("event[image]", this.state.image);
        }
        this.props.createEvent(formData)

    }

    // handleFile(e) {
    //     e.preventDefault();
    //     this.setState({image: e.currentTarget.files[0]});
    // }
    
    handleFile(e){
        const file = e.currentTarget.files[0];
        const filereader = new FileReader();
        filereader.onloadend = () => {
            this.setState({image: file, imageUrl: filereader.result});
        };
        if (file){
            filereader.readAsDataURL(file);
        }
    }

    render() {

        return (
            <div className="event-form-container">
                <h2>Create An Event</h2>
                <form onSubmit={this.handleSubmit} className="event-form">
                    <div className="event-form-fields">
                        <label className="event-title">Event Title
                            <input type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            />
                        </label>
                        
                        <label className="event-date">Date
                            <input type="date"
                            value={this.state.start_date}
                            onChange={this.update('start_date')}/>
                        </label>
                       
                        <label className="event-location">Location
                            <input type="text"
                            value={this.state.location}
                            onChange={this.update('location')}/>
                        </label>
                        <label className="event-description">Event Description
                            <textarea value={this.state.description} 
                            onChange={this.update('description')}
                            />
                        </label>
                        <label className="event-image">Upload an image
                            <input type="file"
                            onChange={this.handleFile.bind(this)}/>
                        </label>
                    </div>
                    <input className="button-submit" type="submit" value="Save" />
                </form>
            </div>
        )
    }
}

export default CreateEventForm;