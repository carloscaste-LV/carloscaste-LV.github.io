import React from 'react';
import '../static/ContactSection.css'

export default class ContactSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes hacer lo que necesites con los valores del formulario
        console.log(this.state);
    }

    render() {
        return (
            <section id="contact-section">
                <div id="contact-box">
                    <div id="contact-info">
                        <div id="contact-titles">
                            <h2>Contact Me</h2>
                            <h3 className="contact-title ">Have You Any Questions ?</h3>
                            <h4 className="contact-sub-title ">I'M AT SERVICES</h4>
                        </div>
                        <div className="contact-info-items">
                            <div className="contact-info-item ">
                                <div className="icon"><i className="fa fa-phone"></i></div>
                                <h4>Call Me On</h4>
                                <p>+52 3330998810</p>
                            </div>
                            <div className="contact-info-item ">
                                <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                                <h4>Office</h4>
                                <p>Islamaabad</p>
                            </div>
                            <div className="contact-info-item ">
                                <div className="icon"><i className="fa fa-envelope"></i></div>
                                <h4>Email</h4>
                                <p>info@hotmail.com</p>
                            </div>
                            <div className="contact-info-item ">
                                <div className="icon"><i className="fa fa-globe-europe"></i></div>
                                <h4>Website</h4>
                                <p>domain.com</p>
                            </div>
                        </div>
                    </div>
                    <div id="form-group">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <h3 className="contact-title ">SEND ME AN EMAIL</h3>
                                <h4 className="contact-sub-title ">I'M VERY RESPOSIVE TO MESSAGES </h4>
                            </div>
                            <div id="name" className="form-item">
                                <input type="text" name="name" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} required/>
                            </div>
                            <div id="email" className="form-item ">
                                <input type="email" name="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} required/>
                            </div>
                            <div id="subject" className="form-item  ">
                                <input type="text" name="subject" className="form-control" placeholder="Subject" value={this.state.subject} onChange={this.handleInputChange} required/>
                            </div>
                            <div id="message" className="form-item">
                                <textarea name="message" className="form-control" placeholder="Message" value={this.state.message} onChange={this.handleInputChange} required></textarea>
                            </div>
                            <div className="form-item  ">
                                <button type="submit" className="btn">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}
