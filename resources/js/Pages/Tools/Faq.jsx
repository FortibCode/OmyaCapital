import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head } from '@inertiajs/react';
import { HelpCircle } from 'lucide-react';

export default function Faq() {
    const faqs = [
        {
            q: "Quelle est la différence entre une Société Intermédiaire Financière (SIF) et une Société de Bourse ?",
            a: "Une Société Intermédiaire Financière (SIF) comme OMYA CAPITAL se concentre sur le placement financier sur-mesure, le conseil stratégique en haut de bilan, la structuration de dette et les levées de fonds. Contrairement aux sociétés de bourse, la SIF ne fait généralement pas de passation d'ordres en temps réel sur le marché secondaire d'actions publiques."
        },
        {
            q: "Comment souscrire à un produit de placement OMYA CAPITAL ?",
            a: "La souscription s'effectue après une première prise de rendez-vous avec un conseiller financier et la validation du dossier de conformité KYC (pièce d'identité et justificatif de domicile)."
        },
        {
            q: "Quel est le rendement moyen offert sur les placements ?",
            a: "Les rendements cibles varient généralement entre 7.50% et 11.20% par an selon le type d'obligation et la maturité du produit structuré."
        }
    ];

    return (
        <PublicLayout>
            <Head title="Faq & Questions Fréquentes - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-600 text-xs font-bold uppercase tracking-wider mb-4">
                        <HelpCircle className="w-4 h-4" />
                        <span>Foire Aux Questions</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 mb-4">Questions Fréquemment Posées</h1>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Retrouvez toutes les réponses concernant les procédures SIF, la souscription et la sécurité des fonds.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((f, idx) => (
                        <div key={idx} className="bg-white border border-sky-100 rounded-2xl p-6 shadow-xl">
                            <h3 className="text-base font-bold text-sky-700 mb-2">{f.q}</h3>
                            <p className="text-xs text-slate-700 leading-relaxed">{f.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
