import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function randColor() {
  const r = () => Math.floor(Math.random() * 256);
  const colorBack = 'rgb(' + r() + ',' + r() + ',' + r() + ',' + 0.3 + ')';
  return colorBack;
}

function Statistics({ title, stats }) {
  // console.log(stats);
  return (
    <section className={css.statistics_main}>
      <section className={css.statistics_title}>
        {title && <h2>{title}</h2>}

        <ul className={css.statistics_list}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                className={css.statistics_item}
                key={id}
                style={{ backgroundColor: randColor() }}
              >
                <span className={css.statistics_label}>{label}</span>
                <span className={css.statistics_percentage}>{percentage}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default Statistics;
