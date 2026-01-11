import styles from './Footer.module.css';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../../assets/images/logo.jpeg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <img src={logo} alt="TrustEdge" className={styles.logoIcon} />
                            <span className={styles.logoText}>TrustEdge</span>
                        </div>
                        <p className={styles.desc}>
                            Reliable home services you can trust. Certified technicians, transparent pricing, and 24/7 support.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className={styles.column}>
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services/electrical">Electrical</Link></li>
                            <li><Link to="/services/plumbing">Plumbing</Link></li>
                            <li><Link to="/services/hvac">AC & HVAC</Link></li>
                            <li><Link to="/services/appliance">Appliance Repair</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.column}>
                        <h4>Contact</h4>
                        <ul className={styles.contactList}>
                            <li><Phone size={18} /> +91 9876 543 210</li>
                            <li><Mail size={18} /> trustedgehomeservices@gmail.com</li>
                            <li><MapPin size={18} /> 123 Trust Lane, Tech City</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} TrustEdge Home Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
