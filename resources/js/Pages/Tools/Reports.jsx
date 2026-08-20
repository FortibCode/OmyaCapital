import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { FileText, Download } from 'lucide-react';

export default function Reports({ reports = [] }) {
    return (
        <PublicLayout>
            <Head title="Rapports & Études Économiques - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <FileText className="w-4 h-4" />
                        <span>Études & Rapports</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Rapports Économiques et Financiers</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Téléchargez nos notes sectorielles, bilans macroéconomiques et études d'opportunités d'investissement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {reports.map((rep) => (
                        <div key={rep.id} className="bg-white border border-sky-100 rounded-2xl p-8 shadow-xl flex flex-col justify-between">
                            <div>
                                <span className="inline-block bg-sky-50 text-sky-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase border border-sky-200 mb-3">
                                    {rep.category.replace('_', ' ')}
                                </span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{rep.title}</h3>
                                <p className="text-xs text-slate-600 leading-relaxed mb-6">{rep.summary}</p>
                            </div>
                            <div className="pt-4 border-t border-sky-100 flex justify-between items-center text-xs">
                                <span className="text-slate-500 font-semibold">{rep.publication_date}</span>
                                <button className="inline-flex items-center gap-2 bg-sky-600 text-white font-bold px-4 py-2 rounded-xl">
                                    <Download className="w-4 h-4" /> Télécharger PDF
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
