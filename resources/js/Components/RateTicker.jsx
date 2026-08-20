import React from 'react';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { useLanguage } from '@/Context/LanguageContext';

export default function RateTicker({ exchangeRates = [], interestRates = [], macroIndicators = [] }) {
    const { t } = useLanguage();

    const combinedData = [
        ...(exchangeRates || []).map(r => ({
            type: 'exchange',
            label: r.currency_pair,
            value: Number(r.rate).toFixed(2),
            change: r.change_24h,
        })),
        ...(interestRates || []).map(i => ({
            type: 'interest',
            label: i.rate_type,
            value: `${i.rate_value}%`,
            change: i.change_direction === 'up' ? 0.25 : (i.change_direction === 'down' ? -0.25 : 0),
        })),
        ...(macroIndicators || []).map(m => ({
            type: 'macro',
            label: m.indicator_name,
            value: m.value,
        }))
    ];

    if (!combinedData.length) return null;

    return (
        <div className="bg-[#0369A1] text-white py-2 overflow-hidden select-none text-xs font-medium border-b border-sky-700">
            <div className="max-w-7xl mx-auto flex items-center px-4">
                <div className="flex items-center gap-1.5 bg-sky-950/40 text-sky-100 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap mr-4 border border-sky-400/30">
                    <Activity className="w-3.5 h-3.5 animate-pulse text-sky-300" />
                    <span>{t('ticker.label')}</span>
                </div>

                <div className="overflow-hidden relative w-full">
                    <div className="animate-ticker flex items-center gap-8">
                        {[...combinedData, ...combinedData].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 whitespace-nowrap bg-sky-800/60 px-3 py-1 rounded-md border border-sky-600/50 text-white">
                                <span className="text-sky-100 font-semibold">{item.label}:</span>
                                <span className="text-white font-bold">{item.value}</span>
                                {item.change !== undefined && (
                                    <span className={`flex items-center text-[10px] font-bold ${item.change >= 0 ? 'text-sky-200' : 'text-rose-300'}`}>
                                        {item.change >= 0 ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                                        {item.change >= 0 ? `+${item.change}%` : `${item.change}%`}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
