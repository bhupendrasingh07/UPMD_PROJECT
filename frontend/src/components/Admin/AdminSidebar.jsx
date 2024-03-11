import React, { useState, useEffect } from "react";
import API from "../../services/API";
import ModalForm from "./ModalForm";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { TiEdit } from "react-icons/ti";

// import { MdDelete } from "react-icons/md";
const AdminSidebar = () => {
  
  // const sidebarItems = [
  //     {
  //         id: 1,
  //         heading: "Linking Building",
  //         subtopics: [
  //           {
  //             title: "Guest Post",
  //             slug: "/order/guest-post",
  //             icon: <FaAddressCard />,
  //           },
  //           { title: "Niche Edits", slug: "/order/niche-edit", icon: <FaLink /> },
  //           {
  //             title: "Authority Link",
  //             slug: "/order/authority-link",
  //             icon: <FaChartLine />,
  //           },
  //           {
  //             title: "Brand Link",
  //             slug: "/order/brand-link",
  //             icon: <FaLink />,
  //           },
  //           {
  //             title: "HARO Link",
  //             slug: "/order/haro",
  //             icon: <FaLink />,
  //           },
  //           {
  //             title: "Press Release",
  //             slug: "/order/press-release",
  //             icon: <FaRegNewspaper />,
  //           },
  //           {
  //             title: "Shop the List",
  //             slug: "/portal/page/link",
  //             icon: <FaLink />,
  //           },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         heading: "Local SEO",
  //         subtopics: [
  //           {
  //               title: 'Website Audit',
  //               slug: '/order/website-audit',
  //                icon: <FaSearchDollar />,
  //             }, {
  //               title: 'Content Strategy',
  //               slug: '/order/content-strategy',
  //               icon:<FaChessKnight/> ,

  //             }, {
  //               title: 'Keyword Research',
  //               slug: '/order/keyword-search',
  //               icon: <FaBinoculars />,

  //             },
  //             {
  //               title: 'Keyword Gap Analysis',
  //               slug: '/order/keyword-gap-analysis',
  //               icon: <FaSearchDollar />,

  //             },
  //             {
  //               title: 'Backlink Gap Analysis',
  //               slug: '/order/backlink-gap-analysis',
  //               icon: <FaSearchDollar />,

  //             },

  //             {
  //               title: 'SEO Package',
  //               slug: '/order/seo-package',
  //               icon: <TbSettingsCog />,

  //             },

  //             {
  //               title: 'SEO Bundles',
  //               slug: '/order/seo-bundles',
  //               icon: <FaChartLine />,

  //             },
  //             {
  //               title: 'Hire an SEO',
  //               slug: '/order/seo-hours',
  //               icon: <FaChartLine />,

  //             },
  //             {
  //               title: 'SEO Templates',
  //               slug: 'portal/page/guides',
  //               icon: <FaChartLine />,

  //             }
  //         ],
  //       },

  //       {
  //           id: 3,
  //           heading: 'Content',
  //           subtopics: [
  //               {
  //                   title: 'Content Writing',
  //                   slug: '/order/contant',
  //                    icon: <FaPencilAlt/>,
  //                 },
  //                 {
  //                   title: 'Content Brief',
  //                   slug: '/order/brief',
  //                    icon: <FaPencilAlt/>,
  //                 }
  //           ],
  //         },

  //         {
  //           id: 4,
  //           heading: 'SME',
  //           subtopics: [
  //               {
  //                   title: 'Paid Search',
  //                   slug: '/portal/page/ppc',
  //                    icon: <RiAdvertisementFill/>,
  //                 }
  //           ],
  //         },

  //         {
  //           id: 5,
  //           heading: 'Account',
  //           subtopics: [
  //               {
  //                   title: 'Reports',
  //                   slug: '/portal/agency/report',
  //                    icon: <IoBarChartSharp/>,
  //                 },
  //           ],
  //         },
  //   ];

  // API CALL
  const [sidebarData, setSidebarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/admin/all-sidebarItem"); // Replace with your API endpoint
        setSidebarData(response.data);
      } catch (error) {
        console.error("Error fetching sidebar data:", error);
        // Handle errors appropriately, e.g., display an error message
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <aside
        id="sidebar"
        className="sidebar"
        style={{
          backgroundImage: "linear-gradient(180deg,#5a67bd 0,#004a99 )",
        }}
      >
        <div className="mx-5">
          {" "}
          <ModalForm></ModalForm>
        </div>

        <ul className="sidebar-nav" id="sidebar-nav">
          {sidebarData.map((item,index) => (
            <li key={index}>
              <div className="nav-heading">{item.heading}</div>
              <div className="d-flex">
                {item.subtopics.map((subtopic) => (
                  // <li  className="nav-item  my-3" key={subtopic.id}>
                  //     <Link style={{textDecoration:"none", backgroundColor:"transparent" ,color:"white"}} to={subtopic.slug}><span>{subtopic.icon}</span>{subtopic.title}</Link>
                  // </li>
                  <div className="nav-item d-flex" key={subtopic.title}>
                    <Link
                      className="nav-link collapsed"
                      to={subtopic.slug}
                      style={{
                        textDecoration: "none",
                        backgroundColor: "transparent",
                        color: "white",
                      }}
                    >
                      {/* <span >{subtopic.icon}</span> */}
                      <span className="mx-3">{subtopic.title}</span>
                    </Link>
                    <div>
                      <span><TiEdit style={{width:'1.5em',height:'1.5em',color:"white",marginLeft:'12px'}}/></span>
                      <span><MdDelete style={{width:'1.5em',height:'1.5em',color:"white",marginLeft:'12px'}}/></span>
                    </div>
                    
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default AdminSidebar;
