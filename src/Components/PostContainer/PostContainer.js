import React from "react";
import Post from "./Post";
import CommentsSection from "../CommentSection/CommentsSection";
import PropTypes from "prop-types";
import "./_Post.scss";

const PostContainer = props => {
  return (
    <div className="post__container">
      {props.dummyDataOnProps.map((post, index) => (
        <div className="post" name={index} key={"fragment" + index}>
          <Post
            index={index}
            username={post.username}
            thumbnailUrl={post.thumbnailUrl}
            imageUrl={post.imageUrl}
            key={"post" + index}
          />
          <CommentsSection
            index={index}
            selectCommentInput={props.selectCommentInput}
            addNewComment={event => props.addNewComment(event, index)}
            userLiked={props.userLiked}
            heartClick={props.heartClick}
            likes={props.likes[index]}
            comments={props.comments[index]}
            timestamp={post.timestamp}
            key={"comments" + index}
            postComment={props.postComment}
            inputText={props.inputText}
          />
        </div>
      ))}
    </div>
  );
};

PostContainer.propTypes = {
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  timestamp: PropTypes.string,
  likes: PropTypes.array
};

export default PostContainer;
