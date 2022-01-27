import "./homepage.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  function handleusers(event) {
    setUsername(event.target.value);
  }
  function handlepass(event) {
    setPassword(event.target.value);
  }

  let lestuser = {
    username: username,
    password: password,
  };
  let navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "get",
      url: "https://talkinghandbackend.herokuapp.com/api/user/login",
      params: { username: username, password: password },
    }).then((res) => {
      console.log(res.data);
      if (res.data == "authenticatedemployee") {
        localStorage.setItem("LogIn", "employee");
        navigate("/");
      } else if (res.data == "authenticateddeaf") {
        localStorage.setItem("LogIn", "deaf");
        navigate("/");
      } else {
        alert(res.data);
      }
    });
  }

  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="bigdiv">
        <div>
          <form className="login">
            <h1>
              Log <span>in</span>
            </h1>
            <label for="fname">First Name </label>
            <input
              onChange={handleusers}
              type="text"
              id="fname"
              name="firstname"
              placeholder="userName.."
            ></input>
            <br />
            <label for="lname">password </label>
            <input
              onChange={handlepass}
              type="password"
              id="lname"
              name="password"
              placeholder="password.."
            ></input>
            <br />
            <button
              onClick={handleSubmit}
              type="submit"
              class="buttons"
              style={{ verticalAlign: "middle" }}
            >
              <span>Login </span>
            </button>
            <div class="success">
              <p>
                <strong>please</strong> enter userName / password
              </p>
            </div>
          </form>
        </div>
        <div>
          <form className="signup">
            <h1>
              Sign <span>up</span>
            </h1>
            <label for="fname">First Name </label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="userName.."
            ></input>
            <br />
            <label for="lname">password </label>
            <input
              type="password"
              id="lname"
              name="password"
              placeholder="password.."
            ></input>
            <br />
            <button
              type="submit"
              class="buttons"
              style={{ verticalAlign: "middle" }}
            >
              <span>Login </span>
            </button>
            <div class="success">
              <p>
                <strong>please</strong> enter userName / password
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
