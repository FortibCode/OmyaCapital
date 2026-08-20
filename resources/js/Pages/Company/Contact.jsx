import React, { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { PhoneCall, Mail, MapPin, Calendar, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <PublicLayout>
            <Head title="Contact & Siège Social - OMYA CAPITAL | SIF" />

            {/* Page Hero */}
            <section className="sky-banner-bg text-white py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920')" }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-white text-xs font-bold uppercase tracking-wider mb-6">
                        <PhoneCall className="w-4 h-4 text-sky-200" />
                        <span>Prendre Contact</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-4">Parlons de votre Projet</h1>
                    <p className="text-sky-100 text-base leading-relaxed max-w-2xl mx-auto">
                        Nos conseillers financiers sont disponibles pour vous écouter, analyser votre situation et vous proposer un accompagnement sur-mesure.
                    </p>
                </div>
                <div className="w-full overflow-hidden leading-none z-10 relative mt-10">
                    <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="block w-full h-8 fill-[#F8FAFC]">
                        <path d="M0,0 C300,60 900,0 1200,40 L1200,60 L0,60 Z" />
                    </svg>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Coordonnées */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {[
                        {
                            icon: PhoneCall,
                            title: 'Téléphone',
                            lines: ['+242 06 123 4567', '+242 05 987 6543'],
                            note: 'Lun-Ven, 08h00 – 17h30'
                        },
                        {
                            icon: Mail,
                            title: 'Adresse E-mail',
                            lines: ['contact@omyacapital.com', 'investisseurs@omyacapital.com'],
                            note: 'Réponse sous 24h ouvrables'
                        },
                        {
                            icon: MapPin,
                            title: 'Siège Social',
                            lines: ['Avenue Amilcar Cabral, Centre-Ville', 'Brazzaville, République du Congo'],
                            note: 'Sur rendez-vous uniquement'
                        },
                    ].map(({ icon: Icon, title, lines, note }, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -4 }}
                            className="bg-white border border-sky-100 hover:border-sky-300 rounded-2xl p-8 shadow-sm text-center transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 mx-auto mb-5">
                                <Icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-base font-extrabold text-slate-900 mb-3">{title}</h3>
                            {lines.map((l, j) => (
                                <p key={j} className="text-sm text-slate-700 font-medium">{l}</p>
                            ))}
                            <p className="text-xs text-sky-600 font-semibold mt-3 flex items-center justify-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {note}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Formulaire & Rendez-vous */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Formulaire */}
                    <div className="bg-white border border-sky-100 rounded-2xl p-8 shadow-sm">
                        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Envoyez-nous un message</h2>
                        <p className="text-xs text-slate-500 mb-8">Décrivez votre projet ou votre question, un conseiller vous répondra dans les 24 heures ouvrables.</p>

                        {submitted ? (
                            <div className="text-center py-10 space-y-4">
                                <CheckCircle2 className="w-14 h-14 text-sky-600 mx-auto" />
                                <h3 className="text-xl font-extrabold text-slate-900">Message envoyé avec succès !</h3>
                                <p className="text-sm text-slate-500">Un de nos conseillers vous contactera sous 24h ouvrables. Merci pour votre confiance.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Nom complet *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="Jean-Pierre Moukala"
                                            value={form.name}
                                            onChange={e => setForm({ ...form, name: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none placeholder-slate-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-700 mb-1.5">Téléphone</label>
                                        <input
                                            type="tel"
                                            placeholder="+242 06 000 0000"
                                            value={form.phone}
                                            onChange={e => setForm({ ...form, phone: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none placeholder-slate-400"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Adresse e-mail *</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="votre@entreprise.com"
                                        value={form.email}
                                        onChange={e => setForm({ ...form, email: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none placeholder-slate-400"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Objet de votre demande</label>
                                    <select
                                        value={form.subject}
                                        onChange={e => setForm({ ...form, subject: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none"
                                    >
                                        <option value="">— Sélectionner un sujet —</option>
                                        <option>Placement & Investissement</option>
                                        <option>Levée de fonds / Capital</option>
                                        <option>Conseil Financier Stratégique</option>
                                        <option>Financement Structuré</option>
                                        <option>Autre renseignement</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Votre message *</label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="Décrivez brièvement votre projet, vos objectifs et le montant estimé en jeu..."
                                        value={form.message}
                                        onChange={e => setForm({ ...form, message: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl p-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none placeholder-slate-400 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-lg shadow-sky-600/20 transition-all"
                                >
                                    <span>Envoyer mon message</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Prise de Rendez-vous */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-sky-600 to-sky-800 rounded-2xl p-8 text-white shadow-xl">
                            <Calendar className="w-10 h-10 text-sky-200 mb-4" />
                            <h3 className="text-xl font-extrabold mb-3">Préférez-vous un rendez-vous ?</h3>
                            <p className="text-sky-100 text-sm leading-relaxed mb-6">
                                Planifiez une rencontre directe avec l'un de nos conseillers financiers. En présentiel à notre siège de Brazzaville ou en visioconférence selon vos disponibilités.
                            </p>
                            <Link
                                href={route('appointments.create')}
                                className="inline-flex items-center gap-2 bg-white hover:bg-sky-50 text-sky-800 font-extrabold text-sm py-3 px-6 rounded-xl shadow-md transition-all"
                            >
                                <span>Réserver un créneau</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="bg-white border border-sky-100 rounded-2xl p-7 shadow-sm space-y-4">
                            <h3 className="text-base font-extrabold text-slate-900">Nos Horaires d'Ouverture</h3>
                            {[
                                { jours: 'Lundi – Vendredi', heures: '08h00 – 17h30' },
                                { jours: 'Samedi', heures: '09h00 – 12h30 (sur rendez-vous)' },
                                { jours: 'Dimanche & Jours Fériés', heures: 'Fermé' },
                            ].map((h, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                    <span className="text-sm text-slate-700 font-medium">{h.jours}</span>
                                    <span className="text-sm text-sky-600 font-bold">{h.heures}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
