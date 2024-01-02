import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    
    
    desiredService: 'Braids & Twist',
    message: '',
    termsAndConditions: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <div className="well form-container">
        <div className="well-header">BOOK APPOINTMENT</div>
        <hr />
        <p className="header_p">
          We encourage you to contact us via
          the form below to set your appointment. You will be contacted after the booking confirmation.
        </p>
        <hr />

        {/* Contact by Input */}
        <div className="form-group1">
          <label htmlFor="Select">Contact By:</label>
          <select
            id="Select"
            name="contactBy"
            className="form-control"
            value={formData.contactBy}
            onChange={handleChange}
          >
            <option>Email</option>
            <option>Phone</option>
          </select>
        </div>

        {/* Fullname Input */}
        <div className="form-group1">
          <label htmlFor="inputFullname">Your Name:</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            id="inputFullname"
            placeholder="Your Name"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        {/* Email Address Input */}
        <div className="form-group1">
          <label htmlFor="inputemail width:5px">Your Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="inputemail"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Phone Input */}
        <div className="form-group1">
          <label htmlFor="inputphone">Your Phone:</label>
          <input
            type="tel"
            name="phone"
            className="form-control"
            id="inputphone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <hr />

        {/* Appointment Date */}
        <p>Appointment Date:</p>

        {/* 1st Choice Input */}
        <div className="form-group">
          <label htmlFor="datetimepicker8">Apointment Time:</label>
          <div className="input-group date" id="datetimepicker8">
            <input
              type="text"
              className="form-control"
              name="firstChoice"
              value={formData.firstChoice}
              onChange={handleChange}
            />
            <span className="input-group-addon">
              <span className="fa fa-calendar"></span>
            </span>
          </div>
        </div>

        
        {/* Service Input */}
        <div className="form-group">
          <label htmlFor="Select">Desired Service:</label>
          <select
            id="Select"
            name="desiredService"
            className="form-control"
            value={formData.desiredService}
            onChange={handleChange}
          >
            <option>Braids & Twist</option>
            {/* Add other options */}
          </select>
        </div>
        <div className="form-group" style={{ display: 'flex', justifyContent: 'center' }}>
  <textarea
    className="form-control"
    name="message"
    placeholder="Message"
    maxLength="140"
    rows="7"
    value={formData.message}
    onChange={handleChange}
    style={{ width: '400px' }}  // Adjust the width value as needed
  ></textarea>
</div>



        {/* Button Area */}
        <div className="checkbox"style={{ display: 'flex', justifyContent: 'center' }}>
          <label>
            <input
              type="checkbox"
              name="termsAndConditions"
              checked={formData.termsAndConditions}
              onChange={handleChange}
            />
            Terms & conditions
          </label>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
  <button
    type="submit"
    className="btn"
    onClick={handleSubmit}
    style={{ marginRight: '10px', width: '120px', height: '40px' }}
  >
    Submit
  </button>
  <button type="reset" className="btn" style={{ width: '120px', height: '40px' }}>
    Cancel
  </button>
</div>


        <hr />
        
      </div>
    </div>
  );
};

export default AppointmentForm;
