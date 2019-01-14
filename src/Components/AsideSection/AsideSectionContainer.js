import React from "react";

const AsideSectionContainer = props => {
  return (
    <div
      className={
        props.isTop
          ? "aside__container"
          : "aside__container--fixed aside__container "
      }
    >
      <div className="aside">
        <div className="photo__username">
          <div className="user__photo">
            <img src={props.userPhoto} alt="" />
          </div>
          <div className="username__fullname">
            <a className="aside__username" href="index.html">
              {props.username}
            </a>
            <p className="user__full-name">{props.fullName}</p>
          </div>
        </div>
        <div className="stories">
          <div className="stories__top">
            <p>Stories</p>
            <p>Watch All</p>
          </div>
        </div>
        <div className="suggestions">
          <div className="suggestions__top">
            <p>Suggestions For You</p>
            <p>See All</p>
          </div>
        </div>
        <div className="links__copyright">
          <div className="links">
            <a href="index.html">About Us </a>
            <span>•</span>
            <a href="index.html">Support</a>
            <span>•</span>
            <a href="index.html">Press</a>
            <span>•</span>
            <a href="index.html">API</a>
            <span>•</span>
            <a href="index.html">Jobs</a>
            <span>•</span>
            <a href="index.html">Privacy</a>
            <span>•</span>
            <a href="index.html">Terms</a>
            <span>•</span>
            <a href="index.html">Directory</a>
            <span>•</span>
            <a href="index.html">Profiles</a>
            <span>•</span>
            <a href="index.html">Hashtags</a>
            <span>•</span>
            <a href="index.html">Language</a>
          </div>
          <p>© 2018 Instagram</p>
        </div>
      </div>
    </div>
  );
};

export default AsideSectionContainer;
