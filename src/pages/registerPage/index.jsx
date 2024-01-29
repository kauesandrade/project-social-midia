import "./style.css";

import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";

import metadata from "../../storage.metadata.json";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import InputSign from "../../components/inputSign";


const registerPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [spanErro1, setSpanErro1] = useState("");
  const [spanErro2, setSpanErro2] = useState("");
  const [spanErro3, setSpanErro3] = useState("");
  const [spanErro4, setSpanErro4] = useState("");
  const [spanErro5, setSpanErro5] = useState("");

  const [li1, setLi1] = useState();
  const [li2, setLi2] = useState();
  const [li3, setLi3] = useState();
  const [li4, setLi4] = useState();

  const [isDisableButton, setIsDisableButton] = useState(true);

  const erros = {
    erro1: "Email invalid.",
    erro2: "Another account is using the same email.",
    erro3: "Write your full name",
    erro4: "This username already exists",
    erro5: "This password isn't strong",
    erro6: "Passwords doesn't match"
  };

  useEffect(() => {
    email.length > 0 && fullName.length > 0 && username.length > 0 && password.length >= 8 && confirmPassword.length >= 8
      ? setIsDisableButton(false) : setIsDisableButton(true)
  }, [email, fullName, username, password, confirmPassword])

  useEffect(() => {
    var formatSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    password.length >= 8 ? setLi1(styles.liEnable) : setLi1()
    password.match(/[0-9]/g) != null ? setLi2(styles.liEnable) : setLi2()
    password.match(formatSpecial) != null ? setLi3(styles.liEnable) : setLi3()
    password.match(/[A-Z]/g) != null && password.match(/[a-z]/g) != null ? setLi4(styles.liEnable) : setLi4()
  }, [password])

  const verifiedEmail = () => {
    if (email.match(/[@]/) == null && email.match(/[.]/) == null) {
      console.log("aaaaa")
      setSpanErro1(erros.erro1)
      return false
    } else if (email) {
      setSpanErro1(erros.erro2)
      return false
    } else {
      setSpanErro1()
      return true
    }
  };

  const verifiedFullName = () => {

  };

  const verifiedUsername = () => {
    // if(username){
    //   setSpanErro3()
    //   return true
    // }else{
    //   setSpanErro3(erros.erro4)
    //   return false
    // }
  };

  const verifiedPassword = () => {
    if (li1 && li2 && li3 && li4) {
      setSpanErro4()
      return true
    } else {
      setSpanErro4(erros.erro5)
      return false
    }
  };

  const verifiedConfirmPassword = () => {
    if (password == confirmPassword) {
      setSpanErro5()
      return true
    } else {
      setSpanErro5(erros.erro6)
      return false
    }
  };

  const handleClickRegister = () => {

    verifiedEmail()
    verifiedFullName()
    verifiedUsername()
    verifiedPassword()
    verifiedConfirmPassword()

    if (verifiedEmail() && verifiedFullName() && verifiedUsername() && verifiedPassword() && verifiedConfirmPassword()) {
      const profile = {
        name: `${fullName}`,
        username: `${username}`,
        email: `${email}`,
        password: `${password}`,
      };

      axios.post("http://localhost:8080/profile", profile);
    }

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

          <InputSign
            buttonEye={false}
            type="email"
            name="email"
            placeholder="Email"
            setValue={setEmail}
            value={email}
            span={spanErro1}
          />

          <InputSign
            buttonEye={false}
            type="text"
            name="fullName"
            placeholder="Full name"
            setValue={setFullName}
            value={fullName}
            span={spanErro2}
          />

          <InputSign
            buttonEye={false}
            type="text"
            name="username"
            placeholder="Username"
            setValue={setUsername}
            value={username}
            span={spanErro3}
          />

          <InputSign
            buttonEye={true}
            type="password"
            name="password"
            placeholder="Password"
            setValue={setPassword}
            value={password}
            span={spanErro4}
          />

          <InputSign
            buttonEye={false}
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            setValue={setConfirmPassword}
            value={confirmPassword}
            span={spanErro5}
          />

          <div className="divListRequestsPassword">
            <ul>
              <li style={li1}>minimum 8 characters</li>
              <li style={li2}>Numbers</li>
            </ul>
            <ul>
              <li style={li3}>Special character</li>
              <li style={li4}>Uppercase and lowercase letters</li>
            </ul>
          </div>

          <div className="divButton">
            <button className="buttons" type='button' disabled={isDisableButton} onClick={() => handleClickRegister()}>
              Register
            </button>
          </div>
        </form>

        <div className="divDivision"></div>
        <div className="divGo">
          <p>Do have a account?</p>
          <button className="buttonGo buttons" onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>

      {/* DO THE DATE BORN */}
    </main>
  );
};

export default registerPage;

const styles = {
  liEnable: {
    color: "#f1f1f1"
  }
}