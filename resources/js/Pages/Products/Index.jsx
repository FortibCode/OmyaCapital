import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { ShieldCheck, TrendingUp, ArrowRight, Download } from 'lucide-react';

export default function Index({ products = [] }) {
    const formatCurrency = (val) => {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <PublicLayout>
            <Head title="Produits Financiers & Placements - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <TrendingUp className="w-4 h-4" />
                        <span>Offres de Placement SIF</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Produits Financiers & Rendements Cibles</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Découvrez notre sélection de placements obligataires, fonds d'investissement et produits structurés conçus pour maximiser votre capital.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((prod) => (
                        <div key={prod.id} className="bg-white border border-sky-200 rounded-2xl p-8 shadow-xl flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <span className="inline-block bg-sky-50 text-sky-600 text-[11px] font-bold px-3 py-1 rounded-full uppercase border border-sky-200">
                                        {prod.type.replace('_', ' ')}
                                    </span>
                                    <div className="text-right">
                                        <div className="text-xs text-slate-500">Rendement Cible</div>
                                        <div className="text-3xl font-black text-sky-600">+{prod.target_return_rate}% / an</div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black text-slate-900 mb-2">{prod.name}</h3>
                                <p className="text-xs text-slate-700 leading-relaxed mb-6">{prod.summary}</p>

                                <div className="bg-sky-50 p-5 rounded-xl border border-sky-100 space-y-3 text-xs mb-6">
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Ticket d'Investissement Min.</span>
                                        <span className="font-bold text-slate-900">{formatCurrency(prod.min_investment_amount)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Durée d'Engagement</span>
                                        <span className="font-bold text-slate-900">{prod.duration_months} Mois</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Niveau de Risque</span>
                                        <span className="font-bold uppercase text-sky-600">{prod.risk_level}</span>
                                    </div>
                                </div>

                                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                                    {prod.description}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-sky-100">
                                <Link
                                    href={route('appointments.create')}
                                    className="flex-1 text-center bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 text-white font-extrabold text-xs py-3 rounded-xl shadow-lg transition-all"
                                >
                                    Souscrire via Conseiller SIF
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
