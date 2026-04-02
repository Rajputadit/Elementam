const columns = [
  {
    heading: 'Company',
    links: ['Home', 'Studio', 'Service', 'Blog'],
  },
  {
    heading: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'License', 'Accessibility'],
  },
  {
    heading: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
  },
  {
    heading: 'Terms & Policies',
    links: ['1698a Flucor en, STE 2D Chicago, IL 63867', '(123) 4567891000', 'Info@elementum.com'],
    noLink: true,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#d9e8d9] border-t border-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {columns.map((col) => (
            <div key={col.heading + col.links[0]}>
              <h4 className="text-sm font-semibold text-gray-700 mb-4">{col.heading}</h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link}>
                    {col.noLink ? (
                      <span className="text-xs text-gray-800 leading-relaxed">{link}</span>
                    ) : (
                      <a
                        href="#"
                        className="text-xs text-gray-800 hover:text-gray-800 transition-colors"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-xs text-gray-400">
            ©2023 Elementum. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}