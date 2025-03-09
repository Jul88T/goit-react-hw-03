import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox.jsx";
import ContactList from "./components/ContactList.jsx";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <SearchBox searchQuery={searchQuery} onSearch={handleSearch} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
