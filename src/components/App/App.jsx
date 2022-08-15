import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import "./App.css";

export default function App() {

  return (

    <div className="App">
      <h2>Phonebook </h2>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
  
}

