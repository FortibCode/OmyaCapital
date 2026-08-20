import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
    Briefcase, ChevronRight, ArrowRight, TrendingUp, Coins,
    Users, Building2, UserCheck, Shield, CheckCircle2
} from 'lucide-react';

const iconMap = {
    conseil: Briefcase,
    placement: TrendingUp,
    levee: Coins,
    accompagnement: UserCheck,
    financement: Building2,
};

const fallbackServices = [
    {
        id: 1,
        slug: 'conseil-strategique-financier',
        category: 'conseil',
        title: 'Conseil Financier Stratégique',
        short_description: 'Analyse sur-mesure de vos besoins en ingénierie financière, haut de bilan et restructuration.',
        full_description: 'Nos banquiers d\'affaires vous accompagnent dans les diagnostics financiers, la définition de votre stratégie de financement, la sélection des instruments les plus adaptés et la mise en relation avec les investisseurs cibles. Chaque conseil est indépendant et ancré dans la réalité du marché sous-régional.'
    },
    {
        id: 2,
        slug: 'placement-financier-structure',
        category: 'placement',
        title: 'Placement Financier & Produits Structurés',
        short_description: 'Des solutions de placement sécurisées ou à performance cible, adaptées à votre profil investisseur.',
        full_description: 'Nous structurons des portefeuilles obligataires, des produits à taux fixe garantis et des placements de trésorerie à fort rendement cible. Chaque produit est soumis au comité d\'investissement indépendant avant d\'être proposé à nos clients institutionnels et particuliers qualifiés.'
    },
    {
        id: 3,
        slug: 'levee-de-fonds-equity',
        category: 'levee',
        title: 'Levée de Fonds & Capital-Investissement',
        short_description: 'Ouverture du capital de vos PME à des investisseurs qualifiés régionaux et internationaux.',
        full_description: 'Nous menons l\'ensemble du processus de capital-raising : préparation du pitch deck, valorisation indépendante, identification et approche des investisseurs, structuration des term sheets et accompagnement jusqu\'à la clôture. Nos réseaux couvrent l\'Afrique Centrale, de l\'Ouest et les diasporas européennes.'
    },
    {
        id: 4,
        slug: 'accompagnement-ma-transmission',
        category: 'accompagnement',
        title: 'Accompagnement M&A & Transmission',
        short_description: 'Conseil en fusions-acquisitions, cessions d\'entreprises et transmission patrimoniale d\'actifs.',
        full_description: 'De la due diligence à la signature du protocole de cession, nous guidons les dirigeants d\'entreprise dans les opérations de rapprochement, de transmission ou de rachat. Notre approche combine rigueur financière et sensibilité humaine pour des transitions réussies.'
    },
    {
        id: 5,
        slug: 'financement-structure-pme',
        category: 'financement',
        title: 'Financement Structuré & Dette Privée',
        short_description: 'Montage de financements complexes : crédits syndiqués, obligations privées et mezzanine.',
        full_description: 'Nous concevons et plaçons des instruments de financement structuré adaptés aux grandes PME et ETI régionales : obligations privées, billets de trésorerie, dettes mezzanines et crédits syndiqués. Une alternative crédible aux financements bancaires classiques.'
    }
];

export default function Index({ services = [] }) {
    const displayServices = services.length > 0 ? services : fallbackServices;

    return (
        <PublicLayout>
            <Head title="Nos Métiers & Services SIF - OMYA CAPITAL" />

            {/* Page Hero Banner */}
            <section className="sky-banner-bg text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1920')" }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wider mb-6">
                        <Briefcase className="w-4 h-4 text-sky-200" />
                        <span>Expertise Financière SIF</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Nos Métiers & Solutions sur-Mesure</h1>
                    <p className="text-sky-100 text-base leading-relaxed max-w-2xl mx-auto">
                        De la structuration de dettes à la levée de fonds, nos équipes vous accompagnent à chaque étape de votre projet financier.
                    </p>
                </div>
                <div className="w-full overflow-hidden leading-none z-10 relative mt-10">
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-8 fill-[#F8FAFC]">
                        <path d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z" />
                    </svg>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {displayServices.map((srv, idx) => {
                        const IconComp = iconMap[srv.category] || Briefcase;
                        return (
                            <motion.div
                                key={srv.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08 }}
                                whileHover={{ y: -4 }}
                                className="bg-white border border-sky-100 hover:border-sky-300 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0">
                                            <IconComp className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <span className="inline-block bg-sky-50 text-sky-600 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase border border-sky-200 mb-1">
                                                {srv.category?.replace('_', ' ')}
                                            </span>
                                            <h3 className="text-xl font-extrabold text-slate-900">{srv.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-sm text-slate-700 font-medium leading-relaxed mb-4">
                                        {srv.short_description}
                                    </p>
                                    <p className="text-xs text-slate-500 leading-relaxed bg-sky-50/60 p-4 rounded-xl border border-sky-100">
                                        {srv.full_description}
                                    </p>
                                </div>

                                <div className="pt-6 border-t border-sky-100 flex justify-between items-center mt-6">
                                    <Link
                                        href={route('appointments.create')}
                                        className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl shadow-md shadow-sky-600/15 transition-all"
                                    >
                                        <span>Solliciter ce Service</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <Link
                                        href={route('services.show', srv.slug)}
                                        className="text-xs text-sky-600 hover:text-sky-700 font-semibold inline-flex items-center gap-1"
                                    >
                                        <span>En savoir plus</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <div className="mt-20 bg-gradient-to-br from-sky-600 to-sky-800 rounded-3xl p-10 text-white text-center shadow-2xl">
                    <h2 className="text-2xl font-black mb-4">Votre projet mérite un accompagnement d'exception</h2>
                    <p className="text-sky-100 text-sm leading-relaxed max-w-xl mx-auto mb-8">
                        Chaque situation est unique. Prenez rendez-vous avec l'un de nos experts pour une analyse confidentielle et sans engagement de votre projet.
                    </p>
                    <Link
                        href={route('appointments.create')}
                        className="inline-flex items-center gap-2 bg-white hover:bg-sky-50 text-sky-800 font-extrabold text-sm py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                        <span>Prendre Rendez-vous Gratuitement</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </PublicLayout>
    );
}
