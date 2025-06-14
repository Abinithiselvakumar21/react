import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-section about">
                    <h2 className="footer-title">Adventure Tamil Nadu</h2>
                    <p>Explore the rich heritage and breathtaking nature of Tamil Nadu. Join us in unforgettable adventures from mountains to coastlines.</p>
                </div>

               {/* Right Section */}
                <div className="footer-section social">
                    <h3>Contact & Social</h3>

                    <div className="contact-item">
                        📧 <a href="abinithi@gmailcom">abinithi@gmail.com</a>
                    </div>

                    <div className="contact-item">
                        📞 <a href="tel:+919876543210">+9876543210</a>
                    </div>
                     </div>

                {/* Right Section */}
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐 Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">📷 Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter</a>
                        <a href="https://youtube.com" target="_blank" rel="noreferrer">▶️ YouTube</a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Adventure Tamil Nadu. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
