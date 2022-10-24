import PropTypes from 'prop-types';
import css from './FriendList.module.css';

//     <li className={css.item} >
//         <span className={css.status}><div className={isOnline ? css.onLine : css.offLine}></div></span>
//         <img className={css.avatar} src={avatar} alt={name} width="48" />
//         <p className={css.name}>{name}</p>
//     </li>
// };

export const FriendListItem = ({ avatar, name, isOnline }) => {
    console.log({ avatar,name, isOnline });
    return (   
 <li className={css.item} >
  <span className={css.status}><div className={isOnline ? css.onLine : css.offLine}></div></span>
  <img className={css.avatar} src={avatar} alt={name} />
  <p className={css.name}>{name}</p>
</li>)
};


FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};