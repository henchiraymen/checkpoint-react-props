import React from "react";

const Profile = (props) => {
  return (
    <div className="App">
      <h2> {props.children}</h2>
      <h2> fullName : {props.fullName} </h2>
      <h2> Bio : {props.bio} </h2>
      <h2> Profession : {props.profession} </h2>
      <button onClick={() => props.handleName}>ClickMe</button>
    </div>
  );
};

export default Profile;
