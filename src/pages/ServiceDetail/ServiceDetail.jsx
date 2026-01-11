import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import GlassCard from '../../components/ui/GlassCard';
import styles from './ServiceDetail.module.css';
import { CheckCircle, ArrowLeft, Shield } from 'lucide-react';

const serviceData = {
    electrical: {
        title: 'Electrical Services',
        description: 'Our certified electricians handle everything from simple repairs to complex wiring installations.',
        features: ['Circuit breaking repairs', 'Lighting installation', 'Outlet repair & installation', 'Safety inspections'],
        price: 'Starts at ₹500',
        image: '/assets/images/electrical.png'
    },
    plumbing: {
        title: 'Plumbing Solutions',
        description: 'Professional plumbing services for leaks, clogs, and bathroom fittings.',
        features: ['Leak detection & repair', 'Pipe replacement', 'Drain cleaning', 'Fixture installation'],
        price: 'Starts at ₹400',
        image: '/assets/images/plumbing.png'
    },
    hvac: {
        title: 'AC & HVAC',
        description: 'Keep your home cool and comfortable with our expert AC repair and maintenance.',
        features: ['AC installation', 'Gas charging', 'Filter cleaning', 'Annual maintenance'],
        price: 'Starts at ₹599',
        image: '/assets/images/hvac.png'
    },
    appliance: {
        title: 'Appliance Repair',
        description: 'Fast and reliable repair services for all your home appliances.',
        features: ['Washing machine repair', 'Refrigerator service', 'Microwave repair', 'Geyser service'],
        price: 'Visits from ₹299',
        image: '/assets/images/appliance.png'
    }
};

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = serviceData[id];

    if (!service) {
        return (
            <div className="section-wrapper" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <h2>Service Not Found</h2>
                <Button variant="secondary" onClick={() => navigate('/services')} style={{ marginTop: '1rem' }}>
                    Back to Services
                </Button>
            </div>
        );
    }

    return (
        <div className={styles.section}>
            <div className={styles.container}>
                <Button
                    variant="ghost"
                    size="sm"
                    icon={ArrowLeft}
                    onClick={() => navigate('/services')}
                    className={styles.backButton}
                >
                    Back to Services
                </Button>

                <div className={styles.grid}>
                    {/* Left Column: Image & Features */}
                    <div className={styles.leftColumn}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.imageWrapper}
                        >
                            <img src={service.image} alt={service.title} className={styles.image} />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className={styles.featuresSection}
                        >
                            <h3 style={{ marginBottom: '1.25rem', marginTop: '2rem' }}>What's Included?</h3>
                            <ul className={styles.featureList}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        <CheckCircle size={20} color="var(--color-accent)" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Right Column: Content & Booking */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={styles.contentWrapper}
                    >
                        <div>
                            <h1 className="text-gradient" style={{ marginBottom: '1rem', lineHeight: '1.2' }}>{service.title}</h1>
                            <p className={styles.description}>
                                {service.description}
                            </p>
                        </div>

                        <GlassCard className={styles.bookingCard}>
                            <div className={styles.warranty}>
                                <Shield size={24} color="var(--color-accent)" />
                                <span>Interest-free warranty</span>
                            </div>
                            <div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>Professional service</p>
                                <p className={styles.priceTag}>{service.price}</p>
                            </div>
                            <Button size="lg" onClick={() => navigate('/booking')} style={{ width: '100%' }}>
                                Book Now
                            </Button>
                        </GlassCard>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;
