import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [trails, setTrails] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle mouse move for cursor trail effect
    const handleMouseMove = (e) => {
        const navbar = e.currentTarget;
        const rect = navbar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newTrail = {
            id: Date.now() + Math.random(),
            x,
            y
        };

        setTrails(prev => [...prev, newTrail]);

        // Remove trail after animation
        setTimeout(() => {
            setTrails(prev => prev.filter(t => t.id !== newTrail.id));
        }, 600);
    };

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' }
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div
                className="navbar-container"
                onMouseMove={handleMouseMove}
            >
                {/* Cursor trail circles */}
                {trails.map(trail => (
                    <div
                        key={trail.id}
                        className="cursor-trail"
                        style={{
                            left: `${trail.x}px`,
                            top: `${trail.y}px`
                        }}
                    />
                ))}

                <Link to="/" className="navbar-logo">
                    <span className="logo-text">ADMA</span>
                    <span className="logo-accent">Studios</span>
                </Link>

                <div className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`navbar-link ${location.pathname === link.path ? 'navbar-link-active' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <button
                    className={`navbar-toggle ${isMenuOpen ? 'navbar-toggle-open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
