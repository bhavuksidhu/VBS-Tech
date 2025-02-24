import React, { useState, useEffect } from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com'; // Import EmailJS
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import the required styles

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

    // Setup templateParams for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      companyName: formData.companyName,
      phoneNumber: formData.phoneNumber,
      url: formData.url,
      businessDetails: formData.businessDetails,
    };

    // Send email using EmailJS
    emailjs.send('service_utzjgd4', 'template_u435sqj', templateParams, 'X6D3yVKtS79M-d3tb')
      .then((response) => {
        // Log the entire response to check its structure
        // console.log('Response from EmailJS:', response.status);
        
        if (response.status === 200) {
          // Show success toast message
          toast.success('Details sent successfully!', {
            // position: toast.POSITION.TOP_CENTER,
            autoClose: 2000, // Toast will auto close after 2 seconds
          });

          // Reset the form data after successful submission
          setFormData({
            name: '',
            email: '',
            companyName: '',
            phoneNumber: '',
            url: '',
            businessDetails: ''
          });
        } else {
          // If status is not 200, show error toast
          toast.error('There was an error submitting the form.', {
            // position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
        }
      })
      .catch((error) => {
        // Log any errors here to debug
        console.error('There was an error submitting the form:', error);
        toast.error('There was an error submitting the form.', {
          // position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
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
          <button type="submit" className="btn btn-primary">Send Message <i aria-hidden="true" className="fas fa-arrow-right"></i></button>
        </div>
      </form>

      {/* Toast Container for displaying toast notifications */}
      <ToastContainer />
    </>
  );
}
