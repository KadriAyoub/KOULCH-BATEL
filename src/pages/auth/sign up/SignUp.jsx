import { useState } from "react";
import { Link } from "react-router";
import "../log in/LogIn.css";

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="auth-page">
            <div className="auth-container">
                <div className="auth-content">
                    <div className="auth-header">
                        <span className="auth-badge">JOIN US</span>

                        <h1>Create Account</h1>
                    </div>

                    <form className="auth-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">User Name</label>
                                <input
                                    id="User Name"
                                    type="text"
                                    placeholder="User Name"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="signup-email">Email</label>

                            <input
                                id="signup-email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="signup-phone">Phone</label>

                            <input
                                id="signup-phone"
                                type="tel"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="signup-password">Password</label>

                            <div className="password-input">
                                <input
                                    id="signup-password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a password"
                                />

                                <box-icon
                                    name={showPassword ? "hide" : "show"}
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            </div>
                        </div>

                        <button type="submit" className="auth-button">
                            Create Account
                        </button>
                    </form>

                    <p className="auth-switch">
                        Already have an account?{" "}
                        <Link to="/login">Log in</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}