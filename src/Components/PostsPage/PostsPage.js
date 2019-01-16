import React from "react";
import { PostContainer } from "../PostContainer";
import { AsideSectionContainer } from "../AsideSection";
import PropTypes from "prop-types";

const PostsPage = props => {
  return (
    <div className="body__content">
      <PostContainer
        addNewComment={props.addNewComment}
        dummyDataOnProps={props.dummyDataOnProps}
        selectCommentInput={props.selectCommentInput}
        likes={props.likes}
        comments={props.comments}
        userLiked={props.userLiked}
        heartClick={props.heartClick}
        postComment={props.postComment}
        inputText={props.inputText}
      />
      <AsideSectionContainer
        isTop={props.isTop}
        username={props.username}
        userPhoto={props.userPhoto}
        fullName={props.fullName}
      />
    </div>
  );
};

PostsPage.propTypes = {
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
  inputText: PropTypes.arrayOf(PropTypes.string).isRequired,
  isTop: PropTypes.bool,
  username: PropTypes.string,
  userPhoto: PropTypes.string,
  fullName: PropTypes.string
};

export default PostsPage;
