import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Form extends Component {
    state = {
      name: "",
      email: "",
      phone: ""
    };
  
  //Post 
  handleSubmit = async e => {
      e.preventDefault();
      const data = JSON.stringify(this.state);
      await fetch("http://localhost:4000", {
          method: "POST",
          body: data,
          headers: {
              "Content-Type": "application/json"
          }
      });
  };
  
    render(){
      console.log(this)
      console.log(this.state)
    return (
        <div>
            Please enter your information here
      <br />
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
    <input type="text" name="name" onChange={e => this.setState({ name: e.target.value })} />
                </label>
                <br />
                <label>
                    Email:
      <input type="text" name="email" onChange={e => this.setState({ email: e.target.value })} />
                </label>
    
                <br />
                <label>
                    Phone:
      <input type="text" name="phone" onChange={e => this.setState({ phone: e.target.value })} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <br />

            <Link to="/">Home</Link>
            <br />
            <Link to="/contacts">Contacts</Link>
        </div>
    );
}
}

export default Form;
