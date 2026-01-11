import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import GlassCard from '../../components/ui/GlassCard';
import { ShieldCheck, Users, Briefcase } from 'lucide-react';
import Button from '../../components/ui/Button';
import styles from './About.module.css';

const StatCounter = ({ value, label, icon: Icon }) => {
    return (
        <GlassCard className="text-center" hoverEffect>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                <Icon size={40} color="var(--color-accent)" />
            </div>
            <h3 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{value}</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>{label}</p>
        </GlassCard>
    );
};

const About = () => {
    return (
        <div className={styles.aboutPage}>
            <div className="section-wrapper">
                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <motion.h1
                        className="text-gradient"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        About TrustEdge
                    </motion.h1>
                    <motion.p
                        style={{ maxWidth: '700px', margin: '1.5rem auto', fontSize: '1.2rem', color: 'var(--color-text-muted)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        We are dedicated to providing the most reliable, professional, and transparent home services in the industry.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                    <StatCounter value="10k+" label="Jobs Completed" icon={Briefcase} />
                    <StatCounter value="50+" label="Certified Experts" icon={Users} />
                    <StatCounter value="5 Years" label="Of Excellence" icon={ShieldCheck} />
                </div>

                {/* Mission Section */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ marginBottom: '1.5rem' }}>Our Mission</h2>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
                            At TrustEdge, our mission is simple: to bring trust back into home services. We believe that finding a reliable electrician, plumber, or technician shouldn't be a gamble.
                        </p>
                        <p style={{ marginBottom: '2rem', lineHeight: '1.8', color: 'var(--color-text-secondary)' }}>
                            Every member of our team is background-checked, certified, and trained to deliver not just expert repairs, but an exceptional customer experience.
                        </p>
                        <Button onClick={() => window.location.href = '/contact'}>Get in Touch</Button>
                    </motion.div>

                    <GlassCard style={{ padding: '0.5rem' }}>
                        <img src="/assets/images/team.png" alt="TrustEdge Team" className={styles.teamImage} />
                    </GlassCard>
                </div>
            </div>
        </div>
    );
};

export default About;
