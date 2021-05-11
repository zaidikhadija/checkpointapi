import React from "react";

import User from "./User";
export default function UserList({ users, loading }) {
  // falsy : 0 undefined null  false ""  nan

  return (
    <div className="App">
      {loading ? (
        <p>...loading </p>
      ) : (
        users.map((user) => <User key={user.id} user={user} />)
      )}
      ;
    </div>
  );
}
