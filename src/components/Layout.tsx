import { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import projectData from '../../data/project.json';

const { meta } = projectData;

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/fases/0', label: 'Fases' },
    { to: '/tecnologia', label: 'Tecnología' },
    { to: '/inversion', label: 'Inversión' },
    { to: '/vision', label: 'Visión' },
    { to: '/transparencia', label: 'Transparencia' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-black-deep">
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Saltar al contenido principal
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 no-underline" aria-label="Inicio Montemolín AI Hub">
              <LogoMark />
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-green-primary">{meta.acronym}</span>
                <span className="block text-xs text-gray-600">{meta.statusShort}</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-green-light hover:text-green-primary ${
                    location.pathname === link.to ? 'nav-link-active' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              ref={menuButtonRef}
              type="button"
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus-visible:outline-green-primary"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav id="mobile-menu" className="lg:hidden border-t border-gray-200 bg-white" aria-label="Navegación móvil">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-2 text-base font-medium rounded-md ${
                    location.pathname === link.to
                      ? 'bg-green-light text-green-primary font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Main content */}
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black-deep text-white mt-16" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LogoMark light />
                <span className="font-bold text-lg">{meta.acronym}</span>
              </div>
              <p className="text-gray-300 text-sm">
                Propuesta de Hub europeo de inteligencia artificial confiable y despliegue empresarial desde Montemolín, Extremadura.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-green-secondary">Navegación</h3>
              <ul className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-gray-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-green-secondary">Aviso</h3>
              <p className="text-gray-300 text-sm">
                Este sitio tiene carácter demostrativo. El proyecto está en preparación y no ha recibido financiación de la Unión Europea.
                Convocatoria de referencia: {meta.call}.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} {meta.fullName}. Sitio demostrativo. No constituye comunicación oficial de financiación.</p>
            <p className="mt-1">Región: {meta.region} · NUTS2: {meta.nuts2}</p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 bg-green-primary text-white p-3 rounded-full shadow-lg hover:bg-green-secondary transition-colors focus-visible:outline-white"
          aria-label="Volver arriba"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <rect width="64" height="22" fill="#006B3F" rx="4" />
      <rect y="22" width="64" height="20" fill={light ? "#333" : "#FFFFFF"} />
      <rect y="42" width="64" height="22" fill="#1A1A1A" rx="4" />
      <circle cx="32" cy="32" r="8" fill="none" stroke="#006B3F" strokeWidth="2.5" />
      <path d="M28 32 L32 27 L36 32 L32 37Z" fill="#006B3F" />
    </svg>
  );
}
