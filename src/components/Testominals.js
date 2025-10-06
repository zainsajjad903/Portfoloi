import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Ali Amad Khan",
      title: "Founder of Subtle Marketing",
      quote:
        "“Zain built a complete Expense Tracker app for our company Subtle Marketing. The application made our expense management process smooth and efficient. He is highly skilled in MERN Stack and delivers on time",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <>
      <section className="py-14 bg-gray-50" data-aos="fade-up">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-8">Testimonials</h1>
            {/* <h3 className="text-indigo-600 font-semibold pb-6">
              What people are saying
            </h3> */}
            <ul>
              {testimonials.map((item, idx) =>
                currentTestimonial === idx ? (
                  <li key={idx}>
                    <figure>
                      <blockquote>
                        <p className="text-gray-600 text-1xl font-semibold sm:text-2xl">
                          “{item.quote}“
                        </p>
                      </blockquote>
                      <div className="mt-6">
                        <img
                          src={item.avatar}
                          className="w-16 h-16 mx-auto rounded-full"
                          alt={item.name}
                        />
                        <div className="mt-3">
                          <span className="block text-gray-800 font-semibold">
                            {item.name}
                          </span>
                          <span className="block text-gray-600 text-sm mt-0.5">
                            {item.title}
                          </span>
                        </div>
                      </div>
                    </figure>
                  </li>
                ) : (
                  ""
                )
              )}
            </ul>
          </div>
          <div className="mt-6">
            <ul className="flex gap-x-3 justify-center">
              {testimonials.map((item, idx) => (
                <li key={idx}>
                  <button
                    className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${
                      currentTestimonial === idx
                        ? "bg-indigo-600"
                        : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonial(idx)}
                  ></button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonials;
