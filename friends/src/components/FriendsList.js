import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriendForm from "./AddFriendForm";

const FriendsList = props => {
  const [friends, setFriends] = useState([
    {
      id: "",
      name: "",
      age: "",
      email: ""
    }
  ]);

  const getData = () => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        console.log(res.data);
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getData();
  }, [friends.length]);

  return (
    <div className="friendWrapper">
      <AddFriendForm friends={friends} setFriends={setFriends} />
      <hr />
      <h1>My Friends</h1>
      <br />
      <div>
        {friends.map(friend => {
          return <h4>{friend.name}</h4>;
        })}
      </div>
    </div>
  );
};

export default FriendsList;
