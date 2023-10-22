import React, { useState } from "react";
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    if (birthdate) {
      const birthDate = new Date(birthdate);
      const currentDate = new Date();

      const years = currentDate.getFullYear() - birthDate.getFullYear();

      setAge(`Your are ${years} years old`);
    } else {
      setAge('Please enter a valid date of birth.');
    }
  };

  return (
    <div className="App">
      <div className="Main-box">
        <h1 className="head">Age Calculator</h1>
        <h4 className="head">Enter your date of birth</h4>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button type="submit" id="date" className="head" onClick={calculateAge}>
          Calculate Age
        </button>
        <div className="result">
          <h1 className="head">{age}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
