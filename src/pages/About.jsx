import './About.css';

const About = () => {
    return (
        <div className="about">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="bg-gradient-overlay"></div>
                <div className="container">
                    <h1 className="animate-fade-in-up">
                        About <span className="text-gradient">Adma Studios</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        We're a team of passionate creators, developers, and designers committed to crafting exceptional digital experiences.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section story">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <h2>Our <span className="text-gradient">Story</span></h2>
                            <p>
                                Founded in 2011, Adma Studios began with a simple mission: to help businesses thrive in the digital age through innovative technology solutions.
                            </p>
                            <p>
                                Over the years, we've grown from a small team of developers into a full-service digital studio, but our core values remain the same—quality, innovation, and client success.
                            </p>
                            <p>
                                Today, we partner with startups, SMBs, and enterprises worldwide, delivering solutions that drive growth and create lasting impact.
                            </p>
                        </div>
                        <div className="story-image glass-card">
                            <div className="placeholder-image" style={{ background: 'var(--gradient-primary)' }}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section values">
                <div className="container">
                    <div className="section-header">
                        <h2>Our <span className="text-gradient">Values</span></h2>
                        <p>The principles that guide everything we do</p>
                    </div>

                    <div className="values-grid">
                        <div className="glass-card value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3>Innovation</h3>
                            <p>We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.</p>
                        </div>

                        <div className="glass-card value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3>Quality</h3>
                            <p>Excellence is not an option—it's our standard. We deliver nothing but the best.</p>
                        </div>

                        <div className="glass-card value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3>Collaboration</h3>
                            <p>Great work happens when diverse minds come together. We value every perspective.</p>
                        </div>

                        <div className="glass-card value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3>Agility</h3>
                            <p>We adapt quickly to change, embracing flexibility while maintaining focus on goals.</p>
                        </div>

                        <div className="glass-card value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3>Client-Centric</h3>
                            <p>Your success is our success. We're committed to understanding and exceeding your expectations.</p>
                        </div>

                        <div className="glass-card value-card">
                            <div className="value-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3>Continuous Learning</h3>
                            <p>Technology evolves, and so do we. We invest in growth and stay ahead of the curve.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section team">
                <div className="container">
                    <div className="section-header">
                        <h2>Meet Our <span className="text-gradient">Team</span></h2>
                        <p>The talented people behind our success</p>
                    </div>

                    <div className="team-grid">
                        <div className="glass-card team-member">
                            <div className="member-avatar" style={{ background: 'var(--gradient-primary)' }}>
                                <span>M</span>
                            </div>
                            <h3>Martin</h3>
                            <p className="member-role">Student • App Developer • UI/UX Designer</p>
                            <p className="member-bio">Passionate about creating intuitive mobile experiences and turning innovative ideas into reality.</p>
                        </div>

                        <div className="glass-card team-member">
                            <div className="member-avatar" style={{ background: 'var(--gradient-accent)' }}>
                                <span>A</span>
                            </div>
                            <h3>Adam</h3>
                            <p className="member-role">Student • App Developer • UI/UX Designer</p>
                            <p className="member-bio">Dedicated to building beautiful, functional applications that solve real-world problems.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
