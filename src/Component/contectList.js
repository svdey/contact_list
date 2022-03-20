import React from 'react'
import ContectCard from "./ContectCard";
import { Link } from "react-router-dom";

const ContectList = (props) => {
  const sendIndex = (contact) => {
    props.getIndex(props.contect.indexOf(contact));
  };
  const list = props.contect.map((contact, index) => {
    return <ContectCard contact={contact} key={index} getContact={sendIndex} />;
  });
  return (
    <>
      <div className="pt-3">
        <h1>
          Contact List
          <Link to="/add">
            <button className="btn btn-primary float-end">Add Contect</button>
          </Link>
        </h1>
        <br />
        {list}
      </div>
    </>
  );
};

export default ContectList