import React from "react";
import { Link } from "react-router-dom";

import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";

import "./Description.css";

const Description = (props) => {
  const UserFound = props.users.find(
    (users) => users.id == props.match.params.UserID
  );

  return (
    <div className="Description">
      <img
        width="500px"
        height="250px"
        src="https://staugustinesprimary.org/wp-content/uploads/2020/05/hello-1-1080x675.jpg"
        alt="image"
      />
      <p>This is my phone number:</p> "{UserFound && UserFound.phone}"
      <PhoneInTalkIcon />
      <p>This is my adress e-mail:</p> "{UserFound && UserFound.email}"
      <EmailIcon />
      <p>This is my website:</p>"{UserFound && UserFound.website}"{" "}
      <ul>
        <p> This is my Adress with more détails:</p>
        <li>{UserFound && UserFound.address.city}</li>
        <li>{UserFound && UserFound.address.street}</li>
      </ul>
      <ul>
        <p> This is my company with more détails:</p>
        <li>{UserFound && UserFound.company.catchPhrase}</li>
        <li>{UserFound && UserFound.company.bs}</li>
      </ul>
      <h2>That's all about me ! </h2>
      <Link to="/">
        {" "}
        <button>Return to home page</button>{" "}
      </Link>
    </div>
  );
};

export default Description;