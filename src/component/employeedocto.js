import React, { Component } from 'react'
import axios from "axios"

export default class Employeedocto extends Component {
    constructor() {
        super();
        this.state = {
            doctorarray: []
        };
    }

    componentDidMount() {
        axios.get("https://talkinghandbackend.herokuapp.com/api/serv")
            .then(resu => {
                const doctorarray = resu.data;
                this.setState({ doctorarray });
            });
    }

    deleteDoctor(serviceID) {
        axios.delete(`https://talkinghandbackend.herokuapp.com/api/serv/delete/${serviceID}`)
            .then(resul => {
                const doctorarray = this.state.doctorarray.filter
                    (HearingImpaireds => HearingImpaireds.serviceID !== serviceID);
                this.setState({ doctorarray });
            })
    }

    render() {
        return (
            <div>
                <h1> List  : </h1>
                <hr />
                {this.state.doctorarray.map(HearingImpaireds => {
                    if (HearingImpaireds.servicetypedoctor != null) {
                        return <div key={HearingImpaireds.serviceID}>
                            <h2>{HearingImpaireds.servicetypedoctor}</h2>
                            <h2>{HearingImpaireds.adtex}</h2>
                            <p>{HearingImpaireds.appointment}</p>
                            {console.log("id "+HearingImpaireds.serviceID)}
                            <button onClick={(e) => this.deleteDoctor(HearingImpaireds.serviceID)}>delete</button>
                            <hr />
                        </div>
                    }
                })}
            </div>
        )
    }
}