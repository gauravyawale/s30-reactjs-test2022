import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Info.css";
function Info() {
  const [userList, setUserList] = useState([]);
  const url = "https://randomuser.me/api"

  const getUserApi = async (url) => {
    const result = await axios.get(url);
    setUserList(result.data.results);
    localStorage.setItem("UserList", JSON.stringify(result.data.results));
  };

  const handleRefresh = () => {
    getUserApi(url);
  }

  useEffect(() => {
    getUserApi(url);
  }, []);

  const listOfUser = (userList) => {
    const userInfo = userList.map((user) => {
      return (
        <div key={user.email} className="userBox">
          <h5>
            User Name:{" "}
            <span className="userInfo">{`${user.name.title}. ${user.name.first} ${user.name.last}`}</span>
          </h5>
          <h5>
            User Email: <span className="userInfo">{user.email}</span>
          </h5>
        </div>
      );
    });
    return userInfo;
  };
  return (
    <>
      <div>{listOfUser(userList)}</div>
      <button className="refresh-button" onClick={handleRefresh}>Refresh</button>
    </>
  );
}

export default Info;
