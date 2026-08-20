import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export default function ToolsCalendar({ fundraisings = [] }) {
    return (
        <PublicLayout>
            <Head title="Calendrier Financier - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>Agenda Financier & Échéances</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Calendrier des Opérations Financières</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Calendrier des émissions obligataires, des fenêtres de clôture des levées de fonds et des réunions de comité d'investissement.
                    </p>
                </div>

                <div className="bg-white border border-sky-200 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto space-y-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Événements & Échéances à Venir</h3>

                    {fundraisings.map((fund) => (
                        <div key={fund.id} className="bg-sky-50 p-6 rounded-xl border border-sky-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <span className="bg-white text-sky-600 border border-sky-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                                    Clôture Levée de Fonds
                                </span>
                                <h4 className="text-base font-bold text-slate-900 mt-1">{fund.title}</h4>
                                <p className="text-xs text-slate-600">{fund.company_name} — Clôture prévue le {fund.end_date}</p>
                            </div>
                            <Link
                                href={route('appointments.create')}
                                className="bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-xs py-2.5 px-5 rounded-xl transition-all"
                            >
                                Participer Avant Clôture
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
