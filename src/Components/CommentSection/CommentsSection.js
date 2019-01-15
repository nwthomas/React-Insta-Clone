import React from "react";
import commentIcon from "../../images/comment-icon.png";
import Comment from "./Comment";
import heartRed from "../../images/heart-icon--red.svg";
import heartWhite from "../../images/heart-icon--white.svg";
import ellipses from "../../images/ellipses.svg";
import bookmark from "../../images/bookmark.svg";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentsSectionClass = styled.div`
  border-bottom: 1px solid #e2e2e2;
  border-left: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  -moz-border-bottom-left-radius: 3px;
  -webkit-border-bottom-right-radius: 3px;
  -moz-border-bottom-left-radius: 3px;
  -webkit-border-bottom-right-radius: 3px;
  background: white;
`;

const CommentIcon = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding: 6px 2.4% 0;

  .comment__icon {
    width: 27px;
    margin-right: 12px;
    cursor: pointer;

    svg {
      padding: 0 15% 0;
      g {
        transform: scale(0.05);
      }
    }
  }

  .comment {
    width: 29px;
  }
`;

const HeartComment = styled.div`
  display: flex;

  div {
    width: 27px;
    margin-right: 12px;
    cursor: pointer;
  }

  div:last-child {
    width: 29px;
  }
`;

const Bookmark = styled.div`
  width: 18px;
  margin-top: 2px;
`;

const Likes = styled.div`
  margin: 4px 0 0 2.6%;
  font-size: 1.4rem;
  font-weight: 700;
`;

const CommentsContainer = styled.div`
  margin: 13px 2.6% 10px;
`;

const TimeStamp = styled.div`
  display: block;
  padding-bottom: 12px;
  margin: 0 2.6% 10px;
  font-size: 1.1rem;
  color: #8e8e8e;
  border-bottom: 1px solid #e2e2e2;
`;

const CommentBox = styled.div`
  display: inline-block;
  width: 96%;
  margin: 0 0 16px 2.4%;

  form {
    display: flex;

    input {
      width: 90%;
      height: 25px;
      font-size: 1.4rem;
      border: none;
      outline: none;
    }

    div {
      width: 2.5%;
      height: auto;
      margin: 8px 0 0 5.5%;
      cursor: pointer;
    }
  }
`;

const CommentsSection = props => {
  return (
    <CommentsSectionClass>
      <CommentIcon>
        <HeartComment>
          <div>
            <img
              name={props.index}
              onClick={props.heartClick}
              src={props.userLiked[props.index] ? heartRed : heartWhite}
              alt="Heart icon"
            />
          </div>
          <div>
            <img
              onClick={props.selectCommentInput}
              name={props.index}
              src={commentIcon}
              alt="Comment icon"
            />
          </div>
        </HeartComment>
        <Bookmark>
          <img src={bookmark} alt="Bookmark icon" />
        </Bookmark>
      </CommentIcon>
      <Likes>{props.likes} likes</Likes>
      <CommentsContainer>
        {props.comments.map((comment, index) => (
          <Comment
            username={comment.username}
            text={comment.text}
            key={"comment" + index}
          />
        ))}
      </CommentsContainer>
      <TimeStamp>{props.timestamp}</TimeStamp>
      <CommentBox>
        <form onSubmit={props.addNewComment}>
          <input
            onChange={props.postComment}
            id={props.index}
            value={props.inputText[props.index]}
            type="text"
            name="inputText"
            placeholder="Add a comment..."
          />
          <div>
            <img src={ellipses} alt="Ellipses" />
          </div>
        </form>
      </CommentBox>
    </CommentsSectionClass>
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
