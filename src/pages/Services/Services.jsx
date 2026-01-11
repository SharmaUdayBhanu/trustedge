import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import GlassCard from '../../components/ui/GlassCard';
import { ArrowRight, Zap, Droplet, Wind, Wrench, Shield, Activity, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Services.module.css';

const servicesData = [
    {
        id: 'electrical',
        title: 'Electrical Services',
        description: 'Complete electrical solutions including wiring, repairs, and safety inspections.',
        icon: Zap,
        image: '/assets/images/electrical.png',
        color: '#EAB308'
    },
    {
        id: 'plumbing',
        title: 'Plumbing Solutions',
        description: 'Leak repairs, pipe installations, and emergency plumbing services.',
        icon: Droplet,
        image: '/assets/images/plumbing.png',
        color: '#3B82F6'
    },
    {
        id: 'hvac',
        title: 'AC & HVAC',
        description: 'Installation, maintenance, and repair for all air conditioning systems.',
        icon: Wind,
        image: '/assets/images/hvac.png',
        color: '#0D9488'
    },
    {
        id: 'appliance',
        title: 'Appliance Repair',
        description: 'Expert repair for refrigerators, washing machines, and kitchen appliances.',
        icon: Wrench,
        image: '/assets/images/appliance.png',
        color: '#F97316'
    },
    {
        id: 'submersible',
        title: 'Submersible Boring',
        description: 'Professional boring and submersible pump installation services.',
        icon: Activity,
        image: '/assets/images/submersible.png',
        color: '#0EA5E9'
    },
    {
        id: 'panel',
        title: 'Panel Installations',
        description: 'Electrical control panel setup and maintenance for all needs.',
        icon: Settings,
        image: '/assets/images/panel.png',
        color: '#8B5CF6'
    },
    {
        id: 'earthing',
        title: 'Earthing Work',
        description: 'Advanced earthing solutions for maximum electrical safety.',
        icon: Shield,
        image: '/assets/images/earthing.png',
        color: '#10B981'
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Services = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.servicesPage}>
            <div className="section-wrapper">
                <div className={styles.header}>
                    <motion.h1
                        className="text-gradient"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Our Expert Services
                    </motion.h1>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        We offer a wide range of professional home services to keep your property in perfect condition.
                    </motion.p>
                </div>

                <motion.div
                    className={styles.grid}
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {servicesData.map((service) => (
                        <motion.div key={service.id} variants={item}>
                            <GlassCard hoverEffect className={styles.serviceCard}>
                                <div className={styles.imageContainer}>
                                    <img src={service.image} alt={service.title} className={styles.serviceImage} loading="lazy" />
                                </div>

                                <div className={styles.content}>
                                    <h3>{service.title}</h3>
                                    <p>
                                        {service.description}
                                    </p>

                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        icon={ArrowRight}
                                        onClick={() => navigate(`/services/${service.id}`)}
                                        style={{ alignSelf: 'flex-start' }}
                                    >
                                        View Details
                                    </Button>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Services;
