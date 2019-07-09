import React from 'react'; 
import './App.css';
import contact from './data';
import ContactList from './container/CardList/ContactList'
import AddAndUpdateForm from './container/AddUpdateForm/AddAndUpdateForm'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      contactList: [],
      searchChange: '',
      isEdit: false,
      isAdd: true,
      index: '',
      formParams: ''
    }
  }
  componentDidMount(){
    this.setState({contactList: contact});
  }
  handleChange = (e) => {
   this.setState({searchChange: e.target.value})
  }
  handleDelete = (v) => {
    let newContacts = this.state.contactList.filter(contact => contact.id !== v.id);
    this.setState({contactList: newContacts});
  }
  handleAddContact = (newContact) => {
    newContact.div = this.state.contactList[this.state.contactList.length - 1].id + 1;
    let contacts = this.state.contactList.slice();
    contacts.push(newContact);
    this.setState({contactList: contacts});

  }
  handleUpdate = (targetContact) => {
    this.setState({
      isAdd: false,
      isEdit: true,
    })
    const index = this.state.contactList.indexOf(targetContact);
    this.setState({
      formParams: targetContact,
      index: index,
    })
  }
  handleUpdateSave = (newContact) => {
    let allContact = this.state.contactList.slice();
    newContact.id = allContact[this.state.index].id;
    newContact.avatar_url = allContact[this.state.index].avatar_url;
    allContact[this.state.index] = newContact;
    this.setState({ 
      contactList: allContact,
      isAdd: true,
      isEdit: false
    });

  }
  render() { 
    let fiteredMonster = this.state.contactList.filter(contact => {
      return contact.first_name.toLowerCase().includes(this.state.searchChange.toLowerCase());
    })
    return ( 
      <div className="main-content">
      <div className="monster-list">
        <h1>Awesome Contact App</h1>
         <input type="text" onChange={this.handleChange}/>
         <ContactList 
           contact={fiteredMonster} 
           handleDelete={this.handleDelete}
           handleUpdate={this.handleUpdate}
           />
      </div>
      <div className="add-update-form">
       <AddAndUpdateForm 
          isEdit={this.state.isEdit} 
          isAdd={this.state.isAdd}
          handleAddContact={this.handleAddContact}
          formParams={this.state.formParams}
          handleUpdateSave={this.handleUpdateSave}
          />
      </div>
      </div>
     );
  }
}
 
export default App;
