import React from 'react';
import { Card, CardText, CardSubtitle, CardBody, CardFooter } from 'react-bootstrap';

const PackageCard = ({ option, selectedOption, handleCardClick }) => {
  const style = {
    width: '50%',
    border: selectedOption === option.heading ? '5px solid red !important' : 'none', // Change border color if selected
  };

  return (
    <Card key={option.id} style={style} onClick={() => handleCardClick(option.heading)}>
      <CardBody className='p-3'>
        <Card.Subtitle className="mb-2 text-muted">{option.heading.toUpperCase()}</Card.Subtitle>
        <ul>
          {option.subpoint.map((point, index) => (
            <li key={index}>
              <Card.Text>
                <span>{point}</span>
              </Card.Text>
            </li>
          ))}
          <li>
            <Card.Text>
              Here's{' '}
              <a href="#">{option.id === 2 ? 'yearly sample' : 'sample'}</a>{' '}
            </Card.Text>
          </li>
        </ul>
      </CardBody>
      <CardFooter style={{ backgroundColor: "white", border: "none" }}>
        ${option.price.replace(/\.\d+$/, '')}/month
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
