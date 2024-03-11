import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const CreateForm = ({ onSubmit, onCancel }) => {
  const [newItem, setNewItem] = useState({ heading: '', subtopics: [] });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleAddSubtopic = () => {
    setNewItem((prevItem) => ({ ...prevItem, subtopics: [...prevItem.subtopics, ''] }));
  };

  const handleRemoveSubtopic = (index) => {
    setNewItem((prevItem) => {
      const updatedSubtopics = [...prevItem.subtopics];
      updatedSubtopics.splice(index, 1);
      return { ...prevItem, subtopics: updatedSubtopics };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newItem); // Pass the new item data to the parent component
    setNewItem({ heading: '', subtopics: [] }); // Reset form after submission
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Create New Item
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <label htmlFor="heading">Heading:</label>
            <input type="text" id="heading" name="heading" value={newItem.heading} onChange={handleChange} required />

            <label htmlFor="subtopics">Subtopics:</label>
            <ul>
              {newItem.subtopics.map((subtopic, index) => (
                <li key={index}>
                  <InputGroup className="mb-2">
                    <FormControl
                      type="text"
                      name={`subtopic-${index}`}
                      value={subtopic}
                      onChange={(event) => handleNewSubtopicChange(index, event)}
                      required
                    />
                    <Button variant="outline-danger" onClick={() => handleRemoveSubtopic(index)}>
                      - Remove
                    </Button>
                  </InputGroup>
                </li>
              ))}
            </ul>
            <Button variant="secondary" onClick={onCancel}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Create
            </Button>
            <Button variant="outline-success" onClick={handleAddSubtopic}>
              + Add Subtopic
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateForm;
