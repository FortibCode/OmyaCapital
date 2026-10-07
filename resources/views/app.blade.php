<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Découvrez OMYA CAPITAL, votre partenaire stratégique en gestion de capital, investissement et croissance financière en Afrique." />
        <meta name="keywords" content="OMYA CAPITAL, Omya Capital, gestion de capital, investissement, SIF, Société Intermédiaire Financière, structuration financière, levée de fonds, Afrique, Brazzaville, zone CEMAC, zone UEMOA" />
        <meta name="theme-color" content="#1a3a5c">
        <meta name="robots" content="index, follow">
        <meta name="google-site-verification" content="L8QK453dUfgPL-fK77jl7bUPWWPE4OqEuOPTAPlQwkM" />

        <title inertia>{{ config('app.name', 'OMYA CAPITAL') }}</title>
        <link rel="canonical" href="{{ url()->current() }}">

        <!-- Favicon (Conforme aux exigences Google 48x48+ carré) -->
        <link rel="icon" type="image/png" sizes="256x256" href="{{ asset('favicon.png') }}">
        <link rel="icon" href="{{ asset('favicon.ico') }}" sizes="any">
        <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('favicon.png') }}">

        <!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="OMYA CAPITAL">
        <meta property="og:description" content="Découvrez OMYA CAPITAL, votre partenaire stratégique en gestion de capital, investissement et croissance financière en Afrique.">
        <meta property="og:image" content="{{ asset('favicon.png') }}">
        <meta property="og:image:alt" content="Logo OMYA CAPITAL">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:locale" content="fr_FR">
        <meta property="og:site_name" content="OMYA CAPITAL">

        <!-- Twitter / X Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="OMYA CAPITAL">
        <meta name="twitter:description" content="Votre partenaire stratégique en gestion de capital, investissement et croissance financière en Afrique.">
        <meta name="twitter:image" content="{{ asset('images/omya-capital-logo.png') }}">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <!-- Schema.org — Données structurées pour Google (Rich Results & Logo Officiel) -->
        @verbatim
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "OMYA CAPITAL",
            "alternateName": "Omya Capital",
            "url": "https://omya-capital.com",
            "logo": "https://omya-capital.com/favicon.png",
            "image": "https://omya-capital.com/favicon.png",
            "description": "OMYA CAPITAL est votre partenaire stratégique en gestion de capital, investissement et croissance financière en Afrique.",
            "email": "contact@omya-capital.com",
            "telephone": "+242050987541",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "76 avenue Amilcar Cabral, Immeuble Villarecci, en face du Radisson Blu",
                "addressLocality": "Brazzaville",
                "addressRegion": "Centre-ville",
                "addressCountry": "CG"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+242050987541",
                "email": "contact@omya-capital.com",
                "contactType": "customer service",
                "availableLanguage": ["French"]
            },
            "sameAs": [
                "https://omya-capital.com"
            ]
        }
        </script>
        @endverbatim

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', 'resources/js/Pages/' . $page['component'] . '.jsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        {{-- Reprise du contenu affiché par React, pour les robots et les visiteurs sans JavaScript --}}
        <noscript>
            <h1>OMYA CAPITAL</h1>
            <p>Certaines choses ne se précipitent pas. Notre site arrive prochainement.</p>
            <p>
                OMYA CAPITAL est une Société Intermédiaire Financière (SIF) agréée, spécialisée
                dans les placements financiers, le conseil stratégique en haut de bilan, la
                structuration de dettes et les levées de fonds, en zone CEMAC et UEMOA.
            </p>
            <p>
                76 avenue Amilcar Cabral, Immeuble Villarecci, Brazzaville, République du Congo —
                <a href="mailto:contact@omya-capital.com">contact@omya-capital.com</a> —
                <a href="tel:+242050987541">+242 05 098 75 41</a>
            </p>
        </noscript>

        @inertia
    </body>
</html>
