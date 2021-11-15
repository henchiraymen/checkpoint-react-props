import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div className="App">
      <h2> {props.children}</h2>
      <h2> fullName : {props.fullName} </h2>
      <h2> Bio : {props.bio} </h2>
      <h2> Profession : {props.profession} </h2>
      <button
        style={{
          backgroundColor: "orange",
          height: "30px",
          border: "black",
          borderRadius: "10%",
        }}
        onClick={() => props.handleName(props.fullName)}
      >
        ClickMe
      </button>
    </div>
  );
};
//Default value of props
Profile.defaultProps = {
  fullName: "unknown",
  bio: "unknown",
  profession: "unknown",
};
//check Props Type.
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;
