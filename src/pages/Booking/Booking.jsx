import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../../components/ui/Button';
import GlassCard from '../../components/ui/GlassCard';
import { CheckCircle, Calendar, User, Phone, MapPin, FileText, AlertCircle, Mail } from 'lucide-react'; // Added Mail
import styles from './Booking.module.css';
import emailjs from '@emailjs/browser';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: 'electrical',
        date: '',
        notes: '',
        locationUrl: '' // Added location URL
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false); // Added sending state
    const [errors, setErrors] = useState({});
    const [submitError, setSubmitError] = useState(null); // Added submission error state

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = "Valid email is required";
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) tempErrors.phone = "Valid 10-digit number required";
        if (!formData.address) tempErrors.address = "Address is required";
        if (!formData.date) tempErrors.date = "Date is required";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => { // Changed to async
        e.preventDefault();
        setSubmitError(null);

        if (validate()) {
            setIsSending(true);

            // EmailJS Integration
            try {
                // 1. Send Admin Email
                await emailjs.send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                        to_name: 'Admin',
                        from_name: formData.name,
                        from_email: formData.email,
                        phone: formData.phone,
                        service: formData.service,
                        date: formData.date,
                        address: formData.address,
                        address: formData.address,
                        notes: formData.notes,
                        location_url: formData.locationUrl, // Pass location URL
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                );



                console.log('Booking submitted successfully');
                setIsSubmitted(true);
            } catch (error) {
                console.error('EmailJS Error:', error);
                setSubmitError('Failed to send booking. Please try again later.');
            } finally {
                setIsSending(false);
            }
        }
    };

    const handleGetLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
                setFormData(prev => ({ ...prev, locationUrl: url }));
                // improved: append to notes/address as a fallback visibility
            },
            () => {
                alert("Unable to retrieve your location");
            }
        );
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isSubmitted) {
        return (
            <div className="section-wrapper" style={{ paddingTop: '150px', display: 'flex', justifyContent: 'center' }}>
                <GlassCard className={styles.successCard}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <CheckCircle size={80} color="var(--color-accent)" style={{ margin: '0 auto 1.5rem' }} />
                    </motion.div>
                    <h2 className="text-gradient">Booking Confirmed!</h2>
                    <p>We have received your request. A technician will contact you shortly.</p>
                    <Button onClick={() => setIsSubmitted(false)} variant="secondary" style={{ marginTop: '2rem' }}>
                        Book Another Service
                    </Button>
                </GlassCard>
            </div>
        );
    }

    return (
        <div className={styles.bookingPage}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className="text-gradient">Book a Service</h1>
                    <p>Schedule a certified technician in minutes. Simple, fast, and reliable.</p>
                </div>

                <GlassCard className={styles.formCard}>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        {/* Name */}
                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <div className={styles.inputWrapper}>
                                <User size={18} className={styles.inputIcon} />
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={errors.name ? styles.errorInput : ''}
                                />
                            </div>
                            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                        </div>

                        {/* Email */}
                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <div className={styles.inputWrapper}>
                                <Mail size={18} className={styles.inputIcon} />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? styles.errorInput : ''}
                                />
                            </div>
                            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                        </div>

                        {/* Phone */}
                        <div className={styles.formGroup}>
                            <label>Phone Number</label>
                            <div className={styles.inputWrapper}>
                                <Phone size={18} className={styles.inputIcon} />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={errors.phone ? styles.errorInput : ''}
                                />
                            </div>
                            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
                        </div>

                        {/* Service & Date Row */}
                        <div className={styles.row}>
                            <div className={styles.formGroup}>
                                <label>Service Type</label>
                                <div className={styles.inputWrapper}>
                                    <select name="service" value={formData.service} onChange={handleChange}>
                                        <option value="electrical">Electrical</option>
                                        <option value="plumbing">Plumbing</option>
                                        <option value="hvac">AC & HVAC</option>
                                        <option value="appliance">Appliance Repair</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Preferred Date</label>
                                <div className={styles.inputWrapper}>
                                    <Calendar size={18} className={styles.inputIcon} />
                                    <input
                                        type="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className={errors.date ? styles.errorInput : ''}
                                    />
                                </div>
                                {errors.date && <span className={styles.errorText}>{errors.date}</span>}
                            </div>
                        </div>

                        {/* Address */}
                        <div className={styles.formGroup}>
                            <label>Address</label>
                            <div className={styles.inputWrapper}>
                                <MapPin size={18} className={styles.inputIcon} />
                                <textarea
                                    name="address"
                                    rows="2"
                                    placeholder="Enter your complete address..."
                                    value={formData.address}
                                    onChange={handleChange}
                                    className={errors.address ? styles.errorInput : ''}
                                ></textarea>
                            </div>
                            {errors.address && <span className={styles.errorText}>{errors.address}</span>}
                            <button
                                type="button"
                                onClick={handleGetLocation}
                                className={styles.locationBtn}
                                style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                            >
                                <MapPin size={16} />
                                {formData.locationUrl ? 'Location Captured ✓' : 'Share Current Location'}
                            </button>
                        </div>

                        {/* Notes */}
                        <div className={styles.formGroup}>
                            <label>Additional Notes (Optional)</label>
                            <div className={styles.inputWrapper}>
                                <FileText size={18} className={styles.inputIcon} />
                                <textarea
                                    name="notes"
                                    rows="2"
                                    placeholder="Enter any specific details..."
                                    value={formData.notes}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>

                        <Button type="submit" size="lg" className={styles.submitBtn} disabled={isSending}>
                            {isSending ? 'Sending Request...' : 'Confirm Booking'}
                        </Button>
                        {submitError && (
                            <div style={{ color: '#ef4444', marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <AlertCircle size={16} />
                                <span>{submitError}</span>
                            </div>
                        )}
                    </form>
                </GlassCard>
            </div>
        </div>
    );
};

export default Booking;
