export default function Services() {
    return (
        <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-visible">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* ── Left: circular image + triangle decorations ── */}
            <div className="w-full lg:w-1/2 flex justify-center relative">
                <svg className="absolute -top-4 -left-1 z-10 hidden lg:block" width="218" height="181" viewBox="0 0 238 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M118.646 0L237.291 200.25H3.05176e-05L118.646 0Z" fill="#FF7171"/>
                </svg>
                <svg className="absolute -bottom-6 -right-[1%] z-30 hidden lg:block" width="218" height="181" viewBox="0 0 238 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M118.646 0L237.291 200.25H3.05176e-05L118.646 0Z" fill="#FF7171"/>
                </svg>


            <div className="relative z-20">
                <svg
                className="pointer-events-none absolute left-1/2 top-1/2 rotate-10 -translate-y-full z-0 hidden lg:block"
                width="1483"
                height="654"
                viewBox="0 0 1483 654"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                >
                <g filter="url(#servicesCurveShadow)">
                    <path
                    d="M1488.65 134.467C1446.64 22.3689 1055.93 -89.3363 963 120.86C835.832 408.504 777.269 398.936 693.689 397.279C610.11 395.623 306.809 225.312 181.153 337.967C41.3569 463.299 144.653 654.467 12.6533 618.728"
                    stroke="#FF6D6D"
                    strokeWidth="5"
                    />
                </g>
                <defs>
                    <filter
                    id="servicesCurveShadow"
                    x="0"
                    y="0"
                    width="1502.99"
                    height="653.604"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                    >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="16" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_750_2439" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_750_2439" result="shape" />
                    </filter>
                </defs>
                </svg>

                <img
                src="team2.png"
                alt="Team at work"
                className="relative z-10 w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full object-cover border-4 border-white shadow-xl"
                />
            </div>
            </div>

            {/* ── Right: text ── */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-5">
                <span className="inline-block rounded-full bg-[#d9eadb] px-3">See</span> how we can
                <br />
                help you{' '}
                <span className="relative inline-block px-1">
                progress
                <svg
                        className="absolute -left-[10%] top-[80%] w-[300px] h-[30px] pointer-events-none"
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
                </span>
            </h2>
            <p className="text-gray-900 text-base sm:text-lg leading-relaxed mb-7 max-w-[580px] mx-auto lg:mx-0">
                We add a layer of fearless insights and action that allows change
                makers to accelerate their progress in areas such as brand, design
                digital, comms and social research.
            </p>
            <a
                href="#"
                className="inline-flex items-center gap-1 text-sm text-gray-600 border-b border-gray-400 pb-0.5 hover:border-gray-900 transition-colors"
            >
                Read more
            </a>
            </div>
        </div>
        </section>
    );
}