import { useState } from 'react';
import Button from '../../components/ui/Button';
import GlassCard from '../../components/ui/GlassCard';
import LocationMap from '../../components/ui/LocationMap';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className={styles.contactPage}>
                <div className="section-wrapper" style={{ paddingTop: '150px', textAlign: 'center' }}>
                    <GlassCard>
                        <h2 className="text-gradient">Message Sent!</h2>
                        <p>We'll get back to you within 24 hours.</p>
                        <Button variant="ghost" onClick={() => setSubmitted(false)} style={{ marginTop: '1rem' }}>Send Another</Button>
                    </GlassCard>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.contactPage}>
            <div className="section-wrapper">
                <div className={styles.grid}>
                    {/* Info */}
                    <div>
                        <h1 className="text-gradient" style={{ marginBottom: '1rem' }}>Contact Us</h1>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                            Have questions? We're here to help. Reach out to us for any inquiries or support.
                        </p>

                        <div className={styles.infoList}>
                            <GlassCard className={styles.infoCard}>
                                <Phone className={styles.icon} />
                                <div>
                                    <h3>Phone</h3>
                                    <p>+91 9876 543 210</p>
                                </div>
                            </GlassCard>

                            <GlassCard className={styles.infoCard}>
                                <Mail className={styles.icon} />
                                <div>
                                    <h3>Email</h3>
                                    <p>trustedgehomeservices@gmail.com</p>
                                </div>
                            </GlassCard>

                            <GlassCard className={styles.infoCard}>
                                <MapPin className={styles.icon} />
                                <div>
                                    <h3>Office</h3>
                                    <p>123 Trust Lane, Tech City</p>
                                </div>
                            </GlassCard>
                        </div>
                    </div>

                    {/* Form */}
                    <GlassCard>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                <input type="text" required placeholder="Enter your full name" className={styles.input} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                <input type="email" required placeholder="Enter your email address" className={styles.input} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                                <textarea rows="4" required placeholder="Type your message here..." className={styles.input}></textarea>
                            </div>
                            <Button type="submit" size="lg" icon={Send} style={{ width: '100%' }}>Send Message</Button>
                        </form>
                    </GlassCard>
                </div>

                <div className={styles.mapSection}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Visit Our Office</h2>
                    <LocationMap location="CFRX+R5 Kartarpur, Punjab" />
                    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                        <a
                            href="https://share.google/K4Ub2PKh67jhaRXpE"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                color: 'var(--color-accent)',
                                fontWeight: '500',
                                textDecoration: 'none'
                            }}
                        >
                            <MapPin size={18} />
                            Open Exact Location in Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
