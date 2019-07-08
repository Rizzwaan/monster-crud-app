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
      searchChange: ''
    }
  }
  componentDidMount(){
    this.setState({contactList: contact});
  }
  render() { 
    return ( 
      <div>
        <h1>Awesome Contact App</h1>
         <input type="text" onChange={this.handleChange}/>
        <ContactList contact={this.state.contactList}/>
       
         
      </div>
     );
  }
}
 
export default App;
