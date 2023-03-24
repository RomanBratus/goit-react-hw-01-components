import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };

  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(stat => (
          <li
            key={stat.id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span>{stat.label}</span>
            <span>{stat.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
