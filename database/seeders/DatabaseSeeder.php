<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Service;
use App\Models\FinancialProduct;
use App\Models\Fundraising;
use App\Models\Investment;
use App\Models\InvestmentTracking;
use App\Models\ExchangeRate;
use App\Models\InterestRate;
use App\Models\MacroIndicator;
use App\Models\Appointment;
use App\Models\Report;
use App\Models\MarketNews;
use App\Models\Career;
use App\Models\Partner;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Administrateur & Utilisateurs de démonstration
        $admin = User::create([
            'name' => 'Direction OMYA CAPITAL',
            'email' => 'admin@omyacapital.com',
            'phone' => '+242 06 123 4567',
            'company_name' => 'OMYA CAPITAL S.A.',
            'role' => 'admin',
            'kyc_status' => 'approved',
            'password' => Hash::make('password'),
        ]);

        $advisor = User::create([
            'name' => 'Jean-Luc MBOUSSA (Conseiller)',
            'email' => 'conseiller@omyacapital.com',
            'phone' => '+242 05 987 6543',
            'company_name' => 'OMYA CAPITAL',
            'role' => 'advisor',
            'kyc_status' => 'approved',
            'password' => Hash::make('password'),
        ]);

        $client = User::create([
            'name' => 'Marc KOUAKOU',
            'email' => 'investisseur@gmail.com',
            'phone' => '+242 06 555 8899',
            'company_name' => 'Kouakou Holdings',
            'role' => 'client',
            'kyc_status' => 'approved',
            'password' => Hash::make('password'),
        ]);

        // 2. Services SIF
        $services = [
            [
                'title' => 'Placement Financier & Structuré',
                'slug' => 'placement-financier-structure',
                'category' => 'placement',
                'short_description' => 'Optimisation du rendement du capital via des produits de placement sur-mesure et sécurisés.',
                'full_description' => 'OMYA CAPITAL conçoit des solutions d investissement sur mesure pour les institutionnels, entreprises et particuliers à forte valeur patrimoniale, avec un souci constant d arbitrage entre rendement et gestion des risques.',
                'icon_name' => 'TrendingUp',
                'is_featured' => true,
            ],
            [
                'title' => 'Conseil Stratégique & Financier',
                'slug' => 'conseil-strategique-financier',
                'category' => 'conseil',
                'short_description' => 'Ingénierie financière, restructuration du haut de bilan et évaluation d entreprises.',
                'full_description' => 'Nos experts accompagnent les dirigeants dans la structuration de leur haut de bilan, l optimisation de la trésorerie stratégique et la gouvernance financière.',
                'icon_name' => 'Briefcase',
                'is_featured' => true,
            ],
            [
                'title' => 'Levée de Fonds & Equity',
                'slug' => 'levee-de-fonds-equity',
                'category' => 'levee_de_fonds',
                'short_description' => 'Accompagnement complet dans l ouverture du capital et la recherche de partenaires investisseurs.',
                'full_description' => 'Nous connectons les entreprises en croissance à fort potentiel avec des investisseurs régionaux et internationaux pour financer leur expansion.',
                'icon_name' => 'Coins',
                'is_featured' => true,
            ],
            [
                'title' => 'Financement Structuré des PME',
                'slug' => 'financement-structure-pme',
                'category' => 'financement',
                'short_description' => 'Solutions de dette privée et de financement de projets d infrastructure et industriels.',
                'full_description' => 'Mise en place de syndications de crédits et d émissions obligataires privées pour répondre aux besoins d investissement à long terme.',
                'icon_name' => 'Building2',
                'is_featured' => false,
            ],
            [
                'title' => 'Accompagnement M&A & Transmission',
                'slug' => 'accompagnement-ma-transmission',
                'category' => 'accompagnement',
                'short_description' => 'Conseil à l achat, à la vente et fusion-acquisition d entreprises régionales.',
                'full_description' => 'Conduite de due diligences, valorisation et négociation lors des opérations de cession ou d acquisition d entreprises.',
                'icon_name' => 'Handshake',
                'is_featured' => false,
            ],
        ];

        foreach ($services as $srv) {
            Service::create($srv);
        }

        // 3. Produits Financiers
        $product1 = FinancialProduct::create([
            'name' => 'OMYA Optimum Rendement 2026',
            'slug' => 'omya-optimum-rendement-2026',
            'type' => 'placement_structure',
            'target_return_rate' => 9.50,
            'min_investment_amount' => 5000000.00,
            'duration_months' => 12,
            'risk_level' => 'moderate',
            'summary' => 'Produit de placement sur 12 mois adossé à un panier diversifié d titres obligataires d entreprises de premier rang.',
            'description' => 'Ce produit offre un rendement annuel fixe cible de 9.50% avec versement trimestriel des intérêts. Protection partielle du capital garantie par des sûretés de rang 1.',
            'is_active' => true,
        ]);

        $product2 = FinancialProduct::create([
            'name' => 'Fonds Obligations Privées PME',
            'slug' => 'fonds-obligations-privees-pme',
            'type' => 'obligations_privees',
            'target_return_rate' => 11.20,
            'min_investment_amount' => 10000000.00,
            'duration_months' => 24,
            'risk_level' => 'high',
            'summary' => 'Financement direct en dette privée de champions régionaux de l agro-industrie et du commerce.',
            'description' => 'Permet d investir dans la croissance des entreprises leaders de la sous-région avec un coupon attractif payé semestriellement.',
            'is_active' => true,
        ]);

        // 4. Levées de Fonds
        $fund1 = Fundraising::create([
            'title' => 'Sygma Tech Africa - Extension Logistique 3PL',
            'slug' => 'sygma-tech-africa-extension',
            'company_name' => 'Sygma Tech Africa S.A.',
            'sector' => 'Technologie & Logistique',
            'target_amount' => 500000000.00,
            'raised_amount' => 320000000.00,
            'min_ticket' => 5000000.00,
            'start_date' => now()->subMonths(1),
            'end_date' => now()->addMonths(2),
            'status' => 'active',
            'pitch_deck_summary' => 'Acteur majeur de la numérisation des flux de marchandises en Afrique Centrale cherchant des fonds pour tripler sa flotte et ses entrepôts.',
        ]);

        $fund2 = Fundraising::create([
            'title' => 'AgriFood Processing - Centrale Solaire & Transformation',
            'slug' => 'agrifood-processing-solaire',
            'company_name' => 'AgriFood Processing Congo',
            'sector' => 'Agro-industrie & Énergie',
            'target_amount' => 800000000.00,
            'raised_amount' => 640000000.00,
            'min_ticket' => 10000000.00,
            'start_date' => now()->subMonths(2),
            'end_date' => now()->addMonth(),
            'status' => 'active',
            'pitch_deck_summary' => 'Unité de transformation locale d huile de palme et cacao autonome en énergie solaire.',
        ]);

        // 5. Investissements du Client Démo
        $inv = Investment::create([
            'user_id' => $client->id,
            'financial_product_id' => $product1->id,
            'investment_code' => 'INV-2026-0012',
            'amount' => 15000000.00,
            'status' => 'active',
            'subscribed_at' => now()->subMonths(3),
            'maturity_date' => now()->addMonths(9),
        ]);

        InvestmentTracking::create([
            'investment_id' => $inv->id,
            'valuation_date' => now()->subMonths(3),
            'current_value' => 15000000.00,
            'yield_to_date' => 0.00,
            'report_notes' => 'Souscription initiale validée et encaissée.',
        ]);

        InvestmentTracking::create([
            'investment_id' => $inv->id,
            'valuation_date' => now(),
            'current_value' => 15356250.00,
            'yield_to_date' => 2.375,
            'report_notes' => 'Coupons du premier trimestre versés avec succès.',
        ]);

        // 6. Taux de Change (Devises)
        ExchangeRate::create(['currency_pair' => 'EUR / XAF', 'rate' => 655.9570, 'change_24h' => 0.00, 'effective_date' => now()]);
        ExchangeRate::create(['currency_pair' => 'USD / XAF', 'rate' => 608.4500, 'change_24h' => 0.35, 'effective_date' => now()]);
        ExchangeRate::create(['currency_pair' => 'GBP / XAF', 'rate' => 775.1200, 'change_24h' => -0.18, 'effective_date' => now()]);
        ExchangeRate::create(['currency_pair' => 'CAD / XAF', 'rate' => 448.2500, 'change_24h' => 0.10, 'effective_date' => now()]);

        // 7. Taux d'Intérêt
        InterestRate::create(['rate_type' => 'Taux Directeur BEAC', 'rate_value' => 5.00, 'change_direction' => 'stable', 'effective_date' => now()->subDays(15)]);
        InterestRate::create(['rate_type' => 'Taux Interbancaire TMM', 'rate_value' => 4.65, 'change_direction' => 'up', 'effective_date' => now()->subDays(2)]);
        InterestRate::create(['rate_type' => 'Obligations d État (5 ans)', 'rate_value' => 6.25, 'change_direction' => 'stable', 'effective_date' => now()->subMonth()]);

        // 8. Indicateurs Macroéconomiques
        MacroIndicator::create(['indicator_name' => 'Inflation Régionale', 'value' => '2.8%', 'unit' => '%', 'period' => 'T2 2026']);
        MacroIndicator::create(['indicator_name' => 'Croissance PIB', 'value' => '+3.6%', 'unit' => '%', 'period' => '2026 Est.']);
        MacroIndicator::create(['indicator_name' => 'Réserves de Change', 'value' => '4.2 Mois', 'unit' => 'Mois d importations', 'period' => 'Juin 2026']);

        // 9. Actualités Financières & Rapports
        MarketNews::create([
            'title' => 'OMYA CAPITAL structure une levée de 500M XAF pour le secteur logistique',
            'slug' => 'omya-capital-structure-levee-500m-xaf',
            'summary' => 'La Société Intermédiaire Financière OMYA CAPITAL annonce le lancement d une opération de capital-investissement majeure.',
            'content' => 'Dans le cadre de son mandat de conseil et de placement financier, OMYA CAPITAL accompagne la société Sygma Tech Africa...',
            'category' => 'levee_de_fonds',
            'published_at' => now()->subDays(3),
            'is_featured' => true,
        ]);

        MarketNews::create([
            'title' => 'Perspectives Macroéconomiques & Marché des Dettes Privées en Afrique Centrale',
            'slug' => 'perspectives-macroeconomiques-dettes-privees-2026',
            'summary' => 'Analyse stratégique sur la remontée des taux d intérêt et les opportunités pour les placements structurés.',
            'content' => 'L environnement macroéconomique actuel offre de réelles opportunités pour le rendement des obligations privées...',
            'category' => 'macroeconomie',
            'published_at' => now()->subWeek(),
            'is_featured' => false,
        ]);

        Report::create([
            'title' => 'Étude Économique OMYA : Tendances des Investissements Privés 2026',
            'slug' => 'etude-economique-omya-tendances-investissements-2026',
            'category' => 'etude_economique',
            'summary' => 'Un panorama complet de l accès aux financements pour les PME régionales et de la rentabilité des fonds de placement.',
            'publication_date' => now()->subMonths(1),
            'is_restricted' => false,
        ]);

        // 10. Partenaires Institutionnels
        Partner::create(['name' => 'Banque Internationale pour le Commerce et l Industrie', 'category' => 'banque']);
        Partner::create(['name' => 'Fonds Africain de Garantie (AGF)', 'category' => 'institution']);
        Partner::create(['name' => 'Société Financière Internationale (IFC)', 'category' => 'institution']);
    }
}
