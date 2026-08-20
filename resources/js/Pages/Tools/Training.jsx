import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { BookOpen, GraduationCap, ArrowRight } from 'lucide-react';

export default function Training() {
    return (
        <PublicLayout>
            <Head title="Formation & Éducation Financière - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <GraduationCap className="w-4 h-4" />
                        <span>Académie SIF</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Formation & Éducation Financière</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Programmes d'initiation et perfectionnement à la gestion de patrimoine, analyse obligataire et ingénierie financière.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white border border-sky-100 rounded-2xl p-8 shadow-xl">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Module 1: Les Fondeux des Placements Obligataires</h3>
                        <p className="text-xs text-slate-600 mb-6">Comprendre les coupons, les rendements à échéance et la notation des dettes privées.</p>
                        <Link href={route('appointments.create')} className="inline-flex items-center gap-2 bg-sky-600 text-white font-bold text-xs px-4 py-2 rounded-xl">
                            S'inscrire à la Session <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="bg-white border border-sky-100 rounded-2xl p-8 shadow-xl">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Module 2: Structuration de Haut de Bilan PME</h3>
                        <p className="text-xs text-slate-600 mb-6">Optimiser la dette et ouvrir son capital aux fonds de private equity.</p>
                        <Link href={route('appointments.create')} className="inline-flex items-center gap-2 bg-sky-600 text-white font-bold text-xs px-4 py-2 rounded-xl">
                            S'inscrire à la Session <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
