import './App.css';
import Sidebar from './components/sidebar/sidebar.js';
import CreateTweet from './components/createTweet/createTweet.js';
import PosterHeader from './components/posterheader/posterheader.js';
import { useState } from 'react';
import api from './utils/api.js';

function App() {
  const [selectedUser, setSelectedUser] = useState({});

  const login = (e, email) => {
    e.preventDefault();
    if (email) {
      api.get(`/users/email=${email}`)
        .then(res => res.json())
        .then(data => {
          if (data.length > 0) {
            setSelectedUser(data[0]);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    } else {
      console.log("Invalid email");
    }
  }

  return (
    <div className="App">
      <PosterHeader />
      <div className="Content">
        <Sidebar currUser={selectedUser} login={login} />
        <CreateTweet user={selectedUser} />
        {/* <TweetList> */}
      </div>
    </div>
  );
}

export default App;