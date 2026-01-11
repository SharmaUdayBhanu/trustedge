import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './GlassCard.module.css';

const GlassCard = ({ children, className, hoverEffect = false, ...props }) => {
    return (
        <motion.div
            className={clsx(styles.card, className, { [styles.hover]: hoverEffect })}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default GlassCard;
