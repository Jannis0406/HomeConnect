import { Thermometer, Wifi, Headphones, Home, ChevronRight, Phone, Mail, MapPin, Check, ArrowLeft, Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'thermostats' | 'wlan' | 'support' | 'impressum' | 'datenschutz' | 'hardware';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => navigateToPage('home')} className="flex items-center space-x-3 group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-xl group-hover:scale-110 transition-transform">
                <Home className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                HomeConnectSolutions
              </span>
            </button>

            <div className="hidden lg:flex items-center space-x-8">
              {currentPage === 'home' ? (
                <>
                  <a href="#leistungen" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Leistungen</a>
                  <a href="#vorteile" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Vorteile</a>
                  <a href="#kontakt" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Kontakt</a>
                  <a href="#kontakt" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl hover:shadow-lg transition-all font-medium">
                    Beratung anfragen
                  </a>
                </>
              ) : (
                <button onClick={() => navigateToPage('home')} className="text-gray-700 hover:text-blue-600 transition-colors flex items-center font-medium">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Zurück zur Startseite
                </button>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200">
              {currentPage === 'home' ? (
                <div className="flex flex-col space-y-3">
                  <a href="#leistungen" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Leistungen</a>
                  <a href="#vorteile" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Vorteile</a>
                  <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">Kontakt</a>
                  <a href="#kontakt" onClick={() => setMobileMenuOpen(false)} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl text-center font-medium">
                    Beratung anfragen
                  </a>
                </div>
              ) : (
                <button onClick={() => navigateToPage('home')} className="text-gray-700 hover:text-blue-600 transition-colors flex items-center font-medium py-2">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Zurück zur Startseite
                </button>
              )}
            </div>
          )}
        </div>
      </nav>

      {currentPage === 'home' && (
        <>
          <section className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
                    <span className="text-blue-700 font-semibold text-sm">Smart Home Experten</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Intelligente Lösungen für Ihr
                    <span className="block bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
                      smartes Zuhause
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Professionelle Smart Home Technologie für mehr Komfort, Effizienz und Kontrolle. Von der Planung bis zur Installation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a href="#leistungen" className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all flex items-center justify-center font-semibold">
                      Unsere Leistungen
                      <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#kontakt" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all text-center font-semibold">
                      Kontakt aufnehmen
                    </a>
                  </div>
                </div>
                <div className="relative lg:block hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-orange-400 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl">
                        <Thermometer className="h-12 w-12 text-orange-600 mb-3" />
                        <p className="text-sm font-semibold text-gray-900">Smarte Thermostate</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                        <Wifi className="h-12 w-12 text-blue-600 mb-3" />
                        <p className="text-sm font-semibold text-gray-900">WLAN Optimierung</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                        <Headphones className="h-12 w-12 text-green-600 mb-3" />
                        <p className="text-sm font-semibold text-gray-900">IT-Support</p>
                      </div>
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-2xl flex items-center justify-center">
                        <Home className="h-16 w-16 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="leistungen" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Professionelle Smart Home Lösungen für jeden Bedarf</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <div
                  className="group bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2"
                  onClick={() => navigateToPage('thermostats')}
                >
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Thermometer className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Smarte Thermostate</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Optimieren Sie Ihre Heizkosten mit intelligenten Thermostaten. Steuerbar von überall, energieeffizient und komfortabel.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Bis zu 30% Energieeinsparung</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span>App-Steuerung & Automatisierung</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Professionelle Installation</span>
                    </li>
                  </ul>
                  <button className="text-orange-600 font-semibold flex items-center group-hover:text-orange-700">
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div
                  className="group bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2"
                  onClick={() => navigateToPage('wlan')}
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Wifi className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">WLAN-Optimierung</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Stabiles und schnelles WLAN in jedem Raum. Professionelle Analyse und Optimierung Ihres Netzwerks.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Vollständige Netzwerkanalyse</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Mesh-WLAN Systeme</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Sicherheitsoptimierung</span>
                    </li>
                  </ul>
                  <button className="text-blue-600 font-semibold flex items-center group-hover:text-blue-700">
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div
                  className="group bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-green-100 hover:border-green-300 hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2"
                  onClick={() => navigateToPage('support')}
                >
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Headphones className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">IT-Support</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Professioneller Support für Ihr Smart Home. Wir helfen bei allen technischen Fragen.
                  </p>
                  <ul className="space-y-3 text-gray-600 mb-6">
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Kompetente Beratung</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Remote & Vor-Ort Service</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Regelmäßige Wartung</span>
                    </li>
                  </ul>
                  <button className="text-green-600 font-semibold flex items-center group-hover:text-green-700">
                    Mehr erfahren
                    <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="vorteile" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Warum HomeConnectSolutions?</h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Ihre Vorteile mit uns als Partner</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="text-center bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Thermometer className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Effizient</h3>
                  <p className="text-gray-600">Optimale Lösungen für Ihr Zuhause</p>
                </div>

                <div className="text-center bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Wifi className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Zuverlässig</h3>
                  <p className="text-gray-600">Stabile und sichere Technologie</p>
                </div>

                <div className="text-center bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-green-600 to-green-700 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Umweltfreundlich</h3>
                  <p className="text-gray-600">Nachhaltige Energieeinsparung</p>
                </div>

                <div className="text-center bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Headphones className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Kompetent</h3>
                  <p className="text-gray-600">Professionelle Beratung & Support</p>
                </div>
              </div>
            </div>
          </section>

          <section id="kontakt" className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Kontaktieren Sie uns</h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Wir freuen uns auf Ihre Nachricht</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                      <div className="bg-blue-600 p-3 rounded-xl">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                        <p className="text-gray-600">+49 (0) 30 1234 5678</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                      <div className="bg-blue-600 p-3 rounded-xl">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold text-gray-900 mb-1">E-Mail</h3>
                        <p className="text-gray-600">info@homeconnect.de</p>
                      </div>
                    </div>

                    <div className="flex items-start bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
                      <div className="bg-blue-600 p-3 rounded-xl">
                        <MapPin className="h-6 w-6 text-white" />
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

                <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-blue-100">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Ihr Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">E-Mail</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="ihre.email@beispiel.de"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nachricht</label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                        placeholder="Wie können wir Ihnen helfen?"
                      />
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold">
                      Nachricht senden
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Home className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-lg font-bold">HomeConnectSolutions</span>
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
                  <h3 className="font-bold mb-4">Kontakt</h3>
                  <ul className="space-y-2 text-gray-400">
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
                  <h3 className="font-bold mb-4">Rechtliches</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><button onClick={() => navigateToPage('impressum')} className="hover:text-blue-400 transition-colors">Impressum</button></li>
                    <li><button onClick={() => navigateToPage('datenschutz')} className="hover:text-blue-400 transition-colors">Datenschutz</button></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
                <p>&copy; 2025 HomeConnectSolutions. Alle Rechte vorbehalten.</p>
              </div>
            </div>
          </footer>
        </>
      )}

      {currentPage === 'thermostats' && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-16">
          <section className="bg-gradient-to-br from-orange-50 to-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button onClick={() => navigateToPage('home')} className="flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors font-medium">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Zurück zur Startseite
              </button>

              <div className="flex flex-col sm:flex-row items-center mb-6">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl mr-0 sm:mr-6 mb-4 sm:mb-0 shadow-lg">
                  <Thermometer className="h-12 w-12 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Smarte Thermostate</h1>
                  <p className="text-lg sm:text-xl text-gray-600 mt-2">Heizen Sie intelligent und sparen Sie Energie</p>
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-8 flex-wrap">
                <a href="#warum" className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl text-gray-700 hover:bg-white hover:shadow-md transition-all font-medium border border-gray-200">
                  Vorteile
                </a>
                <a href="#pakete" className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl text-gray-700 hover:bg-white hover:shadow-md transition-all font-medium border border-gray-200">
                  Pakete
                </a>
                <button onClick={() => navigateToPage('hardware')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all font-medium">
                  Hardware-Vergleich
                </button>
              </div>
            </div>
          </section>

          <section id="warum" className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Warum smarte Thermostate?</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                  Mit intelligenten Thermostaten optimieren Sie Ihre Heizkosten und erhöhen gleichzeitig Ihren Wohnkomfort. Unsere Lösungen passen sich automatisch an Ihren Tagesablauf an und sorgen für die perfekte Temperatur – genau dann, wenn Sie sie brauchen.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Energieeffizienz</h3>
                    <p className="text-gray-600">Reduzieren Sie Ihre Heizkosten um bis zu 30% durch intelligente Steuerung und Automatisierung.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Komfort</h3>
                    <p className="text-gray-600">Steuern Sie Ihre Heizung von überall per App und genießen Sie immer die perfekte Raumtemperatur.</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Umweltschutz</h3>
                    <p className="text-gray-600">Senken Sie Ihren CO₂-Ausstoß durch optimiertes Heizen und leisten Sie einen Beitrag zum Klimaschutz.</p>
                  </div>
                </div>
              </div>

              <div id="pakete" className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">Unsere Pakete</h2>
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                  <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all">
                    <div className="text-center mb-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Basis Paket</h3>
                      <p className="text-gray-600 mb-4">TP-Link Hardware für normale Heizkörper</p>
                      <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">Preis auf Anfrage</div>
                      <p className="text-sm text-gray-500">nach individueller Beratung</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">TP-Link smarte Thermostate</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Nur für normale Heizkörper (keine Fußbodenheizung)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">App-Steuerung & Automatisierung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Zeitpläne & Szenarien</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Fenster-Auf-Erkennung (gegen Aufpreis mit extra Sensor)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Professionelle Installation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Herstellergarantie</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Support & Beratung</span>
                      </li>
                    </ul>

                    <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all font-semibold">
                      Beratung anfragen
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-500 rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all relative">
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-semibold shadow-lg">
                      EMPFOHLEN
                    </div>
                    <div className="text-center mb-6 mt-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Premium Paket</h3>
                      <p className="text-gray-600 mb-4">tado° Hardware inkl. Fußbodenheizung</p>
                      <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-2">Preis auf Anfrage</div>
                      <p className="text-sm text-gray-500">nach individueller Beratung</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">tado° smarte Thermostate (deutscher Hersteller)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Kompatibel mit Fußbodenheizung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Premium App mit erweiterten Funktionen</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Intelligente Heizungssteuerung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Fenster-Auf-Erkennung (integriert)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Sprachsteuerung (Alexa, Google, Siri)</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Geofencing & Wetterdaten-Integration</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Professionelle Installation & Einrichtung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Herstellergarantie</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">Premium-Support & Beratung</span>
                      </li>
                    </ul>

                    <button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all font-semibold">
                      Beratung anfragen
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-blue-200 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Hardware im Detail</h3>
                <p className="text-gray-600 mb-6">
                  Möchten Sie mehr über die technischen Details und die verwendete Hardware erfahren? Schauen Sie sich unseren detaillierten Hardware-Vergleich an.
                </p>
                <button onClick={() => navigateToPage('hardware')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all font-semibold">
                  Hardware-Vergleich ansehen
                </button>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'wlan' && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-16">
          <section className="bg-gradient-to-br from-blue-50 to-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button onClick={() => navigateToPage('home')} className="flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors font-medium">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Zurück zur Startseite
              </button>

              <div className="flex flex-col sm:flex-row items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl mr-0 sm:mr-6 mb-4 sm:mb-0 shadow-lg">
                  <Wifi className="h-12 w-12 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">WLAN-Optimierung</h1>
                  <p className="text-lg sm:text-xl text-gray-600 mt-2">Perfekte Verbindung in jedem Raum</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Stabiles WLAN im ganzen Haus</h2>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                    Erleben Sie nahtlose Internetverbindung ohne Funklöcher. Unsere professionellen WLAN-Lösungen sorgen für optimale Abdeckung und Geschwindigkeit in Ihrem gesamten Zuhause oder Büro.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                    Wir analysieren Ihre räumlichen Gegebenheiten, identifizieren Störquellen und installieren hochwertige Mesh-Systeme für eine perfekte WLAN-Abdeckung.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 flex items-center justify-center shadow-xl">
                  <Wifi className="h-32 w-32 sm:h-48 sm:w-48 text-blue-600" />
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Unsere Leistungen</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Netzwerkanalyse</h3>
                    <p className="text-gray-600">Umfassende Analyse Ihrer bestehenden WLAN-Infrastruktur und Identifikation von Schwachstellen.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Mesh-WLAN Installation</h3>
                    <p className="text-gray-600">Installation moderner Mesh-Systeme für lückenlose Abdeckung ohne Geschwindigkeitsverlust.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Geschwindigkeitsoptimierung</h3>
                    <p className="text-gray-600">Optimierung der Kanaleinstellungen und Reduzierung von Interferenzen für maximale Geschwindigkeit.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Sicherheitskonfiguration</h3>
                    <p className="text-gray-600">Einrichtung von WPA3-Verschlüsselung und Gast-Netzwerken für maximale Sicherheit.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Access Point Setup</h3>
                    <p className="text-gray-600">Strategische Platzierung von Access Points für optimale Signalverteilung.</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border-2 border-blue-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Wartung & Support</h3>
                    <p className="text-gray-600">Regelmäßige Updates und Support bei WLAN-Problemen.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-blue-200 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Kostenlose WLAN-Analyse</h3>
                <p className="text-gray-600 mb-6">
                  Lassen Sie uns Ihr WLAN kostenlos analysieren! Wir erstellen einen detaillierten Bericht über Ihre aktuelle Netzwerkqualität und zeigen Ihnen Optimierungspotenziale auf.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => navigateToPage('home')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:shadow-xl transition-all flex items-center justify-center font-semibold">
                    Analyse anfragen
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <button onClick={() => navigateToPage('home')} className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 transition-all font-semibold">
                    Weitere Informationen
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'support' && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-16">
          <section className="bg-gradient-to-br from-green-50 to-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button onClick={() => navigateToPage('home')} className="flex items-center text-green-600 hover:text-green-700 mb-8 transition-colors font-medium">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Zurück zur Startseite
              </button>

              <div className="flex flex-col sm:flex-row items-center mb-6">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-2xl mr-0 sm:mr-6 mb-4 sm:mb-0 shadow-lg">
                  <Headphones className="h-12 w-12 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">IT-Support</h1>
                  <p className="text-lg sm:text-xl text-gray-600 mt-2">Professionelle Hilfe für Ihr Smart Home</p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Ihr verlässlicher IT-Partner</h2>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                    Unser erfahrenes Support-Team steht Ihnen bei allen technischen Fragen zur Seite. Ob Einrichtung, Fehlerbehebung oder Optimierung – wir sorgen dafür, dass Ihre Smart Home Technologie reibungslos funktioniert.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                    Wir sind jederzeit für Sie erreichbar und lösen Probleme schnell und professionell.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-3xl p-8 flex items-center justify-center shadow-xl">
                  <Headphones className="h-32 w-32 sm:h-48 sm:w-48 text-green-600" />
                </div>
              </div>

              <div className="mb-16">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Unsere Support-Leistungen</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-green-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Kompetente Beratung</h3>
                    <p className="text-gray-600 mb-4">Professionelle Unterstützung bei allen Fragen rund um Ihr Smart Home.</p>
                    <p className="text-green-600 font-semibold">Telefon: +49 (0) 30 1234 5678</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-green-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Remote-Support</h3>
                    <p className="text-gray-600">Fernwartung für schnelle Problembehebung ohne Vor-Ort-Termin.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-green-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Vor-Ort Service</h3>
                    <p className="text-gray-600">Persönlicher Service bei Ihnen zu Hause für komplexe Installationen und Reparaturen.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-green-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Schulungen</h3>
                    <p className="text-gray-600">Einführungen und Schulungen für die optimale Nutzung Ihrer Smart Home Geräte.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-green-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Wartungsverträge</h3>
                    <p className="text-gray-600">Regelmäßige Wartung und Updates für langfristige Systemstabilität.</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border-2 border-green-100 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">Systemdiagnose</h3>
                    <p className="text-gray-600">Umfassende Analyse und Optimierung Ihrer Smart Home Infrastruktur.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-green-200 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Support anfragen</h3>
                <p className="text-gray-600 mb-6">
                  Haben Sie Fragen oder benötigen Sie Unterstützung? Kontaktieren Sie uns jederzeit per Telefon, E-Mail oder über unser Kontaktformular.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => navigateToPage('home')} className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl hover:shadow-xl transition-all flex items-center justify-center font-semibold">
                    Jetzt Kontakt aufnehmen
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                  <a href="tel:+4903012345678" className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-xl hover:bg-green-50 transition-all text-center font-semibold">
                    +49 (0) 30 1234 5678
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentPage === 'impressum' && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button onClick={() => navigateToPage('home')} className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Zurück zur Startseite
            </button>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Impressum</h1>

            <div className="prose max-w-none bg-white p-6 sm:p-8 rounded-3xl shadow-lg">
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <button onClick={() => navigateToPage('home')} className="flex items-center text-blue-600 hover:text-blue-700 mb-8 font-medium">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Zurück zur Startseite
            </button>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

            <div className="prose max-w-none bg-white p-6 sm:p-8 rounded-3xl shadow-lg">
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

      {currentPage === 'hardware' && (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-16">
          <section className="bg-gradient-to-br from-orange-50 to-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button onClick={() => navigateToPage('thermostats')} className="flex items-center text-orange-600 hover:text-orange-700 mb-8 transition-colors font-medium">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Zurück zu Thermostaten
              </button>

              <div className="text-center mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Hardware-Vergleich</h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                  Detaillierte Übersicht unserer Hardware-Komponenten im direkten Vergleich
                </p>
              </div>

              <div className="flex justify-center gap-3 mt-8 flex-wrap">
                <a href="#pakete-detail" className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl text-gray-700 hover:bg-white hover:shadow-md transition-all font-medium border border-gray-200">
                  Pakete im Detail
                </a>
                <a href="#vergleichstabelle" className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl text-gray-700 hover:bg-white hover:shadow-md transition-all font-medium border border-gray-200">
                  Vergleichstabelle
                </a>
                <a href="#empfehlung" className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl text-gray-700 hover:bg-white hover:shadow-md transition-all font-medium border border-gray-200">
                  Empfehlungen
                </a>
              </div>
            </div>
          </section>

          <section id="pakete-detail" className="py-12 sm:py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                <div className="bg-white border-2 border-gray-200 rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl text-center mb-6">
                    <h2 className="text-2xl sm:text-3xl font-bold">Basis Paket</h2>
                    <p className="text-blue-100 mt-1">TP-Link Hardware</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-orange-100 p-2 rounded-lg mr-3">
                          <Thermometer className="h-6 w-6 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Thermostat: KE100</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Für normale Heizkörper</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Mit allen gängigen Adaptern</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Display mit Temperaturanzeige</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Testsieger (IM TEST)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <Home className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Hub: H100</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Zentrale Steuereinheit</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Verbindet alle Geräte</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Kompaktes Design</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-2 rounded-lg mr-3">
                          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Fenstersensor: T110</h3>
                        <span className="ml-2 text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">Optional</span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Erkennt offene Fenster</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Automatische Heizungsabschaltung</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Gegen Aufpreis erhältlich</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-500 rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all relative">
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-semibold shadow-lg">
                    EMPFOHLEN
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-6 py-3 rounded-2xl text-center mb-6 mt-8">
                    <h2 className="text-2xl sm:text-3xl font-bold">Premium Paket</h2>
                    <p className="text-orange-100 mt-1">tado° Hardware</p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-orange-100 p-2 rounded-lg mr-3">
                          <Thermometer className="h-6 w-6 text-orange-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Thermostat: Thermostat X</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Premium Display mit Touch-Bedienung</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Für Heizkörper & Fußbodenheizung</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Mit allen gängigen Adaptern</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Deutscher Hersteller</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                          <Home className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Hub: HUB X</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Hochwertige Zentrale</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Erweiterte Funktionen</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Elegantes Design</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-2 rounded-lg mr-3">
                          <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Fenster-Erkennung</h3>
                        <span className="ml-2 text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-semibold">Integriert</span>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Intelligente Temperaturerkennung</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Automatische Anpassung</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Ohne zusätzliche Sensoren</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-100 p-2 rounded-lg mr-3">
                          <Thermometer className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">Fußbodenheizung</h3>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Speziell für Fußbodenheizung</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Elegantes Wandthermostat</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">Präzise Temperaturregelung</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="vergleichstabelle" className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 sm:p-10 rounded-3xl shadow-2xl">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Direkt-Vergleich</h2>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-4 px-4 font-semibold">Merkmal</th>
                        <th className="text-center py-4 px-4 font-semibold">Basis Paket</th>
                        <th className="text-center py-4 px-4 font-semibold bg-orange-900/30 rounded-t-xl">Premium Paket</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-gray-700">
                        <td className="py-4 px-4 font-medium">Hersteller</td>
                        <td className="py-4 px-4 text-center">TP-Link (Tapo)</td>
                        <td className="py-4 px-4 text-center bg-orange-900/10">tado° (Deutschland)</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-4 px-4 font-medium">Heizkörper</td>
                        <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                        <td className="py-4 px-4 text-center bg-orange-900/10"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-4 px-4 font-medium">Fußbodenheizung</td>
                        <td className="py-4 px-4 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                        <td className="py-4 px-4 text-center bg-orange-900/10"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-4 px-4 font-medium">Fenster-Auf-Erkennung</td>
                        <td className="py-4 px-4 text-center text-xs">Optional (extra Sensor)</td>
                        <td className="py-4 px-4 text-center bg-orange-900/10 text-xs">Integriert</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-4 px-4 font-medium">Display</td>
                        <td className="py-4 px-4 text-center text-xs">Standard LED</td>
                        <td className="py-4 px-4 text-center bg-orange-900/10 text-xs">Premium Touch-Display</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-4 px-4 font-medium">App-Steuerung</td>
                        <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                        <td className="py-4 px-4 text-center bg-orange-900/10"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-4 px-4 font-medium">Sprachsteuerung</td>
                        <td className="py-4 px-4 text-center text-xs">Alexa, Google, Siri (Matter)</td>
                        <td className="py-4 px-4 text-center bg-orange-900/10 text-xs">Alexa, Google, Siri (Matter)</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-4 px-4 font-medium">Geofencing</td>
                        <td className="py-4 px-4 text-center"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                        <td className="py-4 px-4 text-center bg-orange-900/10"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="py-4 px-4 font-medium">Wetter-Integration</td>
                        <td className="py-4 px-4 text-center"><X className="h-5 w-5 text-red-400 mx-auto" /></td>
                        <td className="py-4 px-4 text-center bg-orange-900/10"><Check className="h-5 w-5 text-green-400 mx-auto" /></td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-medium">Preis</td>
                        <td className="py-4 px-4 text-center text-xs">Auf Anfrage</td>
                        <td className="py-4 px-4 text-center bg-orange-900/10 rounded-b-xl text-xs">Auf Anfrage</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="empfehlung" className="mt-12 bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 rounded-3xl border-2 border-blue-200 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 text-center">Welches Paket ist das richtige für Sie?</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-2xl border-2 border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <Thermometer className="h-5 w-5 text-blue-600" />
                      </div>
                      Basis Paket empfohlen für:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Wohnungen mit normalen Heizkörpern</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Einstieg in Smart Home Heizung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Kosteneffiziente Lösung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Grundfunktionen sind ausreichend</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-300">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <div className="bg-orange-100 p-2 rounded-lg mr-3">
                        <Thermometer className="h-5 w-5 text-orange-600" />
                      </div>
                      Premium Paket empfohlen für:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">Häuser mit Fußbodenheizung</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">Maximale Energieeffizienz gewünscht</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">Premium Design & Funktionen</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="font-medium">Erweiterte Smart Home Integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  <button onClick={() => navigateToPage('home')} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all font-semibold inline-flex items-center">
                    Jetzt beraten lassen
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
