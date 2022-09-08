import React from 'react';
import { Link } from 'react-router-dom';
// import  '../App.css';

// import {BiHomeAlt,BiClipboard,BiCar,BiCart,BiMessageSquareAdd} from 'react-icons/bi';

export default function C_M_Navbar() {
    return (
        <nav id="sidebar" class="sidebar">

            <Link to='/' class="sidebar-brand" > <img style={{ maxWidth: 50 }} src={require('../img/logo/logo.png')} /> DELICACY INN </Link>

            <div class="sidebar-content">
                <div class="sidebar-user">
                    <div> <Link to='/'> <img src={require('../img/avatars/avatar.jpg')} class="img-fluid rounded-circle mb-2" /></Link></div>
                    <div class="fw-bold">Thisara Kavinda</div>
                    <small>Food & Beverage Manager</small>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>





                <ul class="sidebar-nav">
                    <li class="sidebar-item ">
                        <Link class="sidebar-link"to='/foodDashboard'>
                            <i class="align-middle me-2 fas fa-fw fa-home"></i> <span class="align-middle">Dashboards</span>
                        </Link>

                    </li>

                    <li class="sidebar-item ">
                        <a data-bs-target="#customer" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle me-2 fas fa-fw fa-user-friends"></i> <span class="align-middle">Food and Beverages</span>
                        </a>
                        <ul id="customer" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                            <li class="sidebar-item"><Link to='/customerAdd' class="sidebar-link" >Foods</Link></li>
                            <li class="sidebar-item"><Link to='/customerView' class="sidebar-link" >Beverages</Link></li>
                            <li class="sidebar-item"><Link to='/customerView' class="sidebar-link" >Deserts</Link></li>
                            <li class="sidebar-item"><Link to='/customerView' class="sidebar-link" >Fast Foods</Link></li>
                        </ul>
                    </li>

                    <li class="sidebar-item">
                        <a data-bs-target="#sim" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle me-2 fas fa-fw fa-globe"></i> <span class="align-middle">Make an order</span>
                        </a>
                        <ul id="sim" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                            <li class="sidebar-item"><Link to='/test' class="sidebar-link" >Order Food</Link></li>
                        </ul>
                    </li>

                    <li class="sidebar-item">
                        <a data-bs-target="#package" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle me-2 fas fa-fw fa-cubes"></i> <span class="align-middle">Vehicle Booking</span>
                        </a>
                        <ul id="package" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                            <li class="sidebar-item"><a class="sidebar-link" href="packagePage">Manage Package</a></li>
                            <li class="sidebar-item"><a class="sidebar-link" href="packageTypePage">Manage Package Type</a></li>
                        </ul>
                    </li>

                    <li class="sidebar-item">
                        <a data-bs-target="#report" data-bs-toggle="collapse" class="sidebar-link collapsed">
                            <i class="align-middle me-2 fas fa-fw fa-cubes"></i> <span class="align-middle">Report</span>
                        </a>
                        <ul id="report" class="sidebar-dropdown list-unstyled collapse " data-bs-parent="#sidebar">
                            <li class="sidebar-item"><a class="sidebar-link" href="packagePage">Manage Package</a></li>
                            <li class="sidebar-item"><a class="sidebar-link" href="packageTypePage">Manage Package Type</a></li>
                        </ul>
                    </li>



                </ul>
            </div>
        </nav>
    )
}



