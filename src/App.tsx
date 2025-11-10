
tsx
import { Thermometer, Wifi, Headphones, Home, ChevronRight, Phone, Mail, MapPin, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'impressum' | 'datenschutz';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
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

      {/* HOME PAGE */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
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

          {/* Leistungen */}
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
                      Schnelle Hilfe bei Problemen
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      Remote & Vor-Ort Service
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      Regelmäßige Systempflege
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Vorteile Section */}
          <section id="vorteile" className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Warum HomeConnect?</h2>
                <p className="text-xl text-gray-600">Ihr Partner für intelligente Haustechnik in Deutschland</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    ✅
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zuverlässig</h3>
                  <p className="text-gray-600">Wir stehen für Qualität und Stabilität</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    🌱
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nachhaltig</h3>
                  <p className="text-gray-600">Energieeffiziente Lösungen für Ihr Zuhause</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    ⚡
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Innovativ</h3>
                  <p className="text-gray-600">Moderne Technik und smarte Automatisierung</p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-600 text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                    💡
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Kundenorientiert</h3>
                  <p className="text-gray-600">Individuelle Lösungen für jedes Zuhause</p>
                </div>
              </div>
            </div>
          </section>

          {/* Kontakt Section */}
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
                          Musterstraße 123<br />
                          10115 Berlin<br />
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

          {/* FOOTER */}
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
                    <li><a href="#" className="hover:text-blue-400 transition-colors">Smarte Thermostate</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors">WLAN-Optimierung</a></li>
                    <li><a href="#" className="hover:text-blue-400 transition-colors">IT-Support</a></li>
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
                    <li><button onClick={() => setCurrentPage('impressum')} className="hover:text-blue-400 transition-colors">Impressum</button></li>
                    <li><button onClick={() => setCurrentPage('datenschutz')} className="hover:text-blue-400 transition-colors">Datenschutz</button></
```


li> </ul> </div> </div>

```
          {/* Neue Footer Stats */}
          <div className="grid md:grid-cols-4 gap-8 text-center border-t border-gray-700 pt-8">
            <div>
              <span className="block text-3xl font-bold">✅</span>
              <p>Zuverlässigkeit</p>
            </div>
            <div>
              <span className="block text-3xl font-bold">🌱</span>
              <p>Nachhaltigkeit</p>
            </div>
            <div>
              <span className="block text-3xl font-bold">⚡</span>
              <p>Innovation</p>
            </div>
            <div>
              <span className="block text-3xl font-bold">💡</span>
              <p>Kundenorientiert</p>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8">&copy; 2025 HomeConnect. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </>
  )}

  {/* IMPRESSUM PAGE */}
  {currentPage === 'impressum' && (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-6">Impressum</h1>
      <p className="text-gray-700 mb-4">
        HomeConnect GmbH<br />
        Musterstraße 123<br />
        10115 Berlin<br />
        Deutschland
      </p>
      <p className="text-gray-700 mb-4">
        Geschäftsführer: Max Mustermann<br />
        Handelsregister: HRB 12345, Amtsgericht Berlin
      </p>
      <p className="text-gray-700 mb-4">
        Kontakt: info@homeconnect.de | +49 (0) 30 1234 5678
      </p>
      <button onClick={() => setCurrentPage('home')} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Zurück zur Startseite
      </button>
    </div>
  )}

  {/* DATENSCHUTZ PAGE */}
  {currentPage === 'datenschutz' && (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold mb-6">Datenschutz</h1>
      <p className="text-gray-700 mb-4">
        Wir legen großen Wert auf den Schutz Ihrer Daten. Alle erhobenen Informationen werden vertraulich behandelt und nicht an Dritte weitergegeben.
      </p>
      <p className="text-gray-700 mb-4">
        Weitere Details entnehmen Sie bitte unserer vollständigen Datenschutzerklärung.
      </p>
      <button onClick={() => setCurrentPage('home')} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
        Zurück zur Startseite
      </button>
    </div>
  )}
</div>
```

);
}

export default App;

