import React, { Component } from 'react';
import './card.css';

class ContactList  extends Component {
  render() { 
    return ( 
      <div>
        {this.props.contact.map((v, i) => {
          return (
            <div key={i} className="contact-item">
              <img src={v.avatar_url} alt="avatar" className="avatar"/>
              <p>{v.first_name} {v.last_name}</p>
              <p>{v.email}</p>
              <p>{v.phone}</p>
              <button onClick={() => this.props.handleUpdate(v)}>Update</button>
              <button onClick={() => this.props.handleDelete(v)}>Delete</button>
            </div>
          )
        })}
      </div>
     );
  }
}
 
export default ContactList;