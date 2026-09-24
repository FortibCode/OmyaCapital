<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Découvrez OMYA CAPITAL, votre partenaire stratégique en gestion de capital, investissement et croissance financière en Afrique." />
        <meta name="theme-color" content="#1a3a5c">
        <meta name="robots" content="index, follow">

        <title inertia>{{ config('app.name', 'OMYA CAPITAL') }}</title>

        <!-- Favicon -->
        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" type="image/png" href="/favicon.png">
        <link rel="apple-touch-icon" sizes="180x180" href="/images/omya-capital-logo.png">

        <!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
        <meta property="og:type" content="website">
        <meta property="og:title" content="OMYA CAPITAL - Partenaire Stratégique en Gestion de Capital">
        <meta property="og:description" content="Découvrez OMYA CAPITAL, votre partenaire stratégique en gestion de capital, investissement et croissance financière en Afrique.">
        <meta property="og:image" content="/images/omya-capital-logo.png">
        <meta property="og:image:alt" content="Logo OMYA CAPITAL">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:locale" content="fr_FR">
        <meta property="og:site_name" content="OMYA CAPITAL">

        <!-- Twitter / X Card -->
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="OMYA CAPITAL - Partenaire Stratégique en Gestion de Capital">
        <meta name="twitter:description" content="Découvrez OMYA CAPITAL, votre partenaire stratégique en gestion de capital, investissement et croissance financière en Afrique.">
        <meta name="twitter:image" content="/images/omya-capital-logo.png">

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

        <!-- Schema.org — Données structurées pour Google (Rich Results) -->
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "OMYA CAPITAL",
            "alternateName": "Omya Capital",
            "url": "https://omya-capital.com",
            "logo": "https://omya-capital.com/images/omya-capital-logo.png",
            "image": "https://omya-capital.com/images/omya-capital-logo.png",
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

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
