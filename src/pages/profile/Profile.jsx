import axios from "axios";
import "boxicons";
import { useEffect, useRef, useState } from "react";
import "./Profile.css";

export default function Profile() {
  const fileInputRef = useRef(null);
  const [avatar, setAvatar] = useState(null);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [user, setUser] = useState();
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/v1/users/");
        return setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);
  console.log("🚀 ~ Profile ~ user:", user)
  
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentPassword: "",
    newPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up to src/services/userServices.js once the update-profile
    // endpoint is ready
  };

  return (
    <main className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            {avatar ? (
              <img src={avatar} alt="Profile avatar" />
            ) : (
              <box-icon name="user" size="lg" color="#00229C"></box-icon>
            )}

            <button
              type="button"
              className="avatar-edit-btn"
              onClick={() => fileInputRef.current.click()}
            >
              <box-icon name="camera" size="xs" color="#ffffff"></box-icon>
            </button>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              hidden
            />
          </div>

          <div>
            <h1>{form.fullName || "Your Profile"}</h1>
            <p>{form.email || "Manage your account information"}</p>
          </div>
        </div>

        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="profile-divider">
            <span>Change Password</span>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="currentPassword">Current Password</label>
              <div className="password-input">
                <input
                  id="currentPassword"
                  name="currentPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  placeholder="Enter current password"
                  value={form.currentPassword}
                  onChange={handleChange}
                />
                <box-icon
                  name={showCurrentPassword ? "hide" : "show"}
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <div className="password-input">
                <input
                  id="newPassword"
                  name="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={form.newPassword}
                  onChange={handleChange}
                />
                <box-icon
                  name={showNewPassword ? "hide" : "show"}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                />
              </div>
            </div>
          </div>

          <div className="profile-actions">
            <button type="submit" className="profile-save-btn">
              Save Changes
            </button>

            <button type="button" className="profile-logout-btn">
              <box-icon name="log-out" color="#00229C"></box-icon>
              Log Out
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
