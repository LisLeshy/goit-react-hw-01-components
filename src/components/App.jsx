import { Profile } from "./Profile/Profile.jsx"
import user from '../data/user.json/user'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile user = {user}/>
    </div>   
  );
};
console.log(App);