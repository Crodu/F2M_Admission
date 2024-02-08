import React from 'react';
import './sidebar.css';

const Sidebar = ({login, currUser}) => {

    return (
        <div className="sidebar">
            <div className="user-section">
                <h3>{currUser.name || 'Please Login'}</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <button className="btn btn-primary" onClick={login}>Login</button>
                </form>
                <a href="/newuser" className='newuser'>Create New User</a>
            </div>
        </div>
    );
};

Sidebar.defaultProps = {
    currUser: {name: 'No user', email: ''}
};

export default Sidebar;
