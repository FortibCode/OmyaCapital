import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Calendar, PhoneCall, Video, Building2, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Create({ services = [] }) {
    const { flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        client_name: '',
        client_email: '',
        client_phone: '',
        service_id: '',
        appointment_date: '',
        meeting_type: 'online_video',
        notes: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('appointments.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <PublicLayout>
            <Head title="Prise de Rendez-vous Conseiller SIF - OMYA CAPITAL" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>Conseil Financier & Accompagnement</span>
                    </div>
                    <h1 className="text-3xl font-black text-slate-900 mb-3">Prendre Rendez-vous avec un Conseiller SIF</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Échangez avec l'un de nos experts pour analyser votre stratégie de placement, votre besoin de financement ou vos projets de haut de bilan.
                    </p>
                </div>

                {flash?.success && (
                    <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-bold flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 shrink-0" />
                        <span>{flash.success}</span>
                    </div>
                )}

                <div className="bg-white border border-sky-200 rounded-2xl p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Nom & Prénom / Société *</label>
                                <input
                                    type="text"
                                    required
                                    value={data.client_name}
                                    onChange={(e) => setData('client_name', e.target.value)}
                                    placeholder="Ex: Marc KOUAKOU / Kouakou S.A."
                                    className="w-full bg-white border border-sky-200 text-slate-900 text-sm rounded-xl p-3.5 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                />
                                {errors.client_name && <p className="text-rose-400 text-xs mt-1">{errors.client_name}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Adresse Email *</label>
                                <input
                                    type="email"
                                    required
                                    value={data.client_email}
                                    onChange={(e) => setData('client_email', e.target.value)}
                                    placeholder="investisseur@example.com"
                                    className="w-full bg-white border border-sky-200 text-slate-900 text-sm rounded-xl p-3.5 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                />
                                {errors.client_email && <p className="text-rose-400 text-xs mt-1">{errors.client_email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Téléphone *</label>
                                <input
                                    type="text"
                                    required
                                    value={data.client_phone}
                                    onChange={(e) => setData('client_phone', e.target.value)}
                                    placeholder="+242 06 123 4567"
                                    className="w-full bg-white border border-sky-200 text-slate-900 text-sm rounded-xl p-3.5 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                />
                                {errors.client_phone && <p className="text-rose-400 text-xs mt-1">{errors.client_phone}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Service Concerné</label>
                                <select
                                    value={data.service_id}
                                    onChange={(e) => setData('service_id', e.target.value)}
                                    className="w-full bg-white border border-sky-200 text-slate-900 text-sm rounded-xl p-3.5 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                >
                                    <option value="">-- Choisir un domaine d'accompagnement --</option>
                                    {services.map((srv) => (
                                        <option key={srv.id} value={srv.id}>{srv.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Date & Heure Souhaitée *</label>
                                <input
                                    type="datetime-local"
                                    required
                                    value={data.appointment_date}
                                    onChange={(e) => setData('appointment_date', e.target.value)}
                                    className="w-full bg-white border border-sky-200 text-slate-900 text-sm rounded-xl p-3.5 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                />
                                {errors.appointment_date && <p className="text-rose-400 text-xs mt-1">{errors.appointment_date}</p>}
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Format de l'Entretien</label>
                                <select
                                    value={data.meeting_type}
                                    onChange={(e) => setData('meeting_type', e.target.value)}
                                    className="w-full bg-white border border-sky-200 text-slate-900 text-sm rounded-xl p-3.5 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                >
                                    <option value="online_video">Visioconférence (Teams / Zoom)</option>
                                    <option value="in_office">En nos bureaux (Siège OMYA CAPITAL)</option>
                                    <option value="phone">Appel Téléphonique</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-slate-700 mb-2">Message & Contexte de la demande</label>
                            <textarea
                                rows={4}
                                value={data.notes}
                                onChange={(e) => setData('notes', e.target.value)}
                                placeholder="Précisez la nature de votre projet, le montant envisagé ou vos questions..."
                                className="w-full bg-white border border-sky-200 text-slate-900 text-sm rounded-xl p-3.5 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                            />
                        </div>

                        <div className="pt-4 border-t border-sky-100 flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-slate-600">
                                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                <span>Confidentialité et Secret Professionnel Garantis</span>
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 text-white font-extrabold text-sm py-4 px-8 rounded-xl shadow-xl transition-all"
                            >
                                {processing ? 'Validation en cours...' : 'Confirmer la Demande de Rendez-vous'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </PublicLayout>
    );
}
