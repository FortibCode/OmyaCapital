import React from 'react';
import HeaderNav from '@/Components/HeaderNav';
import RateTicker from '@/Components/RateTicker';
import OmyaLogo from '@/Components/OmyaLogo';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Shield, Globe, PhoneCall, Mail, ArrowRight, Share2, Rss } from 'lucide-react';

export default function PublicLayout({ children, exchangeRates = [], interestRates = [], macroIndicators = [], hideFooter = false, hideNav = false }) {
    return (
        <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans flex flex-col selection:bg-sky-500 selection:text-white">
            {/* 1. Ticker Header & 2. Navbar */}
            {!hideNav && (
                <>
                    <RateTicker
                        exchangeRates={exchangeRates}
                        interestRates={interestRates}
                        macroIndicators={macroIndicators}
                    />
                    <HeaderNav />
                </>
            )}

            {/* 3. Main Content with Motion Entrance */}
            <motion.main
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex-grow"
            >
                {children}
            </motion.main>

            {/* 4. FOOTER BLEU CIEL & BLANC AVEC LOGO OFFICIEL */}
            {!hideFooter && (
            <footer className="relative bg-[#005B8E] text-white text-sm mt-20">
                {/* Curved Wave Top Separator */}
                <div className="w-full overflow-hidden leading-none absolute -top-10 left-0 right-0 z-10 pointer-events-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-10 text-[#005B8E] fill-current">
                        <path d="M0,0 C300,90 600,-40 1200,50 L1200,120 L0,120 Z"></path>
                    </svg>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                        {/* Col 1: Official Logo & Overview (4 cols) */}
                        <div className="lg:col-span-4 space-y-4">
                            <div className="flex items-center gap-3">
                                <OmyaLogo variant="light" height={44} />
                            </div>
                            <p className="text-xs text-sky-100 leading-relaxed pr-4 pt-2">
                                OMYA CAPITAL est une Société Intermédiaire Financière (SIF) agréée. Spécialisée dans les placements financiers haut rendement, le conseil stratégique en haut de bilan, la structuration de dettes et les levées de fonds.
                            </p>
                            <div className="flex items-center gap-3 text-xs text-sky-200 font-semibold pt-2">
                                <Shield className="w-4 h-4 text-sky-300" />
                                <span>Conformité KYC / AML Strictes</span>
                            </div>
                        </div>

                        {/* Col 2: Navigation Rapide (2 cols) */}
                        <div className="lg:col-span-2">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Accès Rapide</h4>
                            <ul className="space-y-2.5 text-xs font-semibold text-sky-100">
                                <li><Link href={route('home')} className="hover:text-white transition-colors">Accueil</Link></li>
                                <li><Link href={route('about', 'presentation')} className="hover:text-white transition-colors">À Propos</Link></li>
                                <li><Link href={route('services.index')} className="hover:text-white transition-colors">Services SIF</Link></li>
                                <li><Link href={route('news')} className="hover:text-white transition-colors">Actualités</Link></li>
                                <li><Link href={route('contact')} className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Col 3: Partenaires & Réalisations (3 cols) */}
                        <div className="lg:col-span-3">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Galerie & Partenaires</h4>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=150&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=150&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=150&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=150&auto=format&fit=crop",
                                    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=150&auto=format&fit=crop"
                                ].map((imgUrl, i) => (
                                    <div key={i} className="h-14 rounded-lg overflow-hidden border border-sky-400/40 hover:border-white transition-colors">
                                        <img src={imgUrl} alt="Partenaire" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Col 4: Lettre d'Information & Réseaux (3 cols) */}
                        <div className="lg:col-span-3 space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Lettre d'Information</h4>
                            <p className="text-xs text-sky-100">Abonnez-vous à nos analyses de marché et notes stratégiques :</p>
                            <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="votre.email@domaine.com"
                                    className="bg-white text-slate-800 text-xs rounded-l-xl p-2.5 w-full focus:outline-none placeholder-slate-400 font-medium"
                                />
                                <button type="submit" className="bg-sky-900 hover:bg-sky-950 text-white font-bold p-2.5 rounded-r-xl shrink-0">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </form>

                            <div className="pt-2">
                                <span className="text-xs font-bold text-sky-200 block mb-2">Suivez OMYA CAPITAL</span>
                                <div className="flex items-center gap-3 text-white">
                                    <a href="#" className="w-8 h-8 rounded-lg bg-sky-700/60 border border-sky-500/50 flex items-center justify-center hover:bg-white hover:text-sky-700 transition-colors"><Globe className="w-4 h-4" /></a>
                                    <a href="#" className="w-8 h-8 rounded-lg bg-sky-700/60 border border-sky-500/50 flex items-center justify-center hover:bg-white hover:text-sky-700 transition-colors"><Share2 className="w-4 h-4" /></a>
                                    <a href="#" className="w-8 h-8 rounded-lg bg-sky-700/60 border border-sky-500/50 flex items-center justify-center hover:bg-white hover:text-sky-700 transition-colors"><Mail className="w-4 h-4" /></a>
                                    <a href="#" className="w-8 h-8 rounded-lg bg-sky-700/60 border border-sky-500/50 flex items-center justify-center hover:bg-white hover:text-sky-700 transition-colors"><Rss className="w-4 h-4" /></a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Copyright Line */}
                    <div className="border-t border-sky-700/60 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-sky-200 gap-4">
                        <p>© {new Date().getFullYear()} OMYA CAPITAL S.A. Tous droits réservés. Société Intermédiaire Financière.</p>
                        <div className="flex items-center gap-6">
                            <span className="hover:text-white cursor-pointer">Conditions d'Utilisation</span>
                            <span className="hover:text-white cursor-pointer">Politique de Confidentialité</span>
                        </div>
                    </div>
                </div>
            </footer>
            )}
        </div>
    );
}
