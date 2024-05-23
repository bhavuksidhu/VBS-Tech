import React, { useState, useEffect } from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    url: '',
    businessDetails: ''
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://your-backend-endpoint.com/api/form', formData)
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Handle successful submission (e.g., show a success message, clear the form, etc.)
      })
      .catch(error => {
        console.error('There was an error submitting the form:', error);
        // Handle submission error (e.g., show an error message)
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <div className="col-md-6 mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6 ">
            <input 
              type="email" 
              className="form-control" 
              placeholder="Email Address" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <div className="mb-3 row">
          <div className="col-md-6 mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Company Name" 
              name="companyName" 
              value={formData.companyName} 
              onChange={handleChange} 
            />
          </div>
          <div className="col-md-6">
            <input 
              type="tel" 
              className="form-control" 
              placeholder="Phone Number" 
              name="phoneNumber" 
              value={formData.phoneNumber} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <div className="mb-3">
          <input 
            type="url" 
            className="form-control" 
            placeholder="URL" 
            name="url" 
            value={formData.url} 
            onChange={handleChange} 
          />
        </div>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            placeholder="Tell us about your business." 
            rows="4" 
            name="businessDetails" 
            value={formData.businessDetails} 
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="text-center mb-4">
          <button type="submit" className="btn btn-primary">Send Message <i aria-hidden="true" class="fas fa-arrow-right"></i></button>
        </div>
      </form>
    </>
  );
}
