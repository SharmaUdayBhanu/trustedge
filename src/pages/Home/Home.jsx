import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import Button from '../../components/ui/Button';
import GlassCard from '../../components/ui/GlassCard';
import Hero3D from './Hero3D';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

import LocationMap from '../../components/ui/LocationMap';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.home}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Reliable Home <br />
                        <span className="text-gradient">Services You Can Trust</span>
                    </motion.h1>

                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Professional electrical, plumbing, HVAC, and appliance repair services at your doorstep. 24/7 support.
                    </motion.p>

                    <motion.div
                        className={styles.heroActions}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <Button variant="accent" size="lg" icon={ArrowRight} onClick={() => navigate('/booking')}>Book Now</Button>
                        <Button variant="secondary" size="lg" onClick={() => navigate('/services')}>Explore Services</Button>
                    </motion.div>

                    <div className={styles.trustBadges}>
                        <div className={styles.badge}>
                            <CheckCircle size={20} className={styles.badgeIcon} />
                            <span>Certified Experts</span>
                        </div>
                        <div className={styles.badge}>
                            <Star size={20} className={styles.badgeIcon} />
                            <span>4.9/5 Average Rating</span>
                        </div>
                    </div>
                </div>

                <div className={styles.heroVisual}>
                    <div className={styles.glassCircle} />
                    <div className={styles.modelContainer}>
                        <Hero3D />
                    </div>
                </div>
            </section>

            {/* Services Section - Reverted to Grid */}
            <section className={styles.section} id="services">
                <div className="section-wrapper">
                    <div className={styles.sectionHeader}>
                        <h2>Our Services</h2>
                        <p>Comprehensive home maintenance solutions tailored for you.</p>
                    </div>

                    <div className={styles.servicesGrid}>
                        {[
                            { id: 'electrical', name: 'Electrical', desc: 'Wiring, panels & repairs', img: '/assets/images/electrical.png' },
                            { id: 'plumbing', name: 'Plumbing', desc: 'Leaks, pipes & fittings', img: '/assets/images/plumbing.png' },
                            { id: 'hvac', name: 'AC & HVAC', desc: 'Cooling, heating & maintenance', img: '/assets/images/hvac.png' },
                            { id: 'appliance', name: 'Appliance Repair', desc: 'Washers, fridges & more', img: '/assets/images/appliance.png' }
                        ].map((service, index) => (
                            <GlassCard key={index} hoverEffect className={styles.serviceCard}>
                                <img src={service.img} alt={service.name} className={styles.serviceCardImage} loading="lazy" />
                                <h3>{service.name}</h3>
                                <p>{service.desc}</p>
                                <Button variant="secondary" size="sm" icon={ArrowRight} onClick={() => navigate(`/services/${service.id}`)}>
                                    Learn More
                                </Button>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className={styles.whySection}>
                <div className="section-wrapper">
                    <div className={styles.whyGrid}>
                        <div className={styles.whyContent}>
                            <h2>Why Choose TrustEdge?</h2>
                            <ul className={styles.featureList}>
                                <li>
                                    <div className={styles.featureIcon}><CheckCircle /></div>
                                    <div>
                                        <h3>Experienced Technicians</h3>
                                        <p>All our experts are certified and background checked.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.featureIcon}><CheckCircle /></div>
                                    <div>
                                        <h3>Transparent Pricing</h3>
                                        <p>Upfront quotes, no hidden fees.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.whyVisual}>
                            <GlassCard className={styles.statCard}>
                                <h3>10k+</h3>
                                <p>Jobs Completed</p>
                            </GlassCard>
                            <GlassCard className={styles.statCard}>
                                <h3>98%</h3>
                                <p>Satisfaction Rate</p>
                            </GlassCard>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location Section */}
            <section className={styles.section}>
                <div className="section-wrapper">
                    <div className={styles.sectionHeader}>
                        <h2>Find Us Near You</h2>
                        <p>Serving the greater metropolitan area with prompt, reliable service.</p>
                    </div>
                    <LocationMap location="CFRX+R5 Kartarpur, Punjab" />
                </div>
            </section>
        </div>
    );
};

export default Home;
