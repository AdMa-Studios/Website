import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content container">
                <div className="footer-grid">
                    {/* Brand Section */}
                    <div className="footer-section">
                        <div className="footer-logo">
                            <span className="logo-text">ADMA</span>
                            <span className="logo-accent">Studios</span>
                        </div>
                        <p className="footer-description">
                            Crafting exceptional digital experiences through innovative software development and creative design solutions.
                        </p>
                        <div className="footer-social">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-link">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.635 8.24c1.004 1.397 1.615 3.11 1.615 4.966 0 .27-.015.537-.039.801-.537-.12-3.135-.659-5.798-.287-.059-.142-.118-.285-.182-.428-.183-.428-.381-.856-.594-1.274 2.886-1.175 4.206-2.873 4.206-2.873s-.81-.705-1.994-1.254c-.014.01-.029.02-.044.03.01-.005.02-.01.03-.015.79.434 1.532.926 2.218 1.47zM12 2.4c1.88 0 3.598.651 4.963 1.737 0 0-1.243 1.597-3.99 2.528C11.452 4.537 9.75 2.908 9.75 2.908 10.442 2.577 11.203 2.4 12 2.4zm-4.185 1.23s1.665 1.644 3.18 3.81c-3.996 1.064-7.518 1.049-7.518 1.049.592-2.142 2.05-3.939 4.338-4.859zM2.4 12c0-.088.004-.176.006-.264 0 0 4.285.083 8.794-1.215.264.516.513 1.043.748 1.576-3.447 1.023-6.468 3.912-6.468 3.912S2.4 14.115 2.4 12zm1.605 4.558s2.543-2.543 5.622-3.396c1.349 3.499 1.899 6.387 1.899 6.387-2.935-.822-5.125-3.172-5.521-5.991zm8.992 5.039s-.611-3.054-1.899-6.492c2.484-.395 4.665.252 4.665.252.427 2.279-.362 4.374-1.766 5.94z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <p>&copy; {currentYear} Adma Studios. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#privacy">Privacy Policy</a>
                        <span>•</span>
                        <a href="#terms">Terms of Service</a>
                        <span>•</span>
                        <a href="#cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
