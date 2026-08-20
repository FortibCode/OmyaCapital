import React from 'react';
import PublicLayout from '@/Layouts/PublicLayout';
import YieldCalculator from '@/Components/YieldCalculator';
import { Head } from '@inertiajs/react';

export default function CalculatorPage() {
    return (
        <PublicLayout>
            <Head title="Calculateur de Rendement - OMYA CAPITAL" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <YieldCalculator />
            </div>
        </PublicLayout>
    );
}
