import css from './Friends.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      />
    ))}
  </ul>
);

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={clsx(css.status, isOnline ? css.online : css.offline)}
    ></span>
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
