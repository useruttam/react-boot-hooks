import React, { useState } from "react";
import './App.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {

  //use of hook for couting
  const [noOfRows, setNoOfRows] = useState(1);
  return (
    <div className="app container p-5">
    <table class="table table-hover table-bordered p-5">
        <thead>
          <tr>
            <th scope="col">Patient Name:Your name </th>
            <th scope="col">Patient ID:34ID4843</th>
            <th scope="col">Blood Group: A+</th>
          </tr>
        </thead>
        </table>
        <table class="table table-hover table-bordered p-5">
        <tr>
        <p>Name of Emergency Contact: XYZETG</p>
        </tr>
        <tr>
        <p>Emergency Contact Number :9709174702 </p>
        </tr>
        <tr>
        <p>Significant Medical History: cancerous </p>
        </tr>
        <tr>
        <p>Drug Allergeis: Metformin, Nontelukast </p>
        </tr>

        </table>

      <h1 className="p-5">Patient Record History</h1>
      <button type="button" class="btn btn-primary me-3"  onClick={() => setNoOfRows(noOfRows + 1)}>Add Treatement</button>
      <table class="table table-hover table-bordered p-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">DATE</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Diagnosis</th>
            <th scope="col">Prescription</th>
          </tr>
        </thead>
        <tbody>
        {[...Array(noOfRows)].map((elementInArray, index) => {
         
              return (
                <tr>
                <th scope="row">{index}</th>
                <td><input type="date"></input></td>
                <td><input type="text"></input></td>
                <td><input type="text"></input></td>
                <td><a href="#"> See Prescription</a></td>
                <td></td>
              </tr>
                );
            })}

            
            </tbody>
            </table>
            
            <button type="button" class="btn btn-danger" onClick={() => setNoOfRows(noOfRows - 1)}>Delete</button>
       </div>
  );
}