import { useParams } from "react-router";
import React, { useState } from "react";
import axios from "axios";

export default function Translators() {
  let params = useParams();
  let serviceId = Number(params.translatorsId);

  const [serviceID, setserviceID] = useState("");
  const [servicetypetranslator, setservicetypetranslator] = useState("");
  const [laoction, setlaoction] = useState("");
  const [nationalId, setnationalId] = useState("");
  const [delivery, setdelivery] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [connectAs, setconnectAs] = useState("");
  const [email, setemail] = useState("");
  const [hearingimpairedID, sethearingimpairedID] = useState("");
  const [adtex, setadtex] = useState("");

  function handleserviceID(event) {
    setserviceID(event.target.value);
  }

  function handleservicetypetranslator(event) {
    setservicetypetranslator(event.target.value);
  }
  function handlelaoction(event) {
    setlaoction(event.target.value);
  }

  function handlenationalId(event) {
    setnationalId(event.target.value);
  }

  function handleconnectAs(event) {
    setconnectAs(event.target.value);
  }

  function handledate(event) {
    setdate(event.target.value);
  }
  function handletime(event) {
    settime(event.target.value);
  }

  function handledelivery(event) {
    setdelivery(event.target.value);
  }

  function handleemail(event) {
    setemail(event.target.value);
  }
  function handleadtex(event) {
    setadtex(event.target.value);
  }

  let Listservices = {
    serviceID: serviceID,
    nationalId: nationalId,
    adtex: adtex,
    servicetypetranslator: servicetypetranslator,
    laoction: laoction,
    delivery: delivery,
    date: date,
    time: time,
    connectAs: connectAs,
    email: email,
    enrolledHearingImpaired: [
      {
        hearingimpairedID: nationalId,
      },
    ],
  };

  function handleClick(event) {
    event.preventDefault();
    console.log(Listservices);
    axios({
      method: "post",
      url: "https://talkinghandbackend.herokuapp.com/api/serv/add",
      data: Listservices,
    });
  }

  //new update
  function handleUpdate(event) {
    event.preventDefault();
    console.log(Listservices);
    axios({
      method: "put",
      url: "https://talkinghandbackend.herokuapp.com/api/serv/update/{id}",
      data: Listservices,
    });
  }

  if (serviceId == 1) {
    return (
      <main>
        <div className="help">
          <div className="helpline">
            <h2>Disaster distress Helpline</h2>
            <h1> For hearing impaired callers : </h1>
            <p>
              To contact a sign language agent directly, click the "call Now"
              button
              <br /> below or call from your video phone.
              <br /> Support is available 24/7, 365 days a year.
            </p>
          </div>
          <div className="helplinetwo">
            <h1>Call or Text:</h1>
            <p>0555555555</p>
            <hr></hr>
            <br />
            <br />
            <nav className="mynav">
              <ul>
                <a href="https://zoom.us/">
                  <button className="btncall">
                    <li>
                      call Now
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </li>
                  </button>
                </a>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    );
  } else if (serviceId == 2) {
    return (
      <main>
        <div className="text">
          <div className="transtext">
            <h2>Request for translaation of text</h2>
          </div>
          <div className="formtext">
            <form>
              <div className="label">
                <label>National ID</label>
              </div>
              <input type="text" onChange={handlenationalId}></input>
              <br />
              <div className="label">
                <label>service ID </label>
              </div>
              <input type="text" onChange={handleserviceID}></input>
              <br />
              <div className="label">
                <label>email</label>
              </div>
              <input type="text" onChange={handleemail}></input>
              <br />
              <div className="label">
                <label> your text</label>
              </div>
              <textarea type="text" onChange={handleadtex}></textarea>
              <br />

              <button className="submit" type="submit" onClick={handleClick}>
                <span>submit</span>
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  } else if (serviceId == 3) {
    return (
      <main>
        <div className="face">
          <div className="facetoface">
            <h3>Face to Face Interpreting for ​Hard of Hearing People</h3>
            <p>
              ​interpreters provide the crucial service of facilitating
              <br />
              communication between Deaf and Hearing people.
              <br />
              <br />
              <br />* Available in person or remotely 24 hours a day, 365 days
              of the year
            </p>
          </div>
          <div className="facetofacetwo">
            <form>
              <div className="label">
                <label>National ID</label>
              </div>
              <input type="text" onChange={handlenationalId}></input>
              <br />
              <div className="label">
                <label>service ID </label>
              </div>
              <input type="text" onChange={handleserviceID}></input>
              <br />
              <div className="label">
                <label>Service Type</label>
              </div>
              <select onChange={handleservicetypetranslator} name="services">
                <option
                  onChange={handleservicetypetranslator}
                  value="face to face translator"
                >
                  select
                </option>

                <option
                  onChange={handleservicetypetranslator}
                  value="face to face translator"
                >
                  face to face translator
                </option>
              </select>
              <br />
              <div className="label">
                <label>Location</label>
              </div>
              <input type="text" onChange={handlelaoction}></input>
              <br />
              <div className="label">
                <label>Delivery</label>
              </div>
              <br />
              <input
                type="radio"
                id="Car"
                value="Car"
                name="Delivery"
                onChange={handledelivery}
              />{" "}
              <label>I have a car</label>
              <br />
              <input
                type="radio"
                id="Nocar"
                value="Nocar"
                name="Delivery"
                onChange={handledelivery}
              />
              <label>I need delivery</label>
              <br />
              <div className="label">
                <label>date</label>
              </div>
              <input
                type="text"
                id="note"
                name="note"
                rows="10"
                cols="30"
                onChange={handledate}
              />
              <br />
              <div className="label">
                <label>Time</label>
              </div>
              <input
                type="text"
                id="note"
                name="note"
                rows="10"
                cols="30"
                onChange={handletime}
              />
              <br />
              <button className="submit" type="submit" onClick={handleClick}>
                <span>submit</span>
              </button>
              <button className="submit" type="submit" onClick={handleUpdate}>
                <span>update</span>
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <div className="online">
          <div className="tranonline">
            <h2>Request a sign lnguage translation online</h2>
            <p>
              ​interpreters provide the crucial service of facilitating
              <br />
              communication between Deaf and Hearing people.
              <br />
              <br />
              <br />* Available in person or remotely 24 hours a day, 365 days
              of the year
            </p>
          </div>
          <div className="tranonlinetwo">
            <form>
              <div className="label">
                <label>National ID</label>
              </div>
              <input type="text" onChange={handlenationalId}></input>
              <br />
              <div className="label">
                <label>service ID </label>
              </div>

              <input type="text" onChange={handleserviceID}></input>
              <br />

              <div className="label">
                <label>Service Type</label>
              </div>
              <select onChange={handleservicetypetranslator} name="services">
                <option
                  onChange={handleservicetypetranslator}
                  value="translation online"
                >
                  select
                </option>

                <option
                  value="translation online"
                  onChange={handleservicetypetranslator}
                >
                  translation online
                </option>
              </select>
              <br />
            </form>
            <div className="label">
              <label>date</label>
            </div>
            <input
              type="text"
              id="note"
              name="note"
              rows="10"
              cols="30"
              onChange={handledate}
            />
            <br />
            <div className="label">
              <label>Time</label>
            </div>
            <input
              type="text"
              id="note"
              name="note"
              rows="10"
              cols="30"
              onChange={handletime}
            />
            <br />
            <div className="label">
              <label>Connect As:</label>
              <br />
            </div>
            <input
              type="radio"
              id="Zoom"
              value="Zoom"
              name="Connact_As"
              onChange={handleconnectAs}
            />{" "}
            <label>Zoom</label>
            <br />
            <input
              type="radio"
              id="FaceTime"
              value="FaceTime"
              name="Connact_As"
              onChange={handleconnectAs}
            />
            <label>FaceTime</label>
            <br />
            <input
              type="radio"
              id="Teams"
              value="Teams"
              name="Connact_As"
              onChange={handleconnectAs}
            />
            <label>Teams</label>
            <br />
            <button className="submit" type="submit" onClick={handleClick}>
              <span>submit</span>
            </button>
            <button className="submit" type="submit" onClick={handleUpdate}>
              <span>update</span>
            </button>
          </div>
        </div>
      </main>
    );
  }
}
