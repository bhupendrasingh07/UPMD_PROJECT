import React,{useState} from 'react'
import Header from './Header';
import Sidebar from './NewSideBar';
import { Outlet } from 'react-router-dom';

const Layout = ({children}) => {
     const [isOpen, setIsOpen] = useState(false); // Initial state of sidebar
     const toggleSidebar = () => {
      setIsOpen(!isOpen); // Toggle state on button click
      };

  return (
    
    <div className={isOpen ? "toggle-sidebar" : ""}>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar />
      <div>
        <main>
            <Outlet></Outlet>
        </main>
      </div>
    </div>
  )
}

export default Layout