import React from "react";
import Post from "./Post";
import { CommentsSection } from "../CommentSection";
import PropTypes from "prop-types";
import styled from "styled-components";

const PostContainerClass = styled.div`
  max-width: 615px;
  width: 100%;
  margin: 86px 0 50px 3.2%;
  z-index: 2;

  @media (max-width: 1000px) {
    margin: 80px 3.2% 50px;
  }
`;

const PostContainer = props => {
  return (
    <PostContainerClass>
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
    </PostContainerClass>
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
