import PropTypes from 'prop-types'
import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem'

export const FriendList = ({ friends }) => {
    // console.log({friends});
    return <ul className={css.friendList} >{friends.map((item) =>
        <FriendListItem
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
        />
        // <li className={css.item} key={item.id}>
        //     <span className={css.status}><div className={item.isOnline ? css.onLine : css.offLine}></div></span>
        //     <img className={css.avatar} src={item.avatar} alt={item.name} width="48" />
        //     <p className={css.name}>{item.name}</p>
        // </li>
    )}
</ul>
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    
}