import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react/cjs/react.development";

export default function Trainings() {
  let params = useParams();
  let trainId = Number(params.trainingsId)

  const [nationalId, setnationalId] = useState("")
  //const [serviceID, setserviceID] = useState("")
  const [trainingID, settrainingID] = useState("")
  const [course, setcourse] = useState("")// go to the serv table 
  const [data, setData] = useState([{ tweek: "", tday: "", ttime: "", t_text: "" }])//المعلومات الي ابيها تجي من قاعدة البيانات(١)

  //يجيب البيانات من قاعدة البيانات ويستعرضها في جدول  "Sign Lnguage Training" (١)
  useEffect(() => {
    axios.get("/Training")
      .then(result => setData(result.data));
    console.log(data);
  }, []);

  // function sendtraining(id) {
  //   axios.get(`${id}`)
  //     .then(result => setData(result.data));
  // }

  function handletrainingID(event) {
    settrainingID((event.target.value));
  }
  function handlenationalId(event) {
    setnationalId((event.target.value));
  }
  // function handleserviceID(event){
  //   setserviceID((event.target.value));
  // }

  function handlecourse(event) {
    setcourse((event.target.value));
  }


  let Listcourse = {
    trainingID: trainingID,
    nationalId: nationalId,
    course: course,
    enrolledHearingImpaireds: [{
      hearingimpairedID: nationalId
    }]
    // trainingname:trainingname
  }

  // ارسال البيانات الي قاعدة البيانات 
  function handleClick(event) {
    event.preventDefault();
    console.log(Listcourse)
    axios({
      method: "post",
      url: "/Training/add",
      data: Listcourse
    });
    console.log("after axios")
  }

  if (trainId == 7) {
    return (
      // تنعرض البيانت الي تجي من قاعدة البيانت هنا (١)
      <main style={{ padding: "1rem 0" }}>
        
        {data.map(trainingID => {
          return <div class="container">
            <h2 className="onlineclass">Best Online Sign Language Classes</h2>
            <p>Learning Sign Language  can be a fun way to communicate with friends and family, <br />
              and it is also becoming an increasingly important asset to have in the job market. <br />
              According to the Bureau of Labor Statistics, employment for translators and interpreters <br />
              will increase by at least 20% by 2029.</p>
            <h5 className="onlineclass" style={{ color: "#EA5C2B" }}>start learning for free now</h5><br />
            <br />

            {/* <div class="arrow">
              <span></span>
              <span></span>
              <span></span>
            </div><br /> */}
            <table className="table">
              <thead>
                <tr>
                  <th colSpan="5"> {trainingID.tweek} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{trainingID.tday}</td>
                </tr>
                <tr>
                  <td>{trainingID.ttime} <br /> {trainingID.t_text}</td>
                  <td>
                    <a href={trainingID.links}>{trainingID.links}</a>
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table">
              <thead>
                <tr>
                  <th colSpan="5"> {trainingID.tweek} </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{trainingID.tday}</td>
                </tr>
                <tr>
                  <td>{trainingID.ttime} <br /> {trainingID.t_text}</td>
                  <td>
                    <a href={trainingID.links}>{trainingID.links}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        })}

        {/* <h2>trainings</h2>
        <table border="1">
          <thead>
            <tr>
              <th colSpan="5"> First Week </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sunday</td>
              <td>Monday</td>
              <td>Tusday</td>
              <td>Wednesday</td>
              <td>Thursday</td>
            </tr>
            <tr>
              <td>9:00AM - 10:30AM <br /> Arabic Letters<br /> welcome men and women </td>
              <td>-</td>
              <td>10:00AM - 11:30AM <br />Arabic number <br />welcome men and women</td>
              <td>9:00AM - 11:00AM <br /> Most used words <br /> welcome men and women </td>
              <td>9:00AM - 11:00AM <br /> emergencey words <br />welcome men and women</td>
            </tr>
          </tbody>
        </table>
        <br /> <br /> <br /> <br />
        <table border="1">
          <thead>
            <tr>
              <th colSpan="5"> Second Week </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sunday</td>
              <td>Monday</td>
              <td>Tusday</td>
              <td>Wednesday</td>
              <td>Thursday</td>
            </tr>
            <tr>
              <td>9:00AM - 10:30AM <br /> Most used sentences<br /> welcome men and women </td>
              <td>-</td>
              <td>10:00AM - 11:30AM <br /> - - -  <br />welcome men and women</td>
              <td>9:00AM - 11:00AM <br />  - - - <br /> welcome men and women </td>
              <td>9:00AM - 11:00AM <br />  - - - <br />welcome men and women</td>
            </tr>
          </tbody>
        </table> */}


      </main>
    );
  }

  else if (trainId == 8) {
    return (
      // go to database
      <main>
        
        <div className="Programarea">

          <div className="titleProgramarea">
            <div className="infoprogram">
              <p className="onlineclass" style={{ color: "#EA5C2B" }}>Program information</p><hr />
             <p> Program start: within the next five days<br /><br />
                Program duration: thirty days<br /><br />
                Program location: At our headquarters<br /><br />
                Program value: Free</p>

            </div>

          </div>
          <div className="formProgramarea" >
            <form>

              <div className="label">
                <label>National ID </label>
              </div>
              <input type="text" onChange={handlenationalId}></input><br />
              <div className="label">
                <label>training ID </label>
              </div>
              <input type="text" onChange={handletrainingID}></input><br />
              <div className="label">
                <label>programs</label>
              </div><br />
              <input type="radio" id="aviation" value="aviation" name="Program_areas" onChange={handlecourse} />
              <label>aviation field</label><br />

              <input type="radio" id="technology" value="technology" name="Program_areas" onChange={handlecourse} />
              <label>technology field</label><br />

              <input type="radio" id="business" value="business" name="Program_areas" onChange={handlecourse} />
              <label>business field</label><br />

              <button className="submit" onClick={handleClick}><span>submit</span></button>
            </form>
          </div></div>
      </main>
    );
  }
  else {
    return (
      <main>

      </main>
    );
  }
}