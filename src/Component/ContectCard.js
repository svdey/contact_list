import React from "react";
import profile from "../assets/contect2.png";
import { FcEmptyTrash } from "react-icons/fc";

const ContectCard = (props) => {
  // const { name, email } = props.contact;
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <img className="navbar-brand" src={profile} alt="" />
        </div>
        <div className="col">
          <div className="row">
            <p className="fw-bold">{props.contact.name}</p>
          </div>
          <div className="row">
            <div className="col">
              <p className="fst-italic">{props.contact.email}</p>
            </div>
            <div className="col-2">
              <a
                href="/#"
                className="float-end"
                onClick={() => props.getContact(props.contact)}
              >
                <FcEmptyTrash />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContectCard;
