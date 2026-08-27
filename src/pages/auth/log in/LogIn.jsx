import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { useAuthStore } from "../../../store/useAuthStore";
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = login(email, password);
        if (result.success) {
            Swal.fire({
                title: "Logged In!",
                text: `Welcome back, ${result.user.name}!`,
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            }).then(() => {
                if (result.user.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            });
        } else {
            Swal.fire({
                title: "Login Failed",
                text: result.message || "Invalid credentials. For Admin, use admin@koulchbatel.com / admin123.",
                icon: "error",
                confirmButtonText: "Try Again",
                confirmButtonColor: "#00229c",
            });
        }
    };

    return (
        <main className="auth-page">
            <div className="auth-container">
                <div className="auth-content">
                    <div className="auth-header">
                        <span className="auth-badge">WELCOME BACK</span>

                        <h1>Log In</h1>
                    </div>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>

                            <input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
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