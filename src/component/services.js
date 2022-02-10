// import { useParams } from "react-router";
// import { useState } from "react";
// import axios from "axios";
// export default function Services() {
//     let params = useParams();
//     let servId = Number(params.servicesId)
//     const [nationalID, setnationalID] = useState("")
//     const [servicetypelawyer, setservicetypelawyer] = useState("")
//     const [adtex, setadtex] = useState("")
//     const [appointment, setappointment] = useState("")


//     function handlenationalID(event) {
//         setnationalID((event.target.value));
//     }
//     function handleservicetypelawyer(event) {
//         setservicetypelawyer((event.target.value));
//     }
//     function handleadtex(event) {
//         setadtex((event.target.value));
//     }
//     function handleappointment(event) {
//         setappointment((event.target.value));
//     }

//     let ListConsultings = {
//         nationalID: nationalID,
//         servicetypelawyer: servicetypelawyer,
//         adtex: adtex,
//         appointment: appointment,
//     }

//     function handleClick(event) {
//         axios({
//             method: "post",
//             url: 'http://localhost:8080/api/serv/add',
//             data: ListConsultings
//         });
//     }
    
//     if (servId == 5) {
//         return (
//             <main>
//                 <h1>Request a Doctor 'delete</h1>

//                 <form>
//                     <label>National ID: </label>
//                     <input type="text" onChange={handlenationalID} ></input><br />
//                     <label>Service Type: </label>
//                     <input type="text" onChange={handleservicetypelawyer}></input><br />

//                     <label>Medical Consulting: </label> <br />
//                     {/* <textarea onChange={handletextarea} rows="4" cols="50" placeholder="Write your medical Consulting here"> </textarea> */}
//                     <textarea type="text" onChange={handleadtex}></textarea>
//                     <br />
//                     <input type="checkbox" onChange={handleappointment} />
//                     <label> an appointment</label> <br />
//                     <button onClick={handleClick} type="submit">submit </button>
//                 </form>

//             </main>
//         );
//     }
//     else if (servId == 6) {
//         return (
//             <main>
//                 <h1>Request a Lawyer 'delete</h1>

//                 <form>
//                     <label>National ID</label>
//                     <input type="text" onChange={handlenationalID} ></input><br />
//                     <label>Service Type</label>
//                     <input type="text" onChange={handleservicetypelawyer}></input><br />

//                     <label>legal Consulting: </label> <br />
//                     {/* <textarea onChange={handletextarea} rows="4" cols="50" placeholder="Write your legal Consulting here"> </textarea> */}
//                     <textarea type="text" onChange={handleadtex}></textarea>
                    
//                     <br />
//                     <input type="checkbox" onChange={handleappointment} />
//                     <label> an appointment</label><br />
//                     <button onClick={handleClick} type="submit">submit </button>
//                 </form>

//             </main>
//         );
//     }
// }