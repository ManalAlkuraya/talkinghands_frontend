import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function Otherservice() {
  const [info, setInfo] = useState([
    {
      id: "",
      nationalId: "",
      servicetypetranslator: "",
      servicetypelawyer: "",
      servicetypedoctor: "",
      laoction: "",
      data: "",
      time: "",
      connectAs: "",
      email: "",
      delivery: "",
      adtex: "",
      appointment: "",
      course: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("https://talkinghandbackend.herokuapp.com/api/serv")
      .then((result) => setInfo(result.data));
  }, []);

  return (
    <main>
      <h1
        className="onlineclass"
        style={{ color: "#203b24", paddingLeft: "45%" }}
      >
        my request{" "}
      </h1>
      {info.map((HearingImpaireds) => {
        return (
          <div className="container" key={HearingImpaireds.id}>
            <h3>{HearingImpaireds.nationalId}</h3>
            <h3>{HearingImpaireds.servicetypetranslator}</h3>
            <h3>{HearingImpaireds.servicetypelawyer}</h3>
            <h3>{HearingImpaireds.servicetypedoctor}</h3>
            <h3>{HearingImpaireds.laoction}</h3>
            <h3>{HearingImpaireds.data}</h3>
            <h3>{HearingImpaireds.time}</h3>
            <h3>{HearingImpaireds.connectAs}</h3>
            <h3>{HearingImpaireds.email}</h3>
            <h3>{HearingImpaireds.delivery}</h3>
            <h3>{HearingImpaireds.adtex}</h3>
            <h3>{HearingImpaireds.appointment}</h3>
            <h3>{HearingImpaireds.course}</h3>
            <hr />
          </div>
        );
      })}
    </main>
  );
}
