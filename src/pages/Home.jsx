import { Link } from 'react-router-dom';
import ToolsSlider from '../components/ToolsSlider';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="bg-gradient-overlay"></div>
                <div className="bg-mesh"></div>
                <div className="container hero-content">
                    <h1 className="animate-fade-in-up">
                        We Build <span className="text-gradient">Exceptional</span> Digital Experiences
                    </h1>
                    <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Transform your ideas into powerful, scalable software solutions with our expert team of developers and designers.
                    </p>
                </div>
            </section>

            {/* Process Section */}
            <section className="section process">
                <div className="container">
                    <div className="section-header">
                        <h2>Our <span className="text-gradient">Process</span></h2>
                        <p>A proven methodology for delivering exceptional results</p>
                    </div>

                    <div className="process-timeline">
                        <div className="process-step">
                            <div className="step-number">01</div>
                            <div className="step-content glass-card">
                                <h3>Discovery</h3>
                                <p>We dive deep into understanding your business goals, target audience, and project requirements.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">02</div>
                            <div className="step-content glass-card">
                                <h3>Planning</h3>
                                <p>Strategic planning and architecture design to ensure a solid foundation for your project.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">03</div>
                            <div className="step-content glass-card">
                                <h3>Design</h3>
                                <p>Creating beautiful, user-centered designs that align with your brand and resonate with users.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">04</div>
                            <div className="step-content glass-card">
                                <h3>Development</h3>
                                <p>Building your solution with clean, maintainable code and modern development practices.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">05</div>
                            <div className="step-content glass-card">
                                <h3>Testing</h3>
                                <p>Rigorous quality assurance to ensure everything works flawlessly across all platforms.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="step-number">06</div>
                            <div className="step-content glass-card">
                                <h3>Launch</h3>
                                <p>Smooth deployment and ongoing support to ensure your success beyond launch day.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools Slider */}
            <ToolsSlider />
        </div>
    );
};

export default Home;
