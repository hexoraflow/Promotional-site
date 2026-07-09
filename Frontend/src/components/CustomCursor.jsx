// CustomCursor.jsx
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springConfig = { damping: 25, stiffness: 200 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 20); // Centering a larger cursor
            cursorY.set(e.clientY - 20);
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{ translateX: cursorXSpring, translateY: cursorYSpring }}
        >
            {/* The "Lens" - this will clip the text beneath it */}
            <div className="w-10 h-10 rounded-full border border-white bg-white/10 backdrop-invert flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
        </motion.div>
    );
};

export default CustomCursor;