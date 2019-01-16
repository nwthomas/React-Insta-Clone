import React, { Component } from "react";
import { Login } from "../LoginPage";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";
import Reset from "../style/Reset";
import Global from "../style/GlobalStyles";

const GlobalStyle = createGlobalStyle`
  ${Reset}
  ${Global}
`;

const Authenticate = App => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn: false,
        username: "",
        password: "",
        fullName: ""
      };
    }

    componentDidMount() {
      const userExists = localStorage.getItem("username");
      if (userExists) {
        this.setState({
          loggedIn: true
        });
      } else {
        return null;
      }
    }

    appLogin = event => {
      localStorage.setItem("username", this.state.username);
      localStorage.setItem("password", this.state.password);
      localStorage.setItem("fullName", this.state.fullName);
    };

    loginBtnChange = () => {
      const loginButton = document.querySelector(".login__button");
      this.state.username
        ? loginButton.classList.add("login__button--active")
        : loginButton.classList.remove("login__button--active");
    };

    onChange = event => {
      if (event.target.name === "login-username") {
        this.setState(
          {
            username: event.target.value
          },
          () => this.loginBtnChange()
        );
      } else if (event.target.name === "login-password") {
        this.setState({
          password: event.target.value
        });
      } else if (event.target.name === "login-fullname") {
        this.setState({
          fullName: event.target.value
        });
      }
    };

    render() {
      return this.state.loggedIn ? (
        <App />
      ) : (
        <>
          <GlobalStyle />
          <Login
            fullName={this.fullName}
            appLogin={this.appLogin}
            username={this.state.username}
            password={this.state.password}
            onChange={this.onChange}
          />
        </>
      );
    }
  };
};

Authenticate.defaultProps = {
  fullName: null,
  username: null,
  password: null
};

Authenticate.propTypes = {
  fullName: PropTypes.string,
  appLogin: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func
};

export default Authenticate;
