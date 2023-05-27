import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import image1 from './images/face15.jpg';


function App() {
  const [formData, setFormData] = useState({
    username: '',
    username1: '',
    username2: '',
    username3: '',
    username4: '',
    username5: '',
    username6: '',
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
        <div class="images"><img src={image1} heigh = {90} width = {90} /></div>
      <span class="name">Angellica Quinones</span>
      <br></br>
      <span class="id">C-00020</span>
      <div class="line">_____________________________________</div>
      </div>
        <ul>
          <li class="list">
            <a href="#">
              <span class="icon"></span>
              <span class="title">Dashboard</span>
            </a>
          </li>
          <li class="list active">
            <a href="#">
              <span class="icon"></span>
              <span class="title">Medical History</span>
            </a>
          </li>
          <li class="list">
            <a href="#">
              <span class="icon"></span>
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
          <h3>Family Medical Record</h3>
        </div>
        <div> 
          <label htmlFor="username" className="form-label">Please fill up only if you have a family with medical problem(specify your relation)</label>
        </div>

        <div className="form-group">
          <div>
          <h6>Hypertention</h6>
          <input className="form-control" name="username" onChange={onChangeHandler} value={formData.username} />
          </div>
          <div>
          <h6>Diabetes Mellitus</h6>
          <input className="form-control" name="username1" onChange={onChangeHandler} value={formData.username1} />
          </div>
          <div>
          <h6>Asthma</h6>
          <input className="form-control" name="username2" onChange={onChangeHandler} value={formData.username2} />
          </div>
          <div>
          <h6>Cancer</h6>
          <input className="form-control" name="username3" onChange={onChangeHandler} value={formData.username3} />
          </div>
          <div>
          <h6>Heart Disease</h6>
          <input className="form-control" name="username4" onChange={onChangeHandler} value={formData.username4} />
          </div>
          <div>
          <h6>Kidney Disease</h6>
          <input className="form-control" name="username5" onChange={onChangeHandler} value={formData.username5} />
          </div>
          <div>
          <h6>Allergies</h6>
          <input className="form-control" name="username6" onChange={onChangeHandler} value={formData.username6} />
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
