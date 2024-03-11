import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls
import { Button, Modal, Form, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'; // Import Bootstrap components
import CreateForm from './CreateForm';
const NewSidebar = () => {
  const [sidebarItems, setSidebarItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingItemId, setEditingItemId] = useState(null); // State for editing
  const [newItem, setNewItem] = useState({ heading: '', subtopics: [] }); // State for new item
  const [showModal, setShowModal] = useState(false); // State for create modal visibility

  // Function to handle data fetching on component mount
  const fetchSidebarItems = async () => {
    try {
      const response = await axios.get('/api/sidebar-items'); // Replace with your API endpoint
      setSidebarItems(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchSidebarItems();
  }, []); // Empty dependency array to fetch data only once

  // Function to handle item creation
  const handleCreateItem = async (newItem) => {
    try {
      const response = await axios.post('/api/sidebar-items', newItem);
      setSidebarItems([...sidebarItems, response.data]); // Update state with new item
      setNewItem({ heading: '', subtopics: [] }); // Reset new item state
      setShowModal(false); // Close modal after creation
    } catch (err) {
      setError(err);
    }
  };

  // Function to handle item deletion
  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`/api/sidebar-items/${itemId}`); // Delete using item ID
      const updatedItems = sidebarItems.filter((item) => item.id !== itemId);
      setSidebarItems(updatedItems);
    } catch (err) {
      setError(err);
    }
  };

  // Function to handle item editing (toggle and update)
  const handleEditItem = (itemId) => {
    setEditingItemId(itemId ? itemId : null); // Toggle editing state
  };

  const handleUpdateItem = async (updatedItem) => {
    try {
      const response = await axios.put(`/api/sidebar-items/${updatedItem.id}`, updatedItem);
      const updatedItems = sidebarItems.map((item) => (item.id === updatedItem.id ? response.data : item));
      setSidebarItems(updatedItems);
      setEditingItemId(null); // Reset editing state
    } catch (err) {
      setError(err);
    }
  };

  // Function to handle new item form changes
  const handleNewItemChange = (event) => {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleNewSubtopicChange = (index, event) => {
    const { value } = event.target;
    setNewItem((prevItem) => {
      const updatedSubtopics = [...prevItem.subtopics];
      updatedSubtopics[index] = value;
      return { ...prevItem, subtopics: updatedSubtopics };
    });
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

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && (
        <div className="alert alert-danger" role="alert">
          Error fetching sidebar items: {error.message}
        </div>
      )}
      {!isLoading && !error && sidebarItems.length === 0 && (
        <p>No sidebar items found.</p>
      )}
      {!isLoading && !error && sidebarItems.length > 0 && (
        <ListGroup>
          {sidebarItems.map((item) => (
            <ListGroupItem key={item.id}>
              {editingItemId === item.id ? (
                // Edit form (replace with your edit form component)
                <EditForm item={item} onSubmit={handleUpdateItem} onCancel={() => handleEditItem(null)} />
              ) : (
                <Row>
                  <Col xs={10}>
                    {item.heading}
                    {item.subtopics.length > 0 && (
                      <ul>
                        {item.subtopics.map((subtopic) => (
                          <li key={subtopic}>{subtopic}</li>
                        ))}
                      </ul>
                    )}
                  </Col>
                  <Col xs={2} className="d-flex justify-content-end">
                    <Button variant="outline-primary" size="sm" onClick={() => handleEditItem(item.id)}>
                      Edit
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => handleDeleteItem(item.id)}>
                      Delete
                    </Button>
                  </Col>
                </Row>
              )}
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
      <CreateForm onSubmit={handleCreateItem} onCancel={() => setShowModal(false)} />
    </div>
  );
};

export default NewSidebar;
