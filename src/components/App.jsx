import { Profile } from "./Profile/Profile.jsx"
import { Statistics } from "./Statistics/Statistics.jsx";
import user from '../data/user.json/user'
import data from '../data/data.json/data'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>   
  );
};
console.log(App);