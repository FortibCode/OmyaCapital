import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { TrendingUp, RefreshCw } from 'lucide-react';

export default function Rates({ exchangeRates = [], interestRates = [] }) {
    return (
        <PublicLayout exchangeRates={exchangeRates} interestRates={interestRates}>
            <Head title="Taux de Change & Devises - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <TrendingUp className="w-4 h-4" />
                        <span>Devises & Flux Directs</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Taux de Change & Taux Interbancaires</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Mise à jour en direct des paires de devises régionales et internationales (EUR/XAF, USD/XAF, GBP/XAF, CAD/XAF).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white border border-sky-200 rounded-2xl p-8 shadow-xl">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Paires de Devises Principales</h3>
                        <div className="space-y-4">
                            {exchangeRates.map((r) => (
                                <div key={r.id} className="bg-sky-50 p-4 rounded-xl border border-sky-100 flex justify-between items-center text-xs">
                                    <span className="font-bold text-slate-900">{r.currency_pair}</span>
                                    <span className="font-black text-sky-600 text-base">{Number(r.rate).toFixed(4)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white border border-sky-100 rounded-2xl p-8 shadow-xl">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">Taux d'Intérêt Directeurs</h3>
                        <div className="space-y-4">
                            {interestRates.map((ir) => (
                                <div key={ir.id} className="bg-sky-50 p-4 rounded-xl border border-sky-100 flex justify-between items-center text-xs">
                                    <span className="font-bold text-slate-700">{ir.rate_type}</span>
                                    <span className="font-black text-emerald-600 text-base">{ir.rate_value}%</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
