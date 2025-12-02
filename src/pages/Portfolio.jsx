import './Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
            title: 'WealthCity',
            category: 'Mobile Game',
            description: 'An engaging business simulator mobile game where players build and manage their own virtual city empire.',
            tags: ['Swift', 'SpriteKit', 'Firebase', 'Game Design'],
            gradient: 'var(--gradient-primary)'
        },
        {
            title: 'EduMate',
            category: 'Mobile App',
            description: 'A comprehensive app helping students navigate their path to their desired university with personalized guidance and resources.',
            tags: ['React Native', 'Firebase', 'UI/UX', 'EdTech'],
            gradient: 'var(--gradient-accent)'
        }
    ];

    return (
        <div className="portfolio">
            {/* Hero Section */}
            <section className="portfolio-hero">
                <div className="bg-gradient-overlay"></div>
                <div className="container">
                    <h1 className="animate-fade-in-up">
                        Our <span className="text-gradient">Portfolio</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Explore some of our recent projects and see how we've helped businesses achieve their goals
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section projects">
                <div className="container">
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <div key={index} className="glass-card project-card">
                                <div className="project-visual" style={{ background: project.gradient }}>
                                    <div className="project-overlay">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <span className="project-category">{project.category}</span>
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="project-tags">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;
