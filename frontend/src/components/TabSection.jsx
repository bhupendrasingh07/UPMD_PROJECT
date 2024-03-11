import React, { useState, useEffect } from 'react';
import { Tab, Tabs,Card } from "react-bootstrap";
import { Accordion, AccordionItem, AccordionHeader, AccordionBody } from "react-bootstrap";
import NewPackageForm from './NewPackageForm';


const TabSection = () => {
  const [key, setKey] = useState("home");
  const [faqData, setFaqData] = useState([]);

  // Fetch data from an API endpoint in useEffect
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('your_api_url'); 
  //       const data = await response.json();
  //       setFaqData(data.faqItems); 
  //     } catch (error) {
  //       console.error('Error fetching FAQ data:', error);
        
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <div className="pagetitle mb-4">
        <h1 className="mb-2">Niche Edits</h1>
        <p>
          Links placed in the existing articles of sites with greater than 1,000
          monthly organic visitors. Choose niche-specific or not, and start
          ranking faster.{" "}
        </p>
      </div>

      {/* TABS SECTION */}
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="HOW IT'S WORKS">
          <Card className="mt-5">
            {/** Card content for Place Your Order */}
            <Card.Body>
              <Card.Title>Place Your Order</Card.Title>
              <Card.Text>
                You'll be able to specify URLs and anchor text after your order
                is placed
              </Card.Text>

              {/* Form Detail section */}
              {/* <PackageForm></PackageForm> */}
              <NewPackageForm></NewPackageForm>


            </Card.Body>
          </Card>
        </Tab>

        <Tab eventKey="profile" title="FAQ'S">
          {faqData.length > 0 ? (
            <Accordion>
              {faqData.map((item, index) => (
                <Accordion.Item eventKey={index} key={index}>
                  <Accordion.Header>{item.question}</Accordion.Header>
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <p>Loading FAQ...</p>
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabSection;
