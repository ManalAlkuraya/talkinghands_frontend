import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Servicefordeaf from "./component/servicefordeaf";
import Otherservice from "./component/otherservice";
import Homepage from "./component/homepage"
import Requesttranslator from "./component/requesttranslator";
import Translators from "./component/translators";
//import Services from "./component/services";
import Training from "./component/training";
import Trainings from "./component/trainings";
import Requestlawyer from "./component/requestlawyer"
import Requestdoctor from "./component/requestdoctor";
import EmployeeTranslator from "./component/employeetranslator";
import Employee from "./component/employee";
import EmployeeLawyer from "./component/employeelawyer";
import Employeedoctor from "./component/employeedoctor";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="servicefordeaf" element={<Servicefordeaf />} />

      <Route path="requesttranslator" element={<Requesttranslator />}>
        <Route path=":translatorsId" element={<Translators />} />
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />

      <Route path="otherservice" element={<Otherservice />} />
        {/* <Route path=":servicesId" element={<Services />} />
      </Route> */}

      <Route path="training" element={<Training />}>
        <Route path=":trainingsId" element={<Trainings />} />
      </Route>
      <Route path="requestlawyer" element={<Requestlawyer />}/>
      <Route path="requestdoctor" element={<Requestdoctor />}/>
      <Route path="employee" element={<Employee />}/>
      <Route path="employeetranslator" element={<EmployeeTranslator />}/>
      <Route path="employeelawyer" element={<EmployeeLawyer />}/>
      <Route path="employeedoctor"element={<Employeedoctor />}/>
      
    </Routes>
  </BrowserRouter>,
  rootElement);
