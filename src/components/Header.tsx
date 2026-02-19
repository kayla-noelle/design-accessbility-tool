import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Palette Generator', href: '#palette' },
  { label: 'Contrast Check', href: '#contrast' },
  { label: 'Color Picker', href: '#colors' },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 truncate">
            Design Accessibility Tool
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 font-normal mt-0.5 hidden sm:block">
            WCAG Contrast Checks for Designers
          </p>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 flex-shrink-0">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Hamburger Button (mobile only) */}
        <button
          className="md:hidden flex-shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          <div className="relative w-5 h-4">
            <span
              className={`absolute block w-full h-0.5 bg-gray-700 transition-all duration-300 origin-center ${
                mobileOpen ? 'top-[7px] rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute block w-full h-0.5 bg-gray-700 top-[7px] transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute block w-full h-0.5 bg-gray-700 transition-all duration-300 origin-center ${
                mobileOpen ? 'top-[7px] -rotate-45' : 'top-[14px]'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t border-gray-100 bg-white px-4 py-2 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
