import React from "react";
import PropTypes from "prop-types";
import loginPhones from "../../images/login-screen-phones.png";
import instagramNameLogo from "../../images/instagram-name-logo.jpg";
import storeIcons from "../../images/ios-google-store-icons.png";
import fbLogo from "../../images/fb-logo.png";
import styled from "styled-components";

const App = styled.div`
  width: 100%;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 750px;
  width: 100%;
  padding: 15vh 0 0;
  margin: 0 auto;

  @media (max-width: 800px) {
    justify-content: center;
    padding-top: 3vh;
  }
`;

const PhonesImg = styled.div`
  width: 51%;

  @media (max-width: 800px) {
    display: none;
    width: 100%;
  }
`;

const FormContainer = styled.div`
  width: 46.5%;

  @media (max-width: 800px) {
    max-width: 349px;
    width: 100%;
  }
`;

const FormTop = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 352px;
  background: white;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
`;

const LoginLogo = styled.div`
  width: 54%;
  margin: 21px auto 0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 6px 11% 0;

  .login__username {
    height: 33px;
    margin-bottom: 7px;
    padding-left: 9px;
    font-size: 1.2rem;
    border: 1px solid #edecec;
    background: #f9f9f9;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
  }

  .login__full-name {
    height: 33px;
    margin-bottom: 7px;
    padding-left: 9px;
    font-size: 1.2rem;
    border: 1px solid #edecec;
    background: #f9f9f9;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
  }

  .login__password {
    height: 33px;
    margin-bottom: 15px;
    padding-left: 9px;
    font-size: 1.2rem;
    border-radius: 3px;
    border: 1px solid #edecec;
    background: #f9f9f9;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
  }

  .login__button {
    height: 32px;
    background: #3f95ef;
    color: white;
    opacity: 0.35;
    font-size: 1.4rem;
    font-weight: 700;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -webkit-appearance: none;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    .login__button--active {
      opacity: 1;
    }
`;

const OrBlock = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 76%;
  height: 14px;
  margin: 8px 12%;
  border-bottom: 1px solid #edecec;

  p {
    display: block;
    position: absolute;
    font-size: 1.4rem;
    font-weight: 700;
    width: 50px;
    margin: 8px auto;
    background: white;
    color: #8e8e8e;
    text-align: center;
  }
`;

const FBLogin = styled.div`
  display: flex;
  margin: 25px 26% 0;

  div {
    width: 10%;
    cursor: pointer;
  }

  p {
    margin: 1px 0 0 6px;
    font-size: 1.4rem;
    font-weight: 500;
    color: #31487a;
    cursor: pointer;
  }
`;

const FormMiddle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  margin-top: 10px;
  padding-top: 28px;
  width: 100%;
  height: 40px;
  background: white;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;

  a {
    margin-left: 3px;
    text-decoration: none;
    color: #3f95ef;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FormBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;

  p {
    margin-top: 22px;
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
  }

  div {
    width: 81%;
    margin: 19px auto 0;
    cursor: pointer;
  }
`;

const Login = props => {
  return (
    <App>
      <LoginContainer>
        <PhonesImg>
          <img src={loginPhones} alt="Phones running Instagram" />
        </PhonesImg>
        <FormContainer>
          <FormTop>
            <LoginLogo>
              <img src={instagramNameLogo} alt="Instagram name logo" />
            </LoginLogo>
            <LoginForm>
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
            </LoginForm>
            <OrBlock>
              <p>OR</p>
            </OrBlock>
            <FBLogin>
              <div>
                <img src={fbLogo} alt="Facebook logo" />
              </div>
              <p>Log in with Facebook</p>
            </FBLogin>
          </FormTop>
          <FormMiddle>
            <p>Don't have an account?</p>
            <a href="index.html">Sign up</a>
          </FormMiddle>
          <FormBottom>
            <p>Get the app.</p>
            <div>
              <img src={storeIcons} alt="iOS and GooglePlay store links" />
            </div>
          </FormBottom>
        </FormContainer>
      </LoginContainer>
    </App>
  );
};

Login.defaultProps = {
  password: null,
  username: null
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
