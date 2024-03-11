import React, { useState } from 'react';
import { Form, FormLabel, FormControl, FormGroup, Col, Row, Card, Button } from 'react-bootstrap';
import PackageCard from './PackageCard';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {addToCart} from "../redux/features/cart/cartSlice";
import store from '../redux/store';

const NewPackageForm = () => {
  const{user}=useSelector((state)=>state.auth)

  const [formData, setFormData] = useState({
    orderTitle: '',
    paymentFrequency: '',
    selectedOption: [],
  });

  const data = [
    {
      id: 1,
      heading: 'Authority Package',
      subpoint: [
        '1,000+ organic visits per month',
        '30 average Domain Rating/Authority',
        '1-month average delivery time',
      ],
      price: '$380.00/Monthly',
    },
    {
      id: 2,
      heading: 'Multi-topic Edit (monthly)',
      subpoint: [
        '2,000+ organic visits per month',
        '40 average Domain Rating/Authority',
        '2-month average delivery time',
      ],
      price: '$200.00/Monthly',
    },
    {
      id: 3,
      heading: 'Multi-topic Edit (monthly)',
      subpoint: [
        '2,000+ organic visits per month',
        '40 average Domain Rating/Authority',
        '2-month average delivery time',
      ],
      price: '$200.00/Monthly',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  // const handleRadioChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleCardClick = (optionId) => {
  
    const updatedSelectedOptions = formData.selectedOption.includes(optionId)
      ? formData.selectedOption.filter(id => id !== optionId)
      : [...formData.selectedOption, optionId];
  
    setFormData({ ...formData, selectedOption: updatedSelectedOptions });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 
    try {
      store.dispatch(addToCart(formData))
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3" controlId="formEmail">
          <FormLabel>Email</FormLabel>
          <FormControl
            type="email"
            placeholder="name@example.com"
            name="email"
            value={user && user.email }
            onChange={handleInputChange}
          />
          <small className="w-100 text-secondary">To change your email go to <Link to='/profile'> your profile.</Link> </small>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formOrderTitle">
          <FormLabel>Order Title</FormLabel>
          <FormControl
            type="text"
            placeholder="Order Title"
            name="orderTitle"
            value={formData.orderTitle}
            onChange={handleInputChange}
          />
        </FormGroup>

        <fieldset>
          <Form.Group as={Row} className="mt-3">
            <Col sm={10}>
              <FormGroup>
                <Form.Check
                  type="radio"
                  label="One-time only"
                  name="paymentFrequency"
                  id="formPaymentFrequency1"
                  value="one-time"
                  checked={formData.paymentFrequency === 'one-time'}
                  onChange={handleInputChange}
                />
                <Form.Check
                  type="radio"
                  label="Recurring monthly"
                  name="paymentFrequency"
                  id="formPaymentFrequency2"
                  value="monthly"
                  checked={formData.paymentFrequency === 'monthly'}
                  onChange={handleInputChange}
                />
              </FormGroup>
            </Col>
          </Form.Group>
        </fieldset>

        <Card.Text className="mt-2">Choose your monthly link placement</Card.Text>
        <div className="row">
          <div className="d-flex gap-3">
            {data.map((option) => (
              <PackageCard
              
                key={option.id}
                option={option}
                selectedOption={formData.selectedOption}
                handleCardClick={handleCardClick}
              />
            ))}
          </div>
        </div>


        <Button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '12px' }}>
          Next
        </Button>
      </Form>
    </div>
  );
};

export default NewPackageForm;
