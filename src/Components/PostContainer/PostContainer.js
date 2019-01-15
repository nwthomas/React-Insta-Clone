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
  dummyDataOnProps: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  ),
  selectCommentInput: PropTypes.func.isRequired,
  addNewComment: PropTypes.func.isRequired,
  userLiked: PropTypes.arrayOf(PropTypes.bool).isRequired,
  heartClicked: PropTypes.func,
  likes: PropTypes.arrayOf(PropTypes.number).isRequired,
  comments: PropTypes.array,
  postComment: PropTypes.func.isRequired,
  inputText: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default PostContainer;
