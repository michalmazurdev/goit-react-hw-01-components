import css from './Profile.module.css';
import React from 'react';
export const user = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

export const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={css.card}>
    <div className={css.imageContainer}>
      <img src={user.avatar} alt="" />
    </div>
    <p className={css.userName}>{user.username}</p>
    <p className={css.userTag}>{user.tag}</p>
    <p className={css.userLocation}>{user.location}</p>
    <ul className={css.stats}>
      <li className={css.statsFollowers}>
        <span className={css.statsType}>Followers</span>
        <span className={css.statsValue}>{user.stats.followers}</span>
      </li>
      <li className={css.statsViews}>
        <span className={css.statsType}>Views</span>
        <span className={css.statsValue}>{user.stats.views}</span>
      </li>
      <li className={css.statsLikes}>
        <span className={css.statsType}>Likes</span>
        <span className={css.statsValue}>{user.stats.likes}</span>
      </li>
    </ul>
  </div>
);
