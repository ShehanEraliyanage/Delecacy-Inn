import React, { useState, useEffect } from 'react';
import Navbar from '../components/C_M_Navbar';
import swal from 'sweetalert';
import Select from "react-select";

//css
import '../css/modern.css';

//js
import '../js/app.js';


export default function Login() {

    const employeeType = [
        { value: "Customer Manager", label: "Customer Manager" },
        { value: "Employee Manager", label: "Employee Manager" },
    ];

    const [selectedType, setSelectedType] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    function login() {
        if (selectedType === '' && email === '' && password === '') {
            swal("All field is empty..");
        } else if (email === '') {
            swal("Email field is empty");
        } else if (!validateEmail(email)) {
            swal("Enter a valid email");
        } else if (password === '') {
            swal("Password field is empty");
        } else if (selectedType === '') {
            swal("Select the employee type");
        } 
    }

    return (

        <body class="theme-blue">
            <main class="main h-100 w-100">
                <div class="container h-100">
                    <div class="row h-100">
                        <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                            <div class="d-table-cell align-middle">
                                <div class="card" style={{ marginTop: 100 }}>
                                    <div class="card" style={{ backgroundColor: '#081E3D', padding: 20, borderRadius: 0, alignItems: 'center', marginBottom: -10 }} >
                                        <img style={{ maxWidth: 100 }} src={require('../img/logo/logo.png')} />
                                    </div>
                                    <div class="card-body">
                                        <div class="m-sm-4">
                                        
                                                <div class="mb-3">
                                                    <label >Employee Type</label>
                                                    <Select class="form-control form-control-lg" options={employeeType} onChange={setSelectedType} />
                                                </div>
                                                <div class="mb-3">
                                                    <label>Email</label>
                                                    <input class="form-control " type="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div class="mb-3">
                                                    <label>Password</label>
                                                    <input class="form-control " type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                </div>

                                                <div class="text-center mt-3">
                                                    <button type="submit" class="btn  btn-primary" id="addCustomer" style={{ backgroundColor: '#081E3D', borderColor: '#081E3D', color: '#fff' }} onClick={() => login()} >Sign in</button>
                                                </div>
                                          
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>



        </body>

    )

}

