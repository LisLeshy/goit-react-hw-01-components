import PropTypes from 'prop-types'
// import { getRandomHexColor } from 'utils/getRandomColor ';
export const FriendList = ({ friends }) => {
    // console.log({friends});
    return <ul className="friendList">{friends.map((item)=>
        <li className="item" key={item.id}>
            <span className="status">{item.isOnline}</span>
            <img className="avatar" src={item.avatar} alt={item.name} width="48" />
            <p className="name">{item.name}</p>
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