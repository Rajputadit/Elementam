const avatars = [
  {
    src: "https://randomuser.me/api/portraits/men/75.jpg",
    cls: "w-[140px] h-[140px] left-[-40px] bottom-[10px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/32.jpg",
    cls: "w-[160px] h-[160px] left-[95px] bottom-[28px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/11.jpg",
    cls: "w-[185px] h-[185px] left-[340px] bottom-[120px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/52.jpg",
    cls: "w-[160px] h-[160px] left-[470px] bottom-[-5px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/67.jpg",
    cls: "w-[175px] h-[175px] left-[675px] bottom-[95px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/44.jpg",
    cls: "w-[160px] h-[160px] left-[810px] bottom-[25px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/21.jpg",
    cls: "w-[180px] h-[180px] right-[140px] bottom-[135px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/24.jpg",
    cls: "w-[150px] h-[150px] right-[-10px] bottom-[35px]",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff]">
      <div className="relative mx-auto max-w-[1536px] min-h-[620px] lg:min-h-[860px] px-4 sm:px-6 lg:px-10 pt-8 lg:pt-16 pb-12">
        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Headline */}
          <div className="relative mt-10 sm:mt-14 lg:mt-20">
            {/* Left-lower heading decorations */}
            <div className="pointer-events-none absolute -left-68 top-[62%] hidden lg:block">
              <div className="flex items-end gap-[8px]">
                <svg width="84" height="355" viewBox="0 0 84 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 3.81934C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4.00003 121.61 4.00003 157.005C4.00003 192.401 57.0061 192.401 57.0061 267.833C57.0061 328.179 15.4271 351.389 4.00003 350.809" stroke="#0E0E0E" stroke-width="8"/>
                </svg>

                <svg width="84" height="355" viewBox="0 0 84 355" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 3.81934C36.9367 14.0704 103.271 45.1331 71.6979 87.3753C32.2314 140.178 4.00003 121.61 4.00003 157.005C4.00003 192.401 57.0061 192.401 57.0061 267.833C57.0061 328.179 15.4271 351.389 4.00003 350.809" stroke="#FF7171" stroke-width="8"/>
                </svg>

                
              </div>
              
            </div>
            

            <h1
              className="
                font-normal
                text-black
                tracking-[-0.06em]
                leading-[1.25]
                text-[30px]
                sm:text-[40px]
                md:text-[52px]
                lg:text-[50px]
                xl:text-[78px]
                max-w-[1120px]
              "
              
            >
              <span className="relative inline-block">
                The{" "}
                <span className="relative inline-block px-1">
                  thinkers
                  {/* Zigzag underline */}
                  <svg
                    className="absolute -left-[10%] top-[80%] w-[180px] sm:w-[230px] md:w-[300px] lg:w-[450px] h-[24px] lg:h-[50px] pointer-events-none"
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
                </span>{" "}
                and
              </span>

              <br />

              <span className="relative inline-block">
                doers were{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 px-6 md:px-8">changing</span>
                  <span className="absolute inset-y-[4%] left-2 md:left-40 -right-2 rounded-[999px] bg-[#efb4df]" />
                </span>
              </span>

              <br />

              <span className="relative inline-block">
                the{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 px-6 md:px-8">status</span>
                  <span className="absolute inset-y-[14%] -left-2 -right-2 rounded-[999px] bg-[#d9eadb]" />
                </span>{" "}
                Quo with
              </span>
            </h1>
          </div>

          {/* Sub-copy */}
          <p
            className="
              mt-10
              max-w-[680px]
              text-center
              text-[16px]
              sm:text-[18px]
              md:text-[20px]
              leading-[1.55]
              text-black/80
              font-normal
            "
            style={{
              fontFamily:
                'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}
          >
            We are a team of strategists, designers communicators, researchers.
            Together, we belive that progress only hghappens when you refuse to
            play things safe.
          </p>
          <div className="absolute hidden lg:block right-[8%] top-[50%] h-[108px] w-[54px] rotate-30 rounded-r-full bg-[#8b5cf6]" />
        </div>
        

        {/* Avatar cluster */}
        <div className="relative z-0 mt-14 h-[310px] hidden lg:block">
          {avatars.map((a, i) => (
            <img
              key={i}
              src={a.src}
              alt={`Member ${i + 1}`}
              className={`absolute ${a.cls} rounded-full object-cover shadow-sm`}
            />
          ))}
        </div>

        {/* Mobile avatars (simplified but still close) */}
        <div className="lg:hidden mt-10 flex justify-center gap-3 flex-wrap px-2">
          {avatars.slice(0, 6).map((a, i) => (
            <img
              key={i}
              src={a.src}
              alt={`Member ${i + 1}`}
              className="w-16 h-16 rounded-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}