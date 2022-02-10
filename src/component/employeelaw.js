import React, { Component } from 'react'
import axios from "axios"

export default class EmployeeLaw extends Component {
    constructor() {
        super();
        this.state = {
            lawyerarray: []
        };
    }

    componentDidMount() {
        axios.get("api/serv")
            .then(results => {
                const lawyerarray = results.data;
                this.setState({ lawyerarray });
            });
    }

    deleteLawyer(serviceID) {
        axios.delete(`api/serv/delete/${serviceID}`)
            .then(resul => {
                const lawyerarray = this.state.lawyerarray.filter
                    (HearingImpaireds => HearingImpaireds.serviceID !== serviceID);
                this.setState({ lawyerarray });
            })
    }

    render() {
        return (
            <div>
                <h1> List  : </h1>
                <hr />
                {this.state.lawyerarray.map(HearingImpaireds => {
                    if (HearingImpaireds.servicetypelawyer != null) {
                        return <div key={HearingImpaireds.serviceID}>
                            <h2>{HearingImpaireds.servicetypelawyer}</h2>
                            <h2>{HearingImpaireds.adtex}</h2>
                            <p>{HearingImpaireds.appointment}</p>
                            {console.log("id "+HearingImpaireds.serviceID)}
                            <button onClick={(e) => this.deleteLawyer(HearingImpaireds.serviceID)}>delete</button>
                            <hr />
                        </div>
                    }
                })}
            </div>
        )
    }
}