import React from "react";
import PropTypes from "prop-types";
import "./_CommentsSection.scss";

const Comment = props => {
  return (
    <div className="user__comment">
      <a href="index.html">{props.username}</a>
      <p>{props.text}</p>
    </div>
  );
};

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default Comment;
