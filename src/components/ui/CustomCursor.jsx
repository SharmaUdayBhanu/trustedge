import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a') || e.target.closest('[role="button"]')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <>
            {/* Outer Ring (Smooth Follow) */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '40px',
                    height: '40px',
                    border: '1.5px solid var(--color-accent)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9998,
                }}
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.2 : 1,
                    opacity: 1
                }}
                transition={{
                    x: { type: "tween", ease: "easeOut", duration: 0.15 },
                    y: { type: "tween", ease: "easeOut", duration: 0.15 },
                    scale: { type: "tween", duration: 0.2 },
                    opacity: { duration: 0.2 }
                }}
            />

            {/* Wave Ripple Effect (Triggered on click) */}
            <AnimatePresence>
                {isClicking && (
                    <motion.div
                        initial={{ opacity: 0.8, scale: 1 }}
                        animate={{ opacity: 0, scale: 2.5 }}
                        exit={{ opacity: 0, scale: 2.5 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        style={{
                            position: 'fixed',
                            left: 0,
                            top: 0,
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '2px solid var(--color-accent)',
                            pointerEvents: 'none',
                            zIndex: 9997,
                            x: mousePosition.x - 20,
                            y: mousePosition.y - 20,
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Inner Hexagon (Metallic Teal-Green Gradient) */}
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '12px',
                    height: '12px',
                    // Metallic Gradient: Dark Teal -> Mint -> White (Shine) -> Mint -> Dark Teal
                    background: 'linear-gradient(135deg, #115e59 0%, #2dd4bf 25%, #f0fdfa 50%, #2dd4bf 75%, #115e59 100%)',
                    backgroundSize: '200% 200%',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    // Bright glow for twinkling feel
                    filter: 'drop-shadow(0 0 5px rgba(45, 212, 191, 0.8))'
                }}
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isClicking ? 0.9 : (isHovering ? 1.5 : 1),
                    rotate: isHovering ? 180 : 0,
                    // Rapid movement for "Sparkle/Reflect" effect
                    backgroundPosition: ["0% 0%", "200% 200%"]
                }}
                transition={{
                    // Instant movement (no bounce)
                    x: { duration: 0 },
                    y: { duration: 0 },
                    scale: { type: "tween", duration: 0.2 },
                    rotate: { type: "tween", duration: 0.2 },
                    // Continuous metallic shine loop
                    backgroundPosition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }}
            />
        </>
    );
};

export default CustomCursor;
