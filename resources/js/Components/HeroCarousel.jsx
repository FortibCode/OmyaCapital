import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { useLanguage } from '@/Context/LanguageContext';
import OmyaLogo from '@/Components/OmyaLogo';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
    ChevronLeft,
    ChevronRight,
    Pause,
    Play,
} from 'lucide-react';

const SLIDE_DURATION = 4500; // 4.5 seconds autoplay for seamless automatic transitions

const theme = createTheme({
    palette: {
        primary: {
            main: '#0284C7',
        },
    },
    typography: {
        fontFamily: 'inherit',
    },
});

export default function HeroCarousel() {
    const { t } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const helperRoute = (name, param) => {
        try {
            if (typeof route === 'function') {
                return param ? route(name, param) : route(name);
            }
        } catch (e) {
            // fallback
        }
        return '#';
    };

    const HERO_SLIDES = [
        {
            id: 1,
            image: '/images/image-hero-1.png',
        },
        {
            id: 2,
            image: '/images/image-hero-2.png',
        },
        {
            id: 3,
            image: '/images/image-hero-3.png',
        },
        {
            id: 4,
            image: '/images/image-hero-4.png',
        },
    ];

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, [HERO_SLIDES.length]);

    const prevSlide = useCallback(() => {
        setDirection(-1);
        setCurrentIndex(
            (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
        );
    }, [HERO_SLIDES.length]);

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // Automatic Slide Transition Timer (Runs continuously unless user clicks Pause)
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            nextSlide();
        }, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, [isPaused, nextSlide]);

    // Touch Swipe Handlers for Mobile
    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 40) {
            nextSlide();
        } else if (diff < -40) {
            prevSlide();
        }
        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    return (
        <ThemeProvider theme={theme}>
            <section
                aria-label="Hero Carousel"
                className="relative overflow-hidden text-white min-h-screen flex items-center justify-center bg-[#071526] select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* ══ AUTOMATICALLY CROSSFADING BACKGROUND IMAGES (ALL 4 PRELOADED) ══ */}
                {HERO_SLIDES.map((slide, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                        <motion.div
                            key={slide.id}
                            initial={false}
                            animate={{
                                opacity: isActive ? 1 : 0,
                                scale: isActive ? 1.04 : 1.1,
                            }}
                            transition={{
                                opacity: {
                                    duration: 1.2,
                                    ease: [0.4, 0, 0.2, 1],
                                },
                                scale: { duration: 6, ease: 'linear' },
                            }}
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
                            style={{
                                backgroundImage: `url('${slide.image}')`,
                                zIndex: isActive ? 1 : 0,
                            }}
                        />
                    );
                })}

                {/* ══ ELEGANT MIDNIGHT BLUE OVERLAYS (HIGH CLARITY & RICH NIGHT BLUE TONE) ══ */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F33]/55 via-[#0E2A47]/30 to-[#0B1F33]/30 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071524]/70 via-transparent to-[#0B1F33]/35 z-10 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400/20 via-[#0B1F33]/15 to-transparent z-10 pointer-events-none" />

                {/* ══ CENTRAL HERO CONTENT WITH LOGO & MESSAGE SIDE-BY-SIDE ══ */}
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col justify-center items-center min-h-screen text-center py-12">
                    <Paper
                        elevation={0}
                        sx={{
                            px: { xs: 4, sm: 6, md: 8 },
                            py: { xs: 5, sm: 7, md: 8 },
                            borderRadius: 7,
                            backgroundColor: 'rgba(11, 31, 51, 0.45)',
                            backdropFilter: 'blur(24px)',
                            border: '1.5px solid rgba(255, 255, 255, 0.45)',
                            boxShadow:
                                '0px 25px 60px -10px rgba(0, 0, 0, 0.5), 0px 10px 30px 0px rgba(56, 189, 248, 0.25), inset 0px 1px 1px rgba(255, 255, 255, 0.6)',
                            maxWidth: '940px',
                            width: '100%',
                        }}
                    >
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10 text-center md:text-left">
                            {/* Logo OMYA CAPITAL */}
                            <div className="shrink-0 flex items-center justify-center p-4 sm:p-5 rounded-2xl bg-white/15 backdrop-blur-md border border-white/35 shadow-xl hover:scale-105 transition-transform">
                                <OmyaLogo variant="light" height={62} />
                            </div>

                            {/* Separator Line (Desktop) */}
                            <div className="hidden md:block w-[2px] h-24 bg-gradient-to-b from-transparent via-sky-300/80 to-transparent shrink-0" />

                            {/* Main Message with line break */}
                            <Typography
                                variant="h2"
                                sx={{
                                    color: '#ffffff',
                                    fontWeight: 800,
                                    lineHeight: 1.4,
                                    fontSize: {
                                        xs: '1.25rem',
                                        sm: '1.6rem',
                                        md: '1.85rem',
                                        lg: '2.05rem',
                                    },
                                    textShadow: '0px 2px 12px rgba(0, 0, 0, 0.8)',
                                    letterSpacing: '-0.01em',
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                {t('home.heroMessage') || "Certaines choses ne se précipitent pas.\nNotre site arrive prochainement."}
                            </Typography>
                        </div>
                    </Paper>
                </div>

                {/* ══ NAVIGATION ARROWS (MANUAL CONTROL) ══ */}
                <div className="absolute inset-y-0 left-3 sm:left-8 z-30 flex items-center">
                    <button
                        onClick={prevSlide}
                        aria-label="Slide précédente"
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900/40 hover:bg-sky-600/80 border border-white/20 hover:border-sky-400 backdrop-blur-md text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 focus:outline-none"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                </div>

                <div className="absolute inset-y-0 right-3 sm:right-8 z-30 flex items-center">
                    <button
                        onClick={nextSlide}
                        aria-label="Slide suivante"
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-slate-900/40 hover:bg-sky-600/80 border border-white/20 hover:border-sky-400 backdrop-blur-md text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 focus:outline-none"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                {/* ══ BOTTOM CONTROLS & PAGINATION BAR ══ */}
                <div className="absolute bottom-6 sm:bottom-10 inset-x-0 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* 1. Slide Counter / Index */}
                    <div className="hidden sm:flex items-center gap-3 text-xs font-bold tracking-widest text-slate-300 bg-slate-950/60 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                        <span className="text-sky-400 font-extrabold text-sm">
                            0{currentIndex + 1}
                        </span>
                        <span className="text-slate-500">/</span>
                        <span>0{HERO_SLIDES.length}</span>
                    </div>

                    {/* 2. Interactive Pagination Dots & Live Progress Bar */}
                    <div className="flex items-center gap-2.5 bg-slate-950/60 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-md shadow-2xl">
                        {HERO_SLIDES.map((slide, idx) => {
                            const isActive = idx === currentIndex;
                            return (
                                <button
                                    key={slide.id}
                                    onClick={() => goToSlide(idx)}
                                    aria-label={`Aller à la slide ${idx + 1}`}
                                    className={`relative h-2.5 rounded-full transition-all duration-500 overflow-hidden focus:outline-none ${
                                        isActive
                                            ? 'w-10 sm:w-14 bg-sky-500'
                                            : 'w-2.5 sm:w-3 bg-white/30 hover:bg-white/60'
                                    }`}
                                >
                                    {isActive && !isPaused && (
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ width: '0%' }}
                                            animate={{ width: '100%' }}
                                            transition={{
                                                duration: SLIDE_DURATION / 1000,
                                                ease: 'linear',
                                            }}
                                            className="h-full bg-white/90"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* 3. Autoplay Pause/Play Toggle Button */}
                    <div className="hidden sm:flex items-center">
                        <button
                            onClick={() => setIsPaused((prev) => !prev)}
                            aria-label={
                                isPaused
                                    ? 'Lancer la lecture'
                                    : 'Mettre en pause'
                            }
                            className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-950/60 border border-white/10 hover:border-white/30 px-3.5 py-2 rounded-full backdrop-blur-md transition-all focus:outline-none"
                        >
                            {isPaused ? (
                                <>
                                    <Play className="w-3.5 h-3.5 text-sky-400" />
                                    <span>Lecture</span>
                                </>
                            ) : (
                                <>
                                    <Pause className="w-3.5 h-3.5 text-slate-400" />
                                    <span>Pause</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </section>
        </ThemeProvider>
    );
}
