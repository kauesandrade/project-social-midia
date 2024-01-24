import "./style.css";

import metadata from "../../storage.metadata.json";
import axios from "axios";
import { useEffect, useState } from "react";

const registerPage = () => {
  const erros = {
    erro1: "Number or email invalid.",
    erro2: "Another account is using the same number or email.",
    erro3: "Write your full name",
    erro4: "This username already exists",
    erro5: "Passwords doesn't match",
  };

  const [numberEmail, setNumberEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [spanErro0, setSpanErro0] = useState("");
  const [spanErro1, setSpanErro1] = useState("");
  const [spanErro2, setSpanErro2] = useState("");
  const [spanErro3, setSpanErro3] = useState("");
  const [spanErro4, setSpanErro4] = useState("");

  const verifiedNumberEmail = () => { 
    
  };
  const verifiedFullName = () => {

   };
  const verifiedUsername = () => { 

  };
  const verifiedPassword = () => {

   };
  const verifiedConfirmPassword = () => { 

  };

  const handleClickRegister = () => {
    const profile = {
      name: `${fullName}`,
      username: `${username}`,
      email: "email",
      number: "number",
      password: `${password}`,
      verified: null,
      status: null,
    };

    axios.post("http://localhost:8080/profile", profile);

    
  };

  // useEffect(() =>{
  //     console.log(password)
  // }, [password])

  return (
    <main className="mainRegisterPage">
      <div className="divCard">
        <div className="divHeader">
          <h1>NeoSync</h1>
          <img src="src/assets/imagens/NeoSyncLogo.png" alt="" />
        </div>
        <form className="formInputRegister">
          <div className="divInput">
            <input
              type="text"
              name="text"
              className="input"
              placeholder="Mobile number or email"
              onChange={(e) => setNumberEmail(e.target.value)}
              value={numberEmail}
            />
            <div className="divInputSpan">
              <span>{spanErro0}</span>
            </div>
          </div>
          <div className="divInput">
            <input
              type="text"
              name="text"
              className="input"
              placeholder="Full name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <div className="divInputSpan">
              <span>{spanErro1}</span>
            </div>
          </div>
          <div className="divInput">
            <input
              type="text"
              name="text"
              className="input"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <div className="divInputSpan">
              <span>{spanErro2}</span>
            </div>
          </div>
          <div className="divInput">
            <input
              type="password"
              name="text"
              className="input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="divInputSpan">
              <span>{spanErro3}</span>
            </div>
          </div>
          <div className="divInput">
            <input
              type="password"
              name="text"
              className="input"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <div className="divInputSpan">
              <span>{spanErro4}</span>
            </div>
          </div>
          <div className="divButton">
            <button className="buttons" onClick={() => handleClickRegister()}>
              Register
            </button>
          </div>
        </form>

        <div className="divDivision"></div>
        <div className="divGo">
          <p>Don't have a account?</p>
          <button className="buttonGo buttons">Login</button>
        </div>
      </div>

      {/* DO THE DATE BORN */}
    </main>
  );
};

export default registerPage;
