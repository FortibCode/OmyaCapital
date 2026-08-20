<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Documents KYC / AML
        Schema::create('kyc_documents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('document_type'); // identity_card, passport, proof_of_address, tax_doc, company_statutes
            $table->string('file_path');
            $table->string('original_filename');
            $table->string('status')->default('pending'); // pending, approved, rejected
            $table->text('rejection_reason')->nullable();
            $table->timestamp('verified_at')->nullable();
            $table->timestamps();
        });

        // 2. Services SIF (Placement, Conseil, Financement, Levée de fonds, Accompagnement)
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category'); // placement, conseil, financement, levee_de_fonds, accompagnement
            $table->text('short_description');
            $table->longText('full_description');
            $table->string('icon_name')->default('Briefcase');
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 3. Produits Financiers
        Schema::create('financial_products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('type'); // placement_structure, obligations_privees, fonds_investissement, financement_pme
            $table->decimal('target_return_rate', 5, 2); // Ex: 8.50%
            $table->decimal('min_investment_amount', 15, 2);
            $table->integer('duration_months');
            $table->string('risk_level')->default('moderate'); // low, moderate, high
            $table->text('summary');
            $table->longText('description');
            $table->string('prospectus_pdf_path')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 4. Levées de Fonds (Private Equity / Corporate Fundraising)
        Schema::create('fundraisings', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('company_name');
            $table->string('sector');
            $table->decimal('target_amount', 15, 2);
            $table->decimal('raised_amount', 15, 2)->default(0);
            $table->decimal('min_ticket', 15, 2);
            $table->date('start_date');
            $table->date('end_date');
            $table->string('status')->default('active'); // upcoming, active, funded, closed
            $table->text('pitch_deck_summary');
            $table->string('pitch_deck_pdf_path')->nullable();
            $table->timestamps();
        });

        // 5. Investissements Clients (Espace Client)
        Schema::create('investments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('financial_product_id')->nullable()->constrained()->onDelete('set null');
            $table->foreignId('fundraising_id')->nullable()->constrained()->onDelete('set null');
            $table->string('investment_code')->unique();
            $table->decimal('amount', 15, 2);
            $table->string('status')->default('active'); // pending_payment, active, completed, cancelled
            $table->date('subscribed_at');
            $table->date('maturity_date')->nullable();
            $table->string('contract_pdf_path')->nullable();
            $table->timestamps();
        });

        // 6. Historique de Suivi des Investissements
        Schema::create('investment_trackings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('investment_id')->constrained()->onDelete('cascade');
            $table->date('valuation_date');
            $table->decimal('current_value', 15, 2);
            $table->decimal('yield_to_date', 5, 2);
            $table->text('report_notes')->nullable();
            $table->timestamps();
        });

        // 7. Taux de Change (Devises)
        Schema::create('exchange_rates', function (Blueprint $table) {
            $table->id();
            $table->string('currency_pair'); // EUR/XAF, USD/XAF, GBP/XAF, CAD/XAF
            $table->decimal('rate', 12, 4);
            $table->decimal('change_24h', 5, 2);
            $table->timestamp('effective_date');
            $table->timestamps();
        });

        // 8. Taux d'Intérêt & Taux Directeurs
        Schema::create('interest_rates', function (Blueprint $table) {
            $table->id();
            $table->string('rate_type'); // Taux Directeur BEAC/BCEAO, Taux Interbancaire, Obligations d'État 5 ans
            $table->decimal('rate_value', 5, 2);
            $table->string('change_direction')->default('stable'); // up, down, stable
            $table->date('effective_date');
            $table->timestamps();
        });

        // 9. Indicateurs Macroéconomiques
        Schema::create('macro_indicators', function (Blueprint $table) {
            $table->id();
            $table->string('indicator_name');
            $table->string('value');
            $table->string('unit');
            $table->string('period');
            $table->timestamps();
        });

        // 10. Rendez-vous Conseillers Financiers
        Schema::create('appointments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
            $table->string('client_name');
            $table->string('client_email');
            $table->string('client_phone');
            $table->foreignId('service_id')->nullable()->constrained()->onDelete('set null');
            $table->dateTime('appointment_date');
            $table->string('meeting_type')->default('online_video'); // online_video, in_office, phone
            $table->string('status')->default('pending'); // pending, confirmed, completed, cancelled
            $table->text('notes')->nullable();
            $table->timestamps();
        });

        // 11. Rapports & Études Économiques
        Schema::create('reports', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('category'); // etude_economique, rapport_financier, analyse_sectorielle
            $table->text('summary');
            $table->date('publication_date');
            $table->string('pdf_path')->nullable();
            $table->boolean('is_restricted')->default(false);
            $table->timestamps();
        });

        // 12. Actualités Financières / Société
        Schema::create('market_news', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('summary');
            $table->longText('content');
            $table->string('image_path')->nullable();
            $table->string('category'); // macroeconomie, levee_de_fonds, conseils_financiers, vie_societe
            $table->timestamp('published_at');
            $table->boolean('is_featured')->default(false);
            $table->timestamps();
        });

        // 13. Offres de Carrière
        Schema::create('careers', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('department');
            $table->string('location');
            $table->string('contract_type'); // CDI, CDD, Stage
            $table->text('description');
            $table->boolean('is_open')->default(true);
            $table->timestamps();
        });

        // 14. Partenaires Institutionnels & Bancaires
        Schema::create('partners', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('category'); // banque, fonds_investissement, institution
            $table->string('logo_path')->nullable();
            $table->string('website_url')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('partners');
        Schema::dropIfExists('careers');
        Schema::dropIfExists('market_news');
        Schema::dropIfExists('reports');
        Schema::dropIfExists('appointments');
        Schema::dropIfExists('macro_indicators');
        Schema::dropIfExists('interest_rates');
        Schema::dropIfExists('exchange_rates');
        Schema::dropIfExists('investment_trackings');
        Schema::dropIfExists('investments');
        Schema::dropIfExists('fundraisings');
        Schema::dropIfExists('financial_products');
        Schema::dropIfExists('services');
        Schema::dropIfExists('kyc_documents');
    }
};
