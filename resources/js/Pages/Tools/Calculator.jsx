import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import YieldCalculator from '@/Components/YieldCalculator';
import { Head } from '@inertiajs/react';

export default function CalculatorPage() {
    return (
        <PublicLayout>
            <Head>
                <title>Calculateur de Rendement - OMYA CAPITAL</title>
                <meta name="description" content="Simulez le rendement de vos placements obligataires et portefeuilles d'investissement avec le calculateur interactif d'OMYA CAPITAL." />
                <meta property="og:title" content="Calculateur de Rendement - OMYA CAPITAL" />
                <meta property="og:description" content="Simulateur financier interactif pour calculer les gains de vos projets d'investissement." />
            </Head>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <YieldCalculator />
            </div>
        </PublicLayout>
    );
}
