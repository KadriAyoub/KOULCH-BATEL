import React, { useRef, useState } from "react";
import "boxicons";
import "./ContactForm.css";

function ContactForm() {
  const [type, setType] = useState("reclamation");
  const [cvFile, setCvFile] = useState(null);

  const fileInputRef = useRef(null);

  // =========================
  // Submit
  // =========================

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  // =========================
  // File Change
  // =========================

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("The file size must not exceed 5MB.");

      e.target.value = "";

      return;
    }

    setCvFile(file);
  };

  // =========================
  // Remove File
  // =========================

  const removeFile = () => {
    setCvFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // =========================
  // Format File Size
  // =========================

  const formatFileSize = (bytes) => {
    if (bytes < 1024) {
      return `${bytes} B`;
    }

    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }

    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // =========================
  // File Extension
  // =========================

  const getFileExtension = (fileName) => {
    return fileName.split(".").pop().toUpperCase();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* =========================
          Request Type
      ========================= */}

      <div className="form-group">
        <label>Request Type</label>

        <div className="request-types">
          {/* Complaint */}

          <button
            type="button"
            className={`request-type ${
              type === "reclamation" ? "selected" : ""
            }`}
            onClick={() => setType("reclamation")}
          >
            <span className="request-number">01</span>

            <span className="request-name">Complaint</span>
          </button>

          {/* Join Team */}

          <button
            type="button"
            className={`request-type ${type === "join-team" ? "selected" : ""}`}
            onClick={() => setType("join-team")}
          >
            <span className="request-number">02</span>

            <span className="request-name">JOIN TEAM</span>
          </button>
        </div>
      </div>

      {/* =========================
          Name
      ========================= */}

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

      {/* =========================
          Email
      ========================= */}

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

      {/* =========================
          Complaint
      ========================= */}

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

      {/* =========================
          JOIN TEAM
      ========================= */}

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

            {!cvFile ? (
              <>
                <label htmlFor="cv" className="cv-upload">
                  <div className="cv-upload-icon">
                    <box-icon name="cloud-upload" />
                  </div>

                  <div className="cv-upload-content">
                    <span className="cv-upload-title">Upload your CV</span>

                    <span className="cv-upload-text">
                      Click to browse or drag and drop
                    </span>
                  </div>

                  <span className="cv-upload-button">Browse</span>
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  required
                  className="hidden-file-input"
                  onChange={handleFileChange}
                />
              </>
            ) : (
              <div className="cv-file-selected">
                <div className="cv-file-icon">
                  <box-icon name="file-blank" />
                </div>

                <div className="cv-file-info">
                  <span className="cv-file-name">{cvFile.name}</span>

                  <span className="cv-file-details">
                    {getFileExtension(cvFile.name)}
                    {" · "}
                    {formatFileSize(cvFile.size)}
                  </span>
                </div>

                <div className="cv-file-actions">
                  <span className="cv-selected">
                    <box-icon name="check" />
                    Selected
                  </span>

                  <label htmlFor="cv" className="cv-change">
                    Change
                  </label>

                  <button
                    type="button"
                    className="cv-remove"
                    onClick={removeFile}
                  >
                    <box-icon name="x" />
                  </button>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  className="hidden-file-input"
                  onChange={handleFileChange}
                />
              </div>
            )}

            <span className="file-hint">
              Accepted formats: PDF, DOC, DOCX · Max size: 5MB
            </span>
          </div>

          {/* Message */}

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

      {/* =========================
          Submit
      ========================= */}

      <button type="submit" className="contact-submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
