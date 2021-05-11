import React from "react";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import UserList from "./UserList";
import Description from "./Description";
import { Route } from "react-router-dom";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        console.log(res.data);
      } catch (error) {
        console.log("err");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Route exact path="/" render={() => <UserList users={users} />} />
      <Route
        path="/Description/:UserID"
        render={(props) => <Description {...props} users={users} />}
      />
    </div>
  );
}

