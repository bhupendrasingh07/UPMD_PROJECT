import React from "react";
import {  Button} from "react-bootstrap";
import { FaCrown } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { BsArrowLeftSquareFill } from "react-icons/bs";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";

const Header = ({toggleSidebar}) => {
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >


        <div >
          <div className="logo d-flex align-items-center justify-content-around">
            <img src="./" alt="" />
            <span className=" mr-2 d-none d-lg-block"><Link to="/portal">UPMD</Link></span>
            <span className="m-4" onClick={toggleSidebar}>
            <BsArrowLeftSquareFill />
            </span>
          </div>
         
        </div>
        {/* End Logo */}
          
        <div className=" mx-1 d-flex align-items-center justify-content-between">
            <Button>Become a Pro<span className="m-2"><FaCrown /></span> </Button>
        </div>

        <div className=" mx-1  d-flex align-items-center justify-content-between" >
           <Button className="btn btn-primary">Book a Strategy Call</Button>
        </div>

        <div className="mx-2">
        <Navbar variant="light" bg="white" >
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-light-example"
              title="Resource"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">Make $$</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Case Studies   </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Managed SEO</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Metric Lookup</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SEO Templates</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Rate Sheet Helpdesk</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

        </div>



        <div className="mx-2">
        <Navbar variant="light" bg="white" >
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-light-example"
              title="My Order"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">Orders</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Invoices
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Subscription</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                Add Funds
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

        </div>

        
        <div className="nav-item">
                <a href="" className="nav-link" data-pjax="data-pjax">
                    Add Credits <span className="badge" style={{color:"black"}}>$0.00</span></a>
        </div>
        



        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">

        
            

            
            
            <li className="nav-item dropdown">
              <a
                className="nav-link nav-icon"
                href="#"
                data-bs-toggle="dropdown"
              >
                <IoNotifications />
                <span className="badge bg-primary badge-number">4</span>
              </a>
              {/* End Notification Icon */}
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                <li className="dropdown-header">
                  You have 4 new notifications
                  <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                      View all
                    </span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-exclamation-circle text-warning" />
                  <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-x-circle text-danger" />
                  <div>
                    <h4>Atque rerum nesciunt</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>1 hr. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-check-circle text-success" />
                  <div>
                    <h4>Sit rerum fuga</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>2 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="notification-item">
                  <i className="bi bi-info-circle text-primary" />
                  <div>
                    <h4>Dicta reprehenderit</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>4 hrs. ago</p>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li className="dropdown-footer">
                  <a href="#">Show all notifications</a>
                </li>
              </ul>
              {/* End Notification Dropdown Items */}
            </li>
            {/* End Notification Nav */}
            
          
            <ProfileDropdown></ProfileDropdown>
            {/* End Profile Nav */}
          </ul>
        </nav>
        
        
        {/* End Icons Navigation */}
      </header>
    </>
  );
};

export default Header;
