import { useState } from 'react';

export default function Navbar() {
  const links = ['Home', 'Studio', 'Services', 'Contact', 'FAQs'];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 lg:py-5 max-w-6xl mx-auto">
      <span className="navbar-brand text-base font-semibold tracking-tight text-gray-900">
        Elementum
      </span>

      <ul className="hidden lg:flex items-center gap-8">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-sm text-black hover:text-gray-900 transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger for mobile */}
      <button
        className="flex lg:hidden flex-col gap-[5px] p-1"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-controls="mobile-nav"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="w-6 h-[2px] bg-gray-700 block" />
        <span className="w-6 h-[2px] bg-gray-700 block" />
        <span className="w-6 h-[2px] bg-gray-700 block" />
      </button>

      <div
        id="mobile-nav"
        className={`absolute z-50 left-4 right-4 top-full mt-3 rounded-2xl border border-gray-200 bg-white shadow-lg p-4 lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-3">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="block text-sm text-black hover:text-gray-900 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}