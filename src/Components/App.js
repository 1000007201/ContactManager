import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App() {
  const contacts =
    [
      {
        id:1,
        name: "Nishant",
        email: "nishan@gmail.com",
        phoneno: "9876543210"
      },
      {
        id:2,
        name: "Nishita",
        email: "nishita@gmail.com",
        phoneno: "9876543211"
      }
    ];
  return (
    <div>
    <Header/>
    <AddContact/>
    <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
