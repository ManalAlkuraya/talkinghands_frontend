import axios from "axios";
import { useState } from "react";
export default function Employeedoctor() {
    const [serviceID, setserviceID] = useState("")
    const [nationalId, setnationalId] = useState("")
    const [servicetypedoctor, setservicetypedoctor] = useState("")
    const [adtex, setadtex] = useState("")
    const [appointment, setappointment] = useState("")


    function handlenationalId(event) {
        setnationalId((event.target.value));
    }
    function handleserviceID(event) {
        setserviceID((event.target.value));
    }
    function handleservicetypedoctor(event) {
        setservicetypedoctor((event.target.value));
    }
    function handleadtex(event) {
        setadtex((event.target.value));
    }
    function handleappointment(event) {
        setappointment((event.target.value));
    }

    let ListConsultings = {
        serviceID:serviceID,
        nationalId: nationalId,
        servicetypedoctor: servicetypedoctor,
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
     function handleUpdate(event){
        event.preventDefault();
        console.log(ListConsultings)
        axios({
            method:"put",
            url:"http://localhost:8080/api/serv/update/{id}",
            data: ListConsultings
        })
    }

 return (
            <main>
                <h1>Request a doctor</h1>
                <div className="signlanguage2" >
                <form>
                <div className="label"> 
                    <label>National ID: </label></div>
                    <input type="text" onChange={handlenationalId} ></input><br />
                    <div className="label"> 
                    <label>Service ID: </label></div>
                    <input type="text" onChange={handleserviceID} ></input><br />
                    <div className="label"> 
                    <label>Service Type: </label></div>
                    <input type="text" onChange={handleservicetypedoctor}></input><br />
                    <div className="label"> 
                    <label>Medical Consulting: </label> <br /></div>
                    <textarea type="text" onChange={handleadtex}></textarea>
                    <br />
                    <input type="checkbox" onChange={handleappointment} />
                    <label> an appointment</label> <br />
                    <button className="submit" onClick={handleClick} type="submit"><span>submit </span></button>

                    <button className="submit" type="submit" onClick={handleUpdate}><span>update</span></button>
                </form>
                </div>

            </main>
        );

}