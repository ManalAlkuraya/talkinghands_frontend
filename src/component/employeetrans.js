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
        axios.get("https://talkinghandbackend.herokuapp.com/api/serv")
            .then(result => {
                const translatorarray = result.data;
                this.setState({ translatorarray });

            });

    }
    deletetranslator(serviceID) {
        axios.delete(`https://talkinghandbackend.herokuapp.com/api/serv/delete/${serviceID}`)
            .then(resul => {
                const translatorarray = this.state.translatorarray.filter
                    (enrolledHearingImpaired => enrolledHearingImpaired.serviceID !== serviceID);
                this.setState({ translatorarray });

            })

    }
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

                            <hr />
                        </div>
                    }
                })}
            </div>
        )
    }
}