import css from './TransactionHistory.module.css';
import React from 'react';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <TransactionHistoryItem
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
        />
      ))}
    </tbody>
  </table>
);

const TransactionHistoryItem = ({ key, type, amount, currency }) => (
  <tr key={key}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
TransactionHistoryItem.propTypes = {
  key: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
