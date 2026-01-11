import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

const Button = ({ children, variant = 'primary', size = 'md', className, icon: Icon, ...props }) => {
    return (
        <motion.button
            className={clsx(styles.btn, styles[variant], styles[size], className)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            {...props}
        >
            {children}
            {Icon && <Icon size={18} className={styles.icon} />}
        </motion.button>
    );
};

export default Button;
