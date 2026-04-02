const floatingAvatars = [
  {
    src: "https://randomuser.me/api/portraits/men/41.jpg",
    cls: "w-[120px] h-[120px] left-[120px] top-[6px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/36.jpg",
    cls: "w-[70px] h-[70px] left-[34px] top-[220px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/32.jpg",
    cls: "w-[205px] h-[205px] left-[165px] top-[255px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/75.jpg",
    cls: "w-[125px] h-[125px] left-[-2px] bottom-[68px]",
  },

  {
    src: "https://randomuser.me/api/portraits/men/24.jpg",
    cls: "w-[92px] h-[92px] right-[315px] top-[78px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/52.jpg",
    cls: "w-[140px] h-[140px] right-[92px] top-[8px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/67.jpg",
    cls: "w-[105px] h-[105px] right-[280px] top-[240px]",
  },
  {
    src: "https://randomuser.me/api/portraits/men/58.jpg",
    cls: "w-[295px] h-[295px] right-[8px] bottom-[2px]",
  },
];

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-[#ffffff]">
      <div className="relative mx-auto max-w-[1832px] min-h-[654px] px-4 md:px-6 py-2">
        {/* Floating Avatars - Desktop */}
        <div className="hidden xl:block absolute inset-0 pointer-events-none">
          {floatingAvatars.map((avatar, i) => (
            <img
              key={i}
              src={avatar.src}
              alt={`Customer ${i + 1}`}
              className={`absolute ${avatar.cls} rounded-full object-cover`}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Heading */}
          <div className="mt-0 text-center">
            <h2
              className="
                text-black
                font-normal
                tracking-[-0.06em]
                leading-[1.2]
                text-[28px]
                sm:text-[32px]
                md:text-[48px]
                lg:text-[54px]
                xl:text-[54px]
              "
              
            >
              <span className="relative inline-block">
                <span className="inline-block rounded-full bg-[#d9eadb] px-3">What</span>
              </span>{" "}
              our customer
              <br />
              says{" "}
              <span className="relative inline-block px-1">
                <span className="relative inline-block px-1">
                About Us
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

                
              </span>
            </h2>
          </div>

          {/* Testimonial Card */}
          <div
            className="
              relative
              mt-16
              max-w-2xl
              
              rounded-[58px]
              bg-[#e7ebe7]
              px-8
              sm:px-12
              md:px-14
              py-10
              md:py-12
            "
          >
            {/* Opening quote */}
            <div
              className="
                absolute
                left-[12px]
                top-[8px]
                md:left-[42px]
                md:top-[22px]
                text-[100px]
                leading-none
                text-[#bcc1bc]
                font-serif
                select-none
              "
            >
              “
            </div>

            {/* Closing quote */}
            <div
              className="
                absolute
                right-[10px]
                bottom-[-40px]
                md:right-[100px]
                md:bottom-[-30px]
                text-[100px]
                leading-none
                text-[#bcc1bc]
                font-serif
                select-none
              "
            >
              ”
            </div>

            <p
              className="
                relative
                z-10
                text-center
                text-black/90
                font-normal
                leading-[1.55]
                text-sm
                sm:text-md
                md:text-lg
                max-w-[760px]
                mx-auto
              "
              
            >
              Elementum delivered the site with inthe timeline as they requested.
              Inthe end, the client found a 50% increase in traffic with in days
              since its launch. They also had an impressive ability to use
              technologies that the company hasn&apos;t used, which have also
              proved to be easy to use and reliable
            </p>
          </div>

          
          <div className="xl:hidden mt-10 flex flex-wrap justify-center gap-3 px-4">
            {floatingAvatars.slice(0, 6).map((avatar, i) => (
              <img
                key={i}
                src={avatar.src}
                alt={`Customer ${i + 1}`}
                className="w-16 h-16 rounded-full object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}