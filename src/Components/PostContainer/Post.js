import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import "./_Post.scss";

const PostIcon = styled.div`
  margin-top: 50px;
  height: 45px;
  display: flex;
  padding: 18px 3% 0;
  border-top: 1px solid #e2e2e2;
  border-left: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  -moz-border-top-left-radius: 3px;
  -webkit-border-top-right-radius: 3px;
  -moz-border-top-left-radius: 3px;
  -webkit-border-top-right-radius: 3px;
  background: white;

  div {
    display: inline-block;
    width: 30px;

    img {
      border-radius: 50px;
      -moz-border-radius: 50px;
      -webkit-border-radius: 50px;
    }
  }

  a {
    margin: 8px 1.9%;
    text-decoration: none;
    color: #252328;
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

const Post = props => {
  return (
    <>
      <PostIcon>
        <div>
          <img src={props.thumbnailUrl} alt="" />
        </div>
        <a href="index.html">{props.username}</a>
      </PostIcon>
      <img src={props.imageUrl} alt="" />
    </>
  );
};

Post.defaultProps = {
  username: ""
};

Post.prototypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Post;
