import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomColor ';
import css from './Statistics.module.css'
export const Statistics = ({stats, title}) => {
        return <section className={css.statistics}>
      {(title) && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map(item =>
          <li className={css.items} key={item.id} style={{ backgroundColor: getRandomHexColor()}} >
        <span className={css.label} >{item.label}</span>
      <span className={css.percentage}>{item.percentage}%</span>
      </li>)}
    </ul>
  </section>

};
 Statistics.propTypes = {
        title: PropTypes.string,
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    }