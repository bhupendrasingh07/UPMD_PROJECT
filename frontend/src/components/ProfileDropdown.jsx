import React, { useState } from 'react';
import { Navbar, Nav, Image, Dropdown, DropdownButton, DropdownToggle, DropdownMenu } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'; // Import Link component


const ProfileDropdown=()=>{
  const navigate = useNavigate();

  const{user}=useSelector((state)=>state.auth)
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // logout handler
  const handleLogout = () => {
    localStorage.clear();
    alert("Logout Successfully");
    navigate("/login");
  };

  return (
    <Nav.Item className="nav-item dropdown pe-3 d-flex align-items-center">
      <Nav.Link className="nav-link nav-profile d-flex align-items-center pe-0" onClick={handleDropdownToggle}>
        <Image src="./profilephoto.jpg" alt="Profile" className="rounded-circle" />
        {/* <span className="d-none d-md-block ps-2">K. Anderson</span> */}
      </Nav.Link>

      <Dropdown show={isDropdownOpen} onToggle={handleDropdownToggle}>
        <DropdownToggle variant="transparent" id="dropdown-basic">
          {/* Empty toggle */}
        </DropdownToggle>

        <DropdownMenu className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <Dropdown.Header>
            <h6>{user&&user.fname+user.lname}</h6>
            {/* <span>Web Designer</span> */}
          </Dropdown.Header>
          <Dropdown.Divider />

          <Link to="/portal" className="dropdown-item d-flex align-items-center">
           
            <span>Dashboard</span>
          </Link>
          <Dropdown.Divider />

          <Link to="/users-settings" className="dropdown-item d-flex align-items-center">
            
            <span>Profile</span>
          </Link>
          <Dropdown.Divider />

          <Link to="/faq" className="dropdown-item d-flex align-items-center">
            
            <span>Your Team</span>
          </Link>
          <Dropdown.Divider />

          <Dropdown.Item href="#">
            
            <span>Biling Info</span>
          </Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item href="#">
            
            <span>Reseller</span>
          </Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item href="#">
            
            <span>Affilliates</span>
          </Dropdown.Item>
          <Dropdown.Divider />

          <Dropdown.Item href="#">
            
            <span onClick={handleLogout}>Signout</span>
          </Dropdown.Item>
          <Dropdown.Divider />




        </DropdownMenu>
      
      </Dropdown>
    </Nav.Item>
  );
}

export default ProfileDropdown;
