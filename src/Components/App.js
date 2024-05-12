import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  let [Mode, SetMode] = useState("light");
  // const HashMap       = new Map(); Later we will replace list in state with hash map
  let [contactList, SetContactList] = useState([]);

  function handleContactList(Name,Phone,Email){
    const ID = uuidv4()
    let NewContactList = contactList.concat([{id:ID, name:Name, email:Email, phoneno:Phone}])
    SetContactList(NewContactList);
  };

  function deleteContact(ID){
    const NewContactList = contactList.filter((contact)=>{
      return contact.id !== ID
    });
    SetContactList(NewContactList);
  };

  
  return (
    <div>
      <Header/>
      <AddContact  handleContactList={handleContactList}/>
      <ContactList contacts={contactList} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;
