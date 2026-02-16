import { Thermometer, Wifi, Headphones, Home, ChevronRight, Phone, Mail, Check, Menu, X, ChevronDown, Leaf, Zap, Shield, Sun } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'thermostats' | 'wlan' | 'support' | 'impressum' | 'datenschutz';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      <nav className="bg-white/95 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => navigateToPage('home')} className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-md">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-700 to-blue-700 bg-clip-text text-transparent">
                HomeConnect Solutions
              </span>
            </button>

            <div className="hidden lg:flex items-center space-x-2">
              <button
                onClick={() => navigateToPage('home')}
                className={`text-sm font-semibold px-5 py-2.5 rounded-xl transition-all ${
                  currentPage === 'home'
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'text-gray-700 hover:bg-emerald-50'
                }`}
              >
                Home
              </button>

              <div className="relative">
                <button
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="text-sm font-semibold px-5 py-2.5 rounded-xl transition-all text-gray-700 hover:bg-emerald-50 flex items-center gap-1"
                >
                  Leistungen
                  <ChevronDown className="h-4 w-4" />
                </button>

                {servicesDropdownOpen && (
                  <div
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-emerald-100 py-2 z-50"
                  >
                    <button
                      onClick={() => navigateToPage('thermostats')}
                      className="w-full text-left px-4 py-3 hover:bg-emerald-50 transition-colors flex items-center gap-3"
                    >
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Thermometer className="h-4 w-4 text-orange-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">Smarte Thermostate</div>
                        <div className="text-xs text-gray-500">Intelligent heizen</div>
                      </div>
                    </button>
                    <button
                      onClick={() => navigateToPage('wlan')}
                      className="w-full text-left px-4 py-3 hover:bg-emerald-50 transition-colors flex items-center gap-3"
                    >
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Wifi className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">WLAN-Optimierung</div>
                        <div className="text-xs text-gray-500">Stabiles Netzwerk</div>
                      </div>
                    </button>
                    <button
                      onClick={() => navigateToPage('support')}
                      className="w-full text-left px-4 py-3 hover:bg-emerald-50 transition-colors flex items-center gap-3"
                    >
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Headphones className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">IT-Support</div>
                        <div className="text-xs text-gray-500">Professionelle Hilfe</div>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              <a href="#kontakt" className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all font-semibold ml-2">
                Kontakt
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-emerald-50 transition-colors text-gray-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-emerald-100">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => navigateToPage('home')}
                  className={`text-left px-4 py-3 rounded-xl transition-all font-semibold ${
                    currentPage === 'home'
                      ? 'bg-emerald-500 text-white'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => navigateToPage('thermostats')}
                  className="text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 transition-all font-semibold flex items-center gap-2"
                >
                  <Thermometer className="h-4 w-4" />
                  Smarte Thermostate
                </button>
                <button
                  onClick={() => navigateToPage('wlan')}
                  className="text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 transition-all font-semibold flex items-center gap-2"
                >
                  <Wifi className="h-4 w-4" />
                  WLAN-Optimierung
                </button>
                <button
                  onClick={() => navigateToPage('support')}
                  className="text-left px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-50 transition-all font-semibold flex items-center gap-2"
                >
                  <Headphones className="h-4 w-4" />
                  IT-Support
                </button>
                <a href="#kontakt" className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-4 py-3 rounded-xl text-center font-semibold">
                  Kontakt
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {currentPage === 'home' && (
        <>
          <section className="relative py-20 sm:py-28 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-white to-blue-100/50"></div>
              <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-emerald-200 mb-8 shadow-sm">
                  <Leaf className="h-5 w-5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold text-sm">Nachhaltige Smart Home Lösungen</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                  Ihr Zuhause.
                  <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Intelligent & Umweltbewusst.
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Energieeffiziente Smart Home Technologie für mehr Komfort und geringere Kosten. Professionell installiert und nachhaltig gedacht.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="#leistungen" className="group bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center font-semibold">
                    Unsere Lösungen
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="#kontakt" className="bg-white text-emerald-700 px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold border-2 border-emerald-200">
                    Kostenlose Beratung
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="p-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Leaf className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">30%</h3>
                  <p className="text-gray-600">Energieeinsparung</p>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
                  <p className="text-gray-600">Intelligente Steuerung</p>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
                  <p className="text-gray-600">Professionell</p>
                </div>
                <div className="p-6">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Sun className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">CO₂</h3>
                  <p className="text-gray-600">Klimafreundlich</p>
                </div>
              </div>
            </div>
          </section>

          <section id="leistungen" className="py-20 bg-gradient-to-b from-emerald-50/50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Nachhaltige Smart Home Technologie für Ihr Zuhause</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div onClick={() => navigateToPage('thermostats')} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-emerald-200">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Thermometer className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Smarte Thermostate</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Bis zu 30% Heizkosten sparen durch intelligente Temperatursteuerung.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Energieeffizient & klimafreundlich</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>App-Steuerung von überall</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Professionelle Installation</span>
                    </li>
                  </ul>
                  <button className="text-emerald-600 font-semibold flex items-center group-hover:text-emerald-700">
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div onClick={() => navigateToPage('wlan')} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-emerald-200">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Wifi className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">WLAN-Optimierung</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Stabiles und schnelles Internet in jedem Raum Ihres Zuhauses.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Vollständige Netzwerkanalyse</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Optimale Abdeckung</span>
                    </li>
                  </ul>
                  <button className="text-emerald-600 font-semibold flex items-center group-hover:text-emerald-700">
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div onClick={() => navigateToPage('support')} className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-emerald-200">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Headphones className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">IT-Support</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Kompetente Unterstützung für alle technischen Fragen.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Schnelle Hilfe bei Problemen</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Remote & Vor-Ort Service</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>Faire Preise</span>
                    </li>
                  </ul>
                  <button className="text-emerald-600 font-semibold flex items-center group-hover:text-emerald-700">
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="kontakt" className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Bereit für Ihr Smart Home?</h2>
                <p className="text-xl text-emerald-50">Kontaktieren Sie uns für eine kostenlose Beratung</p>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                        placeholder="Ihr Name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">E-Mail</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                        placeholder="ihre@email.de"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors"
                      placeholder="Ihre Telefonnummer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Ihre Nachricht</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      placeholder="Wie können wir Ihnen helfen?"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </section>
        </>
      )}

      {currentPage === 'thermostats' && (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-emerald-50 pb-16">
          <section className="relative bg-gradient-to-br from-orange-100 via-white to-orange-50 py-20 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-10 left-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-3xl mb-6 shadow-2xl">
                  <Thermometer className="h-16 w-16 text-white" />
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                  Smarte Thermostate
                </h1>
                <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                  Intelligent heizen, Energie sparen & Klima schützen
                </p>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Ist Ihre Heizung geeignet?</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Sehen Sie sofort, wie viel Energie Sie sparen können</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border-2 border-emerald-200 shadow-lg">
                  <div className="mb-4">
                    <div className="flex gap-2 mb-4">
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">Erdgas-Heizung</h3>
                    <p className="text-emerald-700 font-semibold text-lg mt-1">15–30% Ersparnis</p>
                  </div>
                  <p className="text-gray-700">Ideal geeignet. Maximale Energieeinsparung durch intelligente Steuerung.</p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-3xl p-8 border-2 border-emerald-200 shadow-lg">
                  <div className="mb-4">
                    <div className="flex gap-2 mb-4">
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                      <div className="w-4 h-4 rounded-full bg-emerald-500"></div>
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">Ölheizung</h3>
                    <p className="text-emerald-700 font-semibold text-lg mt-1">15–30% Ersparnis</p>
                  </div>
                  <p className="text-gray-700">Ideal geeignet. Besonders wirtschaftlich bei hohen Ölpreisen.</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border-2 border-yellow-300 shadow-lg">
                  <div className="mb-4">
                    <div className="flex gap-2 mb-4">
                      <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">Pellets / Holz</h3>
                    <p className="text-yellow-700 font-semibold text-lg mt-1">5–10% Ersparnis</p>
                  </div>
                  <p className="text-gray-700">Bedingt geeignet. Moderne Systeme oft bereits optimiert.</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border-2 border-yellow-300 shadow-lg">
                  <div className="mb-4">
                    <div className="flex gap-2 mb-4">
                      <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">Fernwärme</h3>
                    <p className="text-yellow-700 font-semibold text-lg mt-1">3–8% Ersparnis</p>
                  </div>
                  <p className="text-gray-700">Bedingt geeignet. Abhängig von Fernwärme-Regelung.</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border-2 border-red-300 shadow-lg">
                  <div className="mb-4">
                    <div className="flex gap-2 mb-4">
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-red-500"></div>
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">Wärmepumpe</h3>
                    <p className="text-red-700 font-semibold text-lg mt-1">0–5% / oft Mehrverbrauch</p>
                  </div>
                  <p className="text-gray-700">Weniger geeignet. Bereits hocheffizient, keine große Ersparnis möglich.</p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border-2 border-red-300 shadow-lg">
                  <div className="mb-4">
                    <div className="flex gap-2 mb-4">
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                      <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                    </div>
                    <h3 className="font-bold text-2xl text-gray-900">Nachtspeicher</h3>
                    <p className="text-red-700 font-semibold text-lg mt-1">0% Ersparnis</p>
                  </div>
                  <p className="text-gray-700">Nicht geeignet. Speichersystem bedingt Nutzung fest definierter Ladezeiten.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-100 to-blue-100 rounded-3xl p-8 border-2 border-emerald-300">
                <p className="text-gray-900 text-lg">
                  <span className="font-bold">Unsicher, ob Ihr System geeignet ist?</span> Kontaktieren Sie uns für eine kostenlose, unverbindliche Beratung. Wir analysieren Ihre Heizung und berechnen Ihr individuelles Sparpotenzial.
                </p>
                <a href="#kontakt" className="inline-block mt-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all font-semibold">
                  Kostenlose Analyse anfragen
                </a>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Warum smarte Thermostate?</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-emerald-100 p-3 rounded-xl h-fit">
                        <Leaf className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Bis zu 30% Energieeinsparung</h3>
                        <p className="text-gray-600">Reduzieren Sie Ihre Heizkosten und CO₂-Emissionen durch intelligente Temperatursteuerung.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-blue-100 p-3 rounded-xl h-fit">
                        <Zap className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Automatische Anpassung</h3>
                        <p className="text-gray-600">Das System lernt Ihre Gewohnheiten und passt die Temperatur automatisch an.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-orange-100 p-3 rounded-xl h-fit">
                        <Sun className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Steuerung von überall</h3>
                        <p className="text-gray-600">Kontrollieren Sie Ihre Heizung bequem per App - zu Hause oder unterwegs.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-emerald-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Thermometer className="h-32 w-32 text-orange-500 mx-auto mb-4" />
                  </div>
                </div>
              </div>

              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Unsere Pakete</h2>
                <p className="text-xl text-gray-600">Wählen Sie die passende Lösung für Ihr Zuhause</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200 hover:border-emerald-300 transition-all">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl text-center mb-6">
                    <h3 className="text-3xl font-bold">Basis Paket</h3>
                    <p className="text-blue-100 mt-1">TP-Link Hardware</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-center py-4">
                      <div className="text-3xl font-bold text-gray-900">Preis auf Anfrage</div>
                      <p className="text-sm text-gray-500 mt-1">nach individueller Beratung</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Für normale Heizkörper</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">LED-Display mit Temperaturanzeige</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">App-Steuerung & Zeitpläne</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sprachsteuerung (Alexa, Google, Siri)</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Geofencing-Funktion</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Professionelle Installation & Support</span>
                    </div>
                  </div>

                  <a href="#kontakt" className="block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl hover:shadow-xl transition-all font-semibold text-center">
                    Beratung anfragen
                  </a>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-emerald-50 rounded-3xl p-8 shadow-xl border-4 border-emerald-400 hover:border-emerald-500 transition-all relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    EMPFOHLEN
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl text-center mb-6 mt-6">
                    <h3 className="text-3xl font-bold">Premium Paket</h3>
                    <p className="text-orange-100 mt-1">tado° Hardware</p>
                  </div>

                  <div className="mb-6">
                    <div className="text-center py-4">
                      <div className="text-3xl font-bold text-gray-900">Preis auf Anfrage</div>
                      <p className="text-sm text-gray-600 mt-1">nach individueller Beratung</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900 font-medium">Premium Touch-Display</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900 font-medium">Für Heizkörper & Fußbodenheizung</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900 font-medium">Deutscher Premium-Hersteller</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900 font-medium">Erweiterte App-Funktionen</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900 font-medium">Fenster-Auf-Erkennung integriert</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900 font-medium">Wetter-Integration & Geofencing</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-900 font-medium">Premium-Support & Installation</span>
                    </div>
                  </div>

                  <a href="#kontakt" className="block w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-4 rounded-xl hover:shadow-xl transition-all font-semibold text-center">
                    Beratung anfragen
                  </a>
                </div>
              </div>

              <div className="mt-20">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">Direkt-Vergleich</h2>
                  <p className="text-xl text-gray-600">Alle Features im Überblick</p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl border-2 border-emerald-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-emerald-200 bg-gradient-to-r from-emerald-50 to-blue-50">
                          <th className="text-left py-5 px-6 font-bold text-gray-900 text-lg">Merkmal</th>
                          <th className="text-center py-5 px-6 font-bold text-gray-900 text-lg">Basis Paket</th>
                          <th className="text-center py-5 px-6 font-bold text-gray-900 text-lg bg-emerald-100 rounded-t-xl">Premium Paket</th>
                        </tr>
                      </thead>
                      <tbody className="text-base">
                        <tr className="border-b border-gray-200 hover:bg-emerald-50/30 transition-colors">
                          <td className="py-4 px-6 font-semibold text-gray-900">Hersteller</td>
                          <td className="py-4 px-6 text-center text-gray-700">TP-Link (Tapo)</td>
                          <td className="py-4 px-6 text-center text-gray-900 bg-emerald-50/50">tado° (Deutschland)</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-emerald-50/30 transition-colors">
                          <td className="py-4 px-6 font-semibold text-gray-900">Heizkörper</td>
                          <td className="py-4 px-6 text-center"><Check className="h-6 w-6 text-emerald-600 mx-auto" /></td>
                          <td className="py-4 px-6 text-center bg-emerald-50/50"><Check className="h-6 w-6 text-emerald-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-emerald-50/30 transition-colors">
                          <td className="py-4 px-6 font-semibold text-gray-900">Fußbodenheizung</td>
                          <td className="py-4 px-6 text-center"><X className="h-6 w-6 text-red-500 mx-auto" /></td>
                          <td className="py-4 px-6 text-center bg-emerald-50/50"><Check className="h-6 w-6 text-emerald-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-emerald-50/30 transition-colors">
                          <td className="py-4 px-6 font-semibold text-gray-900">Fenster-Auf-Erkennung</td>
                          <td className="py-4 px-6 text-center text-gray-600">Optional (extra Sensor)</td>
                          <td className="py-4 px-6 text-center bg-emerald-50/50 text-gray-900 font-medium">Integriert</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-emerald-50/30 transition-colors">
                          <td className="py-4 px-6 font-semibold text-gray-900">Display</td>
                          <td className="py-4 px-6 text-center text-gray-600">Standard LED</td>
                          <td className="py-4 px-6 text-center bg-emerald-50/50 text-gray-900 font-medium">Premium Touch-Display</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-emerald-50/30 transition-colors">
                          <td className="py-4 px-6 font-semibold text-gray-900">App-Steuerung</td>
                          <td className="py-4 px-6 text-center"><Check className="h-6 w-6 text-emerald-600 mx-auto" /></td>
                          <td className="py-4 px-6 text-center bg-emerald-50/50"><Check className="h-6 w-6 text-emerald-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-emerald-50/30 transition-colors">
                          <td className="py-4 px-6 font-semibold text-gray-900">Sprachsteuerung</td>
                          <td className="py-4 px-6 text-center text-gray-700">Alexa, Google, Siri</td>
                          <td className="py-4 px-6 text-center bg-emerald-50/50 text-gray-700">Alexa, Google, Siri</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-emerald-50/30 transition-colors">
                          <td className="py-4 px-6 font-semibold text-gray-900">Geofencing</td>
                          <td className="py-4 px-6 text-center"><Check className="h-6 w-6 text-emerald-600 mx-auto" /></td>
                          <td className="py-4 px-6 text-center bg-emerald-50/50"><Check className="h-6 w-6 text-emerald-600 mx-auto" /></td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-emerald-50/30 transition-colors">
                          <td className="py-4 px-6 font-semibold text-gray-900">Wetter-Integration</td>
                          <td className="py-4 px-6 text-center"><X className="h-6 w-6 text-red-500 mx-auto" /></td>
                          <td className="py-4 px-6 text-center bg-emerald-50/50"><Check className="h-6 w-6 text-emerald-600 mx-auto" /></td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6 font-semibold text-gray-900">Preis</td>
                          <td className="py-4 px-6 text-center text-gray-700">Auf Anfrage</td>
                          <td className="py-4 px-6 text-center bg-emerald-50/50 text-gray-700 rounded-b-xl">Auf Anfrage</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'wlan' && (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 pb-16">
          <section className="relative bg-gradient-to-br from-blue-100 via-white to-blue-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-3xl mb-6 shadow-2xl">
                  <Wifi className="h-16 w-16 text-white" />
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">WLAN-Optimierung</h1>
                <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Stabiles Internet in jedem Raum</p>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Wifi className="h-32 w-32 text-blue-500 mx-auto mb-4" />
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Professionelle Netzwerkoptimierung</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-blue-100 p-3 rounded-xl h-fit">
                        <Check className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Vollständige Analyse</h3>
                        <p className="text-gray-600">Wir analysieren Ihr Netzwerk und identifizieren Schwachstellen.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-orange-100 p-3 rounded-xl h-fit">
                        <Check className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Verbesserung der Reichweite durch Access Points oder Repeater</h3>
                        <p className="text-gray-600">Erweitern Sie Ihr WLAN-Netzwerk in alle Bereiche Ihres Hauses.</p>
                      </div>
                    </div>
                  </div>
                  <a href="#kontakt" className="inline-block mt-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold">
                    Jetzt Beratung anfragen
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'support' && (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 pb-16">
          <section className="relative bg-gradient-to-br from-green-100 via-white to-green-50 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-3xl mb-6 shadow-2xl">
                  <Headphones className="h-16 w-16 text-white" />
                </div>
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">IT-Support</h1>
                <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Professionelle Hilfe wenn Sie sie brauchen</p>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Kompetenter IT-Support</h2>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="bg-green-100 p-3 rounded-xl h-fit">
                        <Check className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Schnelle Hilfe</h3>
                        <p className="text-gray-600">Wir lösen Ihre technischen Probleme schnell und zuverlässig.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-blue-100 p-3 rounded-xl h-fit">
                        <Check className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Remote & Vor-Ort</h3>
                        <p className="text-gray-600">Flexibler Service - remote oder bei Ihnen vor Ort.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="bg-emerald-100 p-3 rounded-xl h-fit">
                        <Check className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Faire Preise</h3>
                        <p className="text-gray-600">Transparente Abrechnung ohne versteckte Kosten.</p>
                      </div>
                    </div>
                  </div>
                  <a href="#kontakt" className="inline-block mt-8 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold">
                    Support anfragen
                  </a>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Headphones className="h-32 w-32 text-green-500 mx-auto mb-4" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'impressum' && (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-emerald-100">
              <h1 className="text-4xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-emerald-200">Impressum</h1>

              <div className="space-y-8 text-gray-700">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Angaben gemäß § 5 TMG</h2>
                  <p className="leading-relaxed">
                    HomeConnect Solutions GbR<br />
                    [Straße und Hausnummer]<br />
                    [PLZ und Ort]
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Vertreten durch</h2>
                  <p className="leading-relaxed">
                    [Name Gesellschafter 1]<br />
                    [Name Gesellschafter 2]
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Kontakt</h2>
                  <p className="leading-relaxed">
                    Telefon: [Telefonnummer]<br />
                    E-Mail: [E-Mail-Adresse]
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Umsatzsteuer-ID</h2>
                  <p className="leading-relaxed">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    [USt-IdNr.]
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                  <p className="leading-relaxed">
                    [Name]<br />
                    [Adresse]
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Haftungsausschluss</h2>

                  <h3 className="font-semibold text-gray-900 mb-2 mt-4">Haftung für Inhalte</h3>
                  <p className="leading-relaxed mb-4">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>

                  <h3 className="font-semibold text-gray-900 mb-2 mt-4">Haftung für Links</h3>
                  <p className="leading-relaxed mb-4">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  </p>
                  <p className="leading-relaxed mb-4">
                    Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>

                  <h3 className="font-semibold text-gray-900 mb-2 mt-4">Urheberrecht</h3>
                  <p className="leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500 italic">
                    Hinweis: Bitte ersetzen Sie die Platzhalter [in eckigen Klammern] mit Ihren tatsächlichen Daten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentPage === 'datenschutz' && (
        <div className="min-h-screen bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
            <div className="prose prose-lg">
              <p className="text-gray-600">Informationen zum Datenschutz auf Anfrage.</p>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-emerald-500 p-2 rounded-lg">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg font-bold">HomeConnect Solutions</span>
              </div>
              <p className="text-gray-300">
                Ihr Partner für nachhaltige Smart Home Lösungen in Deutschland.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Leistungen</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => navigateToPage('thermostats')} className="hover:text-emerald-400 transition-colors">Smarte Thermostate</button></li>
                <li><button onClick={() => navigateToPage('wlan')} className="hover:text-emerald-400 transition-colors">WLAN-Optimierung</button></li>
                <li><button onClick={() => navigateToPage('support')} className="hover:text-emerald-400 transition-colors">IT-Support</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Kontakt</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Auf Anfrage</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>Auf Anfrage</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Rechtliches</h3>
              <ul className="space-y-2 text-gray-300">
                <li><button onClick={() => navigateToPage('impressum')} className="hover:text-emerald-400 transition-colors">Impressum</button></li>
                <li><button onClick={() => navigateToPage('datenschutz')} className="hover:text-emerald-400 transition-colors">Datenschutz</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 HomeConnect Solutions. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
