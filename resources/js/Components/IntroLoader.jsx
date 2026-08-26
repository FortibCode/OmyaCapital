import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OmyaLogo from '@/Components/OmyaLogo';
import { useLanguage } from '@/Context/LanguageContext';

export default function IntroLoader({ duration = 2200 }) {
    const [isVisible, setIsVisible] = useState(true);
    const { t } = useLanguage();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="intro-loader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
                    }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F8FAFC] text-slate-800 select-none overflow-hidden"
                >
                    {/* Ambient Radial Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-100/80 via-white to-[#F8FAFC] pointer-events-none" />

                    {/* Central Content Box */}
                    <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
                        {/* Logo Reveal with Smooth Zoom & Brightness animation */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.88,
                                filter: 'blur(14px) brightness(1.4)',
                            }}
                            animate={{
                                opacity: 1,
                                scale: [0.88, 1.05, 1],
                                filter: 'blur(0px) brightness(1)',
                            }}
                            transition={{
                                duration: 1.2,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="flex items-center justify-center"
                        >
                            <OmyaLogo variant="dark" height={96} />
                        </motion.div>

                        {/* Luminous Progress Beam */}
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: '160px', opacity: 1 }}
                            transition={{
                                duration: 1.3,
                                delay: 0.3,
                                ease: 'easeInOut',
                            }}
                            className="h-px mt-8 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
                        />

                        {/* Minimalist Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.6,
                                ease: 'easeOut',
                            }}
                            className="mt-6 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-slate-400"
                        >
                            {t('common.introTagline')}
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
