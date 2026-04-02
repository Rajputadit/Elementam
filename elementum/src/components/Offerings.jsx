const items = [
  {
    tag: 'Office of multiple interest content',
    title: 'Colaborative & partnership',
  },
  {
    tag: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    tag: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
  },
];

export default function Offerings() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-8 pb-24 overflow-visible">
        {/* Red decorative swoosh to the right of heading */}
        <svg
          className="pointer-events-none absolute left-[64%] -top-[70%] z-0 w-[864px] h-[654px] -translate-x-1/4 hidden lg:block"
          viewBox="0 0 864 654"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_750_2558)">
            <path d="M1488.65 134.467C1446.64 22.3689 1055.93 -89.3363 963 120.86C835.832 408.504 777.269 398.936 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.3569 463.299 144.653 654.467 12.6533 618.728" stroke="#FF6D6D" stroke-width="5"/>
            </g>
            <defs>
            <filter id="filter0_d_750_2558" x="0" y="0" width="1502.99" height="653.604" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="16"/>
            <feGaussianBlur stdDeviation="6"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_750_2558"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_750_2558" result="shape"/>
            </filter>
            </defs>
        </svg>
      {/* Section heading */}
      <div className="mb-10 relative">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          What we{' '}
          <span className="inline-block rounded-full bg-[#d9eadb] px-3">can</span>
          <br />
          <span className="relative inline-block px-1">
              offer
              <svg
                    className="absolute -left-[10%] top-[80%] w-[230px] h-[30px] pointer-events-none"
                    viewBox="0 0 500 40"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M50 6 L390 3 L10 20 L490 21 L300 30"
                      stroke="#f3b33c"
                      strokeWidth="3"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
            </span>{' '} you!
        </h2>

        

      </div>

      {/* Offering rows */}
      <div className="flex flex-col divide-y divide-gray-400">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-center justify-between py-6 gap-3 md:gap-6 group cursor-pointer"
          >
            {/* Tag / descriptor */}
            <p className="text-gray-800 text-sm leading-relaxed w-full md:w-36 shrink-0">
              {item.tag}
            </p>

            {/* Title */}
            <h3 className="flex text-2xl md:text-3xl font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
              {item.title}
            </h3>

            {/* Arrow */}
            <span className="text-gray-400 text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}