import React, { useState } from 'react'
import './contactForm.css'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitted");

  };


  return (
    <div className="container mt-5" id="form">
      <h2 className="mb-3" id="formTitle">Contact Me Here!</h2>
        <h2 className='successMessage' style={(status == "Submit") ? { visibility: "hidden" } : { visibility: "visible" }}>Thanks, I will get back to you as soon as possible!</h2>
      <form onSubmit={handleSubmit} style={(status == "Submit") ? { visibility: "visible" } : { visibility: "hidden" }}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="button-74 formBtn" type="submit">
          {status}
        </button>
      </form>
    </div>
  )
}
export default ContactForm