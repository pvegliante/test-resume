import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
      name: '',
      names: [],
  };//<-- initial state


  onFormSubmit = (evt) => {
    const names = [...this.state.names, this.state.name, this.state.last_name,
                                        this.state.address, this.state.email,
                                        this.state.cpt, this.state.education,
                                        this.state.certification, this.state.experance];

    this.setState({names: names, name: ''});
    evt.preventDefault();
  };


  //when ever a user does something on a wbe page they are generating an event

  onNameChange= (evt) => {
    this.setState({
      name: evt.target.value
    });
  };

  onLastNameChange = (evt) => {
    this.setState({
      last_name: evt.target.value
    });
  };

  onAddressChange = (evt) => {
    this.setState({
      address: evt.target.value
    });
  };

  onEmailChange = (evt) => {
    this.setState({
      email: evt.target.value
    });
  };

  onCptChange = (evt) => {
    this.setState({
      cpt: evt.target.value
    });
  };

  onEducationChange = (evt) => {
    this.setState({
      education: evt.target.value
    });
  };

  onCertificationChange= (evt) => {
    this.setState({
      certification: evt.target.value
    });
  };

  onExperanceChange= (evt) => {
    this.setState({
      experance: evt.target.value
    });
  };



  render() {
    return(
      <div className="App">
        <h1>Resume Template</h1>

          <form onSubmit={this.onFormSubmit}>
            <input className="first_name_input"
              placeholder="First Name"
              value={this.state.name}//<-- makes the component and controlled component
              onChange={this.onNameChange}
            />

            <input className="last_name_input"
              placeholder="Last Name"
              value={this.state.last_name}//<-- makes the component and controlled component
              onChange={this.onLastNameChange}
            />

            <input className="address"
              placeholder="Address"
              value={this.state.address}//<-- makes the component and controlled component
              onChange={this.onAddressChange}
            />

            <input className="email"
              placeholder="Email"
              value={this.state.email}//<-- makes the component and controlled component
              onChange={this.onEmailChange}
            />

            <textarea className="cpt"
              placeholder="Certified Pharmacy Technician"
              value={this.state.cpt}
              onChange={this.onCptChange}
            />

            <textarea className="education"
              placeholder="Education"
              value={this.state.education}
              onChange={this.onEducationChange}
            />

            <textarea className="certification"
              placeholder="Certification"
              value={this.state.certification}
              onChange={this.onCertificationChange}
            />

            <textarea className="experance"
              placeholder="Experance"
              value={this.state.experance}
              onChange={this.onExperanceChange}
            />

            <input type="submit"/>
          </form>
          <div>
            <h3>Resume</h3>
            <div>
              { this.state.names.map((name, i) => <p key={i}>{name}</p>) }
            </div>
          </div>

      </div>
    );
  }
}

export default App;
