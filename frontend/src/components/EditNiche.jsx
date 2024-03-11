import React from "react";
// import { useState } from "react";
// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import Accordion from "react-bootstrap/Accordion";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import { CardFooter } from "react-bootstrap";
// import PackageForm from "./PackageForm";
import TabSection from "./TabSection";
import SummaryTabs from "./SummaryTabs";

const EditNiche = () => {
 

  return (
    <>
      <main id="main" className="main">
        
        {/* End Page Title */}
        <section className="section">
          <div className="row">
            
              <div className="col-lg-9">
                {/* Left Side Menu */}
                <TabSection></TabSection>
              </div>
             
              <div className="col-lg-3">
                 {/* Right Side Menu */}
                <SummaryTabs></SummaryTabs>
              </div>


          </div>
        </section>
      </main>
    </>
  );
};

export default EditNiche;
