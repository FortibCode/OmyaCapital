import React, { useState } from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import {
    TrendingUp,
    ShieldCheck,
    FileText,
    Upload,
    CheckCircle2,
    Clock,
    AlertCircle,
    User,
    Coins,
    Award
} from 'lucide-react';

export default function Dashboard({
    user = {},
    investments = [],
    totalInvested = 0,
    latestValuation = 0,
    kycDocuments = []
}) {
    const { flash } = usePage().props;
    const [kycType, setKycType] = useState('identity_card');
    const [file, setFile] = useState(null);

    const { data, setData, post, processing, errors } = useForm({
        document_type: 'identity_card',
        file: null,
    });

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF', maximumFractionDigits: 0 }).format(val);
    };

    const handleKycSubmit = (e) => {
        e.preventDefault();
        post(route('client.kyc.upload'), {
            onSuccess: () => {
                setFile(null);
            }
        });
    };

    const totalGain = latestValuation - totalInvested;

    return (
        <PublicLayout>
            <Head title="Espace Client - Suivi des Investissements | OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header Welcome Bar */}
                <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800 rounded-2xl p-8 shadow-xl mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl font-black text-white">Portefeuille de {user.name}</span>
                            {user.kyc_status === 'approved' ? (
                                <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-3 py-1 rounded-full">
                                    <ShieldCheck className="w-3.5 h-3.5" /> Compte KYC Approuvé
                                </span>
                            ) : (
                                <span className="inline-flex items-center gap-1 bg-white/20 text-white border border-white/30 text-[11px] font-bold px-3 py-1 rounded-full">
                                    <Clock className="w-3.5 h-3.5" /> Vérification KYC Nécessaire
                                </span>
                            )}
                        </div>
                        <p className="text-xs text-sky-100">
                            Espace d'investissement sécurisé OMYA CAPITAL (SIF). Suivi en direct de vos placements et valorisations.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 bg-white/15 px-6 py-4 rounded-xl border border-white/25">
                        <div>
                            <div className="text-[11px] font-semibold text-sky-100 uppercase tracking-widest">Valeur du Portefeuille</div>
                            <div className="text-2xl font-black text-white">{formatCurrency(latestValuation)}</div>
                        </div>
                    </div>
                </div>

                {/* Summary Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white border border-sky-100 rounded-2xl p-6 shadow-lg">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Total Capital Investi</div>
                        <div className="text-3xl font-black text-slate-900 mb-1">{formatCurrency(totalInvested)}</div>
                        <div className="text-xs text-slate-500">{investments.length} Placement(s) Actif(s)</div>
                    </div>

                    <div className="bg-white border border-sky-100 rounded-2xl p-6 shadow-lg">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Gain & Intérêts Perçus</div>
                        <div className="text-3xl font-black text-emerald-600 mb-1">+{formatCurrency(totalGain)}</div>
                        <div className="text-xs text-emerald-600 font-bold">
                            {totalInvested > 0 ? `+${((totalGain / totalInvested) * 100).toFixed(2)}% de plus-value` : '0.00%'}
                        </div>
                    </div>

                    <div className="bg-white border border-sky-200 rounded-2xl p-6 shadow-lg">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Statut de Conformité</div>
                        <div className="text-2xl font-bold text-sky-600 capitalize mb-1">
                            {user.kyc_status === 'approved' ? 'Vérifié & Validé' : 'En Attente de Pièces'}
                        </div>
                        <div className="text-xs text-slate-600">
                            {kycDocuments.length} document(s) soumis à la conformité
                        </div>
                    </div>
                </div>

                {/* Investments Table */}
                <div className="bg-white border border-sky-100 rounded-2xl p-8 shadow-xl mb-12">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Mes Placements & Participations Active(s)</h3>

                    {investments.length === 0 ? (
                        <div className="text-center py-12 bg-sky-50 rounded-xl border border-sky-100">
                            <Coins className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                            <p className="text-sm font-semibold text-slate-600">Vous n'avez pas encore d'investissement actif enregistré.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs text-slate-700">
                                <thead className="bg-sky-50 text-slate-600 uppercase font-bold text-[11px] border-b border-sky-100">
                                    <tr>
                                        <th className="py-4 px-4">Code Placement</th>
                                        <th className="py-4 px-4">Produit / Levée</th>
                                        <th className="py-4 px-4">Montant Souscrit</th>
                                        <th className="py-4 px-4">Valeur Actuelle</th>
                                        <th className="py-4 px-4">Date Souscription</th>
                                        <th className="py-4 px-4">Statut</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-sky-100 font-medium">
                                    {investments.map((inv) => {
                                        const latestTrack = inv.trackings?.[inv.trackings.length - 1];
                                        const val = latestTrack ? latestTrack.current_value : inv.amount;
                                        return (
                                            <tr key={inv.id} className="hover:bg-sky-50 transition-colors">
                                                <td className="py-4 px-4 font-mono font-bold text-sky-600">{inv.investment_code}</td>
                                                <td className="py-4 px-4 font-bold text-slate-900">
                                                    {inv.financial_product?.name || inv.fundraising?.title || 'Placement SIF'}
                                                </td>
                                                <td className="py-4 px-4 font-bold text-slate-900">{formatCurrency(inv.amount)}</td>
                                                <td className="py-4 px-4 font-bold text-emerald-600">{formatCurrency(val)}</td>
                                                <td className="py-4 px-4 text-slate-500">{inv.subscribed_at}</td>
                                                <td className="py-4 px-4">
                                                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full text-[10px] uppercase font-bold">
                                                        {inv.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* KYC & Document Compliance Section */}
                <div className="bg-white border border-sky-200 rounded-2xl p-8 shadow-xl">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Conformité KYC / AML & Transmission des Pièces</h3>
                    <p className="text-xs text-slate-600 mb-8">
                        Conformément à la réglementation des Sociétés Intermédiaires Financières, tout investissement nécessite la soumission préalable d'une pièce d'identité en cours de validité et d'un justificatif de domicile.
                    </p>

                    {flash?.success && (
                        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-bold flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 shrink-0" />
                            <span>{flash.success}</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Upload Form */}
                        <div className="lg:col-span-6 bg-sky-50 p-6 rounded-xl border border-sky-100">
                            <h4 className="text-sm font-bold text-slate-900 mb-4">Télécharger un nouveau document</h4>
                            <form onSubmit={handleKycSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-2">Type de Document</label>
                                    <select
                                        value={data.document_type}
                                        onChange={(e) => setData('document_type', e.target.value)}
                                        className="w-full bg-white border border-sky-200 text-slate-900 text-xs rounded-xl p-3 focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                                    >
                                        <option value="identity_card">Carte Nationale d'Identité</option>
                                        <option value="passport">Passeport International</option>
                                        <option value="proof_of_address">Justificatif de Domicile (-3 mois)</option>
                                        <option value="company_statutes">Statuts de la Société (Si Personne Morale)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-700 mb-2">Fichier PDF ou Image (Max 5Mo)</label>
                                    <input
                                        type="file"
                                        required
                                        accept=".pdf,.png,.jpg,.jpeg"
                                        onChange={(e) => setData('file', e.target.files[0])}
                                        className="w-full text-xs text-slate-600 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-sky-600 file:text-white hover:file:bg-sky-700"
                                    />
                                    {errors.file && <p className="text-rose-400 text-xs mt-1">{errors.file}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 text-white font-extrabold text-xs py-3 rounded-xl shadow-lg transition-all"
                                >
                                    {processing ? 'Envoi en cours...' : 'Soumettre à la Cellule Conformité'}
                                </button>
                            </form>
                        </div>

                        {/* Document List */}
                        <div className="lg:col-span-6 space-y-4">
                            <h4 className="text-sm font-bold text-slate-900 mb-4">Mes Documents Soumis</h4>

                            {kycDocuments.length === 0 ? (
                                <p className="text-xs text-slate-500 italic">Aucun document soumis pour le moment.</p>
                            ) : (
                                <div className="space-y-3">
                                    {kycDocuments.map((doc) => (
                                        <div key={doc.id} className="bg-sky-50 p-4 rounded-xl border border-sky-100 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <FileText className="w-5 h-5 text-sky-600" />
                                                <div>
                                                    <div className="text-xs font-bold text-slate-900">{doc.original_filename}</div>
                                                    <div className="text-[11px] text-slate-500 capitalize">{doc.document_type.replace('_', ' ')}</div>
                                                </div>
                                            </div>

                                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase border ${doc.status === 'approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-sky-50 text-sky-700 border-sky-200'}`}>
                                                {doc.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
