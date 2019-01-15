import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const AsideContainer = styled.div`
  margin: 137px 3.2% 0 0;
  width: 100%;
  max-width: 295px;

  @media (max-width: 1000px) {
    display: none;
  }

  ${props =>
    !props.isTop &&
    css`
      position: fixed;
      max-width: 1000px;
      display: flex;
      justify-content: flex-end;
      margin: 77px 0;
    `}
`;

const Aside = styled.div`
  max-width: 295px;
  width: 100%;
  height: 600px;
  margin-right: 3%;
`;

const PhotoUsername = styled.div`
  display: flex;
  margin-left: 2.5%;
  width: 100%;
`;

const UserPhoto = styled.div`
  width: 17%;
  cursor: pointer;

  img {
    border-radius: 50%;
  }
`;

const UsernameFullName = styled.div`
  padding: 9px 5%;
  display: flex;
  flex-direction: column;
  width: 60%;
`;

const AsideUsername = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.45rem;
  font-weight: 500;
`;

const UserFullName = styled.p`
  display: inline-block;
  margin-top: 5px;
  font-size: 1.2rem;
  color: #979797;
  font-weight: 500;
`;

const Stories = styled.div`
  width: 100%;
  height: 222px;
  margin-top: 15px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background: white;
`;

const StoriesTop = styled.div`
  margin: 15px 5.8% 0;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;

  p {
    display: inline-block;
  }

  p:first-child {
    color: #8e8e8e;
    font-weight: 700;
    font-size: 1.4rem;
  }
`;

const Suggestions = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 13px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background: white;

  div {
    margin: 15px 5.8% 0;
    font-size: 1.3rem;
    display: flex;
    justify-content: space-between;

    p {
      display: inline-block;
    }

    p:first-child {
      color: #8e8e8e;
      font-weight: 700;
      font-size: 1.4rem;
    }
  }
`;

const LinksCopyright = styled.div`
  margin-top: 12px;
  font-size: 1.17rem;
  color: #c2c2c2;
  line-height: 1.5;
  display: flex;
  flex-direction: column;

  .links {
    span {
      font-size: 0.5rem;
      display: inline-block;
      padding: 0 2px;
    }

    a {
      text-decoration: none;
      display: inline-block;
      line-height: 1.5;
      color: #c2c2c2;
    }
  }
  p {
    margin-top: 20px;
  }
`;

const AsideSectionContainer = props => {
  return (
    <AsideContainer isTop={props.isTop}>
      <Aside>
        <PhotoUsername>
          <UserPhoto>
            <img src={props.userPhoto} alt="" />
          </UserPhoto>
          <UsernameFullName>
            <AsideUsername href="index.html">{props.username}</AsideUsername>
            <UserFullName>{props.fullName}</UserFullName>
          </UsernameFullName>
        </PhotoUsername>
        <Stories>
          <StoriesTop>
            <p>Stories</p>
            <p>Watch All</p>
          </StoriesTop>
        </Stories>
        <Suggestions>
          <div>
            <p>Suggestions For You</p>
            <p>See All</p>
          </div>
        </Suggestions>
        <LinksCopyright>
          <div className="links">
            <a href="index.html">About Us </a>
            <span>•</span>
            <a href="index.html">Support</a>
            <span>•</span>
            <a href="index.html">Press</a>
            <span>•</span>
            <a href="index.html">API</a>
            <span>•</span>
            <a href="index.html">Jobs</a>
            <span>•</span>
            <a href="index.html">Privacy</a>
            <span>•</span>
            <a href="index.html">Terms</a>
            <span>•</span>
            <a href="index.html">Directory</a>
            <span>•</span>
            <a href="index.html">Profiles</a>
            <span>•</span>
            <a href="index.html">Hashtags</a>
            <span>•</span>
            <a href="index.html">Language</a>
          </div>
          <p>© 2018 Instagram</p>
        </LinksCopyright>
      </Aside>
    </AsideContainer>
  );
};

AsideSectionContainer.propTypes = {
  isTop: PropTypes.bool,
  userPhoto: PropTypes.string,
  username: PropTypes.string,
  fullName: PropTypes.string
};

export default AsideSectionContainer;
