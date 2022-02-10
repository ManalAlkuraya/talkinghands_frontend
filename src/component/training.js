import { NavLink ,Link ,Outlet} from "react-router-dom";
import { getTraining} from "../service";
import React from "react";
export default function Training() {
    let training= getTraining();
   
    return (
      <main style={{ padding: "1rem 0" }}>
          
        
       

        <div style={{ display: "flex", color: "#43a6ac" }}>

        <nav
          style={{
            borderRight: "solid 1px",
            padding: "1rem"
          }}
        >

        
        {training.map(trainings=>(
            <NavLink 
            style={({ isActive }) => ({ display: "block", margin: "1rem 0", color: isActive ? "#43a6ac" : "" })}

            to={`/training/${trainings.id}`}
            key={trainings.id}
            >
                {trainings.name}
            </NavLink>
        
        ))}
        </nav>
        </div>
    
      <Outlet/>
      </main>
    );
    }