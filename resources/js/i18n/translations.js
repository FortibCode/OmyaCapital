export const SUPPORTED_LANGUAGES = [
    { code: "fr", short: "FR", label: "Français" },
    { code: "en", short: "EN", label: "English" },
    { code: "pt", short: "PT", label: "Português" },
];

export const DEFAULT_LANGUAGE = "fr";

export const translations = {
    fr: {
        common: {
            topbarTagline: "Société Intermédiaire Financière",
            contact: "Contact",
            home: "Accueil",
            discover: "Découvrir",
            bookAppointment: "Prendre rendez-vous",
            clientArea: "Espace Client",
            accessMyAccount: "Accéder à mon espace",
            openMenu: "Ouvrir le menu",
            closeMenu: "Fermer le menu",
            needHelp: "Besoin d'aide ?",
            teamListening: "Notre équipe est à votre écoute.",
            mainNavAria: "Navigation principale",
            changeLanguage: "Changer de langue",
        },
        utility: {
            calculator: "Calculateur",
            rates: "Taux de change",
            indicators: "Indicateurs",
        },
        ticker: {
            label: "Flux SIF & Marchés",
        },
        home: {
            title: "OMYA CAPITAL — Société Intermédiaire Financière",
            heroMessage: "Certaines choses ne se précipitent pas.\nNotre site arrive prochainement.",
            heroCta: {
                discoverServices: "Découvrir nos Métiers",
                ourPlacements: "Nos Placements",
                yieldCalculator: "Calculateur de Rendement",
                submitProject: "Soumettre un Projet",
                ourPartners: "Nos Partenaires",
                aboutOmya: "À Propos d'OMYA",
            },
        },
        nav: {
            about: {
                label: "À propos",
                featured: {
                    eyebrow: "OMYA CAPITAL",
                    title: "Une vision financière tournée vers la création de valeur.",
                    description:
                        "Découvrez notre identité, notre gouvernance, nos valeurs et notre expertise au service des entreprises et des investisseurs.",
                },
                columns: {
                    identity: {
                        title: "Notre identité",
                        items: {
                            presentation: {
                                title: "Présentation",
                                desc: "Notre histoire, nos activités et notre positionnement.",
                            },
                            mission: {
                                title: "Mission & Vision",
                                desc: "Notre ambition et notre contribution à l'économie.",
                            },
                            values: {
                                title: "Nos valeurs",
                                desc: "Intégrité, excellence, confidentialité et responsabilité.",
                            },
                        },
                    },
                    governance: {
                        title: "Gouvernance",
                        items: {
                            governance: {
                                title: "Gouvernance",
                                desc: "Une gouvernance fondée sur la rigueur et la conformité.",
                            },
                            team: {
                                title: "Notre équipe",
                                desc: "Des professionnels au service de vos ambitions.",
                            },
                            approvals: {
                                title: "Nos agréments",
                                desc: "Notre cadre institutionnel et réglementaire.",
                            },
                        },
                    },
                },
            },
            expertises: {
                label: "Nos expertises",
                featured: {
                    eyebrow: "EXPERTISE FINANCIÈRE",
                    title: "Des solutions conçues pour accompagner chaque étape stratégique.",
                    description:
                        "De la structuration financière à la levée de fonds, nous accompagnons entreprises, investisseurs et institutions.",
                },
                columns: {
                    advisory: {
                        title: "Conseil & stratégie",
                        items: {
                            advisory: {
                                title: "Conseil financier",
                                desc: "Ingénierie financière, stratégie et haut de bilan.",
                            },
                            fundraising: {
                                title: "Levée de fonds",
                                desc: "Equity, Private Equity et recherche de capitaux.",
                            },
                            ma: {
                                title: "M&A & Transmission",
                                desc: "Acquisitions, cessions et transmission d'entreprises.",
                            },
                        },
                    },
                    financing: {
                        title: "Financement & investissement",
                        items: {
                            structuredFinancing: {
                                title: "Financement structuré",
                                desc: "Dette privée, financement et crédits structurés.",
                            },
                            placement: {
                                title: "Placement financier",
                                desc: "Solutions d'investissement adaptées aux objectifs.",
                            },
                            allExpertises: {
                                title: "Toutes nos expertises",
                                desc: "Découvrez l'ensemble de nos solutions.",
                            },
                        },
                    },
                },
            },
            markets: {
                label: "Marchés",
                featured: {
                    eyebrow: "MARCHÉS FINANCIERS",
                    title: "Comprendre les marchés. Identifier les opportunités.",
                    description:
                        "OMYA CAPITAL met son expertise au service de la compréhension et de l'accès aux marchés financiers.",
                },
                columns: {
                    instruments: {
                        title: "Instruments",
                        items: {
                            financialMarket: {
                                title: "Marché financier",
                                desc: "Panorama des marchés financiers sous-régionaux.",
                            },
                            stocks: {
                                title: "Actions",
                                desc: "Titres de participation et valorisation.",
                            },
                            bonds: {
                                title: "Obligations",
                                desc: "Obligations souveraines et privées.",
                            },
                        },
                    },
                    solutions: {
                        title: "Solutions",
                        items: {
                            opcvm: {
                                title: "OPCVM",
                                desc: "Fonds communs de placement et SICAV.",
                            },
                            structuredProducts: {
                                title: "Produits structurés",
                                desc: "Solutions de placement à capital optimisé.",
                            },
                            indicators: {
                                title: "Indicateurs",
                                desc: "Indices et données macroéconomiques.",
                            },
                        },
                    },
                },
            },
            insights: {
                label: "Insights",
                featured: {
                    eyebrow: "PUBLICATIONS & ANALYSES",
                    title: "Notre regard sur les marchés et l'économie.",
                    description:
                        "Retrouvez nos analyses, publications, recommandations et informations financières.",
                },
                columns: {
                    news: {
                        title: "Actualités",
                        items: {
                            news: {
                                title: "Actualités",
                                desc: "Les dernières actualités économiques et financières.",
                            },
                            recommendations: {
                                title: "Recommandations",
                                desc: "Nos analyses et recommandations stratégiques.",
                            },
                            reports: {
                                title: "Rapports",
                                desc: "Études économiques et financières.",
                            },
                        },
                    },
                    publications: {
                        title: "Publications",
                        items: {
                            publications: {
                                title: "Publications",
                                desc: "Bulletins et publications OMYA CAPITAL.",
                            },
                            calendar: {
                                title: "Calendrier financier",
                                desc: "Les principales échéances financières.",
                            },
                            training: {
                                title: "Formation",
                                desc: "Éducation financière et séminaires.",
                            },
                        },
                    },
                },
            },
            company: {
                label: "Entreprise",
                featured: {
                    eyebrow: "OMYA CAPITAL",
                    title: "Construisons ensemble les prochaines opportunités.",
                    description:
                        "Vous êtes une entreprise, un investisseur ou un partenaire institutionnel ? Parlons de votre projet.",
                },
                columns: {
                    company: {
                        title: "OMYA CAPITAL",
                        items: {
                            careers: {
                                title: "Carrières",
                                desc: "Rejoignez une équipe engagée et ambitieuse.",
                            },
                            partners: {
                                title: "Partenaires",
                                desc: "Nos partenaires financiers et institutionnels.",
                            },
                            faq: {
                                title: "FAQ",
                                desc: "Les réponses aux questions fréquentes.",
                            },
                        },
                    },
                    contact: {
                        title: "Nous contacter",
                        items: {
                            contact: {
                                title: "Contact",
                                desc: "Échangez avec notre équipe.",
                            },
                            appointment: {
                                title: "Prendre rendez-vous",
                                desc: "Planifiez un échange avec nos experts.",
                            },
                            clientArea: {
                                title: "Espace Client",
                                desc: "Accédez à votre espace sécurisé.",
                            },
                        },
                    },
                },
            },
        },
    },

    en: {
        common: {
            topbarTagline: "Financial Intermediary Company",
            contact: "Contact",
            home: "Home",
            discover: "Discover",
            bookAppointment: "Book an appointment",
            clientArea: "Client Area",
            accessMyAccount: "Access my account",
            openMenu: "Open menu",
            closeMenu: "Close menu",
            needHelp: "Need help?",
            teamListening: "Our team is here for you.",
            mainNavAria: "Main navigation",
            changeLanguage: "Change language",
        },
        utility: {
            calculator: "Calculator",
            rates: "Exchange rates",
            indicators: "Indicators",
        },
        ticker: {
            label: "SIF & Market Feed",
        },
        home: {
            title: "OMYA CAPITAL — Financial Intermediary Company",
            heroMessage: "Our full website will be available soon",
            heroCta: {
                discoverServices: "Discover our Services",
                ourPlacements: "Our Investments",
                yieldCalculator: "Yield Calculator",
                submitProject: "Submit a Project",
                ourPartners: "Our Partners",
                aboutOmya: "About OMYA",
            },
        },
        nav: {
            about: {
                label: "About",
                featured: {
                    eyebrow: "OMYA CAPITAL",
                    title: "A financial vision focused on value creation.",
                    description:
                        "Discover our identity, governance, values and expertise dedicated to businesses and investors.",
                },
                columns: {
                    identity: {
                        title: "Our identity",
                        items: {
                            presentation: {
                                title: "Overview",
                                desc: "Our history, activities and positioning.",
                            },
                            mission: {
                                title: "Mission & Vision",
                                desc: "Our ambition and our contribution to the economy.",
                            },
                            values: {
                                title: "Our values",
                                desc: "Integrity, excellence, confidentiality and accountability.",
                            },
                        },
                    },
                    governance: {
                        title: "Governance",
                        items: {
                            governance: {
                                title: "Governance",
                                desc: "Governance built on rigor and compliance.",
                            },
                            team: {
                                title: "Our team",
                                desc: "Professionals dedicated to your ambitions.",
                            },
                            approvals: {
                                title: "Our licenses",
                                desc: "Our institutional and regulatory framework.",
                            },
                        },
                    },
                },
            },
            expertises: {
                label: "Our expertise",
                featured: {
                    eyebrow: "FINANCIAL EXPERTISE",
                    title: "Solutions designed to support every strategic milestone.",
                    description:
                        "From financial structuring to fundraising, we support businesses, investors and institutions.",
                },
                columns: {
                    advisory: {
                        title: "Advisory & strategy",
                        items: {
                            advisory: {
                                title: "Financial advisory",
                                desc: "Financial engineering, strategy and top-tier advisory.",
                            },
                            fundraising: {
                                title: "Fundraising",
                                desc: "Equity, private equity and capital sourcing.",
                            },
                            ma: {
                                title: "M&A & Transitions",
                                desc: "Acquisitions, disposals and business transfers.",
                            },
                        },
                    },
                    financing: {
                        title: "Financing & investment",
                        items: {
                            structuredFinancing: {
                                title: "Structured financing",
                                desc: "Private debt, financing and structured credit.",
                            },
                            placement: {
                                title: "Financial placement",
                                desc: "Investment solutions tailored to your objectives.",
                            },
                            allExpertises: {
                                title: "All our expertise",
                                desc: "Discover our full range of solutions.",
                            },
                        },
                    },
                },
            },
            markets: {
                label: "Markets",
                featured: {
                    eyebrow: "FINANCIAL MARKETS",
                    title: "Understand the markets. Identify the opportunities.",
                    description:
                        "OMYA CAPITAL puts its expertise at the service of understanding and accessing financial markets.",
                },
                columns: {
                    instruments: {
                        title: "Instruments",
                        items: {
                            financialMarket: {
                                title: "Financial market",
                                desc: "An overview of sub-regional financial markets.",
                            },
                            stocks: {
                                title: "Equities",
                                desc: "Equity securities and valuation.",
                            },
                            bonds: {
                                title: "Bonds",
                                desc: "Sovereign and private bonds.",
                            },
                        },
                    },
                    solutions: {
                        title: "Solutions",
                        items: {
                            opcvm: {
                                title: "Mutual funds",
                                desc: "Mutual funds and SICAVs.",
                            },
                            structuredProducts: {
                                title: "Structured products",
                                desc: "Capital-optimized investment solutions.",
                            },
                            indicators: {
                                title: "Indicators",
                                desc: "Indices and macroeconomic data.",
                            },
                        },
                    },
                },
            },
            insights: {
                label: "Insights",
                featured: {
                    eyebrow: "PUBLICATIONS & ANALYSIS",
                    title: "Our view on markets and the economy.",
                    description:
                        "Explore our analysis, publications, recommendations and financial insights.",
                },
                columns: {
                    news: {
                        title: "News",
                        items: {
                            news: {
                                title: "News",
                                desc: "The latest economic and financial news.",
                            },
                            recommendations: {
                                title: "Recommendations",
                                desc: "Our strategic analysis and recommendations.",
                            },
                            reports: {
                                title: "Reports",
                                desc: "Economic and financial studies.",
                            },
                        },
                    },
                    publications: {
                        title: "Publications",
                        items: {
                            publications: {
                                title: "Publications",
                                desc: "OMYA CAPITAL bulletins and publications.",
                            },
                            calendar: {
                                title: "Financial calendar",
                                desc: "Key upcoming financial dates.",
                            },
                            training: {
                                title: "Training",
                                desc: "Financial education and seminars.",
                            },
                        },
                    },
                },
            },
            company: {
                label: "Company",
                featured: {
                    eyebrow: "OMYA CAPITAL",
                    title: "Let's build the next opportunities together.",
                    description:
                        "Are you a business, an investor or an institutional partner? Let's talk about your project.",
                },
                columns: {
                    company: {
                        title: "OMYA CAPITAL",
                        items: {
                            careers: {
                                title: "Careers",
                                desc: "Join a committed and ambitious team.",
                            },
                            partners: {
                                title: "Partners",
                                desc: "Our financial and institutional partners.",
                            },
                            faq: {
                                title: "FAQ",
                                desc: "Answers to frequently asked questions.",
                            },
                        },
                    },
                    contact: {
                        title: "Get in touch",
                        items: {
                            contact: {
                                title: "Contact",
                                desc: "Talk with our team.",
                            },
                            appointment: {
                                title: "Book an appointment",
                                desc: "Schedule a meeting with our experts.",
                            },
                            clientArea: {
                                title: "Client Area",
                                desc: "Access your secure client area.",
                            },
                        },
                    },
                },
            },
        },
    },

    pt: {
        common: {
            topbarTagline: "Sociedade Intermediária Financeira",
            contact: "Contacto",
            home: "Início",
            discover: "Descobrir",
            bookAppointment: "Marcar reunião",
            clientArea: "Área do Cliente",
            accessMyAccount: "Aceder à minha área",
            openMenu: "Abrir menu",
            closeMenu: "Fechar menu",
            needHelp: "Precisa de ajuda?",
            teamListening: "A nossa equipa está à sua escuta.",
            mainNavAria: "Navegação principal",
            changeLanguage: "Mudar de idioma",
        },
        utility: {
            calculator: "Calculadora",
            rates: "Taxas de câmbio",
            indicators: "Indicadores",
        },
        ticker: {
            label: "Fluxo SIF e Mercados",
        },
        home: {
            title: "OMYA CAPITAL — Sociedade Intermediária Financeira",
            heroMessage: "O nosso site completo estará disponível em breve",
            heroCta: {
                discoverServices: "Descobrir as nossas soluções",
                ourPlacements: "Nossos Investimentos",
                yieldCalculator: "Calculadora de Rendimento",
                submitProject: "Submeter um Projeto",
                ourPartners: "Nossos Parceiros",
                aboutOmya: "Sobre a OMYA",
            },
        },
        nav: {
            about: {
                label: "Sobre nós",
                featured: {
                    eyebrow: "OMYA CAPITAL",
                    title: "Uma visão financeira voltada para a criação de valor.",
                    description:
                        "Descubra a nossa identidade, governança, valores e experiência ao serviço de empresas e investidores.",
                },
                columns: {
                    identity: {
                        title: "A nossa identidade",
                        items: {
                            presentation: {
                                title: "Apresentação",
                                desc: "A nossa história, atividades e posicionamento.",
                            },
                            mission: {
                                title: "Missão e Visão",
                                desc: "A nossa ambição e o nosso contributo para a economia.",
                            },
                            values: {
                                title: "Os nossos valores",
                                desc: "Integridade, excelência, confidencialidade e responsabilidade.",
                            },
                        },
                    },
                    governance: {
                        title: "Governança",
                        items: {
                            governance: {
                                title: "Governança",
                                desc: "Uma governança baseada no rigor e na conformidade.",
                            },
                            team: {
                                title: "A nossa equipa",
                                desc: "Profissionais ao serviço das suas ambições.",
                            },
                            approvals: {
                                title: "As nossas licenças",
                                desc: "O nosso quadro institucional e regulamentar.",
                            },
                        },
                    },
                },
            },
            expertises: {
                label: "As nossas competências",
                featured: {
                    eyebrow: "EXPERIÊNCIA FINANCEIRA",
                    title: "Soluções concebidas para acompanhar cada etapa estratégica.",
                    description:
                        "Da estruturação financeira à captação de fundos, acompanhamos empresas, investidores e instituições.",
                },
                columns: {
                    advisory: {
                        title: "Consultoria e estratégia",
                        items: {
                            advisory: {
                                title: "Consultoria financeira",
                                desc: "Engenharia financeira, estratégia e assessoria de topo.",
                            },
                            fundraising: {
                                title: "Captação de fundos",
                                desc: "Equity, Private Equity e angariação de capital.",
                            },
                            ma: {
                                title: "F&A e Transmissão",
                                desc: "Aquisições, cessões e transmissão de empresas.",
                            },
                        },
                    },
                    financing: {
                        title: "Financiamento e investimento",
                        items: {
                            structuredFinancing: {
                                title: "Financiamento estruturado",
                                desc: "Dívida privada, financiamento e crédito estruturado.",
                            },
                            placement: {
                                title: "Aplicações financeiras",
                                desc: "Soluções de investimento adaptadas aos seus objetivos.",
                            },
                            allExpertises: {
                                title: "Todas as nossas competências",
                                desc: "Descubra o conjunto das nossas soluções.",
                            },
                        },
                    },
                },
            },
            markets: {
                label: "Mercados",
                featured: {
                    eyebrow: "MERCADOS FINANCEIROS",
                    title: "Compreender os mercados. Identificar as oportunidades.",
                    description:
                        "A OMYA CAPITAL coloca a sua experiência ao serviço da compreensão e do acesso aos mercados financeiros.",
                },
                columns: {
                    instruments: {
                        title: "Instrumentos",
                        items: {
                            financialMarket: {
                                title: "Mercado financeiro",
                                desc: "Panorama dos mercados financeiros sub-regionais.",
                            },
                            stocks: {
                                title: "Ações",
                                desc: "Títulos de participação e valorização.",
                            },
                            bonds: {
                                title: "Obrigações",
                                desc: "Obrigações soberanas e privadas.",
                            },
                        },
                    },
                    solutions: {
                        title: "Soluções",
                        items: {
                            opcvm: {
                                title: "OICVM",
                                desc: "Fundos de investimento mobiliário e SICAV.",
                            },
                            structuredProducts: {
                                title: "Produtos estruturados",
                                desc: "Soluções de investimento com capital otimizado.",
                            },
                            indicators: {
                                title: "Indicadores",
                                desc: "Índices e dados macroeconómicos.",
                            },
                        },
                    },
                },
            },
            insights: {
                label: "Insights",
                featured: {
                    eyebrow: "PUBLICAÇÕES E ANÁLISES",
                    title: "A nossa visão sobre os mercados e a economia.",
                    description:
                        "Consulte as nossas análises, publicações, recomendações e informações financeiras.",
                },
                columns: {
                    news: {
                        title: "Notícias",
                        items: {
                            news: {
                                title: "Notícias",
                                desc: "As últimas notícias económicas e financeiras.",
                            },
                            recommendations: {
                                title: "Recomendações",
                                desc: "As nossas análises e recomendações estratégicas.",
                            },
                            reports: {
                                title: "Relatórios",
                                desc: "Estudos económicos e financeiros.",
                            },
                        },
                    },
                    publications: {
                        title: "Publicações",
                        items: {
                            publications: {
                                title: "Publicações",
                                desc: "Boletins e publicações da OMYA CAPITAL.",
                            },
                            calendar: {
                                title: "Calendário financeiro",
                                desc: "Os principais prazos financeiros.",
                            },
                            training: {
                                title: "Formação",
                                desc: "Educação financeira e seminários.",
                            },
                        },
                    },
                },
            },
            company: {
                label: "Empresa",
                featured: {
                    eyebrow: "OMYA CAPITAL",
                    title: "Vamos construir juntos as próximas oportunidades.",
                    description:
                        "É uma empresa, um investidor ou um parceiro institucional? Vamos falar sobre o seu projeto.",
                },
                columns: {
                    company: {
                        title: "OMYA CAPITAL",
                        items: {
                            careers: {
                                title: "Carreiras",
                                desc: "Junte-se a uma equipa empenhada e ambiciosa.",
                            },
                            partners: {
                                title: "Parceiros",
                                desc: "Os nossos parceiros financeiros e institucionais.",
                            },
                            faq: {
                                title: "Perguntas frequentes",
                                desc: "Respostas às perguntas mais frequentes.",
                            },
                        },
                    },
                    contact: {
                        title: "Contacte-nos",
                        items: {
                            contact: {
                                title: "Contacto",
                                desc: "Fale com a nossa equipa.",
                            },
                            appointment: {
                                title: "Marcar reunião",
                                desc: "Agende uma reunião com os nossos especialistas.",
                            },
                            clientArea: {
                                title: "Área do Cliente",
                                desc: "Aceda à sua área segura.",
                            },
                        },
                    },
                },
            },
        },
    },
};
