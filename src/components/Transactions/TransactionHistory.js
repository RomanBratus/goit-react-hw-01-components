import PropTypes from 'prop-types';

import css from './Transactions.module.css';

function randColor() {
  const r = () => Math.floor(Math.random() * 256);
  const colorBack = 'rgb(' + r() + ',' + r() + ',' + r() + ',' + 0.2 + ')';
  return colorBack;
}
function TransactionHistory({ items }) {
  return (
    <section className={css.transact_main}>
      <table className={css.transact_tab}>
        <thead style={{ backgroundColor: '#524a4d' }}>
        <tr>
          <th className={css.transact_thead}>Type</th>
          <th className={css.transact_thead}>Amount</th>
          <th className={css.transact_thead}>Currency</th>
        </tr>
        </thead>

        <tbody className={css.transact_tbody}>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr
              key={id}
              style={{ backgroundColor: randColor() }}
              className={css.transact_tr}
            >
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </section>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
export default TransactionHistory;
