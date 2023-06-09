import css from './Statistics.module.css';
import React from 'react';
import PropTypes from 'prop-types';

const randomColor = () => {
  return Math.floor(Math.random() * 16777215).toString(16);
};

export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statList}>
      {stats.map(stat => (
        <li
          className={css.item}
          style={{
            backgroundColor: `#${randomColor()}`,
          }}
        >
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
