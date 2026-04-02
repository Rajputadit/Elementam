export default function Newsletter() {
  return (
    <section className="relative bg-[#d9e8d9] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24 lg:py-32 text-center relative z-10">

        {/* Decorative red squiggle top-left */}
        <svg
          className="pointer-events-none absolute top-0 left-80 hidden lg:block"
          width="178"
          height="123"
          viewBox="0 0 178 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M12.5437 122.809C13.2663 123.214 14.1805 122.956 14.5855 122.233L21.1856 110.457C21.5906 109.734 21.3331 108.82 20.6104 108.415C19.8877 108.01 18.9736 108.267 18.5686 108.99L12.7018 119.458L2.23371 113.591C1.51104 113.186 0.596869 113.444 0.191855 114.167C-0.213159 114.889 0.0443544 115.803 0.767027 116.208L12.5437 122.809ZM13.277 121.5L14.7208 121.093C13.2468 115.861 14.7419 106.161 25.4136 94.9465C36.0672 83.7509 55.7639 71.1882 90.2239 60.4319L89.777 59L89.3301 57.5681C54.5901 68.4118 34.3701 81.1824 23.2404 92.8785C12.1288 104.555 9.97385 115.306 11.8332 121.907L13.277 121.5ZM89.777 59L90.2239 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.875 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3301 57.5681L89.777 59Z" fill="#FF6D6D"/>
        </svg>
        <svg
          className="pointer-events-none absolute top-0 left-[25rem] hidden lg:block"
          width="178"
          height="123"
          viewBox="0 0 178 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M12.5437 122.809C13.2663 123.214 14.1805 122.956 14.5855 122.233L21.1856 110.457C21.5906 109.734 21.3331 108.82 20.6104 108.415C19.8877 108.01 18.9736 108.267 18.5686 108.99L12.7018 119.458L2.23371 113.591C1.51104 113.186 0.596869 113.444 0.191855 114.167C-0.213159 114.889 0.0443544 115.803 0.767027 116.208L12.5437 122.809ZM13.277 121.5L14.7208 121.093C13.2468 115.861 14.7419 106.161 25.4136 94.9465C36.0672 83.7509 55.7639 71.1882 90.2239 60.4319L89.777 59L89.3301 57.5681C54.5901 68.4118 34.3701 81.1824 23.2404 92.8785C12.1288 104.555 9.97385 115.306 11.8332 121.907L13.277 121.5ZM89.777 59L90.2239 60.4319C124.946 49.5938 146.763 37.4335 159.932 26.5565C173.03 15.7387 177.777 6.00587 177.777 1.64509e-05L176.277 0L174.777 -1.64509e-05C174.777 4.6608 170.875 13.628 158.022 24.2435C145.241 34.7998 123.808 46.8062 89.3301 57.5681L89.777 59Z" fill="#FF6D6D"/>
        </svg>



        <div className="pointer-events-none absolute right-[10%] top-[42%] h-[120px] w-[60px] rotate-[190deg] rounded-r-full bg-[#8b5cf6] hidden lg:block" />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
          Subscribe to
          <br />
          our newsletter
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          To make your stay special and even more memorable
        </p>

        <button className="bg-gray-900 text-white text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-700 transition-colors">
          Subscribe Now
        </button>
      </div>
    </section>
  );
}