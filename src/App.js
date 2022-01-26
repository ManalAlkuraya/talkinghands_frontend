import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import '../src/component/homepage.css';
import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';
import React from "react";



export default function App() {
  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")

  const [showConfirm, setshowConfirm,] = React.useState(false);//confirm button
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
  let navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "get",
      url: "https://talkinghandbackend.herokuapp.com/api/user/login",
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
  let loggedIn = localStorage.getItem("LogIn")

  if (loggedIn == "employee") {
    return (
      <div>
        
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <button style={{ borderRadius: "50%", padding: "5px", backgroundColor: "#325a38", color: "white" }} onClick={() => { localStorage.setItem("LogIn", "") }}> Log Out </button>
        </nav>
       
        <div class="employee">
        
        <div className="service">
        <div className="serone">
          <img src="translation.jpeg" width="100%"/>
        <Link to="/employeetranslator">
          <button className="servicedeaf"><span>employeetranslator</span></button></Link></div>
          <div className="sertwo">
          <img src="lawyeremployee.jpeg"  width="108%" style={{paddingBottom:"30px"}}/>
          <Link to="/employeelawyer">
          <button className="servicedeaf"><span>employeelawyer</span></button></Link></div>
          <div className="serthree">
            <img src="img8.jpeg" width="74%"/>
          <Link to="/employeedoctor">
          <button className="servicedeaf"><span>employeedoctor</span></button></Link></div>


</div>
        </div>
     
        
        <Outlet />
      </div>
    );
  }
  else if (loggedIn == "deaf") {
    return (
      <div>
        
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <button style={{ borderRadius: "50%", padding: "5px", backgroundColor: "#325a38", color: "white" }} onClick={() => { localStorage.setItem("LogIn", "") }}> Log Out </button>
        </nav>
        <h1 className="hserv">We have these services <span>for you</span> </h1>
        <div className="service">


          <div className="serone">
            <img src="img3.png" width="100%" />
            <Link to="/requesttranslator">
              <button className="servicedeaf"><span>request translator</span></button></Link></div>
          <br />
          <div className="sertwo">
            <img src="img4.jpeg" width="100%" />
            <Link to="/training">
              <button className="servicedeaf" ><span>Training</span></button></Link></div>
          <br />
          <div className="serthree">
            <img src="img6.jpeg" width="100%" />
            <Link to="/otherservice">
              <button className="servicedeaf"><span>all request service</span></button></Link></div>
          <br />
          <div className="sertwo">
            <img src="img7.jpeg" width="100%" />
            <Link to="/requestlawyer">
              <button className="servicedeaf"><span>requestlawyer</span></button></Link></div>
          <br />
          <div className="sertwo">
            <img src="img8.jpeg" width="75%" />
            <Link to="/requestdoctor">
              <button className="servicedeaf"><span>requestdoctor</span></button></Link></div>
        </div>


        <Outlet />
      </div>
    );
  }
  else {
    return (
      <div>

        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <button style={{ borderRadius: "50%", padding: "5px", backgroundColor: "#325a38", color: "white" }} onClick={() => { localStorage.setItem("LogIn", "") }}> Log Out </button>
        </nav>
        <div class="home">
          <div className="homepara">
            <h3 style={{ fontSize: "300%" }}>People with talking hands<br />
              We are with you<br />
              hand by hand</h3>
            <p style={{ fontSize: "150%" }}>On the basis of our religion, I chose the talking hand Project,<br />
              as my goal is to contribute to raising the level of services<br />
              Introduction to the hearing impaired  </p>
            <nav className="loginhome">
              <ul><button className="btnlogin">
                <li> <a href="#login">
                  LOG IN</a>
                  <span></span><span></span><span></span><span></span>
                </li></button>
              </ul>
            </nav>
          </div>

          <div className="imghome">
            <img src="logo.png" width="80%" />
          </div>
        </div>


        <div className="boxhome">

          <div className="imghome1">
            <img src="imgtraining.jpeg" />
          </div>

          <div className="educatinpara">
            <div className="para" style={{ borderRight: "3px dotted " }}>
              <h4 style={{ fontSize: "150%" }}>Parent Education and Auditory-verbal</h4>
              <p>Importance of auditory-verbal education and parents' participation after<br />
                cochlear implantation of very young children</p><br />
              <p className="onlineclass" style={{ color: "#EA5C2B" }}>Please complete the form below to submit your request</p>
              <button onClick={() => setshowConfirm(!showConfirm)} type="submit"
                class="button" style={{ marginLeft: "40%" }}>
                <span>Show Form </span>
                {showConfirm ? '' : ''} </button></div>
            {showConfirm && <div className="showform">



              <p>After completing this form, you will receive news, research, and resources,<br />
                for the Learning and Development. You can unsubscribe at any time.</p>
              <div className="labelparent">
                <label for="fname">First Name</label>
                <input type="text" id="fname" name="fname" /></div>
              <div className="labelparent">
                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lname" /></div><br />
              <div className="labelparent">
                <label for="national">National ID</label>
                <input type="text" placeholder="National ID" /></div>
                <div className="labelparent">
                <label for="national">Email</label>
              <input type="text" placeholder="Enter Your Email" /></div><br /><br />
              <button type="submit" className="sub" >Submit</button>

            </div>

            }
          </div>

        </div>

        <footer >
          <div className="footer">

            <div id="login">
              <form >
                <h1 className="hspan">Log <span>in</span></h1>
                <label for="fname">First Name </label>
                <input onChange={handleusers} type="text" id="fname" name="firstname" placeholder="userName.."></input><br />
                <label for="lname">password  </label>
                <input onChange={handlepass} type="password" id="lname" name="password" placeholder="password.."></input><br /><br/>
                <button onClick={handleSubmit} type="submit" class="buttons" style={{ verticalAlign: 'middle', }}><span>Login </span></button>
                <div class="success">
                  <p><strong>please</strong> enter userName / password</p>
                </div>
              </form>
            </div>

            <div className="subscribe1">
              <button className="subscribe" >Subscribe  </button>
              <input type="text" placeholder="subscribe"
              ></input>
              <p>Copyright © 2022 TALKING HAND </p>
            </div>


            <div className="imgfoter">
              <img src="logo.png" width="50%" />
            </div>

          </div>
        </footer>
        <Outlet />
      </div>
    );
  }
}




















// import logo from './logo.svg';
// import './App.css';
// import React, { useEffect, useState } from 'react'
// import axios from "axios"

// function App() {
//   const [myHearingImpaired, setMyHearingImpaired] = useState({hearingimpairedID:"",fullname:"",phonenumber:"",email:"", age:""})
//   useEffect(()=>{
//     axios.get("hearingImpaired")
//      .then(response=>{
//        console.log(response.data)
//        setMyHearingImpaired(response.data[1])
//     })
//     return()=>{}
//   },[]) 


//   function handleClick(){
//     axios({
//       method:'post',
//       url:'hearingImpaired/add',
//       data:{
//         hearingimpairedID:80,
//         fullname:"ahmad",
//         phonenumber:"606",
//         email:"en",
//         age:200
//       }
//     });
//   }

//   return (
//     <div className="App">

//    <h2>my Book details are:  {JSON.stringify(myHearingImpaired)}</h2><br/>
//       <button className="button" onClick={handleClick}>Post to Spring book</button>
//       {/* <button  className="button"  onClick={handleDelet}> Delete book</button> */}
// <br />

//     </div>
//   );
// }

// export default App;

