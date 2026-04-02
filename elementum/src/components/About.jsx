export default function About() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-20 overflow-visible">

      {/* Soft pink radial blob */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/4 w-56 h-56 rounded-full pointer-events-none opacity-25 hidden lg:block"
        style={{ background: 'radial-gradient(circle, #fb7185 0%, transparent 70%)' }}
      />

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* ── Left: text ── */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug mb-5">
            <span className="relative inline-block px-1">
              Tomorrow
              <svg
                    className="absolute -left-[10%] top-[70%] w-[250px] h-[30px] pointer-events-none"
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
            </span>{' '}
            should
            <br />
            be better than <span className="inline-block rounded-full bg-[#d9eadb] px-3">today</span>
          </h2>
          <p className="text-gray-900 text-sm leading-relaxed mb-7 max-w-[480px] mx-auto lg:mx-0">
            We are a team of strategists, designers communicators, researchers,
            Togeather, we belive that progress only happens when you refuse to
            play things safe.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Read more <span className="text-base leading-none">›</span>
          </a>
        </div>

        {/* ── Right: circular image + decorative square ── */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          {/* Coral square — slightly rotated and peeking behind image */}
          <div
            className="absolute top-6 right-10 z-10 w-26 h-26 bg-[#f87171] rotate-[14deg] hidden lg:block"
          />
          <img
            src="team.png"
            alt="Team collaborating"
            className="relative z-20 w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-full object-cover border-4 border-white shadow-xl"
          />
        </div>
      </div>

      
    </section>
  );
}