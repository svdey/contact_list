import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Component/Header";
import ContectList from "./Component/contectList";
import AddContect from "./Component/addContect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts"; //unique key for local storage
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (Contact) => {
    setContacts([...contacts, Contact]);
  };
  const removeContact = (i) => {
    // console.log(i);
    const newContact = contacts.filter((contact) => {
      return contacts.indexOf(contact) !== i;
    });
    setContacts(newContact);
  };
  // get Items from local storage
  useEffect(() => {
    const allItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (allItems) setContacts(allItems);
  }, []);
  //add irems in local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContectList contect={contacts} getIndex={removeContact} />
            }
          />
          <Route
            path="/add"
            element={<AddContect addContactHandler={addContactHandler} />}
          />
        </Routes>

        {/* <AddContect addContactHandler={addContactHandler} />
        <ContectList contect={contacts} getIndex={removeContact} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
