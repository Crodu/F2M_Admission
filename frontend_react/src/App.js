
import './App.css';
import Sidebar from './components/sidebar/sidebar.js';
import CreateTweet from './components/createTweet/createTweet.js';
import PosterHeader from './components/posterheader/posterheader.js';
import { useState } from 'react';
import api from './utils/api.js';



function App() {
  const [selectedUser, setSelectedUser] = useState({});

  const login = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    api.get(`/users/email=${email}`)
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          setSelectedUser(data[0]);
        }
      });
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
