import React, { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight, ArrowRight, Calendar, Tag, TrendingUp, Building2, Globe } from 'lucide-react';

const categories = [
    { id: 'all', label: 'Toutes les publications' },
    { id: 'levee_de_fonds', label: 'Levées de Fonds' },
    { id: 'macroeconomie', label: 'Macroéconomie' },
    { id: 'conseils_financiers', label: 'Conseils Financiers' },
    { id: 'etude_economique', label: 'Études Économiques' },
];

const fallbackNews = [
    {
        id: 1,
        title: 'OMYA CAPITAL structure une levée de 500M XAF pour le secteur logistique',
        summary: 'La Société Intermédiaire Financière OMYA CAPITAL annonce le lancement d\'une opération de capital-investissement majeure pour financer l\'expansion de la flotte et des infrastructures de distribution en Afrique Centrale.',
        category: 'levee_de_fonds',
        published_at: '2026-08-05',
        is_featured: true,
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Perspectives des Obligations Privées & Rendements 2026',
        summary: 'Analyse stratégique sur la remontée des taux d\'intérêt BEAC et les opportunités pour les placements d\'entreprises dans la zone CEMAC.',
        category: 'macroeconomie',
        published_at: '2026-08-01',
        is_featured: false,
        image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Taux Directeurs BEAC : Analyse & Impact sur le Crédit Entreprises',
        summary: 'Bilan des dernières décisions de politique monétaire et recommandations du comité d\'investissement OMYA CAPITAL pour les trésoreries d\'entreprises.',
        category: 'conseils_financiers',
        published_at: '2026-07-28',
        is_featured: false,
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 4,
        title: 'Étude Économique OMYA : Tendances des Investissements Régionaux 2026',
        summary: 'Un panorama complet sur l\'accès aux financements pour les PME régionales et la rentabilité du Private Equity en Afrique subsaharienne.',
        category: 'etude_economique',
        published_at: '2026-07-20',
        is_featured: false,
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 5,
        title: 'AgriFood Processing Congo lève 800M XAF auprès d\'investisseurs régionaux',
        summary: 'OMYA CAPITAL a accompagné AgriFood Processing Congo dans la clôture de sa deuxième levée de fonds. Un succès emblématique pour l\'agro-industrie de la sous-région.',
        category: 'levee_de_fonds',
        published_at: '2026-07-15',
        is_featured: false,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
    },
    {
        id: 6,
        title: 'Comprendre les OPCVM : Guide pratique pour l\'investisseur débutant',
        summary: 'Les Organismes de Placement Collectif en Valeurs Mobilières constituent une porte d\'entrée accessible aux marchés financiers. Découvrez comment les utiliser intelligemment.',
        category: 'conseils_financiers',
        published_at: '2026-07-08',
        is_featured: false,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
    }
];

const categoryBadgeColors = {
    levee_de_fonds: 'bg-sky-100 text-sky-700 border-sky-200',
    macroeconomie: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    conseils_financiers: 'bg-blue-50 text-blue-700 border-blue-200',
    etude_economique: 'bg-violet-50 text-violet-700 border-violet-200',
};

export default function Index({ news = [] }) {
    const [activeCategory, setActiveCategory] = useState('all');
    const allNews = news.length > 0 ? news : fallbackNews;
    const filtered = activeCategory === 'all'
        ? allNews
        : allNews.filter(n => n.category === activeCategory);

    const featured = filtered.find(n => n.is_featured) || filtered[0];
    const others = filtered.filter(n => n.id !== featured?.id);

    return (
        <PublicLayout>
            <Head title="Actualités & Analyses de Marché - OMYA CAPITAL" />

            {/* Hero */}
            <section className="sky-banner-bg text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920')" }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wider mb-6">
                        <FileText className="w-4 h-4 text-sky-200" />
                        <span>Décryptage & Analyses SIF</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Actualités & Notes de Marché</h1>
                    <p className="text-sky-100 text-base leading-relaxed max-w-2xl mx-auto">
                        Restez informé des opérations financières, analyses macroéconomiques et publications de notre équipe de recherche.
                    </p>
                </div>
                <div className="w-full overflow-hidden leading-none z-10 relative mt-10">
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-8 fill-[#F8FAFC]">
                        <path d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z" />
                    </svg>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Filtres par catégorie */}
                <div className="flex flex-wrap gap-2 mb-12 justify-center">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`text-xs font-bold px-4 py-2 rounded-xl border transition-all ${
                                activeCategory === cat.id
                                    ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-600/20'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-sky-300 hover:text-sky-600'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Article à la Une */}
                {featured && (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
                        <div className="lg:col-span-7 bg-white border border-sky-100 rounded-2xl overflow-hidden shadow-lg flex flex-col">
                            <div className="h-72 overflow-hidden relative">
                                <img
                                    src={featured.image || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop'}
                                    alt={featured.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border uppercase tracking-wider ${categoryBadgeColors[featured.category] || 'bg-sky-100 text-sky-700 border-sky-200'}`}>
                                        {categories.find(c => c.id === featured.category)?.label || featured.category}
                                    </span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col flex-1 justify-between">
                                <div>
                                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{new Date(featured.published_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                    </div>
                                    <h2 className="text-2xl font-extrabold text-slate-900 mb-4 leading-snug hover:text-sky-600 transition-colors">
                                        {featured.title}
                                    </h2>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {featured.summary}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <Link href={route('news')} className="inline-flex items-center gap-1 text-xs font-bold text-sky-600 hover:text-sky-700">
                                        <span>Lire l'analyse complète</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-5">
                            {others.slice(0, 3).map((item, idx) => (
                                <div key={item.id} className="bg-white border border-sky-100 hover:border-sky-300 rounded-2xl p-5 shadow-sm flex gap-4 items-center transition-all">
                                    <div className="w-24 h-20 rounded-xl overflow-hidden shrink-0">
                                        <img
                                            src={item.image || 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=200&auto=format&fit=crop'}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${categoryBadgeColors[item.category] || 'bg-sky-50 text-sky-600 border-sky-200'}`}>
                                            {categories.find(c => c.id === item.category)?.label || item.category}
                                        </span>
                                        <h3 className="text-sm font-extrabold text-slate-900 mt-1.5 line-clamp-2 hover:text-sky-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <Link href={route('news')} className="text-[11px] font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1 mt-2">
                                            <span>Lire la suite</span>
                                            <ChevronRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Grille des autres articles */}
                {others.length > 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {others.slice(3).map((item, idx) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ y: -4 }}
                                className="bg-white border border-sky-100 hover:border-sky-300 rounded-2xl overflow-hidden shadow-sm transition-all"
                            >
                                <div className="h-40 overflow-hidden relative">
                                    <img src={item.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop'} alt={item.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-5">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${categoryBadgeColors[item.category] || 'bg-sky-50 text-sky-600 border-sky-200'}`}>
                                        {categories.find(c => c.id === item.category)?.label || item.category}
                                    </span>
                                    <h3 className="text-sm font-extrabold text-slate-900 mt-2 mb-2 leading-snug">{item.title}</h3>
                                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">{item.summary}</p>
                                    <Link href={route('news')} className="text-xs font-bold text-sky-600 hover:text-sky-700 inline-flex items-center gap-1">
                                        <span>Lire la suite</span>
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </PublicLayout>
    );
}
