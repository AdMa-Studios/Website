import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({
            name: '',
            email: '',
            company: '',
            service: '',
            message: ''
        });
    };

    return (
        <div className="contact">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="bg-gradient-overlay"></div>
                <div className="container">
                    <h1 className="animate-fade-in-up">
                        Get in <span className="text-gradient">Touch</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Ready to start your project? We'd love to hear from you. Let's create something amazing together.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section contact-content">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="company">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company Name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Service Interested In</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select a service</option>
                                        <option value="web">Web Development</option>
                                        <option value="mobile">Mobile Apps</option>
                                        <option value="design">UI/UX Design</option>
                                        <option value="cloud">Cloud Solutions</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-large">
                                    Send Message
                                    <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <p className="contact-intro">
                                We're here to help and answer any question you might have. We look forward to hearing from you.
                            </p>

                            <div className="info-items">
                                <div className="glass-card info-item">
                                    <div className="info-icon" style={{ background: 'var(--gradient-primary)' }}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Email</h4>
                                        <p>hello@admastudios.com</p>
                                        <p>support@admastudios.com</p>
                                    </div>
                                </div>

                                <div className="glass-card info-item">
                                    <div className="info-icon" style={{ background: 'var(--gradient-accent)' }}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>+1 (555) 123-4567</p>
                                        <p>Mon-Fri, 9AM-6PM PST</p>
                                    </div>
                                </div>

                                <div className="glass-card info-item">
                                    <div className="info-icon" style={{ background: 'var(--gradient-success)' }}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Office</h4>
                                        <p>123 Innovation Street</p>
                                        <p>San Francisco, CA 94102</p>
                                    </div>
                                </div>

                                <div className="glass-card info-item">
                                    <div className="info-icon" style={{ background: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)' }}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Business Hours</h4>
                                        <p>Monday - Friday: 9AM - 6PM</p>
                                        <p>Weekend: By Appointment</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="contact-social">
                                <h4>Follow Us</h4>
                                <div className="social-links">
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
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
