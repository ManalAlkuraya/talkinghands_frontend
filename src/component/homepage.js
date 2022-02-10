import './homepage.css';
import axios from "axios";
import { useState } from "react/cjs/react.development";
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")


  // let myservice = getMyservice();
  // localStorage.setItem("myPa", JSON.stringify(myservice));
  // console.log("In App ", myservice)
  function handleusers(event) {
    setUsername((event.target.value));
  }
  function handlepass(event) {
    setPassword((event.target.value));
  }

  let lestuser = {
    username: username,
    password: password
  }
  function handleClickNewUser(){
    if(username!= null && password!= null){
      axios({
        method:'post',
        url: 'api/user/add',
        data: lestuser,
      });
    }
  }

  let navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    
    axios({
      method: "get",
      url: "api/user/login",
      params: { username: username, password: password }
    })
      .then((res => {
        console.log(res.data)
        if (res.data == "authenticatedemployee") {
          // props.handleLogin(res.data );
          localStorage.setItem("LogIn", "employee")
          navigate("/")
        }
        else if (res.data == "authenticateddeaf") {
          // props.handleLogin(res.data );
          localStorage.setItem("LogIn", "deaf")
          navigate("/")
        }
        else {
          alert(res.data)
        }
      }))
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="bigdiv">
        <div >

          <form className="login">
            <h1>Log <span>in</span></h1>
            <label for="fname">First Name </label>
            <input onChange={handleusers} type="text" id="fname" name="firstname" placeholder="userName.."></input><br />
            <label for="lname">password </label>
            <input onChange={handlepass} type="password" id="lname" name="password" placeholder="password.."></input><br />
            <button onClick={handleSubmit} type="submit" class="buttons" style={{ verticalAlign: 'middle', }}><span>Login </span></button><br/>
            <button onClick={handleClickNewUser} type="submit" class="buttons" style={{ verticalAlign: 'middle', }}><span>regestir </span></button>

            <div class="success">
              <p><strong>please</strong> enter userName / password</p>
            </div>
          </form>
        </div>
        {/* <div >
          <form className="signup">
            <h1>Sign <span>up</span></h1>
            <label for="fname">First Name </label>
            <input type="text" id="fname" name="firstname" placeholder="userName.."></input><br />
            <label for="lname">password  </label>
            <input type="password" id="lname" name="password" placeholder="password.."></input><br />
            <button type="submit" class="buttons" style={{ verticalAlign: 'middle', }}><span>Login </span></button>
            <div class="success">
              <p><strong>please</strong> enter userName / password</p>
            </div>
          </form>
        </div> */}
      </div>
     
    </main>
  );
}


{/* <h4>{new Date().toLocaleTimeString()}</h4>
        <h2>homepagee</h2>
        <p>msg</p>
        <p>adv</p>

        <div className="signlanguage">
        <h3>sign language training</h3>
        <p>Go beyond the basics with our</p>
        <p>Complete an online Sign Language course.<br/>
The Complete sign language Online Course offers Level 1 and Level 2 courses <br/>
<a>Learn sign language with us..</a></p>
        </div>
        <div className="signtrain">
          <div className="para">
         
         
          <h2>WHAT MADE YOU DECIDE TO LEARN SIGN LANGUAGE?</h2>
          <b>We'd love to hear what brought you here today. Are you learning </b>
          <b>sign language for work, school or to communicate with a new </b> 
          <b>friend or family member</b><br />
          <button>LET US KNOW! </button>
          </div>
          <div className="img">
            <img src="img.png" />
          </div>
        </div><br />

        <div className="parenttrain">
          <h3>Parent Education && Auditory-verbal</h3>
          <p></p>
          <button>to register</button>

        </div> */}