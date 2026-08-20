import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { Coins, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Index({ fundraisings = [] }) {
    const formatCurrency = (val) => {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <PublicLayout>
            <Head title="Levées de Fonds & Private Equity - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <Coins className="w-4 h-4" />
                        <span>Capital-Investissement & PME</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Opportunités de Levée de Fonds</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Accédez aux tours de table de PME régionales et champions de l'économie en croissance sélectionnées par le comité d'investissement OMYA CAPITAL.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {fundraisings.map((fund) => {
                        const progress = Math.min(100, Math.round((fund.raised_amount / fund.target_amount) * 100));
                        return (
                            <div key={fund.id} className="bg-white border border-sky-100 rounded-2xl p-8 shadow-xl flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                                            {fund.sector}
                                        </span>
                                        <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                                            <CheckCircle2 className="w-4 h-4" /> Tour de Table Ouvert
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-black text-slate-900 mb-1">{fund.title}</h3>
                                    <div className="text-xs font-bold text-slate-500 mb-4">{fund.company_name}</div>

                                    <p className="text-xs text-slate-700 leading-relaxed mb-6">{fund.pitch_deck_summary}</p>

                                    <div className="bg-sky-50 p-4 rounded-xl border border-sky-100 space-y-2 text-xs mb-6">
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Ticket Minimum d'Entrée</span>
                                            <span className="font-bold text-slate-900">{formatCurrency(fund.min_ticket)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-500">Montant Déjà Collecté</span>
                                            <span className="font-bold text-sky-600">{formatCurrency(fund.raised_amount)}</span>
                                        </div>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="space-y-2 mb-6">
                                        <div className="flex justify-between text-xs font-bold">
                                            <span className="text-slate-600">Objectif: {formatCurrency(fund.target_amount)}</span>
                                            <span className="text-sky-600">{progress}% Avancement</span>
                                        </div>
                                        <div className="w-full bg-sky-100 rounded-full h-3 overflow-hidden">
                                            <div className="bg-sky-600 h-3 rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href={route('appointments.create')}
                                    className="w-full text-center bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 text-white font-extrabold text-xs py-3.5 rounded-xl shadow-lg transition-all"
                                >
                                    Prendre RDV pour Découvrir le Pitch Deck
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </PublicLayout>
    );
}
