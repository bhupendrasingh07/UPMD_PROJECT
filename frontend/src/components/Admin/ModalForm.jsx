import axios from "axios";
import React, { useState } from "react";
import { Button, Modal, Form, FormGroup, Row, Col } from "react-bootstrap";
import API from "../../services/API";
function ModalForm() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [formData, setFormData] = useState({
    heading: "",
    subtopics: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    const newErrors = { ...errors };
    if (name === "heading" && !value) {
      newErrors.heading = "Heading is required";
    } else {
      delete newErrors.heading;
    }
    setErrors(newErrors);
  };

  const handleSubtopicChange = (index, event) => {
    const { name, value } = event.target;
    const updatedSubtopics = [...formData.subtopics];
    updatedSubtopics[index][name] = value;
    setFormData({ ...formData, subtopics: updatedSubtopics });
  };

  const handleAddSubtopic = () => {
    setFormData({
      ...formData,
      subtopics: [...formData.subtopics, { title: "",slug:"", icon: "" }],
    });
  };

  const handleRemoveSubtopic = (index) => {
    const updatedSubtopics = [...formData.subtopics];
    updatedSubtopics.splice(index, 1);
    setFormData({ ...formData, subtopics: updatedSubtopics });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await API.post("/admin/create-sidebar", formData);
      console.log("Form data saved successfully:", response.data);
     
    } catch (error) {
      console.error("Error saving form data:", error);
      
    }
    
    handleCloseModal();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShowModal}>
        Book Now
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title id="myModalLabel">Create Sidebar Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="heading">
              <Form.Label> <h5>Heading :</h5></Form.Label>
              <Form.Control
              className="mb-3 text-center"
                type="text"
                name="heading"
                value={formData.heading}
                onChange={handleChange}
              />
              {errors.heading && <Form.Text className="text-danger">{errors.heading}</Form.Text>}
            </Form.Group>

            <h5>Subtopics</h5>
            {formData.subtopics.map((subtopic, index) => (
              <div key={index} className="subtopic-group">
               
                <h6>Subtopic {index + 1}</h6>
                
                

                <Form.Group controlId={`title_${index}`}>
                  <Form.Label>Title:</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={subtopic.title}
                    onChange={(event) => handleSubtopicChange(index, event)}
                  />
                </Form.Group>
                <Form.Group controlId={`icon_${index}`}>
                  <Form.Label>Slug:</Form.Label>
                  <Form.Control
                    type="text"
                    name="slug"
                    value={subtopic.slug}
                    onChange={(event) => handleSubtopicChange(index, event)}
                  />
                </Form.Group>

                <Form.Group controlId={`icon_${index}`}>
                  <Form.Label>Icon (optional):</Form.Label>
                  <Form.Control
                    type="text"
                    name="icon"
                    value={subtopic.icon}
                    onChange={(event) => handleSubtopicChange(index, event)}
                  />
                </Form.Group>
                <div className="text-center">
                <Button variant="danger" className="m-3" onClick={() => handleRemoveSubtopic(index)}>
                  Remove Subtopic
                </Button>
                </div>
              </div>
            ))}
            <div className="d-flex">
            <Button variant="primary" className="m-3" onClick={handleAddSubtopic}>
              Add Subtopic
            </Button>

            <Button className="m-3 justify-content-around" type="submit" >Create Sidebar</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;
