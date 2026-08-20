import React, { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Building2, Award, Globe, Shield, Users, UserCheck,
    ArrowRight, CheckCircle2, Quote, Briefcase, HeartHandshake, TrendingUp
} from 'lucide-react';

export default function Index({ activeSection = 'presentation', partners = [] }) {
    const [currentTab, setCurrentTab] = useState(activeSection);

    const tabs = [
        { id: 'presentation', label: 'Présentation', icon: Building2 },
        { id: 'mission', label: 'Mission', icon: Award },
        { id: 'vision', label: 'Vision', icon: Globe },
        { id: 'valeurs', label: 'Valeurs', icon: Shield },
        { id: 'gouvernance', label: 'Gouvernance', icon: Users },
        { id: 'equipe', label: 'Équipe', icon: UserCheck },
    ];

    const teamMembers = [
        {
            name: 'Directeur Général',
            role: 'Banquier d\'affaires & Stratège',
            description: '15 ans d\'expérience en structuration financière et levées de fonds dans la zone CEMAC.',
            img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop'
        },
        {
            name: 'Responsable Placements',
            role: 'Expert en Gestion de Portefeuilles',
            description: 'Spécialiste obligations privées, OPCVM et produits structurés pour investisseurs institutionnels.',
            img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
        },
        {
            name: 'Directrice Conformité & KYC',
            role: 'Juriste & Compliance Officer',
            description: 'Garant des exigences réglementaires KYC/AML et de la protection des données clients.',
            img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=200&auto=format&fit=crop'
        },
        {
            name: 'Analyste Senior Marchés',
            role: 'Économiste & Stratège Macro',
            description: 'Veille macroéconomique sur la zone CEMAC, rédaction des notes de marché et recommandations.',
            img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop'
        },
    ];

    const valeurs = [
        {
            icon: Shield,
            title: 'Intégrité & Confidentialité',
            desc: 'Le secret professionnel est un engagement absolu. Chaque relation client repose sur une confiance totale et une discrétion irréprochable.'
        },
        {
            icon: Award,
            title: 'Excellence Technique',
            desc: 'Nos analyses s\'appuient sur des méthodologies rigoureuses issues des meilleurs standards de la finance d\'entreprise internationale.'
        },
        {
            icon: HeartHandshake,
            title: 'Proximité & Écoute',
            desc: 'Nous ne gérons pas des dossiers, nous accompagnons des hommes et des femmes qui bâtissent l\'économie de demain.'
        },
        {
            icon: Globe,
            title: 'Ancrage Régional',
            desc: 'Notre compréhension profonde des dynamiques CEMAC et UEMOA est un atout différenciant pour chaque mission que nous menons.'
        },
    ];

    return (
        <PublicLayout>
            <Head title="À Propos - OMYA CAPITAL | Société Intermédiaire Financière" />

            {/* Page Hero Banner */}
            <section className="sky-banner-bg text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920')" }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-bold uppercase tracking-wider mb-6">
                        <Building2 className="w-4 h-4 text-sky-200" />
                        <span>Société Intermédiaire Financière Agréée</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">À Propos d'OMYA CAPITAL</h1>
                    <p className="text-sky-100 text-base leading-relaxed max-w-2xl mx-auto">
                        Découvrez notre identité, nos valeurs et les experts qui œuvrent chaque jour pour valoriser vos capitaux.
                    </p>
                </div>
                <div className="w-full overflow-hidden leading-none z-10 relative mt-10">
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-8 fill-[#F8FAFC]">
                        <path d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z" />
                    </svg>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 bg-white p-2 rounded-2xl border border-sky-100 shadow-md max-w-4xl mx-auto">
                    {tabs.map((tab) => {
                        const IconComp = tab.icon;
                        const isActive = currentTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setCurrentTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all relative ${
                                    isActive ? 'text-white' : 'text-slate-500 hover:text-sky-600'
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabBadge"
                                        className="absolute inset-0 bg-sky-600 rounded-xl shadow-md shadow-sky-600/20"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <IconComp className="w-4 h-4" />
                                    {tab.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        {currentTab === 'presentation' && (
                            <motion.div key="presentation" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="space-y-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                    <div className="space-y-5">
                                        <h2 className="text-3xl font-black text-slate-900">OMYA CAPITAL S.A.</h2>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            OMYA CAPITAL est une <strong>Société Intermédiaire Financière (SIF)</strong> agréée et opérant dans l'espace CEMAC et UEMOA. Fondée pour répondre aux besoins croissants de structuration financière des entreprises et des investisseurs privés de la sous-région, nous plaçons l'ingénierie au cœur de chaque mandat.
                                        </p>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            Notre positionnement de <em>Société Intermédiaire Financière</em> nous permet d'intervenir sur l'ensemble de la chaîne de valeur du financement : du conseil initial jusqu'au placement final auprès des investisseurs qualifiés, en passant par la structuration juridique et l'ingénierie contractuelle.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: 'Agréments Réglementaires', desc: 'Conformité stricte aux exigences de la commission de surveillance. Contrôle KYC/AML rigoureux.' },
                                            { label: 'Accompagnement PME', desc: 'Levées de fonds en dette privée et capital-investissement pour les champions régionaux.' },
                                            { label: 'Placement Institutionnel', desc: 'Produits structurés et portefeuilles obligataires pour institutionnels et family offices.' },
                                            { label: 'Excellence du Conseil', desc: 'Notes stratégiques, due diligence et recommandations personnalisées à chaque projet.' },
                                        ].map((item, i) => (
                                            <div key={i} className="bg-white border border-sky-100 p-5 rounded-2xl shadow-sm hover:border-sky-300 transition-colors">
                                                <span className="text-sky-600 font-bold text-xs block mb-2">{item.label}</span>
                                                <span className="text-slate-500 text-xs leading-relaxed">{item.desc}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentTab === 'mission' && (
                            <motion.div key="mission" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="space-y-8">
                                <div className="text-center max-w-3xl mx-auto">
                                    <Quote className="w-12 h-12 text-sky-500 mx-auto mb-4 opacity-70" />
                                    <h2 className="text-3xl font-black text-slate-900 mb-6">Notre Mission</h2>
                                    <p className="text-lg text-slate-700 leading-relaxed font-semibold italic">
                                        « Connecter les capitaux disponibles aux projets d'avenir, en servant de pont fiable et rigoureux entre les investisseurs en quête de rendement et les entreprises ambitieuses qui méritent d'être financées. »
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                                    {[
                                        { icon: TrendingUp, title: 'Valoriser les Capitaux', desc: 'Proposer des placements rigoureux, transparents et performants adaptés au profil de risque de chaque investisseur.' },
                                        { icon: Briefcase, title: 'Financer la Croissance', desc: 'Accompagner les PME et ETI régionales à accéder à des financements structurés en dette privée ou en capital.' },
                                        { icon: Shield, title: 'Protéger & Conseiller', desc: 'Guider chaque client avec des analyses indépendantes, loin de tout conflit d\'intérêts, pour des décisions éclairées.' },
                                    ].map(({ icon: Icon, title, desc }, i) => (
                                        <div key={i} className="bg-white border border-sky-100 rounded-2xl p-6 shadow-sm text-center hover:border-sky-300 transition-all">
                                            <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mx-auto mb-4">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <h3 className="text-sm font-extrabold text-slate-900 mb-2">{title}</h3>
                                            <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {currentTab === 'vision' && (
                            <motion.div key="vision" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="space-y-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-900 mb-6">Notre Vision à l'Horizon 2030</h2>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-5">
                                            OMYA CAPITAL aspire à devenir le <strong>pôle d'ingénierie financière sous-régional de référence</strong> pour l'émission d'obligations privées, la structuration de financements durables et le développement de marchés de capitaux accessibles.
                                        </p>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-5">
                                            Nous voulons démontrer qu'une Société Intermédiaire Financière africaine peut rivaliser avec les standards internationaux en matière de qualité d'analyse, d'éthique professionnelle et d'innovation financière.
                                        </p>
                                        <div className="space-y-3">
                                            {['Présence dans 4 pays CEMAC & UEMOA d\'ici 2028', 'Structurer +2 Milliards XAF de financements privés par an', 'Former 200 futurs professionnels de la finance régionale'].map((goal, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                                                    <span className="text-sm text-slate-700 font-medium">{goal}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="h-72 rounded-2xl overflow-hidden shadow-xl border border-sky-100">
                                        <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop" alt="Vision stratégique" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {currentTab === 'valeurs' && (
                            <motion.div key="valeurs" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="space-y-8">
                                <div className="text-center max-w-3xl mx-auto">
                                    <h2 className="text-3xl font-black text-slate-900 mb-4">Nos Valeurs Fondamentales</h2>
                                    <p className="text-sm text-slate-500 leading-relaxed">Ce sont ces principes qui guident nos décisions au quotidien, bien au-delà des obligations réglementaires.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {valeurs.map(({ icon: Icon, title, desc }, i) => (
                                        <motion.div key={i} whileHover={{ y: -3 }} className="bg-white border border-sky-100 rounded-2xl p-7 shadow-sm hover:border-sky-300 transition-all">
                                            <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-4">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-base font-extrabold text-slate-900 mb-2">{title}</h3>
                                            <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {currentTab === 'gouvernance' && (
                            <motion.div key="gouvernance" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="space-y-8">
                                <h2 className="text-3xl font-black text-slate-900">Gouvernance & Contrôle des Risques</h2>
                                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                                    Chez OMYA CAPITAL, la gouvernance n'est pas une contrainte réglementaire, c'est un outil de confiance. Chaque opération de placement ou de levée de fonds est examinée par notre <strong>Comité d'Investissement</strong>, composé d'experts indépendants.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { title: 'Comité d\'Investissement', desc: 'Validation collégiale de chaque dossier par des experts indépendants avant toute mise en marché.' },
                                        { title: 'Cellule Conformité KYC/AML', desc: 'Vérification systématique des identités, sources de fonds et profils de risque de chaque client et partenaire.' },
                                        { title: 'Audit Externe Annuel', desc: 'Commissariat aux comptes et revue de contrôle interne par un cabinet international indépendant.' },
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white border border-sky-100 rounded-2xl p-6 shadow-sm">
                                            <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-sky-600 mb-4 font-black text-sm">{i + 1}</div>
                                            <h3 className="text-sm font-extrabold text-slate-900 mb-2">{item.title}</h3>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {currentTab === 'equipe' && (
                            <motion.div key="equipe" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} className="space-y-8">
                                <div className="text-center max-w-3xl mx-auto">
                                    <h2 className="text-3xl font-black text-slate-900 mb-4">Notre Équipe Dirigeante</h2>
                                    <p className="text-sm text-slate-500 leading-relaxed">
                                        Des professionnels de haut niveau, animés d'une conviction partagée : la finance doit servir le développement économique de l'Afrique Centrale.
                                    </p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {teamMembers.map((member, i) => (
                                        <motion.div key={i} whileHover={{ y: -4 }} className="bg-white border border-sky-100 rounded-2xl overflow-hidden shadow-sm hover:border-sky-300 transition-all text-center">
                                            <div className="h-40 overflow-hidden">
                                                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                            </div>
                                            <div className="p-5">
                                                <h3 className="text-sm font-extrabold text-slate-900">{member.name}</h3>
                                                <span className="text-[11px] text-sky-600 font-semibold block mb-2">{member.role}</span>
                                                <p className="text-[11px] text-slate-500 leading-relaxed">{member.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* CTA Bottom */}
                <div className="text-center mt-16">
                    <Link
                        href={route('appointments.create')}
                        className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs py-4 px-8 rounded-xl shadow-xl shadow-sky-600/20 transition-all transform hover:-translate-y-0.5"
                    >
                        <span>Discuter de votre projet avec nos experts</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </PublicLayout>
    );
}
