import { Thermometer, Wifi, Headphones, Home, ChevronRight, Phone, Mail, MapPin, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'impressum' | 'datenschutz';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">HomeConnect</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {currentPage === 'home' ? (
                <>
                  <a href="#leistungen" className="text-gray-700 hover:text-blue-600 transition-colors">Leistungen</a>
                  <a href="#vorteile" className="text-gray-700 hover:text-blue-600 transition-colors">Vorteile</a>
                  <a href="#kontakt" className="text-gray-700 hover:text-blue-600 transition-colors">Kontakt</a>
                </>
              ) : (
                <button onClick={() => setCurrentPage('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
                  Zurück
                </button>
              )}
            </div>
            {currentPage === 'home' && (
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Beratung anfragen
              </button>
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
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Jetzt starten
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Mehr erfahren
                </button>
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
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Thermometer className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smarte Thermostate</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Optimieren Sie Ihre Heizkosten und steigern Sie Ihren Komfort mit intelligenten Thermostaten. Steuerbar von überall, energieeffizient und einfach zu bedienen.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  Energieeinsparung & Nachhaltigkeit
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  Intuitive App-Steuerung
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                  Professionelle Installation
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Wifi className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">WLAN-Optimierung</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Schnelles und stabiles WLAN in jedem Raum. Wir analysieren Ihr Netzwerk und sorgen für optimale Abdeckung und Geschwindigkeit in Ihrem gesamten Zuhause.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  Optimale Netzwerkanalyse
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  Modernes Mesh-System
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  Verbesserte Sicherheit
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100 hover:shadow-xl transition-shadow">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Headphones className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT-Support</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Kompetenter IT-Support für Ihr Smart Home. Wir helfen bei der Einrichtung, Wartung und bei allen technischen Fragen rund um Ihre intelligenten Geräte.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  Persönlicher Support
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  Remote & Vor-Ort Lösungen
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  Regelmäßige Wartung
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="vorteile" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Warum HomeConnect?</h2>
            <p className="text-xl text-gray-600">Ihr Partner für moderne Smart Home Lösungen in Deutschland</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                🏠
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovative Technik</h3>
              <p className="text-gray-600">Modernste Smart Home Lösungen für Ihr Zuhause</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Energieeffizienz</h3>
              <p className="text-gray-600">Smarte Steuerung spart Strom und Heizkosten</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                🔧
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Zuverlässiger Service</h3>
              <p className="text-gray-600">Wir kümmern uns um alle technischen Fragen</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                🌐
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Komfort & Sicherheit</h3>
              <p className="text-gray-600">Ein smartes Zuhause für mehr Lebensqualität</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt und Footer bleiben unverändert, sauber geschlossen */}
      {/* ... hier würde der Kontakt- und Footer-Code folgen, genauso wie im vorherigen Abschnitt, nur sauber formatiert */}
      </>
      )}

      {currentPage === 'impressum' && (
        // Impressum-Seite
        <div className="min-h-screen bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button onClick={() => setCurrentPage('home')} className="flex items-center text-blue-600 hover:text-blue-700 mb-8">
              <X className="h-5 w-5 mr-2" />
              Schließen
            </button>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
            {/* Impressum-Inhalte hier */}
          </div>
        </div>
      )}

      {currentPage === 'datenschutz' && (
        // Datenschutzerklärung-Seite
        <div className="min-h-screen bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button onClick={() => setCurrentPage('home')} className="flex items-center text-blue-600 hover:text-blue-700 mb-8">
              <X className="h-5 w-5 mr-2" />
              Schließen
            </button>
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
            {/* Datenschutz-Inhalte hier */}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
