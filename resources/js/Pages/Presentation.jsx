import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { ShieldCheck, Award, Target, Eye, Users, Building2, CheckCircle2 } from 'lucide-react';

export default function Presentation({ partners = [] }) {
    return (
        <PublicLayout>
            <Head title="Présentation & Gouvernance - OMYA CAPITAL SIF" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <Building2 className="w-4 h-4" />
                        <span>Société Intermédiaire Financière</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Présentation de l'Entreprise</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        OMYA CAPITAL est une Société Intermédiaire Financière (SIF) majeure, dédiée à la structuration du capital, au conseil financier d'excellence et aux placements à fort rendement.
                    </p>
                </div>

                {/* Grid Mission, Vision, Agréments */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white border border-sky-100 rounded-2xl p-8 shadow-xl">
                        <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-6">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Notre Mission</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Créer de la valeur durable pour nos clients investisseurs en leur ouvrant l'accès à des opportunités de placement rigoureusement sélectionnées et en facilitant l'accès aux capitaux pour les PME régionales.
                        </p>
                    </div>

                    <div className="bg-white border border-sky-100 rounded-2xl p-8 shadow-xl">
                        <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-6">
                            <Eye className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Notre Vision</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            Devenir le partenaire financier de référence dans la sous-région pour la structuration de dettes privées, le conseil en haut de bilan et les fonds à fort rendement.
                        </p>
                    </div>

                    <div className="bg-white border border-sky-200 rounded-2xl p-8 shadow-xl">
                        <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mb-6">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Conformité & Agréments</h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                            OMYA CAPITAL opère sous le strict respect du cadre réglementaire régional des Sociétés Intermédiaires Financières (KYC/AML strict, gestion des risques et audits réguliers).
                        </p>
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                            <CheckCircle2 className="w-4 h-4" /> Agréments SIF en Règle
                        </div>
                    </div>
                </div>

                {/* Gouvernance */}
                <div className="bg-white border border-sky-100 rounded-2xl p-8 lg:p-12">
                    <h2 className="text-2xl font-black text-slate-900 mb-6">Gouvernance & Équipe Dirigeante</h2>
                    <p className="text-xs text-slate-600 leading-relaxed mb-8">
                        Notre comité de direction rassemble des banquiers d'affaires, analystes financiers et juristes de premier plan cumulant plus de 20 ans d'expérience dans la finance d'entreprise et les marchés émergents.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 text-center">
                            <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-700 font-bold text-xl flex items-center justify-center mx-auto mb-4">
                                DG
                            </div>
                            <h4 className="text-base font-bold text-slate-900">Direction Générale</h4>
                            <p className="text-xs text-sky-600 font-semibold mb-2">Comité Exécutif SIF</p>
                            <p className="text-[11px] text-slate-500">Supervision stratégique des financements et placements.</p>
                        </div>

                        <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 text-center">
                            <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-700 font-bold text-xl flex items-center justify-center mx-auto mb-4">
                                CI
                            </div>
                            <h4 className="text-base font-bold text-slate-900">Comité d'Investissement</h4>
                            <p className="text-xs text-sky-600 font-semibold mb-2">Gestion des Risques & Due Diligence</p>
                            <p className="text-[11px] text-slate-500">Analyse indépendante de la rentabilité des projets.</p>
                        </div>

                        <div className="bg-sky-50 p-6 rounded-xl border border-sky-100 text-center">
                            <div className="w-16 h-16 rounded-full bg-sky-100 text-sky-700 font-bold text-xl flex items-center justify-center mx-auto mb-4">
                                CC
                            </div>
                            <h4 className="text-base font-bold text-slate-900">Cellule Conformité KYC/AML</h4>
                            <p className="text-xs text-sky-600 font-semibold mb-2">Réglementation & Sécurité Client</p>
                            <p className="text-[11px] text-slate-500">Vérification de l'origine des fonds et contrôle d'identité.</p>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
