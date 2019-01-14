import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./_Post.scss";

const Post = props => {
  return (
    <Fragment>
      <div className="post__icon">
        <div className="thumbnail">
          <img src={props.thumbnailUrl} alt="" />
        </div>
        <a href="index.html">{props.username}</a>
      </div>
      <img src={props.imageUrl} alt="" />
    </Fragment>
  );
};

Post.prototypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Post;
