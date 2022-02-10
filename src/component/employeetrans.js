import React from 'react'
import axios from "axios"
import { Component } from "react";

export default class EmployeeTrans extends Component {
    constructor() {
        super();
        this.state = {
            translatorarray: []
        };
    }
    //  هذا الكود يقراء البيانات من قاعدة البيانات ويستعرضها لي في الفرونت اند
    componentDidMount() {
        axios.get("api/serv")
            .then(result => {
                const translatorarray = result.data;
                this.setState({ translatorarray });

            });

    }
    deletetranslator(serviceID) {
        axios.delete(`api/serv/delete/${serviceID}`)
            .then(resul => {
                const translatorarray = this.state.translatorarray.filter
                    (enrolledHearingImpaired => enrolledHearingImpaired.serviceID !== serviceID);
                this.setState({ translatorarray });

            })

    }
    // const [data, setData] = useState([{ id:"",servicetype: "", laoction: "", delivery:"" , date: "" , time: "" , connectAs: "" , email:""}]);
    // useEffect(() => {
    //     axios.get("api/serv")
    //         .then(result => setData(result.data));
    //     console.log(data);
    // }, []);


    // function deleteProposal(id,e){
    //     console.log("delete")
    //     axios.delete(`delete/${id}`)
    //     console.log("alst")
    // }
    // }
    // function sendService(id,e){
    //     console.log("send")
    //     axios.get(`api/serv/${id}`)
    //     .then(result => setData(result.data));
    //     console.log(data);
    // }
    render() {

        return (
            <div>
                <h1 className="onlineclass" style={{color:"#203b24" , paddingLeft:"45%"}}> List  : </h1>
                <hr />
                {this.state.translatorarray.map(enrolledHearingImpaired => {
                    if (enrolledHearingImpaired.servicetypetranslator != null) {
                        return <div className="container" key={enrolledHearingImpaired.serviceID}>
                            <h2>{enrolledHearingImpaired.servicetypetranslator}</h2>
                            <h2>{enrolledHearingImpaired.laoction}</h2>
                            <p>{enrolledHearingImpaired.delivery}</p>
                            <h2>{enrolledHearingImpaired.date}</h2>
                            <h2>{enrolledHearingImpaired.time}</h2>
                            <h2>{enrolledHearingImpaired.connectAs}</h2>
                            <h2>{enrolledHearingImpaired.email}</h2>
                            {console.log("id "+enrolledHearingImpaired.serviceID)}
                            <button onClick={(e) => this.deletetranslator(enrolledHearingImpaired.serviceID)}>delete</button>
                            {/* <button onClick={(e)=> sendService(HearingImpaireds.id,e)} >send</button> */}

                            <hr />
                        </div>
                    }
                })}
            </div>
        )
    }
}






// import React, { useEffect, useState } from 'react'
// import axios from "axios"
// export default function EmployeeTrans() {

//     const [data, setData] = useState([{ id:"",servicetype: "", laoction: "", delivery:"" , date: "" , time: "" , connectAs: "" , email:""}]);
//     useEffect(() => {
//         axios.get("api/serv")
//             .then(result => setData(result.data));
//         console.log(data);
//     }, []);

//زر الحذف ماضبط في الفنكشن وحولنا الى كلاس 
//     // const deleteProposal = (data) => {
//     //     console.log('delete Car');
//     //     return axios.delete(`delete/${data.carId}`);
//     //   };

//     function deleteProposal(id,e){
//         console.log("delete")
//         axios.delete(`delete/${id}`)
//         console.log("alst")
//     }

//     // function sendService(id,e){
//     //     console.log("send")
//     //     axios.get(`api/serv/${id}`)
//     //     .then(result => setData(result.data));
//     //     console.log(data);
//     // }
//     return (
//         <div>
//             <h1> List Of Cars : </h1>
//             <hr />
//             {data.map(HearingImpaireds => {
//                 return <div key={HearingImpaireds.id}>
//                      <h2>{HearingImpaireds.servicetype}</h2>
//                     <h2>{HearingImpaireds.laoction}</h2>
//                     <p>{HearingImpaireds.delivery}</p>
//                     <h2>{HearingImpaireds.date}</h2>
//                     <h2>{HearingImpaireds.time}</h2>
//                     <h2>{HearingImpaireds.connectAs}</h2>
//                     <h2>{HearingImpaireds.email}</h2>
//                      <button onClick={(e)=> deleteProposal(HearingImpaireds.id,e)}>delete</button>
//                      {/* <button onClick={(e)=> sendService(HearingImpaireds.id,e)} >send</button> */}

//                     <hr/>
//                 </div>
//             })}
//         </div>
//     )
// }