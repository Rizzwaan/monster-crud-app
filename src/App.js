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
    const { contactList } = this.state
    let newContacts =  contactList.filter(contact => contact.id !== v.id);
    this.setState({contactList: newContacts});
  }
  handleAddContact = (newContact) => {
    const { contactList } = this.state
    newContact.div =  contactList[ contactList.length - 1].id + 1;
    let contacts =  contactList.slice();
    contacts.push(newContact);
    this.setState({contactList: contacts});

  }
  handleUpdate = (targetContact) => {
    const { contactList } = this.state;
    this.setState({
      isAdd: false,
      isEdit: true,
    })
    const index =  contactList.indexOf(targetContact);
    this.setState({
      formParams: targetContact,
      index: index,
    })
  }
  handleUpdateSave = (newContact) => {
    const { contactList, index } = this.state;
    let allContact =  contactList.slice();
    newContact.id = allContact[index].id;
    newContact.avatar_url = allContact[index].avatar_url;
    allContact[index] = newContact;
    this.setState({ 
      contactList: allContact,
      isAdd: true,
      isEdit: false
    });

  }
  render() { 
    const { contactList,searchChange, isAdd, isEdit,formParams } = this.state;
    let fiteredMonster =  contactList.filter(contact => {
      return contact.first_name.toLowerCase().includes( searchChange.toLowerCase());
    })
    return ( 
      <div className="main-content">
      <div className="monster-list">
        <h1>Awesome Contact App</h1>
         <input type="text" onChange={this.handleChange} placeholder="Search Contact "/>
         <ContactList 
           contact={fiteredMonster} 
           handleDelete={this.handleDelete}
           handleUpdate={this.handleUpdate}
           />
      </div>
      <div className="add-update-form">
       <AddAndUpdateForm 
          isEdit={isEdit} 
          isAdd={isAdd}
          handleAddContact={this.handleAddContact}
          formParams={formParams}
          handleUpdateSave={this.handleUpdateSave}
          />
      </div>
      </div>
     );
  }
}
 
export default App;
