import React from 'react';
import './addupdateform.css'
class AddAndUpdateForm extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      }
  }
  componentDidUpdate(prevProps){
    if(prevProps.formParams.first_name !== this.props.formParams.first_name){
      this.setState({
        first_name: this.props.formParams.first_name,
        last_name: this.props.formParams.last_name,
        phone: this.props.formParams.phone,
        email: this.props.formParams.email
      })
    }
  }
  onAddSubmit = (e) => {
    const {first_name, last_name, email,phone} = this.state
    e.preventDefault();
    let newContact = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      avatar_url: `https://robohash.org/${first_name}?size=100x100&set=set1`,
      phone: phone
    }
    this.props.handleAddContact(newContact);
    this.setState({
      first_name: "",
      last_name: "",
      email: "",
      phone: ""
    });
     
  }
  handleAddChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
   
  }
  handleEditChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  handleUpdateSubmit = (e) => {
    const {first_name, last_name, email,phone} = this.state;
    e.preventDefault();
    let newContact = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      avatar_url: first_name,
      phone: phone
    }
    this.props.handleUpdateSave(newContact);
  }
  render(){
    return(
     <div>
        {this.props.isAdd && 
         <div>
           <h1>Add Contact</h1>
          <form onSubmit={this.onAddSubmit} className="input-form">
            <input type="text" value={this.state.first_name} name="first_name" required onChange={this.handleAddChange} placeholder="First Name" /><br/>
            <input type="text" name="last_name" required onChange={this.handleAddChange} placeholder="Last Name" value={this.state.last_name}/><br/>
            <input type="email" name="email" required onChange={this.handleAddChange} placeholder="Email" value={this.state.email}/><br/>
            <input type="text" name="phone" required onChange={this.handleAddChange} placeholder="Phone Number" value={this.state.phone}/><br/>
            <button type="submit">Add Todos</button>
          </form>
          </div> 
        }
        {this.props.isEdit && 
          <div>
            <h1>Update Contact</h1>
          <form onSubmit={this.handleUpdateSubmit} className="input-form">
            <input type="text" name="first_name" placeholder="First Name"
            onChange={this.handleEditChange} required
            value={this.state.first_name}/><br/>

            <input type="text" name="last_name" placeholder="Last Name"
            onChange={this.handleEditChange} required
            value={this.state.last_name}/><br/>

            <input type="email" name="email" placeholder="Email"
            onChange={this.handleEditChange} required
            value={this.state.email}/><br/>

            <input type="text" name="phone" placeholder="Phone Number"
            onChange={this.handleEditChange} required
            value={this.state.phone}/><br/>

            <button type="submit">Update Todos</button>
          </form>
          </div>
        }
     </div>
    );
  }
}

export default AddAndUpdateForm;