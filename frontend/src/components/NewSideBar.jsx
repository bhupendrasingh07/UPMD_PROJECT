import React, { useState,useEffect } from 'react';
import API from "../services/API";

import { FaChartLine, FaLink, FaRegNewspaper } from "react-icons/fa"
import { FaAddressCard } from "react-icons/fa6";
import { FaSearchLocation } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaSearchDollar } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa";
import { FaBinoculars } from "react-icons/fa";
import { TbSettingsCog } from "react-icons/tb";
import { IoBarChartSharp } from "react-icons/io5";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from 'react-icons/bs';



function Sidebar() {
  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get('/admin/all-sidebarItem'); // Replace with your API endpoint
        setSidebarData(response.data);
      } catch (error) {
        console.error('Error fetching sidebar data:', error);
        // Handle errors appropriately, e.g., display an error message
      }
    };

    fetchData();
  }, []);
  
 console.log(sidebarData)
  return (
    
    <aside id="sidebar" className="sidebar" style={{backgroundImage:"linear-gradient(rgb(6 6 6) 0px, rgb(48 56 65))"}}>
      <ul className="sidebar-nav" id="sidebar-nav" >
        {sidebarData.map((item) => (
          <li key={item.id}>
            <li className="nav-heading">{item.heading}</li>
            <ul>
              {item.subtopics.map((subtopic) => (
                // <li  className="nav-item  my-3" key={subtopic.id}>
                //     <Link style={{textDecoration:"none", backgroundColor:"transparent" ,color:"white"}} to={subtopic.slug}><span>{subtopic.icon}</span>{subtopic.title}</Link>
                // </li>
                <li className="nav-item"  key={subtopic.title}>
                <Link className="nav-link collapsed" to={subtopic.slug} style={{textDecoration:"none", backgroundColor:"transparent" ,color:"white"}}>
                    {/* <span >{subtopic.icon}</span> */}
                  <span className='mx-3'>{subtopic.title}</span>
                </Link>
              </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
