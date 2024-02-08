import React from 'react';

const Tweet = ({tweet}) => {
    return (
        <div className='tweet'>
            <h3>{tweet.user.name}</h3>
            <p>{tweet.content}</p>
        </div>
    );
}