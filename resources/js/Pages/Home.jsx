import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useLanguage } from '@/Context/LanguageContext';
import {
    Shield,
    Globe,
    UserCheck,
    Briefcase,
    TrendingUp,
    Coins,
    Building2,
    ArrowRight,
    ChevronRight,
} from 'lucide-react';

import HeroCarousel from '@/Components/HeroCarousel';

const MATERIAL_EASE = [0.4, 0, 0.2, 1];

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

const SERVICE_ICONS = {
    conseil: Briefcase,
    placement: TrendingUp,
    levee_de_fonds: Coins,
    accompagnement: UserCheck,
    financement: Building2,
};

const MISSION_POINTS = [
    {
        icon: TrendingUp,
        title: 'Valoriser les Capitaux',
        desc: 'Des placements rigoureux, transparents et performants adaptés au profil de risque de chaque investisseur.',
    },
    {
        icon: Briefcase,
        title: 'Financer la Croissance',
        desc: 'Accompagner les PME et ETI régionales vers des financements structurés en dette privée ou en capital.',
    },
];

export default function Home({ services = [], partners = [] }) {
    const { t } = useLanguage();

    return (
        <PublicLayout hideFooter hideNav>

            <Head title={t('home.title')} />

            {/* ══ HERO CAROUSEL ══ */}
            <HeroCarousel />

            {false && (
                <>
                    {/* ══ TRUST STRIP ══ */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                {
                                    icon: Shield,
                                    title: 'SIF Agréée',
                                    desc: 'Conforme aux exigences de la commission de surveillance.',
                                },
                                {
                                    icon: Globe,
                                    title: 'Zone CEMAC & UEMOA',
                                    desc: "Ancrage régional en Afrique Centrale et de l'Ouest.",
                                },
                                {
                                    icon: UserCheck,
                                    title: 'Conformité KYC/AML',
                                    desc: 'Vérification systématique des identités et sources de fonds.',
                                },
                                {
                                    icon: Briefcase,
                                    title: `${services.length} Solutions Financières`,
                                    desc: 'Conseil, placement, levée de fonds et financement structuré.',
                                },
                            ].map(({ icon: Icon, title, desc }, i) => (
                                <motion.div
                                    key={title}
                                    initial={{
                                        opacity: 0,
                                        y: 16,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        delay: i * 0.08,
                                    }}
                                    className="bg-sky-50/80 border border-sky-100 rounded-2xl p-7 text-center shadow-sm"
                                >
                                    <div className="w-14 h-14 rounded-full bg-white border-2 border-sky-500 flex items-center justify-center text-sky-600 mx-auto mb-4 shadow-sm">
                                        <Icon className="w-6 h-6" />
                                    </div>

                                    <h3 className="text-sm font-extrabold text-slate-900 mb-1.5">
                                        {title}
                                    </h3>

                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        {desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* ══ À PROPOS (TEASER) ══ */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                            <div className="relative order-2 lg:order-1">
                                <div className="rounded-3xl bg-gradient-to-br from-sky-50 to-sky-100 border border-sky-100 p-10 aspect-[4/3] flex items-center justify-center relative overflow-hidden">

                                    <div
                                        className="absolute inset-0 opacity-50"
                                        style={{
                                            backgroundImage:
                                                'radial-gradient(circle, rgba(2,132,199,0.15) 1.5px, transparent 1.5px)',
                                            backgroundSize: '24px 24px',
                                        }}
                                    />

                                    <Building2
                                        className="w-28 h-28 text-sky-300 relative z-10"
                                        strokeWidth={1}
                                    />

                                    <div className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 z-10">

                                        <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                                            <Shield className="w-5 h-5" />
                                        </div>

                                        <div>
                                            <p className="text-xs font-extrabold text-slate-900">
                                                Conformité KYC / AML Strictes
                                            </p>

                                            <p className="text-[11px] text-slate-500">
                                                Comité d'investissement indépendant
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 lg:order-2">

                                <span className="text-sky-600 text-xs font-extrabold uppercase tracking-widest mb-3 block">
                                    À Propos
                                </span>

                                <h2 className="text-3xl font-black text-slate-900 mb-5">
                                    OMYA CAPITAL S.A.
                                </h2>

                                <p className="text-sm text-slate-600 leading-relaxed mb-8">
                                    OMYA CAPITAL est une{' '}
                                    <strong>
                                        Société Intermédiaire Financière (SIF)
                                    </strong>{' '}
                                    agréée et opérant dans l'espace CEMAC et
                                    UEMOA. Fondée pour répondre aux besoins
                                    croissants de structuration financière des
                                    entreprises et des investisseurs privés de
                                    la sous-région, nous plaçons l'ingénierie
                                    au cœur de chaque mandat.
                                </p>

                                <div className="space-y-5 mb-8">

                                    {MISSION_POINTS.map(
                                        ({
                                            icon: Icon,
                                            title,
                                            desc,
                                        }) => (
                                            <div
                                                key={title}
                                                className="flex items-start gap-4"
                                            >
                                                <div className="w-11 h-11 rounded-full bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                                                    <Icon className="w-5 h-5" />
                                                </div>

                                                <div>
                                                    <h3 className="text-sm font-extrabold text-slate-900 mb-1">
                                                        {title}
                                                    </h3>

                                                    <p className="text-xs text-slate-500 leading-relaxed">
                                                        {desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ),
                                    )}

                                </div>

                                <Link
                                    href={route(
                                        'about',
                                        'presentation',
                                    )}
                                    className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-bold text-sm"
                                >
                                    <span>
                                        En savoir plus sur OMYA CAPITAL
                                    </span>

                                    <ChevronRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* ══ SERVICES ══ */}
                    <section className="bg-white py-20 border-t border-sky-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                            <div className="text-center max-w-2xl mx-auto mb-14">

                                <span className="text-sky-600 text-xs font-extrabold uppercase tracking-widest mb-3 block">
                                    Nos Services
                                </span>

                                <h2 className="text-3xl font-black text-slate-900 mb-4">
                                    Nos Métiers & Services SIF
                                </h2>

                                <p className="text-slate-500 text-sm leading-relaxed">
                                    De la structuration de dettes à la levée de
                                    fonds, nos équipes vous accompagnent à
                                    chaque étape de votre projet financier.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                {services.map((srv, idx) => {

                                    const IconComp =
                                        SERVICE_ICONS[srv.category] ||
                                        Briefcase;

                                    return (
                                        <motion.div
                                            key={srv.id}
                                            initial={{
                                                opacity: 0,
                                                y: 20,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            viewport={{
                                                once: true,
                                            }}
                                            transition={{
                                                delay: idx * 0.08,
                                            }}
                                            whileHover={{
                                                y: -4,
                                            }}
                                            className="bg-sky-50/60 border border-sky-100 hover:border-sky-300 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all text-center flex flex-col items-center"
                                        >

                                            <div className="w-14 h-14 rounded-full bg-white border-2 border-sky-500 flex items-center justify-center text-sky-600 mb-4">
                                                <IconComp className="w-6 h-6" />
                                            </div>

                                            <span className="inline-block bg-white text-sky-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase border border-sky-200 mb-3">
                                                {srv.category?.replace(
                                                    /_/g,
                                                    ' ',
                                                )}
                                            </span>

                                            <h3 className="text-base font-extrabold text-slate-900 mb-2">
                                                {srv.title}
                                            </h3>

                                            <p className="text-xs text-slate-500 leading-relaxed mb-5">
                                                {srv.short_description}
                                            </p>

                                            <Link
                                                href={route(
                                                    'services.show',
                                                    srv.slug,
                                                )}
                                                className="mt-auto pt-4 border-t border-sky-100 w-full inline-flex items-center justify-center gap-1.5 text-sky-600 hover:text-sky-700 font-semibold text-xs"
                                            >
                                                <span>
                                                    En savoir plus
                                                </span>

                                                <ChevronRight className="w-4 h-4" />
                                            </Link>
                                        </motion.div>
                                    );
                                })}

                            </div>
                        </div>
                    </section>

                    {/* ══ PARTENAIRES ══ */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                        <div className="text-center max-w-2xl mx-auto mb-14">

                            <span className="text-sky-600 text-xs font-extrabold uppercase tracking-widest mb-3 block">
                                Réseau Partenaire
                            </span>

                            <h2 className="text-3xl font-black text-slate-900 mb-4">
                                Ils nous font confiance
                            </h2>

                            <p className="text-slate-500 text-sm leading-relaxed">
                                OMYA CAPITAL collabore avec des institutions
                                financières de premier plan pour garantir la
                                qualité et la syndication des financements.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">

                            {partners.map((p) => (
                                <div
                                    key={p.id}
                                    className="bg-sky-50/60 border border-sky-100 rounded-2xl p-8 shadow-sm text-center"
                                >

                                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-sky-500 text-sky-700 font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                                        {p.name
                                            .substring(0, 2)
                                            .toUpperCase()}
                                    </div>

                                    <h3 className="text-sm font-bold text-slate-900 mb-1">
                                        {p.name}
                                    </h3>

                                    <span className="text-xs text-sky-600 uppercase font-semibold">
                                        {p.category}
                                    </span>

                                </div>
                            ))}

                        </div>

                        <div className="text-center">

                            <Link
                                href={route('partners')}
                                className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-700 font-bold text-sm"
                            >
                                <span>
                                    Voir tous nos partenaires
                                </span>

                                <ArrowRight className="w-4 h-4" />
                            </Link>

                        </div>
                    </section>

                    {/* ══ CTA FINALE ══ */}
                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

                        <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-3xl p-10 text-white text-center shadow-2xl">

                            <h2 className="text-2xl font-black mb-4">
                                Votre projet mérite un accompagnement
                                d'exception
                            </h2>

                            <p className="text-sky-100 text-sm leading-relaxed max-w-xl mx-auto mb-8">
                                Chaque situation est unique. Prenez rendez-vous
                                avec l'un de nos experts pour une analyse
                                confidentielle et sans engagement de votre
                                projet.
                            </p>

                            <Link
                                href={route('appointments.create')}
                                className="inline-flex items-center gap-2 bg-white hover:bg-sky-50 text-sky-800 font-extrabold text-sm py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                            >
                                <span>
                                    Prendre Rendez-vous Gratuitement
                                </span>

                                <ArrowRight className="w-4 h-4" />
                            </Link>

                        </div>
                    </section>
                </>
            )}
        </PublicLayout>
    );
}