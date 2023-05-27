import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import image1 from './images/kay.jpg';


function App() {
  const [formData, setFormData] = useState({
    username: '',
    occupation: '',
    gender: 'male',
  })

  const onChangeHandler = (event) => {

    console.log(event)
    if (event.target.name === 'languages') {

      let copy = { ...formData }

      if (event.target.checked) {
        copy.languages.push(event.target.value)
      } else {
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }

      setFormData(copy)

    } else {
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }

  return (
  <div classname="app" >

    <div className="container">
    
         <p>text</p>
    </div>


     <div class="navigation">

      <div class="profile">
        <div class="image"><img src={image1} heigh = {90} width = {90} /></div>
      <span class="name">Christian Conde</span>
      <br></br>
      <span class="id">C-00001</span>
      <div class="line">_____________________________________</div>
      </div>
        <ul>
          <li class="list active">
            <a href="#">
              <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
              <span class="title">Dashboard</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon"></span>
              <span class="title">Medical History</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon"><i class="bi bi-box-arrow-right"></i></span>
              <span class="title">Sign out</span>
            </a>
          </li>
        </ul>
        </div>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    

    <div class="form">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <h3>Appointment Form</h3>

        <div> 
          <label htmlFor="username" className="form-label">ID No:</label>
          <label htmlFor="username" className="form-text">C-OOOO1 </label>
        </div>

        <div> 
          <label htmlFor="username" className="form-label">First Name:</label>
          <label htmlFor="username" className="form-text">Christian </label>
        </div>

        <div> 
          <label htmlFor="username" className="form-label">Middle Name:</label>
          <label htmlFor="username" className="form-text">Espedido </label>
        </div>

        <div> 
          <label htmlFor="username" className="form-label">Last Name:</label>
          <label htmlFor="username" className="form-text">Conde </label>
        </div>

        <div> 
          <label htmlFor="username" className="form-label">Age:</label>
          <label htmlFor="username" className="form-text">23 </label>
        </div>

        <div className="form-group">
          <label htmlFor="occupation" className="form-label">Year Level:</label>
          <select className="form-select" name="occupation" onChange={onChangeHandler} value={formData.occupation}>
            <option value="student">3rd Year Bachelor Science and Information Technology</option>
            <option value="employee">2nd Year Bachelor Science and Information Technology</option>
            <option value="other">1st Year Bachelor Science and Information Technology</option>
          </select>
        </div>

          <h6>Appointment Purpose:</h6>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
        </div>



        <div className="form-group">
          <label htmlFor="gender" className="form-label">Gender</label>
          <div>
            <div>
              <input type="radio" name="gender" value="male" onChange={onChangeHandler} checked={formData.gender === 'male'} />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name="gender" value="female" onChange={onChangeHandler} checked={formData.gender === 'female'} />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" name="gender" value="other" onChange={onChangeHandler} checked={formData.gender === 'other'} />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <button className="btn" type="submit" >Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default App;
