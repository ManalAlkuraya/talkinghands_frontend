import { Link, Outlet } from 'react-router-dom';

export default function Employee() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>employees</h2>
        <div className="service">
        <Link to="/employeetranslator">
          <button className="servicedeaf"><span>employeetranslator</span></button></Link>
          
          <Link to="/employeelawyer">
          <button className="servicedeaf"><span>employeelawyer</span></button></Link>
          
          <Link to="/employeedoctor">
          <button className="servicedeaf"><span>employeedoctor</span></button></Link>

          {/* <Link to="/">
        <button className="servicedeaf">Volunteer</button></Link> */}

</div>
        <Outlet/>
      </main>
    );
}