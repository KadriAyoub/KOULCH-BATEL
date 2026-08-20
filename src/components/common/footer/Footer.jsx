import { useState } from "react";
import axios from "axios";
import "./Footer.css";
import "boxicons";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            setMessage("");

            const response = await axios.post(
                "http://localhost:3000/api/newsletter",
                {
                    email: email,
                }
            );

            setMessage(response.data.message);
            setEmail("");

        } catch (error) {
            setMessage(
                error.response?.data?.message ||
                "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="footer-container">
            <div className="footer-top">

                <div className="footer-brand">
                    <h3>KOULCH BATEL</h3>
                    <p>
                        Style nadi, taman batel. Kolchi f blasa wahda.
                    </p>

                    <div className="footer-socials">
                        <a>
                            <box-icon
                                className="icone"
                                type="logo"
                                name="instagram"
                            />
                        </a>

                        <a>
                            <box-icon
                                className="icone"
                                type="logo"
                                name="facebook"
                            />
                        </a>

                        <a>
                            <box-icon
                                className="icone"
                                type="logo"
                                name="tiktok"
                            />
                        </a>

                        <a>
                            <box-icon
                                className="icone"
                                type="logo"
                                name="whatsapp"
                            />
                        </a>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Shop</h4>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Products</a></li>
                        <li><a>New Arrivals</a></li>
                        <li><a>Best Sellers</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a>About Us</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Careers</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Support</h4>
                    <ul>
                        <li><a>FAQ</a></li>
                        <li><a>Shipping & Returns</a></li>
                        <li><a>Track Order</a></li>
                        <li><a>Privacy Policy</a></li>
                    </ul>
                </div>

                {/* NEWSLETTER */}
                <div className="footer-newsletter">
                    <h4>Stay in the loop</h4>

                    <p>
                        Deals, new drops and updates, straight to your inbox.
                    </p>

                    <form
                        className="newsletter-input"
                        onSubmit={handleSubscribe}
                    >
                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <button type="submit" disabled={loading}>
                            <box-icon
                                className="icon"
                                name="send"
                                color="#00229C"
                            />
                        </button>
                    </form>

                    {message && (
                        <p className="newsletter-message">
                            {message}
                        </p>
                    )}
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} KOULCH BATEL.
                    All rights reserved.
                </p>

                <ul>
                    <li><a>Terms</a></li>
                    <li><a>Privacy</a></li>
                    <li><a>Cookies</a></li>
                </ul>
            </div>
        </footer>
    );
}