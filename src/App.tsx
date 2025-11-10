import { Thermometer, Wifi, Headphones, Home, ChevronRight, Phone, Mail, MapPin, X, Check, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'thermostats' | 'wlan' | 'support' | 'impressum' | 'datenschutz';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => navigateToPage('home')} className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">HomeConnect</span>
            </button>
            <div className="hidden md:flex space-x-8">
              {currentPage === 'home' ? (
                <>
                  <a href="#leistungen" className="text-gray-700 hover:text-blue-600 transition-colors">Leistungen</a>
                  <a href="#vorteile" className="text-gray-700 hover:text-blue-600 transition-colors">Vorteile</a>
                  <a href="#kontakt" className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</a>
                </>
              ) : (
                <button onClick={() => navigateToPage('home')} className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Zurück zur Startseite
                </button>
              )}
            </div>
            {currentPage === 'home' && (
              <a href="#kontakt" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Beratung anfragen
              </a>
            )}
          </div>
        </div>
      </nav>

      {currentPage === 'home' && (
        <>
          <section className="bg-gradient-to-br from-blue-50 to-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Intelligente Smart Home Lösungen für Ihr Zuhause
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Wir machen Ihr Zuhause smarter, effizienter und komfortabler. Mit unseren innovativen Lösungen für intelligente Heizungssteuerung, IT-Support und WLAN-Optimierung.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#leistungen" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                      Jetzt starten
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </a>
                    <a href="#kontakt" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors text-center">
                      Mehr erfahren
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-12 transform hover:scale-105 transition-transform duration-300">
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <Home className="h-32 w-32 text-blue-600 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="leistungen" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
                <p className="text-xl text-gray-600">Professionelle Smart Home Lösungen aus einer Hand</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigateToPage('thermostats')}>
                  <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Thermometer className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smarte Thermostate</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Optimieren Sie Ihre Heizkosten und steigern Sie Ihren Komfort mit intelligenten Thermostaten. Steuerbar von überall, energieeffizient und einfach zu bedienen.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      Bis zu 30% Energieeinsparung
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      App-Steuerung & Automatisierung
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                      Professionelle Installation
                    </li>
                  </ul>
                  <button className="text-orange-600 font-semibold flex items-center hover:text-orange-700">
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigateToPage('wlan')}>
                  <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Wifi className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">WLAN-Optimierung</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Schnelles und stabiles WLAN in jedem Raum. Wir analysieren Ihr Netzwerk und sorgen für optimale Abdeckung und Geschwindigkeit in Ihrem gesamten Zuhause.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      Vollständige Netzwerkanalyse
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      Mesh-WLAN Systeme
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      Sicherheitsoptimierung
                    </li>
                  </ul>
                  <button className="text-blue-600 font-semibold flex items-center hover:text-blue-700">
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </button>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => navigateToPage('support')}>
                  <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Headphones className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">IT-Support</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Kompetenter IT-Support für Ihr Smart Home. Wir helfen bei der Einrichtung, Wartung und bei allen technischen Fragen rund um Ihre intelligenten Geräte.
                  </p>
                  <ul className="space-y-2 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      24/7 Support-Hotline
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      Remote & Vor-Ort Service
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      Regelmäßige Wartung
                    </li>
                  </ul>
                  <button className="text-green-600 font-semibold flex items-center hover:text-green-700">
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="vorteile" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Warum HomeConnect?</h2>
                <p className="text-xl text-gray-600">Ihr Partner für intelligente Haustechnik in Deutschland</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    10+
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Jahre Erfahrung</h3>
                  <p className="text-gray-600">Expertise in Smart Home Technologie</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    1000+
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zufriedene Kunden</h3>
                  <p className="text-gray-600">Erfolgreich umgesetzte Projekte</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    24/7
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
                  <p className="text-gray-600">Immer für Sie erreichbar</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    100%
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Qualität</h3>
                  <p className="text-gray-600">Zertifizierte Fachkräfte</p>
                </div>
              </div>
            </div>
          </section>

          <section id="kontakt" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Kontaktieren Sie uns</h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Haben Sie Fragen oder möchten Sie ein unverbindliches Angebot erhalten? Wir freuen uns auf Ihre Nachricht!
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                        <p className="text-gray-600">+49 (0) 30 1234 5678</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 mb-1">E-Mail</h3>
                        <p className="text-gray-600">info@homeconnect.de</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 mb-1">Adresse</h3>
                        <p className="text-gray-600">
                          Bad Hersfeld<br />
                          Hessen<br />
                          Deutschland
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Ihr Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nachricht</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Wie können wir Ihnen helfen?"
                      />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Nachricht senden
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Home className="h-6 w-6 text-blue-400" />
                    <span className="text-xl font-bold">HomeConnect</span>
                  </div>
                  <p className="text-gray-400">
                    Ihr Partner für intelligente Smart Home Lösungen in Deutschland.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold mb-4">Leistungen</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><button onClick={() => navigateToPage('thermostats')} className="hover:text-blue-400 transition-colors">Smarte Thermostate</button></li>
                    <li><button onClick={() => navigateToPage('wlan')} className="hover:text-blue-400 transition-colors">WLAN-Optimierung</button></li>
                    <li><button onClick={() => navigateToPage('support')} className="hover:text-blue-400 transition-colors">IT-Support</button></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">Unternehmen</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Über uns</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Karriere</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Partner</a></li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-4">Rechtliches</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><button onClick={() => navigateToPage('impressum')} className="hover:text-blue-400 transition-colors">Impressum</button></li>
                    <li><button onClick={() => navigateToPage('datenschutz')} className="hover:text-blue-400 transition-colors">Datenschutz</button></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors">AGB</a></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                <p>&copy; 2025 HomeConnect. Alle Rechte vorbehalten.</p>
              </div>
            </div>
          </footer>
        </>
      )}

      {currentPage === 'thermostats' && (
        <div className="min-h-screen bg-white pb-16">
          <section className="bg-gradient-to-br from-orange-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button onClick={() => navigateToPage('home')} className="flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Zurück zur Startseite
              </button>

              <div className="flex items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-xl mr-4">
                  <Thermometer className="h-12 w-12 text-orange-600" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold text-gray-900">Smarte Thermostate</h1>
                  <p className="text-xl text-gray-600 mt-2">Heizen Sie intelligent und sparen Sie Energie</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Warum smarte Thermostate?</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Mit intelligenten Thermostaten optimieren Sie Ihre Heizkosten und erhöhen gleichzeitig Ihren Wohnkomfort. Unsere Lösungen passen sich automatisch an Ihren Tagesablauf an und sorgen für die perfekte Temperatur – genau dann, wenn Sie sie brauchen.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Energieeffizienz</h3>
                    <p className="text-gray-600">Reduzieren Sie Ihre Heizkosten um bis zu 30% durch intelligente Steuerung und Automatisierung.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Komfort</h3>
                    <p className="text-gray-600">Steuern Sie Ihre Heizung von überall per App und genießen Sie immer die perfekte Raumtemperatur.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Umweltschutz</h3>
                    <p className="text-gray-600">Senken Sie Ihren CO₂-Ausstoß durch optimiertes Heizen und leisten Sie einen Beitrag zum Klimaschutz.</p>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Unsere Pakete</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic Paket</h3>
                      <p className="text-gray-600 mb-4">Perfekt für den Einstieg</p>
                      <div className="text-4xl font-bold text-orange-600 mb-2">299€</div>
                      <p className="text-sm text-gray-500">einmalig + Installation</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">2 smarte Thermostate</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Basis App-Steuerung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Zeitpläne & Automatisierung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Professionelle Installation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">1 Jahr Garantie</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Telefon-Support</span>
                      </li>
                    </ul>

                    <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                      Jetzt anfragen
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-500 rounded-2xl p-8 hover:shadow-xl transition-shadow relative">
                    <div className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                      EMPFOHLEN
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium Paket</h3>
                      <p className="text-gray-600 mb-4">Maximale Kontrolle & Effizienz</p>
                      <div className="text-4xl font-bold text-orange-600 mb-2">599€</div>
                      <p className="text-sm text-gray-500">einmalig + Installation</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">5 smarte Thermostate</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Premium App mit erweiterten Funktionen</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">KI-gestützte Heizungsoptimierung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Fenster-Auf-Erkennung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Sprachsteuerung (Alexa, Google)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Professionelle Installation & Einrichtung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">3 Jahre Garantie</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">24/7 Premium-Support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Energieverbrauchs-Analyse & Reporting</span>
                      </li>
                    </ul>

                    <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-semibold">
                      Jetzt anfragen
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Individuelle Lösungen</h3>
                <p className="text-gray-600 mb-4">
                  Benötigen Sie eine maßgeschneiderte Lösung für Ihr Zuhause oder Unternehmen? Wir erstellen Ihnen gerne ein individuelles Angebot, das perfekt auf Ihre Bedürfnisse zugeschnitten ist.
                </p>
                <button onClick={() => navigateToPage('home')} className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Individuelle Beratung anfragen
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'wlan' && (
        <div className="min-h-screen bg-white pb-16">
          <section className="bg-gradient-to-br from-blue-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button onClick={() => navigateToPage('home')} className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Zurück zur Startseite
              </button>

              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-xl mr-4">
                  <Wifi className="h-12 w-12 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold text-gray-900">WLAN-Optimierung</h1>
                  <p className="text-xl text-gray-600 mt-2">Perfekte Verbindung in jedem Raum</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Stabiles WLAN im ganzen Haus</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Erleben Sie nahtlose Internetverbindung ohne Funklöcher. Unsere professionellen WLAN-Lösungen sorgen für optimale Abdeckung und Geschwindigkeit in Ihrem gesamten Zuhause oder Büro.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Wir analysieren Ihre räumlichen Gegebenheiten, identifizieren Störquellen und installieren hochwertige Mesh-Systeme für eine perfekte WLAN-Abdeckung.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 flex items-center justify-center">
                  <Wifi className="h-48 w-48 text-blue-600" />
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Unsere Leistungen</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Netzwerkanalyse</h3>
                    <p className="text-gray-600">Umfassende Analyse Ihrer bestehenden WLAN-Infrastruktur und Identifikation von Schwachstellen.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Mesh-WLAN Installation</h3>
                    <p className="text-gray-600">Installation moderner Mesh-Systeme für lückenlose Abdeckung ohne Geschwindigkeitsverlust.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Geschwindigkeitsoptimierung</h3>
                    <p className="text-gray-600">Optimierung der Kanaleinstellungen und Reduzierung von Interferenzen für maximale Geschwindigkeit.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Sicherheitskonfiguration</h3>
                    <p className="text-gray-600">Einrichtung von WPA3-Verschlüsselung und Gast-Netzwerken für maximale Sicherheit.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Access Point Setup</h3>
                    <p className="text-gray-600">Strategische Platzierung von Access Points für optimale Signalverteilung.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Wartung & Support</h3>
                    <p className="text-gray-600">Regelmäßige Updates und 24/7 Support bei WLAN-Problemen.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kostenlose WLAN-Analyse</h3>
                <p className="text-gray-600 mb-6">
                  Lassen Sie uns Ihr WLAN kostenlos analysieren! Wir erstellen einen detaillierten Bericht über Ihre aktuelle Netzwerkqualität und zeigen Ihnen Optimierungspotenziale auf.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => navigateToPage('home')} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Analyse anfragen
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <button onClick={() => navigateToPage('home')} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Weitere Informationen
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'support' && (
        <div className="min-h-screen bg-white pb-16">
          <section className="bg-gradient-to-br from-green-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button onClick={() => navigateToPage('home')} className="flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Zurück zur Startseite
              </button>

              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-xl mr-4">
                  <Headphones className="h-12 w-12 text-green-600" />
                </div>
                <div>
                  <h1 className="text-5xl font-bold text-gray-900">IT-Support</h1>
                  <p className="text-xl text-gray-600 mt-2">Professionelle Hilfe für Ihr Smart Home</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Ihr verlässlicher IT-Partner</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Unser erfahrenes Support-Team steht Ihnen bei allen technischen Fragen zur Seite. Ob Einrichtung, Fehlerbehebung oder Optimierung – wir sorgen dafür, dass Ihre Smart Home Technologie reibungslos funktioniert.
                  </p>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Mit unserem 24/7 Support sind wir jederzeit für Sie erreichbar und lösen Probleme schnell und professionell.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 flex items-center justify-center">
                  <Headphones className="h-48 w-48 text-green-600" />
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Unsere Support-Leistungen</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">24/7 Hotline</h3>
                    <p className="text-gray-600 mb-4">Rund um die Uhr erreichbar für dringende Anliegen und technische Notfälle.</p>
                    <p className="text-green-600 font-semibold">Telefon: +49 (0) 30 1234 5678</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Remote-Support</h3>
                    <p className="text-gray-600">Fernwartung für schnelle Problembehebung ohne Vor-Ort-Termin.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Vor-Ort Service</h3>
                    <p className="text-gray-600">Persönlicher Service bei Ihnen zu Hause für komplexe Installationen und Reparaturen.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Schulungen</h3>
                    <p className="text-gray-600">Einführungen und Schulungen für die optimale Nutzung Ihrer Smart Home Geräte.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Wartungsverträge</h3>
                    <p className="text-gray-600">Regelmäßige Wartung und Updates für langfristige Systemstabilität.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Systemdiagnose</h3>
                    <p className="text-gray-600">Umfassende Analyse und Optimierung Ihrer Smart Home Infrastruktur.</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="text-center p-6">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    &lt;15
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Min. Reaktionszeit</h3>
                  <p className="text-gray-600">Schnelle Rückmeldung auf Ihre Anfragen</p>
                </div>
                <div className="text-center p-6">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    98%
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Kundenzufriedenheit</h3>
                  <p className="text-gray-600">Exzellente Bewertungen unserer Kunden</p>
                </div>
                <div className="text-center p-6">
                  <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    24/7
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Verfügbarkeit</h3>
                  <p className="text-gray-600">Immer für Sie da, wenn Sie uns brauchen</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Support anfragen</h3>
                <p className="text-gray-600 mb-6">
                  Haben Sie Fragen oder benötigen Sie Unterstützung? Kontaktieren Sie uns jederzeit per Telefon, E-Mail oder über unser Kontaktformular.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => navigateToPage('home')} className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                    Jetzt Kontakt aufnehmen
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <a href="tel:+4903012345678" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors text-center">
                    +49 (0) 30 1234 5678
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'impressum' && (
        <div className="min-h-screen bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button onClick={() => navigateToPage('home')} className="flex items-center text-blue-600 hover:text-blue-700 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Zurück zur Startseite
            </button>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Verantwortliche Person</h3>
              <p className="text-gray-700 mb-4">
                <strong>Jannis Claus Maximilian Orth e.K.</strong><br />
                (Einzelunternehmer)
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Anschrift</h3>
              <p className="text-gray-700 mb-4">
                Jannis Claus Maximilian Orth e.K.<br />
                Bad Hersfeld<br />
                Hessen<br />
                Deutschland
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Kontaktinformationen</h3>
              <p className="text-gray-700 mb-4">
                Telefon: +49 (0) 30 1234 5678<br />
                E-Mail: info@homeconnect.de
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Haftung für Inhalte</h2>
              <p className="text-gray-700 mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Haftung für Links</h2>
              <p className="text-gray-700 mb-4">
                Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Urheberrecht</h2>
              <p className="text-gray-700 mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des Autors oder Urhebers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Datenschutz</h2>
              <p className="text-gray-700 mb-4">
                Beachten Sie unsere <button onClick={() => navigateToPage('datenschutz')} className="text-blue-600 hover:text-blue-700 underline">Datenschutzerklärung</button>.
              </p>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'datenschutz' && (
        <div className="min-h-screen bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button onClick={() => navigateToPage('home')} className="flex items-center text-blue-600 hover:text-blue-700 mb-8">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Zurück zur Startseite
            </button>

            <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

            <div className="prose max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Allgemeine Hinweise</h3>
              <p className="text-gray-700 mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Datenschutz</h3>
              <p className="text-gray-700 mb-4">
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p className="text-gray-700 mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <strong>Jannis Claus Maximilian Orth e.K.</strong><br />
                Bad Hersfeld<br />
                Deutschland<br /><br />
                E-Mail: info@homeconnect.de<br />
                Telefon: +49 (0) 30 1234 5678
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Datenerfassung auf unserer Website</h2>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Cookies</h3>
              <p className="text-gray-700 mb-4">
                Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Kontaktformular</h3>
              <p className="text-gray-700 mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Ihre Rechte</h2>
              <p className="text-gray-700 mb-4">
                Sie haben das Recht, jederzeit Auskunft über die bezüglich Ihrer Person gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung zu erhalten. Sie können verlangen, dass fehlerhafte oder unvollständige Daten korrigiert werden. Sie haben ferner das Recht, die Löschung Ihrer Daten zu verlangen, soweit nicht gesetzliche Aufbewahrungspflichten entgegenstehen.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Kontakt</h2>
              <p className="text-gray-700 mb-4">
                Für weitere Informationen zum Datenschutz oder um Ihre Rechte geltend zu machen, kontaktieren Sie uns bitte unter:<br /><br />
                E-Mail: info@homeconnect.de<br />
                Telefon: +49 (0) 30 1234 5678
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
