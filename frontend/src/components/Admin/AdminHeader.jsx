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
import ProfileDropdown from "../../components/ProfileDropdown";

const AdminHeader = ({toggleSidebar}) => {
  return (
    <>
      <header
        id="header"
        className="header fixed-top d-flex align-items-center"
      >


        <div >
          <div className="logo d-flex align-items-center justify-content-around">
            
            <span className=" d-none d-lg-block"><Link to="/admin">Loganix</Link></span>
          </div>
         
        </div>
        {/* End Logo */}
        

        <nav className="header-nav ms-auto">
            <ProfileDropdown></ProfileDropdown>
          
        </nav>
        
        
        {/* End Icons Navigation */}
      </header>
    </>
  );
};

export default AdminHeader;
