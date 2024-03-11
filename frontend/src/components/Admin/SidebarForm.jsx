import React, { useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls
import SidebarItem from './SidebarItem';

const SidebarForm = () => {
  const [formData, setFormData] = useState({
    heading: '',
    subtopics: [],
  });

  const [errors, setErrors] = useState({}); // To store validation errors

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Add basic validation here (e.g., required fields)
    const newErrors = { ...errors }; // Copy existing errors
    if (name === 'heading' && !value) {
      newErrors.heading = 'Heading is required';
    } else {
      delete newErrors.heading; // Remove error if valid
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
      subtopics: [...formData.subtopics, { title: '', icon: '' }],
    });
  };

  const handleRemoveSubtopic = (index) => {
    const updatedSubtopics = [...formData.subtopics];
    updatedSubtopics.splice(index, 1);
    setFormData({ ...formData, subtopics: updatedSubtopics });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData)
    // More thorough validation can be done here

    // try {
    //   const response = await axios.post('/api/sidebar-items', formData); // Replace with your API endpoint
    //   console.log('Sidebar item created successfully:', response.data);
    //   // Handle successful submission (e.g., clear form, display success message)
    // } catch (error) {
    //   console.error('Error creating sidebar item:', error);
    //   // Handle errors appropriately (e.g., display error messages)
    // }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Sidebar Item</h2>
<div>
      <div className="form-group">
        <label htmlFor="heading">Heading:</label>
        <input
          type="text"
          name="heading"
          id="heading"
          value={formData.heading}
          onChange={handleChange}
        />
        {errors.heading && <span className="error">{errors.heading}</span>}
      </div>

      {/* <h3>Subtopics</h3> */}
      <div>
            {formData.subtopics.map((subtopic, index) => (
              <div key={index} className="subtopic-group">
                <h4>Subtopic {index + 1}</h4>

                <div className="form-group">
                  <label htmlFor={`title_${index}`}>Title:</label>
                  <input
                    type="text"
                    name="title"
                    id={`title_${index}`}
                    value={subtopic.title}
                    onChange={(event) => handleSubtopicChange(index, event)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor={`icon_${index}`}>Icon (optional):</label>
                  <input
                    type="text"
                    name="icon"
                    id={`icon_${index}`}
                    value={subtopic.icon}
                    onChange={(event) => handleSubtopicChange(index, event)}
                  />
                </div>

                <button type="button" onClick={() => handleRemoveSubtopic(index)}>
                  Remove Subtopic
                </button>
              </div>
            ))}

            <button type="button" onClick={handleAddSubtopic}>
              Add Subtopic
            </button>

            <button type="submit">Create Sidebar Item</button>
      </div>
      </div>      
    </form>
  );
};

export default SidebarForm;