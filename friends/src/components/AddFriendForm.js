import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriendForm = ({ friends, setFriends }) => {
  const [friend, setFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const add = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", friend)
      .then(res => {
        console.log("added friend", res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  };

  const handleChange = e => {
    return setFriend({
      ...friend,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="friendFormWrapper">
      <form onSubmit={add} className="friendForm">
        <label>
          Name: <input type="text" name="name" onChange={handleChange} />
        </label>
        <label>
          Age: <input type="number" name="age" onChange={handleChange} />
        </label>
        <label>
          Email: <input type="email" name="email" onChange={handleChange} />
        </label>

        <button className="addFriendBtn">Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriendForm;
