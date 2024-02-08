
import './styles.css';
import PosterHeader from '../../components/posterheader/posterheader.js';
import api from '../../utils/api.js';


function NewUser() {

  const submitForm = (e) => {
    e.preventDefault();
    api.post('/users/add', {
      username: document.getElementById('name').value,
      email: document.getElementById('email').value,
    })
  }

  return (
    <div className="App">
      <PosterHeader />
      <div className="NewUser-Content">
        <h1>New User</h1>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <button className="btn btn-primary" onClick={submitForm}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewUser;
