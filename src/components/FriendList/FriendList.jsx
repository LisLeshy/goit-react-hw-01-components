import PropTypes from 'prop-types'
import css from './FriendList.module.css';
// import { getRandomHexColor } from 'utils/getRandomColor ';
export const FriendList = ({ friends }) => {
    // console.log({friends});
    return <ul className={css.friendList}>{friends.map((item)=>
        <li className={css.item} key={item.id}>
            <span className={css.status}><div className={item.isOnline ? css.onLine : css.offLine}></div></span>
            <img className={css.avatar} src={item.avatar} alt={item.name} width="48" />
            <p className={css.name}>{item.name}</p>
        </li>)}
</ul>
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })
}