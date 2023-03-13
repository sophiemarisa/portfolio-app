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
      <h2 className="mb-3" id="formTitle" style={(status == "Submit") ? { overflow: "hidden" } : { overflow: "hidden", border: "solid 3px var(--blue)", paddingTop: "10px", paddingBottom: "10px"}}> {(status == "Submit") ? "Contact Me Here!" : "Thanks, I will be in contact as soon as possible!"}</h2>
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