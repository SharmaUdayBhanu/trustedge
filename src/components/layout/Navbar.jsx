import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import { Menu, X } from 'lucide-react';
import logoJpeg from '../../assets/images/logo.png';
import logo from '../../assets/images/logo.jpeg';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={clsx(styles.navbar, { [styles.scrolled]: isScrolled })}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img src={isScrolled ? logoJpeg : logo} alt="TrustEdge" className={styles.logoIcon} />
                    <span className={styles.logoText}>TrustEdge</span>
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    <NavLink to="/" className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>Home</NavLink>
                    <NavLink to="/services" className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>Services</NavLink>
                    <NavLink to="/about" className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => clsx(styles.link, isActive && styles.active)}>Contact</NavLink>
                    <Button variant="accent" size="sm" onClick={() => window.location.href = '/booking'}>Book Now</Button>
                </div>

                {/* Mobile Toggle */}
                <button className={styles.mobileToggle} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className={styles.mobileMenu}>
                        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileLink}>Home</NavLink>
                        <NavLink to="/services" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileLink}>Services</NavLink>
                        <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileLink}>About</NavLink>
                        <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={styles.mobileLink}>Contact</NavLink>
                        <Link to="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                            <Button variant="accent" className={styles.mobileBtn}>Book Service</Button>
                        </Link>
                        <a href="tel:+919876543210" onClick={() => setIsMobileMenuOpen(false)} style={{ textDecoration: 'none' }}>
                            <Button variant="secondary" className={styles.mobileBtn}>Call Now</Button>
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
