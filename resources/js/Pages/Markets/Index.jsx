import React, { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, FileText, Coins, Shield, Calculator, ArrowRight } from 'lucide-react';

export default function Index({
    category = 'marche-financier',
    exchangeRates = [],
    interestRates = [],
    macroIndicators = [],
    products = []
}) {
    const [selectedCat, setSelectedCat] = useState(category);

    const categories = [
        { id: 'marche-financier', label: 'Marché Financier', icon: Globe },
        { id: 'actions', label: 'Actions', icon: TrendingUp },
        { id: 'obligations', label: 'Obligations', icon: FileText },
        { id: 'opcvm', label: 'OPCVM', icon: Coins },
        { id: 'produits-structures', label: 'Produits Structurés', icon: Shield },
        { id: 'indicateurs', label: 'Indicateurs', icon: Calculator },
    ];

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <PublicLayout exchangeRates={exchangeRates} interestRates={interestRates} macroIndicators={macroIndicators}>
            <Head title="Marchés Financiers & Produits - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <Globe className="w-4 h-4" />
                        <span>Société Intermédiaire Financière</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Marchés Financiers & Produits Structurés</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Accédez au panorama complet des opportunités de placement, taux d'intérêt, obligations privées et fonds d'investissement.
                    </p>
                </div>

                {/* Category Pill Switcher */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 bg-sky-50 p-2 rounded-2xl border border-sky-100 max-w-5xl mx-auto">
                    {categories.map((cat) => {
                        const IconComp = cat.icon;
                        const isActive = selectedCat === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCat(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all relative ${isActive ? 'text-white font-extrabold' : 'text-slate-500 hover:text-sky-700'}`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeMarketBadge"
                                        className="absolute inset-0 bg-sky-600 rounded-xl shadow-md"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <IconComp className="w-4 h-4" />
                                    {cat.label}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Content Panel */}
                <div className="bg-white border border-sky-200 rounded-2xl p-8 shadow-2xl">
                    {selectedCat === 'marche-financier' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900">Panorama du Marché Financier Régional</h3>
                            <p className="text-xs text-slate-700 leading-relaxed">
                                Les marchés sous-régionaux connaissent une dynamique soutenue par l'émission de dettes privées et la recherche de rendements supérieurs par les institutionnels. OMYA CAPITAL agit en tant qu'intermédiaire privilégié pour la structuration d'émissions privées.
                            </p>
                        </motion.div>
                    )}

                    {selectedCat === 'obligations' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900">Obligations Privées & Souveraines</h3>
                            <p className="text-xs text-slate-700 leading-relaxed mb-6">
                                Titres de créance à taux fixe émis par des entreprises d'élite ou des collectivités locales offrant un versement d'intérêt trimestriel ou semestriel.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {products.map((p) => (
                                    <div key={p.id} className="bg-sky-50 p-6 rounded-xl border border-sky-100">
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{p.name}</h4>
                                        <div className="text-xl font-black text-sky-600 mb-2">+{p.target_return_rate}% / an</div>
                                        <p className="text-xs text-slate-600 mb-4">{p.summary}</p>
                                        <div className="text-xs font-bold text-slate-700">Min. {formatCurrency(p.min_investment_amount)}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {selectedCat === 'indicateurs' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900">Indicateurs Économiques et Taux Directeurs</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {(interestRates || []).map((ir) => (
                                    <div key={ir.id} className="bg-sky-50 p-6 rounded-xl border border-sky-100 text-center">
                                        <div className="text-xs font-bold text-slate-500 mb-1">{ir.rate_type}</div>
                                        <div className="text-3xl font-black text-sky-600">{ir.rate_value}%</div>
                                        <div className="text-[11px] text-slate-500 mt-2">Mise à jour: {ir.effective_date}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {(selectedCat === 'actions' || selectedCat === 'opcvm' || selectedCat === 'produits-structures') && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                            <h3 className="text-2xl font-bold text-slate-900 capitalize">{selectedCat.replace('-', ' ')}</h3>
                            <p className="text-xs text-slate-700 leading-relaxed">
                                Solutions de placement gérées et accompagnées par la Société Intermédiaire Financière OMYA CAPITAL.
                            </p>
                            <Link
                                href={route('appointments.create')}
                                className="inline-flex items-center gap-2 bg-sky-600 text-white font-extrabold text-xs py-3 px-6 rounded-xl"
                            >
                                <span>Contacter un Conseiller pour cet Actif</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    )}
                </div>
            </div>
        </PublicLayout>
    );
}
