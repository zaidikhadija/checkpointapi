import React from "react";
import { Link } from "react-router-dom";
import { CardDeck, Card } from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import EmailIcon from "@material-ui/icons/Email";
import DetailsIcon from "@material-ui/icons/Details";

const Users = ({ user }) => {
  return (
    <div>
      <CardDeck>
        <Card>
          <Card.Title>
            <h1>User Profile Card</h1>
            <h3>{user.name}</h3>
          </Card.Title>

          <Card.Body>
            <Card.Img
              width="50%"
              src="https://img.favpng.com/24/13/17/computer-icons-login-user-account-icon-design-png-favpng-ikpUvnkWxCmX7SGngcCJfDCph.jpg"
            />
            <Card.Text>
              <h4>"{user.username}"</h4>
            </Card.Text>

            <Link to={`/Description/${user.id}`}>
              <FacebookIcon /> <PhoneInTalkIcon /> <EmailIcon />
              <button className="home-Butn"> More details </button>{" "}
              <DetailsIcon />
            </Link>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};
export default Users;
