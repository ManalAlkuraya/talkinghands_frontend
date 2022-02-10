import { useParams } from "react-router";
import React, { useState } from "react";
import axios from "axios";

export default function Translators() {
    let params = useParams();
    let serviceId = Number(params.translatorsId)

    const [serviceID, setserviceID] = useState("")
    const [servicetypetranslator, setservicetypetranslator] = useState("")
    const [laoction, setlaoction] = useState("")
    const [nationalId, setnationalId] = useState("")
    const [delivery, setdelivery] = useState("")
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    const [connectAs, setconnectAs] = useState("")
    const [email, setemail] = useState("")
    const [hearingimpairedID, sethearingimpairedID] = useState("")
    const [adtex, setadtex] = useState("")
    //const [delivery, setdelivery] = useState("")


    function handleserviceID(event) {
        setserviceID((event.target.value));
    }

    function handleservicetypetranslator(event) {
        setservicetypetranslator((event.target.value));
    }
    function handlelaoction(event) {
        setlaoction((event.target.value));
    }

    function handlenationalId(event) {
        setnationalId((event.target.value));
    }

    function handleconnectAs(event) {
        setconnectAs((event.target.value));
    }

    function handledate(event) {
        setdate((event.target.value));
    }
    function handletime(event) {
        settime((event.target.value));
    }

    function handledelivery(event) {
        setdelivery((event.target.value));
    }

    function handleemail(event) {
        setemail((event.target.value));
    }
    function handleadtex(event) {
        setadtex((event.target.value));
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
        enrolledHearingImpaired: [{
            hearingimpairedID: nationalId
        }]
    }


    function handleClick(event) {
        event.preventDefault();
        console.log(Listservices)
        axios({
            method: "post",
            url: 'http://localhost:8080/api/serv/add',
            data: Listservices
        });
    }

    //new update 
    function handleUpdate(event) {
        event.preventDefault();
        console.log(Listservices)
        axios({
            method: "put",
            url: "http://localhost:8080/api/serv/update/{id}",
            data: Listservices
        })
    }


    if (serviceId == 1) {
        return (

            <main>
                <div className="help">
                    <div className="helpline">
                        <h2>Disaster distress Helpline</h2>
                        <h1> For hearing impaired callers : </h1>
                        <p>To contact a sign language agent directly, click the "call Now" button<br /> below or
                            call from your video phone.<br /> Support is available 24/7, 365 days a year.</p>

                    </div>
                    <div className="helplinetwo">
                        <h1>Call or Text:</h1>
                        <p>0555555555</p><hr></hr><br /><br />
                        <nav className="mynav">
                            <ul><a href="https://zoom.us/"><button className="btncall">
                                <li>
                                    call Now
                                    <span></span><span></span><span></span><span></span>
                                </li></button></a>
                            </ul>
                        </nav>


                    </div></div>
            </main>
        );
    }
    else if (serviceId == 2) {
        return (

            <main>
                <div className="text">
                    <div className="transtext">

                        <h2>Request for translaation of text</h2>
                    </div>
                    <div className="formtext">
                        <form>

                            <label class="col-25">National ID:</label>
                            <input type="text" onChange={handlenationalId} ></input><br />

                            <label class="col-25">service ID: </label>

                            <input type="text" onChange={handleserviceID}></input><br />

                            <label class="col-25">email</label>
                            <input type="text" onChange={handleemail}></input><br /><br />
                            <label class="col-25"> your text</label>
                            <textarea type="text" onChange={handleadtex}></textarea><br />

                            <button className="submit" type="submit" onClick={handleClick}><span>submit</span></button>
                            <button className="submit" type="submit" onClick={handleUpdate}><span>update</span></button>

                        </form>
                    </div>
                </div>
            </main>
        );
    }
    else if (serviceId == 3) {
        return (

            <main>

                <div className="face">
                    <div className="facetoface">
                        <h3>Face to Face Interpreting for  ​Hard of Hearing People</h3>
                        <p>​interpreters provide the crucial service of facilitating<br />
                            communication between Deaf and Hearing people.<br /><br /><br />


                            * Available in person or remotely 24 hours a day, 365 days of the year</p>
                    </div>
                    <div className="facetofacetwo" >
                        <form>


                            <label class="col-25">National  ID:</label>
                            <input type="text" onChange={handlenationalId} ></input><br /><br />

                            <label class="col-25">service ID: </label>

                            <input type="text" onChange={handleserviceID}></input><br />


                            <label style={{ marginRight: '22px' }}>Service Type: &nbsp; &nbsp;</label>

                            <select onChange={handleservicetypetranslator} name="services">
                                <option onChange={handleservicetypetranslator} value="face to face translator">select</option>

                                <option onChange={handleservicetypetranslator} value="face to face translator">face to face translator</option>
                            </select>
                            <br /><br />

                            <label class="col-25">Location:</label>

                            <input type="text" onChange={handlelaoction} ></input><br />

                            <label class="col-25">Delivery:</label><br /><br />

                            <input type="radio" id="Car" value="I have a car" name="Delivery" onChange={handledelivery} /> <label>I have a car</label><br />
                            <input type="radio" id="Nocar" value="I need delivery" name="Delivery" onChange={handledelivery} /><label>I need delivery</label><br /><br />

                            {/* <input type="text" onChange={handledelivery} ></input><br /> */}

                            <label class="col-25">date:</label>

                            <input type="text" id="note" name="note" rows="10" cols="30" onChange={handledate} /><br /><br />

                            <label class="col-25">Time:</label>

                            <input type="text" id="note" name="note" rows="10" cols="30" onChange={handletime} /><br />

                            <button className="submit" type="submit" onClick={handleClick}><span>submit</span></button>

                            <button className="submit" type="submit" onClick={handleUpdate}><span>update</span></button>

                        </form>
                    </div>
                </div>
                {/* <label>phonenumber</label>
                <input type="text" id="note" name="note" rows="10" cols="30" /><br />

                <label>gender</label><br />
                <input type="radio" value="male" /><label>male</label><br />
                <input type="radio" value="female" /><label>female</label><br />

                <label>email</label>
                <input type="text" id="note" name="note" rows="10" cols="30" /><br />

                <label>date</label><br />
                <input type="text" id="note" name="note" rows="10" cols="30" /><br />
                <label>location</label><br />
                <input type="text" id="note" name="note" rows="10" cols="30" /> */}



            </main>
        );
    }

    else {
        return (

            <main>

                <div className="online">
                    <div className="tranonline">
                        <h2>Request a sign lnguage translation online</h2>
                        <p>​interpreters provide the crucial service of facilitating<br />
                            communication between Deaf and Hearing people.<br /><br /><br />


                            * Available in person or remotely 24 hours a day, 365 days of the year</p>
                    </div>
                    <div className="tranonlinetwo" >
                        <form>


                            <label class="col-25">National ID:</label>
                            <input type="text" onChange={handlenationalId} ></input><br /><br />

                            <label class="col-25">service ID: </label>

                            <input type="text" onChange={handleserviceID}></input><br />



                            <label style={{ marginRight: '40px' }}> Service Type:</label>

                            <select onChange={handleservicetypetranslator} name="services">
                                <option onChange={handleservicetypetranslator} value="translation online">select</option>

                                <option value="translation online" onChange={handleservicetypetranslator}>translation online</option>
                            </select>
                            <br /><br />
                        </form>


                        <label class="col-25">date</label>

                        <input type="text" id="note" name="note" rows="10" cols="30" onChange={handledate} /><br /><br />

                        <label class="col-25">Time</label>

                        <input type="text" id="note" name="note" rows="10" cols="30" onChange={handletime} /><br />
                        <div className="label">
                            <label >Connect As:</label><br />
                        </div>
                        <input type="radio" id="Zoom" value="Zoom" name="Connact_As" onChange={handleconnectAs} /> <label>Zoom</label><br />
                        <input type="radio" id="FaceTime" value="FaceTime" name="Connact_As" onChange={handleconnectAs} /><label>FaceTime</label><br />
                        <input type="radio" id="Teams" value="Teams" name="Connact_As" onChange={handleconnectAs} /><label>Teams</label><br />


                        <button className="submit" type="submit" onClick={handleClick}><span>submit</span></button>

                        <button className="submit" type="submit" onClick={handleUpdate}><span>update</span></button>

                    </div>
                </div>
            </main>
        );
    }


}