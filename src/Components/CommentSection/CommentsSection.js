import React from "react";
import commentIcon from "../../images/comment-icon.png";
import Comment from "./Comment";
import heartRed from "../../images/heart-icon--red.svg";
import heartWhite from "../../images/heart-icon--white.svg";
import ellipses from "../../images/ellipses.svg";
import bookmark from "../../images/bookmark.svg";
import PropTypes from "prop-types";
import "./_CommentsSection.scss";

const CommentsSection = props => {
  return (
    <div className="comments__section">
      <div className="comments__icons">
        <div className="heart__comment">
          <div className="comment__icon heart">
            <img
              name={props.index}
              onClick={props.heartClick}
              src={props.userLiked[props.index] ? heartRed : heartWhite}
              alt="Heart icon"
            />
          </div>
          <div className="comment__icon comment">
            <img
              onClick={props.selectCommentInput}
              name={props.index}
              src={commentIcon}
              alt="Comment icon"
            />
          </div>
        </div>
        <div className="bookmark">
          <img src={bookmark} alt="Bookmark icon" />
        </div>
      </div>
      <p className="likes">{props.likes} likes</p>
      <div className="comments__container">
        {props.comments.map((comment, index) => (
          <Comment
            username={comment.username}
            text={comment.text}
            key={"comment" + index}
          />
        ))}
      </div>
      <p className="post__timestamp">{props.timestamp}</p>
      <div className="comment__box">
        <form onSubmit={props.addNewComment}>
          <input
            onChange={props.postComment}
            id={props.index}
            value={props.inputText[props.index]}
            type="text"
            className="comment__input"
            name="inputText"
            placeholder="Add a comment..."
          />
          <div className="ellipses">
            <img src={ellipses} alt="Ellipses" />
          </div>
        </form>
      </div>
    </div>
  );
};

CommentsSection.propTypes = {
  index: PropTypes.number,
  heartClick: PropTypes.func,
  src: PropTypes.string,
  onClick: PropTypes.func,
  likes: PropTypes.number,
  username: PropTypes.string,
  text: PropTypes.string,
  timestamp: PropTypes.string,
  addNewCOmment: PropTypes.func,
  onChange: PropTypes.func
};

export default CommentsSection;
