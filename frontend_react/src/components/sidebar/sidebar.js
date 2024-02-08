import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = ({login, currUser}) => {

		const [email, setEmail] = useState('');

		return (
				<div className="sidebar">
						{login && (
						<div className="user-section">
								<h3>{currUser.name || 'Please Login'}</h3>
								<form>
										<div className="form-group">
												<label htmlFor="email">Email</label>
												<input
														type="email"
														className="form-control"
														id="email"
														value={email}
														onChange={
																e => setEmail(e.target.value)
												} />
										</div>
										<button
												type="submit"
												className="btn btn-primary"
												onSubmit={(e) => login(e, email)}
										>
												Login
										</button>
								</form>
								<a href="/newuser" className='newuser'>Create New User</a>
						</div>
						)}
				</div>
		);
};

Sidebar.defaultProps = {
		currUser: {name: 'No user', email: ''},
		login: undefined
};

export default Sidebar;
