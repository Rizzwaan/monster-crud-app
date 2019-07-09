import React from 'react';

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
    e.preventDefault();
    let newContact = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      avatar_url: this.state.first_name,
      phone: this.state.phone
    }
    this.props.handleAddContact(newContact);
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
    e.preventDefault();
    let newContact = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      avatar_url: this.state.first_name,
      phone: this.state.phone
    }
    this.props.handleUpdateSave(newContact);
  }
  render(){
    return(
     <div>
        {this.props.isAdd && 
          <form onSubmit={this.onAddSubmit}>
            <input type="text" name="first_name" required onChange={this.handleAddChange} placeholder="First Name"/><br/>
            <input type="text" name="last_name" required onChange={this.handleAddChange} placeholder="Last Name"/><br/>
            <input type="email" name="email" required onChange={this.handleAddChange} placeholder="Email"/><br/>
            <input type="text" name="phone" required onChange={this.handleAddChange} placeholder="Phone Number"/><br/>
            <button type="submit">Add Todos</button>
          </form>
        }
        {this.props.isEdit && 
          <form onSubmit={this.handleUpdateSubmit}>
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
        }
     </div>
    );
  }
}

export default AddAndUpdateForm;