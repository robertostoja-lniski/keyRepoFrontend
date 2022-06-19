// import { useState } from "react";
// import "./app.css";
import RemoveKeyForm from "./components/RemoveKeyForm.jsx";

function App() {
  // here we create an array state to store the contact form data
  // const [contacts, updateContacts] = useState([]);

  // const addContact = (contact) => {
  //   updateContacts([...contacts, contact]);
  // };

  return (
    <div className="App">
      <RemoveKeyForm removeKeyForm />
    </div>
  );
}

export default App;