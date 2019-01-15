import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const UserComment = styled.div`
  margin: 10px 0 0;
  width: 94.8%;
  display: flex;

  a {
    text-decoration: none;
    color: #252328;
    font-size: 1.4rem;
    font-weight: 700;
  }

  p {
    margin-left: 5px;
    width: 100%;
    font-size: 1.4rem;
  }
`;

const Comment = props => {
  return (
    <UserComment>
      <a href="index.html">{props.username}</a>
      <p>{props.text}</p>
    </UserComment>
  );
};

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default Comment;
