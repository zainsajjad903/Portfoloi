const HeroSection = () => {
  return (
    <>
      <div
        className="max-w-screen-xl mx-auto px-4 py-20  md:flex md:items-center md:gap-12"
        data-aos="fade-up"
      >
        {/* Image - Mobile top */}
        <div className="flex justify-center mb-8 md:hidden">
          <img
            src="/image.png"
            alt="Progressive app Illustration"
            className="
    w-48 h-48 object-cover object-top shadow-xl 
    border-4 border-indigo-500 rounded-full mx-auto
    md:w-full md:max-w-md md:h-auto md:rounded-2xl md:border md:border-gray-200
  "
          />
        </div>

        {/* LEFT: Image (Desktop) */}
        <div className="flex-1 hidden md:flex items-center justify-center">
          <img
            src="/image.png"
            alt="Progressive app Illustration"
            className="
    w-40 h-40 object-cover shadow-xl border-4 border-indigo-500 rounded-full mx-auto
    md:w-full md:max-w-md md:h-auto md:rounded-2xl md:border md:border-gray-200
  "
          />
        </div>

        {/* RIGHT: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold  whitespace-nowrap">
            Front end Developer
          </h1>
          <p className="mt-4 max-w-lg mx-auto md:mx-0">
            Showcasing my expertise in modern web development, creating fast,
            responsive and user-friendly websites that drive results.
          </p>
          <div className="mt-6">
            <a
              href="/MuhammadZainCV.pdf"
              download
              className="inline-flex items-center gap-x-2 px-6 py-3 text-white bg-indigo-600 rounded-full shadow-md hover:bg-indigo-700 transition"
            >
              Download My CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm7 11a1 1 0 01-1-1V7.414L7.707 9.707a1 1 0 01-1.414-1.414l3.999-4a1 1 0 011.416 0l4 4a1 1 0 01-1.416 1.414L11 7.414V13a1 1 0 01-1 1z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
