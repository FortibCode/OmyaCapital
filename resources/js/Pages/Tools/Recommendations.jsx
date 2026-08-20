import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { Award, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Recommendations() {
    return (
        <PublicLayout>
            <Head title="Recommandations Stratégiques & Financières - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <Award className="w-4 h-4" />
                        <span>Analyses SIF</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Recommandations Strategiques</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Conseils d'arbitrage de portefeuille et recommandations sur la structuration de dettes d'entreprises.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto bg-white border border-sky-200 rounded-2xl p-8 shadow-xl space-y-6">
                    <div className="bg-sky-50 p-6 rounded-xl border border-sky-100">
                        <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">Recommandation Placement Q3 2026</span>
                        <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Privilégier les Obligations Privées à Taux Fixe (9% - 11%)</h3>
                        <p className="text-xs text-slate-700 leading-relaxed">
                            Dans le contexte d'inflation contenue en Zone CEMAC, la surperformance des obligations privées d'entreprises industrielles solides offre une couverture optimale.
                        </p>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
