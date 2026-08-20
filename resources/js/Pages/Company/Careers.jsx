import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Users, Briefcase, ArrowRight, MapPin, Clock, CheckCircle2, Quote } from 'lucide-react';

const fallbackCareers = [
    {
        id: 1,
        title: 'Analyste Financier Junior',
        department: 'Marchés & Recherche',
        location: 'Brazzaville, Congo',
        type: 'CDI',
        description: 'Rejoignez notre équipe de recherche économique pour contribuer aux notes de marché, à la veille macroéconomique et à l\'analyse des opportunités d\'investissement.'
    },
    {
        id: 2,
        title: 'Chargé(e) d\'Affaires – Levées de Fonds',
        department: 'Conseil & Intermédiation',
        location: 'Brazzaville, Congo',
        type: 'CDI',
        description: 'Vous gérerez un portefeuille de clients entreprises en recherche de financements en capital ou en dette privée. Sens du relationnel, rigueur et goût pour l\'entrepreneuriat requis.'
    },
    {
        id: 3,
        title: 'Responsable Conformité & KYC',
        department: 'Compliance & Risques',
        location: 'Brazzaville, Congo',
        type: 'CDI',
        description: 'Vous superviserez le dispositif KYC/AML, les déclarations réglementaires et la formation interne. Expérience en cabinet d\'audit ou dans une institution financière exigée.'
    },
    {
        id: 4,
        title: 'Stagiaire – Communication Financière',
        department: 'Marketing & Digital',
        location: 'Brazzaville, Congo',
        type: 'Stage 6 mois',
        description: 'Participez à la production des bulletins trimestriels, à la gestion des réseaux sociaux institutionnels et à la rédaction de contenus financiers pour nos clients.'
    }
];

export default function Careers({ careers = [] }) {
    const displayCareers = careers.length > 0 ? careers : fallbackCareers;

    return (
        <PublicLayout>
            <Head title="Carrière & Recrutement - OMYA CAPITAL | Rejoindre nos équipes" />

            {/* Hero Banner */}
            <section className="sky-banner-bg text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1920')" }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wider mb-6">
                        <Users className="w-4 h-4 text-sky-200" />
                        <span>Rejoignez OMYA CAPITAL</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Bâtissons l'avenir ensemble</h1>
                    <p className="text-sky-100 text-base leading-relaxed max-w-2xl mx-auto">
                        Nous cherchons des professionnels engagés, curieux et ambitieux qui souhaitent donner du sens à leur carrière dans la finance africaine.
                    </p>
                </div>
                <div className="w-full overflow-hidden leading-none z-10 relative mt-10">
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-8 fill-[#F8FAFC]">
                        <path d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z" />
                    </svg>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

                {/* Citation Dirigeant */}
                <div className="bg-white border border-sky-100 rounded-2xl p-10 shadow-sm text-center max-w-4xl mx-auto">
                    <Quote className="w-10 h-10 text-sky-500 mx-auto mb-4 opacity-70" />
                    <p className="text-xl font-bold text-slate-800 leading-relaxed italic">
                        « Nous ne recrutons pas des CV. Nous accueillons des personnalités — des femmes et des hommes qui comprennent que la finance est avant tout un outil au service du développement humain. »
                    </p>
                    <span className="text-xs text-sky-600 font-extrabold uppercase tracking-wider block mt-6">— Directeur Général, OMYA CAPITAL</span>
                </div>

                {/* Pourquoi nous rejoindre */}
                <div>
                    <div className="text-center mb-12">
                        <div className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-2">Notre Environnement de Travail</div>
                        <h2 className="text-3xl font-extrabold text-slate-900">Pourquoi choisir OMYA CAPITAL ?</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'Des missions à fort impact', desc: 'Chaque dossier que vous traitez contribue au financement de l\'économie réelle africaine — des PME qui créent des emplois, des entrepreneurs qui innovent.' },
                            { title: 'Formation & Montée en compétences', desc: 'Nous investissons dans vos compétences : certifications CFA, formations en structuration financière, séminaires régionaux et mentorat personnalisé.' },
                            { title: 'Équipe soudée & Bienveillante', desc: 'Une culture d\'entreprise fondée sur la confiance, l\'exigence réciproque et la célébration des succès collectifs. Ici, vous n\'êtes pas un numéro.' },
                            { title: 'Rémunération attractive', desc: 'Package compétitif avec participation aux résultats, mutuelle, prime de performance et avantages liés aux mandats conclus.' },
                            { title: 'Évolution rapide', desc: 'Structure à taille humaine avec des promotions méritocratiques. Votre engagement et vos résultats dictent votre progression.' },
                            { title: 'Rayonnement régional', desc: 'Travailler chez OMYA CAPITAL, c\'est construire un réseau de référence dans toute la zone CEMAC et UEMOA.' },
                        ].map((item, i) => (
                            <motion.div key={i} whileHover={{ y: -3 }} className="bg-white border border-sky-100 hover:border-sky-300 rounded-2xl p-6 shadow-sm transition-all">
                                <CheckCircle2 className="w-6 h-6 text-sky-600 mb-3" />
                                <h3 className="text-sm font-extrabold text-slate-900 mb-2">{item.title}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Offres d'Emploi */}
                <div>
                    <div className="text-center mb-12">
                        <div className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-2">Postes Ouverts</div>
                        <h2 className="text-3xl font-extrabold text-slate-900">Nos Offres de Recrutement</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {displayCareers.map((job, idx) => (
                            <motion.div
                                key={job.id || idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.06 }}
                                className="bg-white border border-sky-100 hover:border-sky-300 rounded-2xl p-7 shadow-sm hover:shadow-md transition-all"
                            >
                                <div className="flex items-start justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-lg font-extrabold text-slate-900">{job.title}</h3>
                                        <span className="text-xs text-sky-600 font-semibold">{job.department}</span>
                                    </div>
                                    <span className="inline-block bg-sky-50 text-sky-700 border border-sky-200 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase whitespace-nowrap">
                                        {job.type}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed mb-5">{job.description}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3 text-xs text-slate-500">
                                        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-sky-400" /> {job.location}</span>
                                    </div>
                                    <Link
                                        href={route('contact')}
                                        className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs py-2 px-4 rounded-xl shadow-sm transition-all"
                                    >
                                        <span>Postuler</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Candidature Spontanée */}
                <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-3xl p-10 text-white text-center shadow-2xl">
                    <Briefcase className="w-12 h-12 text-sky-200 mx-auto mb-4" />
                    <h2 className="text-2xl font-black mb-4">Aucune offre ne correspond à votre profil ?</h2>
                    <p className="text-sky-100 text-sm leading-relaxed max-w-xl mx-auto mb-8">
                        Envoyez-nous une candidature spontanée. Nous gardons les bons profils en portefeuille et revenons vers vous dès qu'une opportunité se présente.
                    </p>
                    <Link
                        href={route('contact')}
                        className="inline-flex items-center gap-2 bg-white hover:bg-sky-50 text-sky-800 font-extrabold text-sm py-4 px-8 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                    >
                        <span>Envoyer une candidature spontanée</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </PublicLayout>
    );
}
