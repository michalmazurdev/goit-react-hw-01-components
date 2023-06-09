import css from './Profile.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.card}>
    <div className={css.imageContainer}>
      <img src={avatar} alt="" />
    </div>
    <p className={css.userName}>{username}</p>
    <p className={css.userTag}>@{tag}</p>
    <p className={css.userLocation}>{location}</p>
    <ul className={css.stats}>
      <li className={css.statsFollowers}>
        <span className={css.statsType}>Followers</span>
        <span className={css.statsValue}>{stats.followers}</span>
      </li>
      <li className={css.statsViews}>
        <span className={css.statsType}>Views</span>
        <span className={css.statsValue}>{stats.views}</span>
      </li>
      <li className={css.statsLikes}>
        <span className={css.statsType}>Likes</span>
        <span className={css.statsValue}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.number,
};
