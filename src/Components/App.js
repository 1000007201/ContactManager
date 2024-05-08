import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'
import { useState } from 'react';

function App() {
  let [Mode, SetMode] = useState("light");
  let [contactList, SetContactList] = useState([]);

  function handleContactList(Name,Phone,Email){
    let NewContactList = contactList.concat([{name:Name, email:Email, phoneno:Phone}])
    SetContactList(NewContactList);
  };

  return (
    <div>
      <Header/>
      <AddContact  handleContactList={handleContactList}/>
      <ContactList contacts={contactList}/>
    </div>
  );
}

export default App;
