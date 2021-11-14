import "./App.css";
import Profile from "./profile/Profile.js";

function App() {
  const handleName = (name) => alert(name);
  return (
    <div>
      <Profile
        fullName="Aymen Henchir"
        bio="developing, and implementing applications and solutions using a range of technologies and programming languages."
        profession="Junior Full Stack JS Developer"
        handleName={handleName(`My name is : ` + Profile.fullName)}
      >
        <img src="/photo.jpg" alt="aymen henchir" />
      </Profile>
    </div>
  );
}

export default App;
