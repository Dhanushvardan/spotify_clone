import React, {useState, useRef} from "react";
import "./login.scss";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const 

  const setSignUp = () => {
    //Code for switch between login/signup
    setIsLogin(isLogin);
  };

  return( 
    <div className="login">
      <div className="login__container">
        <div className="spotify__logo">
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="logo" />
        </div>
        <div className="selector__container">
          <div className={(isLogin) ? "login__item highlight" : "login__item"} onClick={setSignUp}>SIGN IN</div>
          <div className={!(isLogin) ? "login__item highlight" : "login__item"}>SIGN UP</div>
        </div>
        <input type="text" className="input__form" placeholder="Username" />
        <input type="text" className="input__form" placeholder="Password" />
        <button className="signin__button">SIGN IN</button>
      </div>
    </div>
  );
}
