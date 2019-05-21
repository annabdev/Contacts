import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Contacts extends Component {
    state = {
       contacts: [],
       name: "",
       email: "",
       phone: ""
    };

    //Update
    handleUpdate = async (e, _id) => {
        e.preventDefault();
        const update = JSON.stringify(this.state);
        await fetch("http://localhost:4000/" + _id, {
            method: "PUT",
            body: update,
            headers: {
                "Content-Type": "application/json"
            }
        });
        await this.getContacts();
    };

    //Delete
    handleDelete = async _id => {
        await fetch("http://localhost:4000/" + _id, {
            method: "DELETE"
        });
        await this.getContacts();
    };

    //Get "Read"
    getContacts = async () => {
        return fetch("http://localhost:4000")
        .then(results => {
            return results.json();
        })
        .then(results => {
            console.log("l",results)
            this.setState( {contacts:results});
        });
    };
    filterContacts = e => {
        let contact = this.state.contact;
        contact = contact.filter(contact => {
            return (contact) !==1
        });
        this.setState({ contact: contact.contact });
    };

    async componentDidMount() {
        await this.getContacts();
    }
  render(){
      console.log(this.state);
  return (
    <div>
    {this.state.contacts.map( (contact, index) => (
     <div className="border" key={index}>
         
     <h2>{contact.name}</h2>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
     <button
     type="button"
     onClick={() => this.handleDelete(contact._id)}
     >
     Delete</button>

     <button
     type="button"
     onClick={(e) => this.handleUpdate(e, contact._id)}
     >
     Update</button>
     <form>
     <input
     type="text"
     placeholder="Name"
     onChange={e =>
     this.setState({ name: e.target.value })}
     />
     </form>
     <br />
     <form>
     <input
     type="text"
     placeholder="email"
     onChange={e =>
     this.setState({ email: e.target.value })}
     />
     </form>
     <br />
     <form>
     <input
     type="text"
     placeholder="phone"
     onChange={e =>
     this.setState({ phone: e.target.value })}
     />
    
     </form>
     </div>
 ) ) }
 
   <br />
  <Link to="/">Home</Link>
  <br />
   <Link to="/form">Create New</Link>
 </div>
 
);
}}

export default Contacts;