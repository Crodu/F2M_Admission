import React, { useState } from 'react';
import './createTweet.css';
import api from '../../utils/api';

const CreateTweet = ({user}) => {
    const [tweet, setTweet] = useState('');

    const handleInputChange = (e) => {
        setTweet(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.post('/tweets/add', {
            user_id: user.id,
            content: tweet
        });
        setTweet('');
    };

    return (
        <div className='CreateTweetArea'>
            <h2>Create a New Tweet</h2>
            <form onSubmit={handleSubmit} className='TweetForm'>
                <textarea
                    value={tweet}
                    onChange={handleInputChange}
                    placeholder="What's on your mind?"
                ></textarea>
                <button type="submit" className={!user.id ? 'disabled' : undefined} disabled={!user.id}>Post Tweet</button>
            </form>
        </div>
    );
};

CreateTweet.defaultProps = {
    user: {}
};

export default CreateTweet;
