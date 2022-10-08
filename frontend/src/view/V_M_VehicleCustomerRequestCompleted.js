import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Navbar from "../components/V_M_Navbar";
import swal from "sweetalert";
import { reactBaseURL } from "../config";

//css
import "../css/modern.css";

//jssDADSAD
import "../js/app.js";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

// Controllers
import { getAllVehicles } from "../controllers/vehicles";
import { getAllVehicleBooking } from '../controllers/vehicleBooking';

export default function V_M_VehicleAppointmentView() {

  const [vehicleBookingList, setVehicleBookingList] = useState([]);
  const [vehicleList, setVehicleSelect] = useState([]);
  

  useEffect(() => {
    getAllVehicleBooking().then((result) => {
        setVehicleBookingList(result);

        //initialize datatable
        $(document).ready(function () {
            $('#example').DataTable();
        });
    });

    getAllVehicles().then((result) =>{
        
      setVehicleSelect(result);

        //initialize datatable
        $(document).ready(function () {
            $('#example').DataTable();
        });



    })

}, [])

function pending() {
  window.location.replace(reactBaseURL + "/vehicle-customer-request");
}

function active() {
  window.location.replace(reactBaseURL + "/vehicle-customer-request-Active");
}

function done() {
  window.location.replace(reactBaseURL + "/vehicle-customer-request-Completed");
}



  return (
    <div class="wrapper">
      <Navbar />
      <div class="main">
        <main class="content">
          <div class="container-fluid">
            <div class="header">
              <h1 class="header-title">Customer Vehicle Request
              </h1>
            <br></br>
            <br></br>
            <div class="btn-group  mb-3" role="group" aria-label="Large button group">
                                
                                <button onClick={() => pending()} type="button" class="btn btn-secondary">Pending</button>
                                <button onClick={() => active()} type="button" class="btn btn-secondary">Ongoing</button>
                                <button onClick={() => done()} type="button" class="btn btn-secondary">Done</button>
                            </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <table id="example" class="table table-striped my">
                    
                    <thead>
                      <tr>
                        <th>NIC</th>
                        <th>Pick Up</th>
                        <th>Pick up Date</th>
                        <th>Pick up time</th>
                        <th>Requested Vehicle Type</th>
                      </tr>
                    </thead>
                    <tbody>
                   
                      {vehicleBookingList.map((value, index)=> {
                        return (
                          <tr key={index} >
                            <td>{value.nic}</td>
                            <td>{value.places}</td>
                            <td>{value.date}</td>
                            <td>{value.time}</td>
                            <td>{value.type}</td>
                            <td>{value.identification}</td>

                          </tr>
                        );
                      })}
                 
                    </tbody>


                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}







