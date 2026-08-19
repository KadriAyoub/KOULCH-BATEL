import React, { useState } from "react";
import "../Contact/Contact.css";

function Contact() {
  const [type, setType] = useState("reclamation");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <main className="contact-page">
      <section className="contact-container">
        <div className="contact-header">
          <h1>CONTACT US</h1>

          <p>
            Have a question, a complaint, or want to join our team?
            <br />
            We are here to help.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* Request Type */}
          <div className="form-group">
            <label htmlFor="request-type">Request Type</label>

            <select
              id="request-type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="reclamation">01 - Complaint</option>
              <option value="join-team">02 - JOIN TEAM</option>
            </select>
          </div>

          {/* Name / First Name */}
          <div className="form-group">
            <label htmlFor="name">First Name / Last Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your first and last name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          {/* Complaint */}
          {type === "reclamation" && (
            <div className="form-group">
              <label htmlFor="complaint">Reason for the Complaint</label>

              <textarea
                id="complaint"
                name="complaint"
                placeholder="Describe the reason for your complaint..."
                rows="6"
                required
              />
            </div>
          )}

          {/* Join Team */}
          {type === "join-team" && (
            <>
              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              {/* CV */}
              <div className="form-group">
                <label htmlFor="cv">Resume / CV</label>

                <div className="file-input">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>

                <span className="file-hint">PDF, DOC or DOCX</span>
              </div>

              {/* Free Text */}
              <div className="form-group">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Please tell us about yourself, your experience, and why you would like to join our team."
                  rows="6"
                  required
                />
              </div>
            </>
          )}

          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
