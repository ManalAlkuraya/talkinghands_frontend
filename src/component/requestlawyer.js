import axios from "axios";
import { useState } from "react";
export default function Employeedoctor() {

    const [nationalId, setnationalId] = useState("")
    const [serviceID, setserviceID] = useState("")
    const [servicetypelawyer, setservicetypelawyer] = useState("")
    const [adtex, setadtex] = useState("")
    const [appointment, setappointment] = useState("")

    function handlenationalId(event) {
        setnationalId((event.target.value));
    }
    function handleserviceID(event) {
        setserviceID((event.target.value));
    }
   
    function handleservicetypelawyer(event) {
        setservicetypelawyer((event.target.value));
    }
    function handleadtex(event) {
        setadtex((event.target.value));
    }
    function handleappointment(event) {
        setappointment((event.target.value));
    }

    let ListConsultings = {
        serviceID: serviceID,
        nationalId: nationalId,
        servicetypelawyer: servicetypelawyer,
        adtex: adtex,
        appointment: appointment,
    }

    function handleClick(event) {
        event.preventDefault();
        axios({
            method: "post",
            url: 'http://localhost:8080/api/serv/add',
            data: ListConsultings
        });
    }

    //new update 
    function handleUpdate(event) {
        event.preventDefault();
        console.log(ListConsultings)
        axios({
            method: "put",
            url: "http://localhost:8080/api/serv/update/{id}",
            data: ListConsultings
        })
    }

    return (
        <main><div style={{ backgroundColor: "#dce9f9" }}>
            <h1 className="requestlawyer" style={{ color: "#EA5C2B" }}>Request a Lawyer Referral Form</h1>
            <h3 className="requestlawyerpara">Please complete the form below to submit your request for a lawyer referral.<br />
                We will do our best to reply within 1 business day.</h3>
            <div className="lawyer">

                <div className="formlawyer">
                    <form>
                        <div className="label">
                            <label>National ID </label></div>
                        <input type="text" onChange={handlenationalId}></input><br />
                        <div className="label">
                            <label>Service ID </label></div>
                        <input type="text" onChange={handleserviceID}></input><br />
                        <div className="label">
                            <label>Service Type: </label></div>
                        <input type="text" onChange={handleservicetypelawyer}></input><br />
                        <div className="label">
                            <label>Legal advice:: </label> <br /></div>
                        <textarea type="text" onChange={handleadtex}></textarea>
                        <br /><br />
                        <input type="checkbox" onChange={handleappointment} />

                        <label> an appointment</label> <br />
                        <button className="submit" onClick={handleClick} type="submit"><span>submit</span> </button>

                        <button className="submit" type="submit" onClick={handleUpdate}><span>update</span></button>
                    </form>
                </div>

                <div className="imglawyer">
                    <img src="lawyer.jpeg" />
                </div>

            </div>

        </div>
        </main>
    );

}