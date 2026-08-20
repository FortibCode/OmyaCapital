import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { Building2 } from 'lucide-react';

export default function Partners({ partners = [] }) {
    return (
        <PublicLayout>
            <Head title="Partenaires Institutionnels - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <Building2 className="w-4 h-4" />
                        <span>Réseau Partenaire</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Banques, Fonds & Partenaires</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        OMYA CAPITAL collabore avec des institutions financières de premier plan pour garantir la qualité et la syndication des financements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {partners.map((p) => (
                        <div key={p.id} className="bg-white border border-sky-100 rounded-2xl p-8 shadow-xl text-center">
                            <div className="w-16 h-16 rounded-2xl bg-sky-50 border border-sky-200 text-sky-700 font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                                {p.name.substring(0, 2).toUpperCase()}
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-1">{p.name}</h3>
                            <span className="text-xs text-sky-600 uppercase font-semibold">{p.category}</span>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
