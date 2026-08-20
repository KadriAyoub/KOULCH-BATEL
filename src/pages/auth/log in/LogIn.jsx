import { useState } from "react";
import { Link } from "react-router";
import "./Login.css";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="auth-page">
            <div className="auth-container">
                <div className="auth-content">
                    <div className="auth-header">
                        <span className="auth-badge">WELCOME BACK</span>

                        <h1>Log In</h1>
                    </div>

                    <form className="auth-form">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="form-group">
                            <div className="password-label">
                                <label htmlFor="password">Password</label>

                                <Link to="/forgot-password">Forgot password?</Link>
                            </div>

                            <div className="password-input">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                />

                                <box-icon
                                    name={showPassword ? "hide" : "show"}
                                    onClick={() => setShowPassword(!showPassword)}
                                />
                            </div>
                        </div>

                        <button type="submit" className="auth-button">
                            Log In
                        </button>
                    </form>

                    <div className="auth-divider">
                        <span>OR</span>
                    </div>

                    <p className="auth-switch">
                        Don't have an account?{" "}
                        <Link to="/signup">Create an account</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}