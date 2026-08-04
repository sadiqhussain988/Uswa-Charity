import { timeline } from "../../data/site";
import SectionHeading from "../common/SectionHeading";

function Journey() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8FCF8] to-[#EEF8F1]">
      <div className="container-page">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Our Journey"
          title="From Grassroots Beginnings to Community Impact"
          text="Guided by our vision and commitment since 2013, USWA has continued expanding its services and creating meaningful change in communities."
        />

        {/* Journey Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {timeline.map((item, index) => (
            <div
              key={item.period}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden"
            >
              {/* Top Gradient */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-600 to-emerald-400"></div>

              {/* Year Circle */}
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-lg shadow-md group-hover:bg-green-700 group-hover:text-white transition duration-300">
                {index + 1}
              </div>

              {/* Period */}
              <span className="inline-block mt-6 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
                {item.period}
              </span>

              {/* Title */}
              <h3 className="mt-5 text-2xl font-bold text-gray-900 group-hover:text-green-700 transition duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 leading-7">
                {item.text}
              </p>

              {/* Bottom Line */}
              <div className="mt-8 flex items-center justify-between">
                <span className="text-green-700 font-semibold">
                  Our Progress
                </span>

                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-700 transition duration-300">
                  <span className="text-green-700 group-hover:text-white transition duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              {/* Decorative Background */}
              <div className="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-green-100/30 group-hover:scale-125 transition-transform duration-700"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Journey;