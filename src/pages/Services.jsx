import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            {/* Hero Section */}
            <section className="services-hero">
                <div className="bg-gradient-overlay"></div>
                <div className="container">
                    <h1 className="animate-fade-in-up">
                        Our <span className="text-gradient">Services</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Comprehensive digital solutions tailored to your unique business needs
                    </p>
                </div>
            </section>

            {/* Services Detail */}
            <section className="section services-detail">
                <div className="container">
                    {/* Web Development */}
                    <div className="service-detail">
                        <div className="service-detail-content">
                            <div className="service-badge" style={{ background: 'var(--gradient-primary)' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2>Web Development</h2>
                            <p>
                                Build powerful, scalable web applications with cutting-edge technologies. From single-page applications to complex enterprise systems, we deliver solutions that drive results.
                            </p>
                            <div className="service-features-list">
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Custom Web Applications</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>E-commerce Solutions</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Progressive Web Apps (PWA)</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>API Development & Integration</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>CMS Development</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Performance Optimization</span>
                                </div>
                            </div>
                        </div>
                        <div className="service-detail-visual glass-card">
                            <div className="tech-stack">
                                <div className="tech-item">React</div>
                                <div className="tech-item">Vue.js</div>
                                <div className="tech-item">Angular</div>
                                <div className="tech-item">Next.js</div>
                                <div className="tech-item">Node.js</div>
                                <div className="tech-item">Python</div>
                                <div className="tech-item">PHP</div>
                                <div className="tech-item">PostgreSQL</div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Development */}
                    <div className="service-detail reverse">
                        <div className="service-detail-content">
                            <div className="service-badge" style={{ background: 'var(--gradient-accent)' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2>Mobile App Development</h2>
                            <p>
                                Create stunning native and cross-platform mobile experiences that engage users and drive growth. We build apps that are fast, beautiful, and built to scale.
                            </p>
                            <div className="service-features-list">
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>iOS Development (Swift)</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Android Development (Kotlin)</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Cross-Platform (React Native, Flutter)</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>App Store Optimization</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Push Notifications & Analytics</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Offline Capabilities</span>
                                </div>
                            </div>
                        </div>
                        <div className="service-detail-visual glass-card">
                            <div className="tech-stack">
                                <div className="tech-item">React Native</div>
                                <div className="tech-item">Flutter</div>
                                <div className="tech-item">Swift</div>
                                <div className="tech-item">Kotlin</div>
                                <div className="tech-item">Firebase</div>
                                <div className="tech-item">GraphQL</div>
                            </div>
                        </div>
                    </div>

                    {/* UI/UX Design */}
                    <div className="service-detail">
                        <div className="service-detail-content">
                            <div className="service-badge" style={{ background: 'var(--gradient-success)' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                </svg>
                            </div>
                            <h2>UI/UX Design</h2>
                            <p>
                                Design experiences that delight users and drive conversions. Our design process is rooted in research, iteration, and a deep understanding of user behavior.
                            </p>
                            <div className="service-features-list">
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>User Research & Testing</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Wireframing & Prototyping</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Design Systems & Style Guides</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Interaction Design</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Brand Identity Design</span>
                                </div>
                                <div className="feature-item">
                                    <svg viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>Accessibility Compliance</span>
                                </div>
                            </div>
                        </div>
                        <div className="service-detail-visual glass-card">
                            <div className="tech-stack">
                                <div className="tech-item">Figma</div>
                                <div className="tech-item">Adobe XD</div>
                                <div className="tech-item">Sketch</div>
                                <div className="tech-item">InVision</div>
                                <div className="tech-item">Principle</div>
                                <div className="tech-item">Framer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
