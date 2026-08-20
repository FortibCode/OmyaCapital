import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { BookOpen, FileText } from 'lucide-react';

export default function Publications({ reports = [], news = [] }) {
    return (
        <PublicLayout>
            <Head title="Publications Financières - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <BookOpen className="w-4 h-4" />
                        <span>Revue & Bulletins</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Publications Officielle SIF</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Retrouvez nos bulletins trimestriels, communiqués officiels et avis financiers.
                    </p>
                </div>

                <div className="bg-white border border-sky-200 rounded-2xl p-8 max-w-4xl mx-auto space-y-4 shadow-xl">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Derniers Bulletins d'Information</h3>
                    {reports.map((r) => (
                        <div key={r.id} className="bg-sky-50 p-4 rounded-xl border border-sky-100 flex justify-between items-center text-xs">
                            <div>
                                <h4 className="font-bold text-slate-900">{r.title}</h4>
                                <span className="text-slate-500">{r.publication_date}</span>
                            </div>
                            <span className="text-sky-600 font-bold">Consulter →</span>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
