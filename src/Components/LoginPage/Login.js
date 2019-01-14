import React from "react";
import PropTypes from "prop-types";
import "../style/App.scss";
import "./_LoginPage.scss";
import loginPhones from "../../images/login-screen-phones.png";
import instagramNameLogo from "../../images/instagram-name-logo.jpg";
import storeIcons from "../../images/ios-google-store-icons.png";
import fbLogo from "../../images/fb-logo.png";

const Login = props => {
  return (
    <div className="App">
      <div className="login__container">
        <div className="phones__img">
          <img src={loginPhones} alt="Phones running Instagram" />
        </div>
        <div className="form__container">
          <div className="form__top">
            <div className="login__logo">
              <img src={instagramNameLogo} alt="Instagram name logo" />
            </div>
            <form className="login__form" onSubmit={props.appLogin}>
              <input
                onChange={props.onChange}
                value={props.username}
                maxLength="30"
                className="login__username"
                type="text"
                name="login-username"
                placeholder="Username"
              />
              <input
                onChange={props.onChange}
                value={props.fullName}
                maxLength="30"
                className="login__full-name"
                type="text"
                name="login-fullname"
                placeholder="Full name"
              />
              <input
                onChange={props.onChange}
                value={props.password}
                maxLength="30"
                className="login__password"
                type="text"
                name="login-password"
                placeholder="Fake password"
              />
              <input
                onClick={props.appLogin}
                className="login__button"
                type="submit"
                name="login-submit"
                value="Log In"
              />
            </form>
            <div className="or__block">
              <p>OR</p>
            </div>
            <div className="fb__login">
              <div className="fb__logo">
                <img src={fbLogo} alt="Facebook logo" />
              </div>
              <p>Log in with Facebook</p>
            </div>
          </div>
          <div className="form__middle">
            <p>Don't have an account?</p>
            <a href="index.html">Sign up</a>
          </div>
          <div className="form__bottom">
            <p>Get the app.</p>
            <div className="store__icons">
              <img src={storeIcons} alt="iOS and GooglePlay store links" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginPhones: PropTypes.string,
  instagramNameLogo: PropTypes.string,
  fbLogo: PropTypes.string,
  appLogin: PropTypes.func,
  updateLoginForm: PropTypes.func,
  password: PropTypes.string,
  username: PropTypes.string
};

export default Login;
