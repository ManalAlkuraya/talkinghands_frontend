import { Link, Outlet } from 'react-router-dom';
export default function Servicefordeaf() {

    return (
      
      <main style={{ padding: "1rem 0" }}>
        <div className="service">

        <h2>We have these services for you </h2>

        <Link to="/requesttranslator">
          <button className="servicedeaf"><span>request translator</span></button></Link>
          <br />
          <Link to="/training">
          <button className="servicedeaf" ><span>Training</span></button></Link>
          <br />

          <Link to="/otherservice">
        <button className="servicedeaf"><span>rall request service</span></button></Link>

<br />


        <Link to="/requestlawyer">
          <button className="servicedeaf"><span>requestlawyer</span></button></Link>
          <br />
          <Link to="/requestdoctor">
          <button className="servicedeaf"><span>requestdoctor</span></button></Link>
</div>
        <Outlet/>
      </main>
    );
    }