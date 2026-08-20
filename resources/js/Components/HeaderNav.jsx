import React, { useEffect, useRef, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import OmyaLogo from '@/Components/OmyaLogo';
import { useLanguage } from '@/Context/LanguageContext';

import {
    ChevronDown,
    ArrowRight,
    Building2,
    BriefcaseBusiness,
    TrendingUp,
    FileText,
    Calendar,
    Users,
    ShieldCheck,
    Phone,
    Award,
    Menu,
    X,
    LockKeyhole,
    UserRoundCheck,
    Coins,
    Globe2,
    HelpCircle,
    BookOpen,
    Landmark,
    Handshake,
    BarChart3,
    Newspaper,
    LineChart,
    Scale,
    Target,
    Banknote,
    GraduationCap,
    Calculator,
    RefreshCcw,
    Languages,
    Mail,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   SOCIAL MEDIA SVG ICONS (inline — lucide n'a pas ces marques)
───────────────────────────────────────────── */
const IconLinkedIn = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);
const IconWhatsApp = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);
const IconFacebook = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
);
const IconTikTok = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
    </svg>
);
const IconInstagram = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
);
const IconX = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

/*
|--------------------------------------------------------------------------
| Navigation meta (ids, links, icons) — language independent
|--------------------------------------------------------------------------
*/

function buildNavMeta(auth) {
    return [
        {
            id: 'about',
            featuredHref: route('about', 'presentation'),
            columns: [
                {
                    key: 'identity',
                    items: [
                        { key: 'presentation', href: route('about', 'presentation'), icon: Building2 },
                        { key: 'mission', href: route('about', 'mission'), icon: Target },
                        { key: 'values', href: route('about', 'valeurs'), icon: ShieldCheck },
                    ],
                },
                {
                    key: 'governance',
                    items: [
                        { key: 'governance', href: route('about', 'gouvernance'), icon: Landmark },
                        { key: 'team', href: route('about', 'equipe'), icon: Users },
                        { key: 'approvals', href: route('about', 'presentation'), icon: Award },
                    ],
                },
            ],
        },
        {
            id: 'expertises',
            featuredHref: route('services.show', 'conseil-strategique-financier'),
            columns: [
                {
                    key: 'advisory',
                    items: [
                        { key: 'advisory', href: route('services.show', 'conseil-strategique-financier'), icon: BriefcaseBusiness },
                        { key: 'fundraising', href: route('services.show', 'levee-de-fonds-equity'), icon: Coins },
                        { key: 'ma', href: route('services.show', 'accompagnement-ma-transmission'), icon: Handshake },
                    ],
                },
                {
                    key: 'financing',
                    items: [
                        { key: 'structuredFinancing', href: route('services.show', 'financement-structure-pme'), icon: Banknote },
                        { key: 'placement', href: route('services.show', 'placement-financier-structure'), icon: TrendingUp },
                        { key: 'allExpertises', href: route('services.show', 'conseil-strategique-financier'), icon: ArrowRight },
                    ],
                },
            ],
        },
        {
            id: 'markets',
            featuredHref: route('markets', 'marche-financier'),
            columns: [
                {
                    key: 'instruments',
                    items: [
                        { key: 'financialMarket', href: route('markets', 'marche-financier'), icon: Globe2 },
                        { key: 'stocks', href: route('markets', 'actions'), icon: LineChart },
                        { key: 'bonds', href: route('markets', 'obligations'), icon: FileText },
                    ],
                },
                {
                    key: 'solutions',
                    items: [
                        { key: 'opcvm', href: route('markets', 'opcvm'), icon: Coins },
                        { key: 'structuredProducts', href: route('products.index'), icon: ShieldCheck },
                        { key: 'indicators', href: route('macro'), icon: BarChart3 },
                    ],
                },
            ],
        },
        {
            id: 'insights',
            featuredHref: route('news'),
            columns: [
                {
                    key: 'news',
                    items: [
                        { key: 'news', href: route('news'), icon: Newspaper },
                        { key: 'recommendations', href: route('recommendations'), icon: Award },
                        { key: 'reports', href: route('reports'), icon: FileText },
                    ],
                },
                {
                    key: 'publications',
                    items: [
                        { key: 'publications', href: route('publications'), icon: BookOpen },
                        { key: 'calendar', href: route('calendar'), icon: Calendar },
                        { key: 'training', href: route('training'), icon: GraduationCap },
                    ],
                },
            ],
        },
        {
            id: 'company',
            featuredHref: route('contact'),
            columns: [
                {
                    key: 'company',
                    items: [
                        { key: 'careers', href: route('careers'), icon: Users },
                        { key: 'partners', href: route('partners'), icon: Handshake },
                        { key: 'faq', href: route('faq'), icon: HelpCircle },
                    ],
                },
                {
                    key: 'contact',
                    items: [
                        { key: 'contact', href: route('contact'), icon: Phone },
                        { key: 'appointment', href: route('appointments.create'), icon: Calendar },
                        {
                            key: 'clientArea',
                            href: auth?.user ? route('client.dashboard') : route('login'),
                            icon: UserRoundCheck,
                        },
                    ],
                },
            ],
        },
    ];
}

export default function HeaderNav() {
    const { auth, url } = usePage().props;
    const { t, lang, setLang, languages } = useLanguage();

    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSection, setMobileSection] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const headerRef = useRef(null);
    const langMenuRef = useRef(null);

    /*
    |--------------------------------------------------------------------------
    | Scroll effect
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | Close dropdown on Escape
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setActiveDropdown(null);
                setMobileMenuOpen(false);
                setMobileSection(null);
                setLangMenuOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    /*
    |--------------------------------------------------------------------------
    | Close language menu on outside click
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (!langMenuOpen) return undefined;

        const handleClickOutside = (event) => {
            if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
                setLangMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [langMenuOpen]);

    /*
    |--------------------------------------------------------------------------
    | Prevent body scroll on mobile menu
    |--------------------------------------------------------------------------
    */

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    /*
    |--------------------------------------------------------------------------
    | Helpers
    |--------------------------------------------------------------------------
    */

    const isCurrentRoute = (href) => {
        if (!href || !url) return false;

        try {
            const normalizedHref = new URL(href, window.location.origin).pathname;
            const normalizedCurrent = new URL(url, window.location.origin).pathname;

            return normalizedHref === normalizedCurrent;
        } catch {
            return false;
        }
    };

    const closeMenus = () => {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
        setMobileSection(null);
        setLangMenuOpen(false);
    };

    const toggleMobileSection = (id) => {
        setMobileSection((current) => (current === id ? null : id));
    };

    const selectLanguage = (code) => {
        setLang(code);
        setLangMenuOpen(false);
    };

    /*
    |--------------------------------------------------------------------------
    | Navigation structure — meta (links/icons) merged with translated content
    |--------------------------------------------------------------------------
    */

    const navMeta = buildNavMeta(auth);
    const navContent = t('nav');

    const navItems = navMeta.map((meta) => {
        const content = navContent[meta.id] || {};

        return {
            id: meta.id,
            label: content.label || '',
            featured: {
                eyebrow: content.featured?.eyebrow || '',
                title: content.featured?.title || '',
                description: content.featured?.description || '',
                href: meta.featuredHref,
            },
            columns: meta.columns.map((colMeta) => {
                const colContent = content.columns?.[colMeta.key] || {};

                return {
                    title: colContent.title || '',
                    items: colMeta.items.map((itemMeta) => {
                        const itemContent = colContent.items?.[itemMeta.key] || {};

                        return {
                            href: itemMeta.href,
                            icon: itemMeta.icon,
                            title: itemContent.title || '',
                            desc: itemContent.desc || '',
                        };
                    }),
                };
            }),
        };
    });

    /*
    |--------------------------------------------------------------------------
    | Utility links
    |--------------------------------------------------------------------------
    */

    const utilityLinks = [
        {
            label: t('utility.calculator'),
            href: route('calculator'),
            icon: Calculator,
        },
        {
            label: t('utility.rates'),
            href: route('rates'),
            icon: RefreshCcw,
        },
        {
            label: t('utility.indicators'),
            href: route('macro'),
            icon: BarChart3,
        },
    ];

    return (
        <>
            <header
                ref={headerRef}
                className={`sticky top-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,23,42,0.08)]'
                        : 'bg-white'
                }`}
            >
                {/* =========================================================
                    TOP BAR INSTITUTIONNELLE
                ========================================================= */}

                {/* =========================================================
                    TOP BAR INSTITUTIONNELLE (REFINED)
                ========================================================= */}

                <div className="hidden lg:block bg-[#0B1F33] text-white">
                    <div className="max-w-[1600px] mx-auto px-6 xl:px-10">
                        <div className="h-8 flex items-center justify-between text-[11px] font-semibold tracking-widest uppercase">
                            <div className="flex items-center gap-4">
                                <span className="text-sky-300 font-extrabold">
                                    OMYA CAPITAL S.A.
                                </span>

                                <span className="w-px h-3 bg-white/20" />

                                <span className="text-white/80 font-medium">
                                    {t('common.topbarTagline')}
                                </span>
                            </div>

                            {/* ── SOCIAL MEDIA ICONS (liens à activer quand les pages sont prêtes) ── */}
                            <div className="flex items-center gap-4">
                                {[
                                    { Icon: IconLinkedIn, label: 'LinkedIn', hoverColor: 'hover:text-sky-300' },
                                    { Icon: IconWhatsApp, label: 'WhatsApp', hoverColor: 'hover:text-green-400' },
                                    { Icon: IconFacebook, label: 'Facebook', hoverColor: 'hover:text-blue-400' },
                                    { Icon: IconTikTok, label: 'TikTok', hoverColor: 'hover:text-pink-400' },
                                    { Icon: IconInstagram, label: 'Instagram', hoverColor: 'hover:text-orange-400' },
                                    { Icon: IconX, label: 'X / Twitter', hoverColor: 'hover:text-white' },
                                ].map(({ Icon, label, hoverColor }) => (
                                    <span
                                        key={label}
                                        aria-label={label}
                                        title="Bientôt disponible"
                                        className={`text-white/50 ${hoverColor} cursor-not-allowed transition-colors duration-200 relative group`}
                                    >
                                        <Icon className="w-[18px] h-[18px]" />
                                        {/* Tooltip */}
                                        <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0B1F33] text-white text-[10px] font-semibold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 border border-white/10">
                                            Bientôt disponible
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========================================================
                    MAIN HEADER — EXPANDED & ACCESSIBLE
                ========================================================= */}

                <div
                    className={`border-b transition-colors duration-300 ${
                        scrolled
                            ? 'border-slate-200 shadow-sm'
                            : 'border-slate-100'
                    }`}
                >
                    <div className="max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-10">
                        <div
                            className={`flex items-center justify-between transition-all duration-300 ${
                                scrolled ? 'h-[80px]' : 'h-[92px]'
                            }`}
                        >
                            {/* =================================================
                                LOGO
                            ================================================= */}

                            <Link
                                href={route('home')}
                                onClick={closeMenus}
                                className="flex items-center shrink-0 group mr-4 xl:mr-8"
                            >
                                <OmyaLogo
                                    variant="dark"
                                    height={scrolled ? 42 : 48}
                                />
                            </Link>

                            {/* =================================================
                                DESKTOP NAVIGATION — ENLARGED FOR HIGH VISIBILITY
                            ================================================= */}

                            <nav
                                className="hidden xl:flex items-center mr-auto"
                                aria-label={t('common.mainNavAria')}
                            >
                                <div className="flex items-center gap-1.5 2xl:gap-3">
                                    <Link
                                        href={route('home')}
                                        className={`relative px-4 2xl:px-5 py-3.5 text-sm 2xl:text-base font-extrabold tracking-wide transition-colors ${
                                            isCurrentRoute(route('home'))
                                                ? 'text-[#0B4F71]'
                                                : 'text-slate-800 hover:text-[#0B4F71]'
                                        }`}
                                    >
                                        {t('common.home')}

                                        {isCurrentRoute(route('home')) && (
                                            <motion.span
                                                layoutId="nav-active"
                                                className="absolute left-4 right-4 -bottom-[1px] h-[3px] bg-[#0B4F71] rounded-full"
                                            />
                                        )}
                                    </Link>

                                    {navItems.map((item) => {
                                        const isOpen =
                                            activeDropdown === item.id;

                                        return (
                                            <div
                                                key={item.id}
                                                className="relative"
                                                onMouseEnter={() =>
                                                    setActiveDropdown(item.id)
                                                }
                                            >
                                                <button
                                                    type="button"
                                                    aria-expanded={isOpen}
                                                    aria-haspopup="true"
                                                    onClick={() =>
                                                        setActiveDropdown(
                                                            isOpen
                                                                ? null
                                                                : item.id
                                                        )
                                                    }
                                                    className={`relative inline-flex items-center gap-2 px-4 2xl:px-5 py-3.5 text-sm 2xl:text-base font-extrabold tracking-wide transition-colors ${
                                                        isOpen
                                                            ? 'text-[#0B4F71]'
                                                            : 'text-slate-800 hover:text-[#0B4F71]'
                                                    }`}
                                                >
                                                    {item.label}

                                                    <ChevronDown
                                                        className={`w-4 h-4 transition-transform duration-200 ${
                                                            isOpen
                                                                ? 'rotate-180 text-[#0B4F71]'
                                                                : 'text-slate-400'
                                                        }`}
                                                    />
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </nav>

                            {/* =================================================
                                DESKTOP ACTIONS — INTEGRATING CONTACT & LANGUAGES
                            ================================================= */}

                            <div className="hidden lg:flex items-center gap-3">
                                {/* 1. LANGUAGE SELECTOR (INTEGRATED) */}
                                <div className="relative" ref={langMenuRef}>
                                    <button
                                        type="button"
                                        aria-haspopup="true"
                                        aria-expanded={langMenuOpen}
                                        aria-label={t('common.changeLanguage')}
                                        onClick={() =>
                                            setLangMenuOpen((current) => !current)
                                        }
                                        className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 px-4 2xl:px-5 py-2.5 2xl:py-3 rounded-xl font-extrabold text-xs 2xl:text-sm whitespace-nowrap shadow-sm transition-all focus:outline-none"
                                    >
                                        <Languages className="w-4 h-4 text-[#0B4F71]" />
                                        <span>
                                            {languages.find((l) => l.code === lang)
                                                ?.short}
                                        </span>
                                        <ChevronDown
                                            className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${
                                                langMenuOpen ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {langMenuOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -4 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute right-0 top-full mt-2 w-44 bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden z-50"
                                            >
                                                {languages.map((l) => (
                                                    <button
                                                        key={l.code}
                                                        type="button"
                                                        onClick={() =>
                                                            selectLanguage(l.code)
                                                        }
                                                        className={`w-full flex items-center justify-between px-4 py-3 text-xs 2xl:text-sm font-bold transition-colors ${
                                                            lang === l.code
                                                                ? 'bg-[#F1F7FA] text-[#0B4F71]'
                                                                : 'text-slate-700 hover:bg-slate-50'
                                                        }`}
                                                    >
                                                        <span>{l.label}</span>
                                                        <span className="text-xs text-slate-400 font-mono">
                                                            {l.short}
                                                        </span>
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* 2. CONTACT BUTTON (INTEGRATED) */}
                                <Link
                                    href={route('contact')}
                                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 px-4 2xl:px-5 py-2.5 2xl:py-3 rounded-xl font-extrabold text-xs 2xl:text-sm whitespace-nowrap shadow-sm transition-all"
                                >
                                    <Phone className="w-4 h-4 text-[#0B4F71]" />
                                    <span>{t('common.contact')}</span>
                                </Link>

                                {/* 3. APPOINTMENT BUTTON */}
                                <Link
                                    href={route('appointments.create')}
                                    className="inline-flex items-center justify-center gap-2 bg-[#0B4F71] hover:bg-[#093D58] text-white px-5 2xl:px-6 py-2.5 2xl:py-3 rounded-xl font-extrabold text-xs 2xl:text-sm whitespace-nowrap shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span>{t('common.bookAppointment')}</span>
                                </Link>

                                {/* 4. CLIENT AREA BUTTON */}
                                {auth?.user ? (
                                    <Link
                                        href={route('client.dashboard')}
                                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0B1F33] border-2 border-[#0B4F71]/30 hover:border-[#0B4F71] px-4 2xl:px-5 py-2.5 2xl:py-3 rounded-xl font-extrabold text-xs 2xl:text-sm whitespace-nowrap transition-all"
                                    >
                                        <UserRoundCheck className="w-4 h-4 text-[#0B4F71]" />
                                        <span>{t('common.clientArea')}</span>
                                    </Link>
                                ) : (
                                    <Link
                                        href={route('login')}
                                        className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#0B1F33] border-2 border-slate-200 hover:border-[#0B4F71] px-4 2xl:px-5 py-2.5 2xl:py-3 rounded-xl font-extrabold text-xs 2xl:text-sm whitespace-nowrap transition-all"
                                    >
                                        <LockKeyhole className="w-4 h-4 text-[#0B4F71]" />
                                        <span>{t('common.clientArea')}</span>
                                    </Link>
                                )}
                            </div>

                            {/* =================================================
                                MOBILE BUTTON
                            ================================================= */}

                            <button
                                type="button"
                                aria-label={
                                    mobileMenuOpen
                                        ? t('common.closeMenu')
                                        : t('common.openMenu')
                                }
                                aria-expanded={mobileMenuOpen}
                                onClick={() => {
                                    setMobileMenuOpen((current) => !current);
                                    setMobileSection(null);
                                }}
                                className="xl:hidden flex items-center justify-center w-12 h-12 rounded-xl text-[#0B1F33] bg-slate-100 hover:bg-slate-200 transition-colors"
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-7 h-7" />
                                ) : (
                                    <Menu className="w-7 h-7" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* =============================================================
                    DESKTOP MEGA MENU
                ============================================================= */}

                <AnimatePresence>
                    {activeDropdown && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: -8,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -6,
                            }}
                            transition={{
                                duration: 0.18,
                                ease: 'easeOut',
                            }}
                            onMouseLeave={() =>
                                setActiveDropdown(null)
                            }
                            className="hidden xl:block absolute left-0 right-0 top-full bg-white border-b border-slate-200 shadow-[0_20px_45px_rgba(15,23,42,0.10)]"
                        >
                            {navItems
                                .filter(
                                    (item) =>
                                        item.id === activeDropdown
                                )
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="max-w-[1280px] mx-auto px-8 py-8"
                                    >
                                        <div className="grid grid-cols-[280px_1fr] gap-12">
                                            {/* =================================
                                                FEATURED
                                            ================================= */}

                                            <div className="border-r border-slate-100 pr-10">
                                                <div className="text-[10px] font-extrabold tracking-[0.18em] text-[#B08D2C] uppercase mb-3">
                                                    {item.featured.eyebrow}
                                                </div>

                                                <h3 className="text-xl font-semibold leading-tight text-[#0B1F33]">
                                                    {item.featured.title}
                                                </h3>

                                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                                    {item.featured.description}
                                                </p>

                                                <Link
                                                    href={
                                                        item.featured.href
                                                    }
                                                    onClick={() =>
                                                        setActiveDropdown(
                                                            null
                                                        )
                                                    }
                                                    className="inline-flex items-center gap-2 mt-5 text-xs font-bold text-[#0B4F71] hover:text-[#083A54] transition-colors"
                                                >
                                                    {t('common.discover')}
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </Link>
                                            </div>

                                            {/* =================================
                                                MENU COLUMNS
                                            ================================= */}

                                            <div className="grid grid-cols-2 gap-10">
                                                {item.columns.map(
                                                    (column) => (
                                                        <div
                                                            key={
                                                                column.title
                                                            }
                                                        >
                                                            <div className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-slate-400 mb-4">
                                                                {
                                                                    column.title
                                                                }
                                                            </div>

                                                            <div className="space-y-1">
                                                                {column.items.map(
                                                                    (
                                                                        child
                                                                    ) => {
                                                                        const Icon =
                                                                            child.icon;

                                                                        return (
                                                                            <Link
                                                                                key={
                                                                                    child.title
                                                                                }
                                                                                href={
                                                                                    child.href
                                                                                }
                                                                                onClick={() =>
                                                                                    setActiveDropdown(
                                                                                        null
                                                                                    )
                                                                                }
                                                                                className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#F6FAFC] transition-colors"
                                                                            >
                                                                                <div className="w-9 h-9 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-[#0B4F71] group-hover:bg-[#0B4F71] group-hover:border-[#0B4F71] group-hover:text-white transition-all shrink-0">
                                                                                    <Icon className="w-4 h-4" />
                                                                                </div>

                                                                                <div className="min-w-0">
                                                                                    <div className="flex items-center gap-1.5">
                                                                                        <span className="text-sm font-bold text-[#0B1F33] group-hover:text-[#0B4F71] transition-colors">
                                                                                            {
                                                                                                child.title
                                                                                            }
                                                                                        </span>

                                                                                        <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-[#0B4F71] transition-all" />
                                                                                    </div>

                                                                                    <p className="mt-1 text-xs leading-5 text-slate-500">
                                                                                        {
                                                                                            child.desc
                                                                                        }
                                                                                    </p>
                                                                                </div>
                                                                            </Link>
                                                                        );
                                                                    }
                                                                )}
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* =============================================================
                    MOBILE MENU
                ============================================================= */}

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                height: 0,
                            }}
                            animate={{
                                opacity: 1,
                                height: 'auto',
                            }}
                            exit={{
                                opacity: 0,
                                height: 0,
                            }}
                            transition={{
                                duration: 0.25,
                                ease: 'easeInOut',
                            }}
                            className="xl:hidden absolute left-0 right-0 top-full bg-white border-b border-slate-200 shadow-2xl overflow-hidden"
                        >
                            <div className="max-h-[calc(100vh-80px)] overflow-y-auto">
                                <div className="px-5 py-5">
                                    {/* ===============================
                                        MOBILE LANGUAGE SWITCH
                                    =============================== */}

                                    <div className="flex items-center gap-2 mb-5">
                                        {languages.map((l) => (
                                            <button
                                                key={l.code}
                                                type="button"
                                                onClick={() =>
                                                    selectLanguage(l.code)
                                                }
                                                className={`flex-1 py-2 rounded-lg text-[11px] font-bold tracking-wide border transition-colors ${
                                                    lang === l.code
                                                        ? 'bg-[#0B4F71] text-white border-[#0B4F71]'
                                                        : 'bg-white text-slate-600 border-slate-200'
                                                }`}
                                            >
                                                {l.short}
                                            </button>
                                        ))}
                                    </div>

                                    {/* ===============================
                                        MOBILE QUICK LINKS
                                    =============================== */}

                                    <div className="grid grid-cols-3 gap-2 mb-5">
                                        {utilityLinks.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <Link
                                                    key={item.label}
                                                    href={item.href}
                                                    onClick={
                                                        closeMenus
                                                    }
                                                    className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-center"
                                                >
                                                    <Icon className="w-4 h-4 text-[#0B4F71]" />

                                                    <span className="text-[9px] font-bold text-slate-600">
                                                        {item.label}
                                                    </span>
                                                </Link>
                                            );
                                        })}
                                    </div>

                                    {/* ===============================
                                        HOME
                                    =============================== */}

                                    <Link
                                        href={route('home')}
                                        onClick={closeMenus}
                                        className={`flex items-center justify-between py-4 border-b border-slate-100 ${
                                            isCurrentRoute(
                                                route('home')
                                            )
                                                ? 'text-[#0B4F71]'
                                                : 'text-[#0B1F33]'
                                        }`}
                                    >
                                        <span className="text-sm font-bold">
                                            {t('common.home')}
                                        </span>

                                        <ArrowRight className="w-4 h-4" />
                                    </Link>

                                    {/* ===============================
                                        MOBILE SECTIONS
                                    =============================== */}

                                    <div className="divide-y divide-slate-100">
                                        {navItems.map((item) => {
                                            const isOpen =
                                                mobileSection ===
                                                item.id;

                                            return (
                                                <div
                                                    key={item.id}
                                                >
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            toggleMobileSection(
                                                                item.id
                                                            )
                                                        }
                                                        className="w-full flex items-center justify-between py-4 text-left"
                                                    >
                                                        <span className="text-sm font-bold text-[#0B1F33]">
                                                            {
                                                                item.label
                                                            }
                                                        </span>

                                                        <ChevronDown
                                                            className={`w-4 h-4 text-slate-400 transition-transform ${
                                                                isOpen
                                                                    ? 'rotate-180 text-[#0B4F71]'
                                                                    : ''
                                                            }`}
                                                        />
                                                    </button>

                                                    <AnimatePresence>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{
                                                                    opacity: 0,
                                                                    height: 0,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    height: 'auto',
                                                                }}
                                                                exit={{
                                                                    opacity: 0,
                                                                    height: 0,
                                                                }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="pb-4 space-y-4">
                                                                    {item.columns.map(
                                                                        (
                                                                            column
                                                                        ) => (
                                                                            <div
                                                                                key={
                                                                                    column.title
                                                                                }
                                                                            >
                                                                                <div className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400 mb-2">
                                                                                    {
                                                                                        column.title
                                                                                    }
                                                                                </div>

                                                                                <div className="space-y-1">
                                                                                    {column.items.map(
                                                                                        (
                                                                                            child
                                                                                        ) => {
                                                                                            const Icon =
                                                                                                child.icon;

                                                                                            return (
                                                                                                <Link
                                                                                                    key={
                                                                                                        child.title
                                                                                                    }
                                                                                                    href={
                                                                                                        child.href
                                                                                                    }
                                                                                                    onClick={
                                                                                                        closeMenus
                                                                                                    }
                                                                                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                                                                                                >
                                                                                                    <div className="w-8 h-8 rounded-lg bg-[#F1F7FA] flex items-center justify-center text-[#0B4F71] shrink-0">
                                                                                                        <Icon className="w-4 h-4" />
                                                                                                    </div>

                                                                                                    <div className="min-w-0">
                                                                                                        <div className="text-xs font-bold text-[#0B1F33]">
                                                                                                            {
                                                                                                                child.title
                                                                                                            }
                                                                                                        </div>

                                                                                                        <div className="text-[10px] leading-4 text-slate-500 mt-0.5">
                                                                                                            {
                                                                                                                child.desc
                                                                                                            }
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </Link>
                                                                                            );
                                                                                        }
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    )}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* ===============================
                                        MOBILE ACTIONS
                                    =============================== */}

                                    <div className="pt-5 border-t border-slate-100 mt-2 space-y-2">
                                        <Link
                                            href={route(
                                                'appointments.create'
                                            )}
                                            onClick={closeMenus}
                                            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#0B4F71] text-white text-xs font-extrabold"
                                        >
                                            <Calendar className="w-4 h-4" />
                                            {t('common.bookAppointment')}
                                        </Link>

                                        {auth?.user ? (
                                            <Link
                                                href={route(
                                                    'client.dashboard'
                                                )}
                                                onClick={
                                                    closeMenus
                                                }
                                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-slate-200 text-[#0B1F33] text-xs font-bold"
                                            >
                                                <UserRoundCheck className="w-4 h-4 text-[#0B4F71]" />
                                                {t('common.clientArea')}
                                            </Link>
                                        ) : (
                                            <Link
                                                href={route(
                                                    'login'
                                                )}
                                                onClick={
                                                    closeMenus
                                                }
                                                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-slate-200 text-[#0B1F33] text-xs font-bold"
                                            >
                                                <LockKeyhole className="w-4 h-4 text-[#0B4F71]" />
                                                {t('common.accessMyAccount')}
                                            </Link>
                                        )}
                                    </div>

                                    {/* ===============================
                                        MOBILE CONTACT
                                    =============================== */}

                                    <div className="mt-5 pt-5 border-t border-slate-100">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-[9px] font-extrabold uppercase tracking-[0.15em] text-slate-400">
                                                    {t('common.needHelp')}
                                                </div>

                                                <div className="text-xs font-semibold text-[#0B1F33] mt-1">
                                                    {t('common.teamListening')}
                                                </div>
                                            </div>

                                            <Link
                                                href={route(
                                                    'contact'
                                                )}
                                                onClick={
                                                    closeMenus
                                                }
                                                className="w-9 h-9 rounded-full bg-[#F1F7FA] flex items-center justify-center text-[#0B4F71]"
                                            >
                                                <Mail className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* =============================================================
                BACKDROP MOBILE
            ============================================================= */}

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="xl:hidden fixed inset-0 z-40 bg-[#0B1F33]/30 backdrop-blur-[2px]"
                        onClick={closeMenus}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
