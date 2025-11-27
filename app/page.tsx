import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>recruiter.berlin – Premium-Domain für Recruiting, Headhunting &amp; Personalberatung in Berlin</title>
        <meta
          name="description"
          content="Sichere dir recruiter.berlin – die Premium-Domain für Recruiter, Headhunter & Personalberater in Berlin. Ideal für Recruiting-Agenturen, HR-Startups & Personalberatungen. Fixpreis 7.021 € inkl. 19 % MwSt."
        />
        <link rel="canonical" href="https://recruiter.berlin/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="recruiter.berlin – Premium-Domain für Recruiting, Headhunting & Personalberatung in Berlin"
        />
        <meta
          property="og:description"
          content="Sichere dir recruiter.berlin – die Premium-Domain für Recruiter, Headhunter & Personalberater in Berlin. Ideal für Recruiting-Agenturen, HR-Startups & Personalberatungen. Fixpreis 7.021 € inkl. 19 % MwSt."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://recruiter.berlin/" />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1560930950-5cc20e80e392?q=80&w=2000"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="recruiter.berlin – Premium-Domain für Recruiting in Berlin"
        />
        <meta
          name="twitter:description"
          content="Premium-Domain für Recruiter, Headhunter & Personalberatung in Berlin. Fixpreis 7.021 € inkl. 19 % MwSt."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1560930950-5cc20e80e392?q=80&w=2000"
        />

        {/* Product / Offer JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "recruiter.berlin",
              "description": "Premium-Domain für Recruiter, Headhunter & Personalberater in Berlin – ideal für Recruiting-Agenturen, HR-Startups und Personalberatungen.",
              "brand": {
                "@type": "Organization",
                "name": "D.I.E. STRATEGIE GmbH"
              },
              "url": "https://recruiter.berlin/",
              "offers": {
                "@type": "Offer",
                "priceCurrency": "EUR",
                "price": "7021",
                "availability": "https://schema.org/InStock",
                "url": "mailto:domain@recruiter.berlin?subject=Anfrage%20recruiter.berlin"
              }
            }
          `,
          }}
        />

        {/* FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Für wen ist die Domain recruiter.berlin geeignet?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "recruiter.berlin richtet sich an Unternehmen, Personalberater, Headhunter, HR-Startups, Inhouse-Recruiting-Teams und Betreiber von Portalen für Recruiting- und HR-Jobs in Berlin."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ist der Preis verhandelbar?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Der Kaufpreis von 7.021 € inkl. 19 % MwSt. ist als Fixpreis kalkuliert. Bei Interesse an mehreren Domains wie recruiter.hamburg oder recruiter.koeln können individuelle Paketpreise vereinbart werden."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wie läuft der technische Transfer der Domain ab?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nach Zahlungseingang erhalten Sie den Auth-Code und alle technischen Informationen. Die Domain wird anschließend auf Ihren gewünschten Provider übertragen und Sie werden als neuer Inhaber eingetragen."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kann der Kauf über einen Treuhandservice (Escrow) abgewickelt werden?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja. Auf Wunsch kann die Zahlungsabwicklung über einen etablierten Treuhandservice (Escrow) erfolgen. Die Gebühren werden transparent kommuniziert."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Erhalte ich eine Rechnung mit ausgewiesener Umsatzsteuer?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Ja. Sie erhalten eine ordnungsgemäße Rechnung der D.I.E. STRATEGIE GmbH mit ausgewiesener Umsatzsteuer. Der Verkauf erfolgt ausschließlich an Unternehmer (B2B)."
                  }
                }
              ]
            }
          `,
          }}
        />
      </Head>

      <header className="sticky top-0 bg-white border-b border-gray-200 px-5 py-5 z-[1000] shadow-sm">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">recruiter.berlin</div>
          <nav className="flex gap-[30px]">
            <a
              href="#vorteile"
              className="text-gray-800 text-[15px] no-underline hover:text-[#e60000] transition-colors"
            >
              Vorteile
            </a>
            <a
              href="#wert"
              className="text-gray-800 text-[15px] no-underline hover:text-[#e60000] transition-colors"
            >
              Wert der Domain
            </a>
            <a
              href="#seo"
              className="text-gray-800 text-[15px] no-underline hover:text-[#e60000] transition-colors"
            >
              SEO & Suchvolumen
            </a>
            <a
              href="#preis"
              className="text-gray-800 text-[15px] no-underline hover:text-[#e60000] transition-colors"
            >
              Preis & Kauf
            </a>
            <a
              href="#faq"
              className="text-gray-800 text-[15px] no-underline hover:text-[#e60000] transition-colors"
            >
              FAQ
            </a>
            <a
              href="#kontakt"
              className="text-gray-800 text-[15px] no-underline hover:text-[#e60000] transition-colors"
            >
              Kontakt
            </a>
          </nav>
        </div>
      </header>

      <div
        className="min-h-[600px] flex items-center justify-center text-center text-white relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560930950-5cc20e80e392?q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-[800px] px-5 py-10">
          <h1 className="text-6xl font-bold mb-5 tracking-tight">recruiter.berlin</h1>
          <h2 className="text-[28px] font-normal mb-5">
            Die Premium-Domain für Recruiter, Headhunter, Recruiting Jobs &amp; HR Jobs in Berlin.
          </h2>
          <p className="text-lg mb-10 leading-[1.8]">
            <strong>recruiter.berlin</strong> ist die klare Adresse für professionelles Recruiting in
            der Hauptstadt: für Personalberatung, Headhunter, Recruiting-Agenturen, HR-Startups,
            Inhouse-Recruiting-Teams sowie Portale für <strong>Recruiting Jobs in Berlin</strong> und{' '}
            <strong>HR Jobs in Berlin</strong>. Einmalig, merkfähig – und verfügbar zum Fixpreis von
            7.021 € inkl. 19 % MwSt.
          </p>
          <a
            href="#preis"
            className="inline-block bg-[#e60000] text-white px-10 py-4 no-underline rounded font-semibold text-lg hover:bg-[#cc0000] transition-colors"
          >
            Domain jetzt zum Fixpreis sichern
          </a>
        </div>
      </div>

      <section id="vorteile" className="py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl mb-[30px] text-gray-800">Warum recruiter.berlin?</h2>
          <p className="text-lg mb-[30px] text-gray-600 leading-[1.8]">
            Die Domain <strong>recruiter.berlin</strong> kombiniert einen klaren Berufsbegriff mit
            einem starken Standort: Berlin. Sie trifft exakt Suchanfragen wie{' '}
            <strong>„Recruiter Berlin“</strong>, <strong>„Headhunter Berlin“</strong>,{' '}
            <strong>„Personalberatung Berlin“</strong>, <strong>„Recruiting Jobs Berlin“</strong> und{' '}
            <strong>„HR Jobs Berlin“</strong> – und macht sofort deutlich, wofür Ihre Seite steht:
            Recruiting und HR in Berlin, ohne Umwege.
          </p>
          <ul className="list-none mt-[30px]">
            <li className="text-lg mb-5 pl-10 relative text-gray-600 before:content-['✓'] before:absolute before:left-0 before:text-[#e60000] before:text-2xl before:font-bold">
              Einprägsamer Markenauftritt im Berliner Recruiting-Markt
            </li>
            <li className="text-lg mb-5 pl-10 relative text-gray-600 before:content-['✓'] before:absolute before:left-0 before:text-[#e60000] before:text-2xl before:font-bold">
              Sofortige lokale Verortung: Berlin im Namen, Recruiter im Fokus
            </li>
            <li className="text-lg mb-5 pl-10 relative text-gray-600 before:content-['✓'] before:absolute before:left-0 before:text-[#e60000] before:text-2xl before:font-bold">
              Ideal für Direct Search, Performance Recruiting & Employer Branding
            </li>
            <li className="text-lg mb-5 pl-10 relative text-gray-600 before:content-['✓'] before:absolute before:left-0 before:text-[#e60000] before:text-2xl before:font-bold">
              Starke Basis für eine spezialisierte Recruiting- oder HR-Marke mit Berlin-Fokus
            </li>
            <li className="text-lg mb-5 pl-10 relative text-gray-600 before:content-['✓'] before:absolute before:left-0 before:text-[#e60000] before:text-2xl before:font-bold">
              Suchmaschinenfreundlicher Name mit klaren Keywords für „Recruiter Berlin", „Headhunter
              Berlin" und „Personalberatung Berlin"
            </li>
          </ul>
        </div>
      </section>

      <section id="wert" className="py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl mb-[30px] text-gray-800">Was macht recruiter.berlin wertvoll?</h2>
          <div className="grid grid-cols-2 gap-[30px] mt-10">
            <div className="bg-gray-100 p-10 rounded-lg shadow-sm">
              <h3 className="text-[22px] mb-[15px] text-gray-800">Einmalig & nicht reproduzierbar</h3>
              <p className="text-base mb-0 leading-[1.7] text-gray-600">
                <strong>recruiter.berlin</strong> existiert nur ein einziges Mal. Der Käufer sichert
                sich dauerhaft einen der vermutlich stärksten, direkt verständlichen Recruiting-Namen für Berlin – nach
                dem Verkauf ist diese Domain im Markt faktisch „blockiert".
              </p>
            </div>
            <div className="bg-gray-100 p-10 rounded-lg shadow-sm">
              <h3 className="text-[22px] mb-[15px] text-gray-800">Klarheit & Relevanz</h3>
              <p className="text-base mb-0 leading-[1.7] text-gray-600">
                Die Kombination aus „Recruiter" und „Berlin" ist sofort verständlich – für Kandidaten,
                Kunden und Suchmaschinen. Die Domain funktioniert sowohl im persönlichen Gespräch
                („Schauen Sie einfach auf recruiter.berlin") als auch in Anzeigen, Social Media und
                E-Mail-Signaturen.
              </p>
            </div>
            <div className="bg-gray-100 p-10 rounded-lg shadow-sm">
              <h3 className="text-[22px] mb-[15px] text-gray-800">Starke Positionierung im HR-Markt</h3>
              <p className="text-base mb-0 leading-[1.7] text-gray-600">
                Perfekt für Personalberater, Headhunter, Inhouse-Recruiting-Teams und spezialisierte
                HR-Dienstleister, die sich klar als{' '}
                <strong>Recruiting-Expert:innen in Berlin</strong> positionieren wollen – unabhängig
                davon, ob der Schwerpunkt auf Fachkräften, Spezialisten oder Führungskräften liegt.
              </p>
            </div>
            <div className="bg-gray-100 p-10 rounded-lg shadow-sm">
              <h3 className="text-[22px] mb-[15px] text-gray-800">Vielseitige Nutzung</h3>
              <p className="text-base mb-0 leading-[1.7] text-gray-600">
                Nutzbar als Hauptmarke, Kampagnendomain, Microsite für Performance Recruiting oder
                Employer Branding, Karriereseite oder Portal für Recruiting-Jobs in Berlin.
                recruiter.berlin kann auch als zentrale Landingpage für Google Ads & Social-Media-Kampagnen
                dienen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="seo" className="py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl mb-[30px] text-gray-800">SEO-Wert und Suchvolumen</h2>
          <p className="text-lg mb-[30px] text-gray-600 leading-[1.8]">
            Die Keyword-Kombination <strong>„Recruiter Berlin"</strong> wird monatlich regelmäßig
            gesucht und zeigt eine moderate Wettbewerbsintensität – ideal für organischen Aufbau, lokale
            Rankings und bezahlte Kampagnen. Ergänzend sind Suchbegriffe wie{' '}
            <strong>„Headhunter Berlin"</strong> oder <strong>„Personalberatung Berlin"</strong> im
            selben Umfeld relevant, die sich in Content und Landingpages rund um recruiter.berlin optimal
            abbilden lassen.
          </p>

          <table className="w-full my-10 border-collapse bg-gray-100 rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="p-4 text-left border-b border-gray-300 bg-gray-200 font-semibold text-gray-800">
                  Keyword / Stadt
                </th>
                <th className="p-4 text-left border-b border-gray-300 bg-gray-200 font-semibold text-gray-800">
                  Suchvolumen/Monat
                </th>
                <th className="p-4 text-left border-b border-gray-300 bg-gray-200 font-semibold text-gray-800">
                  CPC (ca. EUR)
                </th>
                <th className="p-4 text-left border-b border-gray-300 bg-gray-200 font-semibold text-gray-800">
                  Keyword Difficulty
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4 text-left border-b border-gray-300 text-gray-600">Recruiter Berlin</td>
                <td className="p-4 text-left border-b border-gray-300 text-gray-600">ca. 320</td>
                <td className="p-4 text-left border-b border-gray-300 text-gray-600">ca. 3,80 €</td>
                <td className="p-4 text-left border-b border-gray-300 text-gray-600">21 (mittel)</td>
              </tr>
            </tbody>
          </table>

          <div className="bg-gray-100 p-[30px] rounded-lg mt-5">
            <p className="text-lg mb-[15px] text-gray-600 leading-[1.8]">
              <strong>Beispielrechnung:</strong> 100 Klicks pro Monat × 3,80 € ≈ ca. 4.500 € Werbewert
              pro Jahr.
            </p>
            <p className="text-lg mb-[15px] text-gray-600 leading-[1.8]">
              Eine starke, keywordnahe Domain wie <strong>recruiter.berlin</strong> kann die Klickrate
              verbessern, die organische Sichtbarkeit erhöhen und langfristig dazu beitragen, die
              Abhängigkeit von bezahlter Werbung zu reduzieren – insbesondere bei Suchanfragen rund um
              „Recruiter Berlin", „Headhunter Berlin" und „Personalberatung Berlin".
            </p>
            <p className="text-lg mb-0 text-gray-600 leading-[1.8]">
              In Kombination mit relevanten Inhalten, lokalen Signalen (Berlin) und einer klaren
              Positionierung entsteht so eine fundierte SEO-Basis für den Recruiting-Markt in der
              Hauptstadt.
            </p>
          </div>
        </div>
      </section>

      <section id="preis" className="py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl mb-[30px] text-gray-800">Preis & Kaufabwicklung von recruiter.berlin</h2>
          <div className="grid grid-cols-2 gap-[30px] mt-10">
            <div className="bg-gray-100 p-10 rounded-lg shadow-sm">
              <h3 className="text-2xl mb-5 text-gray-800">Fixpreis für recruiter.berlin</h3>
              <p className="text-base mb-[15px] text-gray-600">
                Keine Verhandlungen, keine Bieterverfahren – ein klarer, transparenter Fixpreis.
              </p>
              <div className="text-5xl font-bold text-[#e60000] my-[30px]">
                7.021 € inkl. 19 % MwSt.
              </div>
              <p className="text-base mb-[15px] text-gray-600">
                Einmaliger Kaufpreis von 7.021 € inkl. 19 % MwSt. sowie ggf. Gebühren des
                Treuhanddienstleisters/Marktplatzes. Mit dem Kauf sichern Sie sich die Domain dauerhaft
                für Ihr Recruiting in Berlin.
              </p>
              <a
                href="mailto:domain@recruiter.berlin
?subject=Anfrage%20recruiter.berlin"
                className="inline-block bg-[#e60000] text-white px-10 py-4 no-underline rounded font-semibold text-lg hover:bg-[#cc0000] transition-colors"
              >
                Domain jetzt verbindlich anfragen
              </a>
              <p className="text-sm text-gray-500 mt-5">
                Auf Wunsch kann die Zahlungsabwicklung über einen etablierten Treuhandservice (Escrow)
                erfolgen.
              </p>
            </div>
            <div className="bg-gray-100 p-10 rounded-lg shadow-sm">
              <h3 className="text-2xl mb-5 text-gray-800">Ablauf</h3>
              <ul className="list-none mt-5">
                <li className="text-base mb-[15px] pl-10 relative text-gray-600 before:content-['1'] before:absolute before:left-0 before:w-7 before:h-7 before:bg-[#e60000] before:text-white before:rounded-full before:flex before:items-center before:justify-center before:font-bold before:text-sm">
                  Anfrage an domain@recruiter.berlin
 mit Betreff „recruiter.berlin"
                </li>
                <li className="text-base mb-[15px] pl-10 relative text-gray-600 before:content-['2'] before:absolute before:left-0 before:w-7 before:h-7 before:bg-[#e60000] before:text-white before:rounded-full before:flex before:items-center before:justify-center before:font-bold before:text-sm">
                  Schriftliches Angebot und Bestätigung der Konditionen
                </li>
                <li className="text-base mb-[15px] pl-10 relative text-gray-600 before:content-['3'] before:absolute before:left-0 before:w-7 before:h-7 before:bg-[#e60000] before:text-white before:rounded-full before:flex before:items-center before:justify-center before:font-bold before:text-sm">
                  Zahlung direkt oder über Treuhandservice (Escrow)
                </li>
                <li className="text-base mb-[15px] pl-10 relative text-gray-600 before:content-['4'] before:absolute before:left-0 before:w-7 before:h-7 before:bg-[#e60000] before:text-white before:rounded-full before:flex before:items-center before:justify-center before:font-bold before:text-sm">
                  Technische Übertragung der Domain auf Ihren Wunsch-Registrar
                </li>
                <li className="text-base mb-[15px] pl-10 relative text-gray-600 before:content-['5'] before:absolute before:left-0 before:w-7 before:h-7 before:bg-[#e60000] before:text-white before:rounded-full before:flex before:items-center before:justify-center before:font-bold before:text-sm">
                  Eintrag als neuer Inhaber + Abschlussbestätigung
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-5">
                Verkauf nur an Unternehmer (§ 14 BGB). Kein Verkauf an Verbraucher. Sie erhalten eine
                ordnungsgemäße Rechnung der D.I.E. STRATEGIE GmbH mit ausgewiesener Umsatzsteuer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="weitere-domains" className="py-20 px-5 text-center">
        <h2 className="text-4xl font-bold mb-5 text-gray-800">Weitere City-Domains für Recruiter</h2>

        <p className="max-w-[700px] mx-auto mb-10 text-lg leading-relaxed text-gray-600">
          Zusätzlich zu <strong>recruiter.berlin</strong> können auch{' '}
          <strong>recruiter.hamburg</strong> und <strong>recruiter.koeln</strong> verfügbar sein
          (solange noch nicht verkauft). Sichern Sie sich mehrere Standorte für Ihre
          Recruiting-Strategie in deutschen Metropolregionen.
        </p>

        <div className="flex justify-center gap-[30px] flex-wrap mb-[30px]">
          <a
            href="https://recruiter.hamburg"
            className="px-10 py-[18px] bg-white rounded-[40px] text-lg font-semibold text-black border-2 border-gray-200 no-underline hover:border-gray-400 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            recruiter.hamburg
          </a>

          <a
            href="https://recruiter.koeln"
            className="px-10 py-[18px] bg-white rounded-[40px] text-lg font-semibold text-black border-2 border-gray-200 no-underline hover:border-gray-400 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            recruiter.koeln
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-[10px]">
          Die Verfügbarkeit der genannten Domains kann sich jederzeit ändern. Stand: 2025.
        </p>
      </section>

      <section id="faq" className="py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl mb-[30px] text-gray-800">FAQ</h2>
          <div className="mb-10">
            <h3 className="text-xl mb-[15px] text-gray-800">Für wen ist die Domain geeignet?</h3>
            <p className="text-base text-gray-600 mb-0">
              <strong>recruiter.berlin</strong> richtet sich ausschließlich an Unternehmer und
              Gewerbetreibende (B2B) – insbesondere Personalberatungen, Recruiting-Agenturen,
              HR-Startups, Headhunter und spezialisierte Dienstleister im Berliner Arbeitsmarkt.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-xl mb-[15px] text-gray-800">Ist der Preis verhandelbar?</h3>
            <p className="text-base text-gray-600 mb-0">
              Grundsätzlich ist der Preis von 7.021 € inkl. 19 % MwSt. als Fixpreis kalkuliert. Bei Interesse
              an mehreren Domains (z.&nbsp;B. recruiter.hamburg, recruiter.koeln) können individuelle
              Paketpreise abgestimmt werden.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-xl mb-[15px] text-gray-800">Wie läuft der technische Transfer ab?</h3>
            <p className="text-base text-gray-600 mb-0">
              Nach Zahlungseingang wird die Domain über das Registrar-System übertragen. Sie erhalten die
              erforderlichen Auth-Codes und werden als neuer Inhaber eingetragen. Der Prozess dauert in
              der Regel 1–3 Werktage.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-xl mb-[15px] text-gray-800">Kann der Kauf über Escrow erfolgen?</h3>
            <p className="text-base text-gray-600 mb-0">
              Ja. Auf Wunsch kann die Transaktion über einen etablierten Treuhandservice (Escrow)
              abgewickelt werden. Die Kosten hierfür werden nach Vereinbarung zwischen Käufer und
              Verkäufer aufgeteilt oder vom Käufer getragen.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-xl mb-[15px] text-gray-800">Gibt es eine Rechnung mit Umsatzsteuer?</h3>
            <p className="text-base text-gray-600 mb-0">
              Ja. Sie erhalten eine ordnungsgemäße Rechnung der D.I.E. STRATEGIE GmbH mit ausgewiesener
              Umsatzsteuer (19 %). Der Verkauf erfolgt ausschließlich an Unternehmer (B2B), nicht an
              Verbraucher.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-xl mb-[15px] text-gray-800">Werden Markenrechte übertragen?</h3>
            <p className="text-base text-gray-600 mb-0">
              Nein. Der Verkauf umfasst ausschließlich die Domain <strong>recruiter.berlin</strong>. Es
              werden keine eingetragenen Markenrechte oder sonstigen gewerblichen Schutzrechte übertragen.
            </p>
          </div>
        </div>
      </section>

      <section id="seo-textblock" className="py-[60px] px-5 max-w-[900px] mx-auto text-left">
        <h2 className="text-[30px] font-bold mb-5 text-gray-800">
          Berlin – der Recruiting-Hotspot für Recruiting Jobs &amp; HR Jobs
        </h2>
        <p className="text-lg leading-[1.7] text-gray-700">
          Berlin gehört zu den dynamischsten Arbeits- und Recruiting-Märkten Deutschlands. Startups,
          Tech-Unternehmen, Mittelstand und internationale Konzerne konkurrieren täglich um Fach- und
          Führungskräfte – entsprechend hoch ist der Bedarf an{' '}
          <strong>Recruiting Jobs in Berlin</strong> und <strong>HR Jobs in Berlin</strong>. Wer hier
          als Personalberatung, Headhunter oder Betreiber eines Job- oder Karriereportals sichtbar sein
          will, braucht einen klaren digitalen Auftritt. Eine Domain wie{' '}
          <strong>recruiter.berlin</strong> bündelt Standort („Berlin“), Funktion („Recruiter“) und
          Suchintention (Recruiting &amp; HR) in einem Namen. Das erleichtert Branding,
          Kampagnensteuerung und die Auffindbarkeit bei Google – und kann die Kosten pro qualifiziertem
          Kontakt langfristig deutlich senken.
        </p>
      </section>

      <footer id="kontakt" className="bg-gray-200 py-[60px] px-5 text-sm text-gray-600">
        <div className="max-w-[1200px] mx-auto">
          <section id="impressum" className="pb-10">
            <h3 className="text-lg mb-[15px] text-gray-800">Impressum</h3>
            <p className="text-sm mb-[10px] leading-relaxed">
              <strong>D.I.E. STRATEGIE GmbH</strong>
              <br />
              Ensingerstr. 33/2
              <br />
              89073 Ulm / Deutschland
              <br />
              Tel.: +49 (0)731 14617891
              <br />
              E-Mail:{' '}
              <a href="mailto:domain@recruiter.berlin
" className="text-gray-600 underline">
                domain@recruiter.berlin
              </a>
            </p>
            <p className="text-sm mb-[10px] leading-relaxed">
              Geschäftsführer: Damir Koren
              <br />
              HRB 748810 – Amtsgericht Ulm
              <br />
              USt-ID: DE310597771
              <br />
              Verantwortlich nach § 18 Abs. 2 MStV: Damir Koren
            </p>
            <p className="text-sm mb-[10px] leading-relaxed">
              Diese Website dient ausschließlich dem Verkauf der Domain <strong>recruiter.berlin</strong>.
              <br />
              Verkauf nur an Unternehmer (B2B), kein Verkauf an Verbraucher.
            </p>
          </section>

          <section id="datenschutz" className="pb-10">
            <h3 className="text-lg mb-[15px] text-gray-800">Datenschutz</h3>
            <p className="text-sm mb-[10px] leading-relaxed">
              Diese Website verwendet keine Cookies, keine Tracking-Tools und keine Formulare. Es werden
              lediglich technisch notwendige Server-Logfiles erfasst (z.&nbsp;B. gekürzte IP-Adresse,
              Datum und Uhrzeit des Zugriffs, Browsertyp). Diese Daten werden zur Sicherstellung des
              technischen Betriebs und der IT-Sicherheit verwendet und anschließend automatisch gelöscht.
            </p>
            <p className="text-sm mb-[10px] leading-relaxed">
              <strong>Verantwortlicher:</strong> D.I.E. STRATEGIE GmbH, Ensingerstr. 33/2, 89073 Ulm,
              E-Mail:{' '}
              <a href="mailto:domain@recruiter.berlin
" className="text-gray-600 underline">
                domain@recruiter.berlin
              </a>
              .
            </p>
            <p className="text-sm mb-[10px] leading-relaxed">
              <strong>Zweck der Seite:</strong> Präsentation und Verkauf der Domain{' '}
              <strong>recruiter.berlin</strong>.
            </p>
          </section>

          <div className="text-center mt-[30px] text-sm text-gray-500">
            <a href="#top" className="mx-3 text-gray-500 no-underline">
              Nach oben
            </a>
            <a href="mailto:domain@recruiter.berlin
" className="mx-3 text-gray-500 no-underline">
              Kontakt per E-Mail
            </a>
            <a href="#impressum" className="mx-3 text-gray-500 no-underline">
              Impressum
            </a>
            <a href="#datenschutz" className="mx-3 text-gray-500 no-underline">
              Datenschutz
            </a>
          </div>

          <p className="text-center mt-[10px] text-[13px] text-gray-400">
            &copy; 2025 D.I.E. STRATEGIE GmbH – recruiter.berlin
          </p>
          <p className="text-center mt-[5px] text-[12px] text-gray-400">
            Bildnachweis: © Stefan Widua / Unsplash
          </p>
        </div>
      </footer>
    </>
  )
}
