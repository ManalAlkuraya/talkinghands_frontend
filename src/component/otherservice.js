//import { NavLink ,Link ,Outlet} from "react-router-dom";
//import {getOtherservice} from "../service";
// import React from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
 export default function Otherservice() {
//     let otherservice= getOtherservice();
   const [info, setInfo]= useState([{id:"",nationalId:"",servicetypetranslator:"",servicetypelawyer:"",servicetypedoctor:"",laoction:"",
data:"",time:"",connectAs:"",email:"",delivery:"",adtex:"",appointment:"",course:""
}])

   useEffect(() =>{
       axios.get("api/serv")
       .then(result => setInfo(result.data));
   },[]);

   return(
       <main>
           <h1 className="onlineclass" style={{color:"#203b24" , paddingLeft:"45%"}}>my request </h1>
           {info.map(HearingImpaireds=>{
               return <div className="container" key={HearingImpaireds.id}>
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
           <h3>{HearingImpaireds.course}</h3><hr/>

               </div>
           })}
   
       </main>
   )


//     return (
//       <main style={{ padding: "1rem 0" }}>
          
//         <h2>otherservice "delete</h2>
       

//         <div style={{ display: "flex", color: "#43a6ac" }}>

//         <nav
//           style={{
//             borderRight: "solid 1px",
//             padding: "1rem"
//           }}
//         >

        
//         {otherservice.map(services=>(
//             <NavLink 
//             style={({ isActive }) => ({ display: "block", margin: "1rem 0", color: isActive ? "#43a6ac" : "" })}

//             to={`/otherservice/${services.id}`}
//             key={services.id}
//             >
//                 {services.name}
//             </NavLink>
        
//         ))}
//         </nav>
//         </div>
    
//       <Outlet/>
//       </main>
//     );
     }