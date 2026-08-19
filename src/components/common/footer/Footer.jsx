import './Footer.css'
import 'boxicons'

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className="footer-top">
                <div className="footer-brand">
                    <h3>KOULCH BATEL</h3>
                    <p>Style nadi, taman batel. Kolchi f blasa wahda.</p>
                    <div className="footer-socials">
                        <a><box-icon className='icone' type='logo' name='instagram'></box-icon></a>
                        <a><box-icon className='icone' type='logo' name='facebook'></box-icon></a>
                        <a><box-icon className='icone' type='logo' name='tiktok'></box-icon></a>
                        <a><box-icon className='icone' type='logo' name='whatsapp'></box-icon></a>
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

                <div className="footer-newsletter">
                    <h4>Stay in the loop</h4>
                    <p>Deals, new drops and updates, straight to your inbox.</p>
                    <div className="newsletter-input">
                        <input type="email" placeholder="Your email" />
                        <button>
                            <box-icon className='icon' name='send' color='#00229C'></box-icon>
                        </button>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} KOULCH BATEL. All rights reserved.</p>
                <ul>
                    <li><a>Terms</a></li>
                    <li><a>Privacy</a></li>
                    <li><a>Cookies</a></li>
                </ul>
            </div>
        </footer>
    )
}