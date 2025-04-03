import React, { useState } from 'react';
import './ComplaintForm.css';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    room: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="form-container">
      <h2>File a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Your Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="room">Room Number:</label>
        <input 
          type="text" 
          id="room" 
          name="room"
          placeholder="Enter your room number"
          value={formData.room}
          onChange={handleChange}
          required
        />

        <label htmlFor="category">Category:</label>
        <select 
          id="category" 
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option>AC/Fan Repair</option>
          <option>Plumbing Issue</option>
          <option>Electrical Issue</option>
          <option>Other</option>
        </select>

        <label htmlFor="description">Description:</label>
        <textarea 
          id="description" 
          name="description"
          placeholder="Describe the issue..."
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit Complaint</button>
      </form>
    </div>
  );
};

export default ComplaintForm;