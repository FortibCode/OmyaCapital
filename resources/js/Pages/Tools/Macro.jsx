import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { Globe } from 'lucide-react';

export default function Macro({ macroIndicators = [] }) {
    return (
        <PublicLayout macroIndicators={macroIndicators}>
            <Head title="Informations Macroéconomiques - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <Globe className="w-4 h-4" />
                        <span>Données de Conjoncture</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Informations Macroéconomiques</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Principaux indicateurs économiques régionaux (Zone CEMAC & UEMOA) pour éclairer vos arbitrages financiers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {macroIndicators.map((m) => (
                        <div key={m.id} className="bg-white border border-sky-200 rounded-2xl p-6 shadow-xl text-center">
                            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{m.indicator_name}</div>
                            <div className="text-3xl font-black text-sky-600 mb-1">{m.value}</div>
                            <div className="text-[11px] text-slate-500">{m.period}</div>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
