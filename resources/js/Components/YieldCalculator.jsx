import React, { useState } from 'react';
import { Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function YieldCalculator() {
    const [mode, setMode] = useState('investment'); // 'investment' or 'financing'
    const [amount, setAmount] = useState(10000000); // 10 Million XAF
    const [duration, setDuration] = useState(12); // months
    const [rate, setRate] = useState(9.5); // % annual

    // Calculations
    const totalYield = (amount * (rate / 100) * (duration / 12));
    const totalValuation = amount + totalYield;
    const monthlyReturn = totalYield / duration;

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XAF', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <div className="bg-white border border-sky-200 rounded-2xl p-6 lg:p-8 shadow-xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-sky-100 pb-6">
                <div>
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 mb-2 uppercase tracking-wider">
                        <Calculator className="w-4 h-4 text-sky-600" />
                        <span>Simulateur Financier SIF</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900">Calculateur de Rendement & Projection</h3>
                </div>

                <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                    <button
                        onClick={() => setMode('investment')}
                        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${mode === 'investment' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                        Placement Financier
                    </button>
                    <button
                        onClick={() => setMode('financing')}
                        className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${mode === 'financing' ? 'bg-sky-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
                    >
                        Levée & Financement PME
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Inputs Column */}
                <div className="lg:col-span-7 space-y-6">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm font-semibold text-slate-700">
                                {mode === 'investment' ? 'Montant à Investir (XAF)' : 'Besoins de Financement (XAF)'}
                            </label>
                            <span className="text-lg font-black text-sky-600">{formatCurrency(amount)}</span>
                        </div>
                        <input
                            type="range"
                            min="1000000"
                            max="100000000"
                            step="1000000"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="w-full h-2 bg-sky-100 rounded-lg appearance-none cursor-pointer accent-sky-600"
                        />
                        <div className="flex justify-between text-xs text-slate-400 mt-1 font-medium">
                            <span>1M XAF</span>
                            <span>50M XAF</span>
                            <span>100M XAF</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-semibold text-slate-700">Durée du Placement</label>
                                <span className="text-sm font-bold text-slate-900">{duration} Mois</span>
                            </div>
                            <select
                                value={duration}
                                onChange={(e) => setDuration(Number(e.target.value))}
                                className="w-full bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-xl p-3 focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                            >
                                <option value={6}>6 Mois</option>
                                <option value={12}>12 Mois (1 an)</option>
                                <option value={24}>24 Mois (2 ans)</option>
                                <option value={36}>36 Mois (3 ans)</option>
                            </select>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-semibold text-slate-700">Taux de Rendement Cible</label>
                                <span className="text-sm font-bold text-sky-600">{rate}% / an</span>
                            </div>
                            <select
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                className="w-full bg-slate-50 border border-slate-300 text-slate-800 text-sm rounded-xl p-3 focus:border-sky-600 focus:ring-1 focus:ring-sky-600"
                            >
                                <option value={7.5}>7.50% (SÉCURITÉ INFRASTRUCTURE)</option>
                                <option value={9.5}>9.50% (OPTIMUM RENDEMENT)</option>
                                <option value={11.2}>11.20% (OBLIGATIONS PRIVÉES PME)</option>
                            </select>
                        </div>
                    </div>

                    <div className="bg-sky-50/70 rounded-xl p-4 border border-sky-100 flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-600 leading-relaxed font-medium">
                            Simulation indicative basée sur la convention de Société Intermédiaire Financière OMYA CAPITAL. Les intérêts sont calculés trimestriellement sous réserve de validation KYC.
                        </p>
                    </div>
                </div>

                {/* Results Card Column */}
                <div className="lg:col-span-5">
                    <div className="bg-gradient-to-br from-[#0284C7] to-[#0369A1] text-white border border-sky-400/40 rounded-2xl p-6 shadow-xl relative">
                        <div className="text-xs font-semibold text-sky-100 uppercase tracking-widest mb-1">
                            {mode === 'investment' ? 'Rendement Brut Estimé' : 'Coût Global Structuré'}
                        </div>
                        <div className="text-3xl font-black text-white mb-6">
                            +{formatCurrency(totalYield)}
                        </div>

                        <div className="space-y-4 border-t border-sky-400/40 pt-4">
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-sky-100">Capital Initial</span>
                                <span className="font-semibold text-white">{formatCurrency(amount)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-sky-100">Revenu Trimestriel Est.</span>
                                <span className="font-semibold text-sky-200">+{formatCurrency(monthlyReturn * 3)}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-t border-sky-400/40 pt-3">
                                <span className="font-bold text-white">Valeur Totale à Échéance</span>
                                <span className="font-black text-white text-base">{formatCurrency(totalValuation)}</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <Link
                                href={route('appointments.create')}
                                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-sky-50 text-sky-800 font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                            >
                                <span>Prendre Rendez-vous avec un Conseiller</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
