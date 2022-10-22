import PropTypes from 'prop-types';
export const Statistics = ({stats, title}) => {
        return <section  key="statistics">
      {(title) && <h2 >{title}</h2>}
      <ul >
        {stats.map(item =>
      <li  key={item.id}>
        <span >{item.label}</span>
        <span >{item.percentage}%</span>
      </li>)}
    </ul>
  </section>
{/* <section class="statistics">
  <h2 class="title">{title}</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section> */}

    Statistics.propTypes = {
        title: PropTypes.string,
        data: PropTypes.array.isRequired,
        item: PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    }
};