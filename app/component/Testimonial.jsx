
"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    image: "/testimonialscustomer1.jpeg",
    rating: 5,
    description:
      "Kalika Engineering has been a reliable manufacturing partner for us. The quality of their components is excellent and their team always understands our requirements perfectly.",
  },
  {
    name: "Amit Sharma",
    role: "Purchase Manager",
    image: "/testimonialscustomer2.jpeg",
    rating: 5,
    description:
      "We have been working with Kalika Engineering for our customized components and the experience has been excellent. Their quality, consistency and timely delivery really stand out.",
  },
  {
    name: "Vikas Mehta",
    role: "Production Head",
    image: "/testimonialscustomer3.jpeg",
    rating: 5,
    description:
      "The team at Kalika Engineering provides excellent support from development to final production. Their manufacturing quality and attention to detail are highly appreciated.",
  },
];

function Testimonial() {
  const [current, setCurrent] = useState(0);
  const { isDarkMode } = useTheme();

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className={`
        relative
        overflow-hidden
        py-16
        transition-colors
        duration-300
        sm:py-20
        lg:py-24
        ${isDarkMode ? "bg-brand-black" : "bg-white"}
      `}
    >
      {/* Background Decoration */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-72
          w-72
          rounded-full
          bg-brand-orange/10
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-72
          w-72
          rounded-full
          bg-brand-orange/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <span
            className="
              mb-3
              inline-block
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-brand-orange
            "
          >
            Client Testimonials
          </span>

          <h2
            className={`
              font-heading
              text-3xl
              font-bold
              leading-tight
              sm:text-4xl
              lg:text-5xl
              ${
                isDarkMode
                  ? "text-brand-white"
                  : "text-brand-black"
              }
            `}
          >
            What Our Customers Say
          </h2>

          <p
            className={`
              mt-4
              text-sm
              leading-7
              sm:text-base
              ${
                isDarkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            `}
          >
            Trusted by businesses for quality manufacturing, reliable service
            and customized component solutions.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="mx-auto max-w-5xl">
          <div
            className={`
              relative
              overflow-hidden
              rounded-3xl
              border
              px-5
              py-8
              transition-all
              duration-300
              sm:px-10
              sm:py-10
              lg:px-16
              lg:py-14
              ${
                isDarkMode
                  ? "border-white/30 bg-white/[0.04] shadow-xl shadow-black/20"
                  : "border-gray-200 bg-gray-50 shadow-xl shadow-black/5"
              }
            `}
          >
            {/* Quote Icon */}
            <div
              className="
                absolute
                right-6
                top-5
                opacity-10
                sm:right-10
                sm:top-8
              "
            >
              <Quote
                size={90}
                strokeWidth={1.5}
                className="text-brand-orange"
              />
            </div>

            <div
              className="
                relative
                z-10
                flex
                flex-col
                items-center
                gap-8
                lg:flex-row
                lg:items-center
                lg:gap-12
              "
            >
              {/* Customer Image */}
              <div className="shrink-0">
                <div
                  className="
                    relative
                    h-28
                    w-28
                    sm:h-36
                    sm:w-36
                    lg:h-40
                    lg:w-40
                  "
                >
                  {/* Orange Ring */}
                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border-4
                      border-brand-orange
                    "
                  />

                  {/* Image */}
                  <div
                    className={`
                      absolute
                      inset-[5px]
                      overflow-hidden
                      rounded-full
                      ${
                        isDarkMode
                          ? "bg-gray-800"
                          : "bg-gray-200"
                      }
                    `}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="160px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center lg:text-left">

                {/* Stars */}
                <div className="mb-4 flex justify-center gap-1 lg:justify-start">
                  {Array.from({
                    length: testimonial.rating,
                  }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      fill="currentColor"
                      className="text-brand-orange"
                    />
                  ))}
                </div>

                {/* Description */}
                <p
                  className={`
                    text-base
                    leading-7
                    sm:text-lg
                    sm:leading-8
                    ${
                      isDarkMode
                        ? "text-gray-300"
                        : "text-gray-700"
                    }
                  `}
                >
                  “{testimonial.description}”
                </p>

                {/* Customer Details */}
                <div className="mt-6">
                  <h3
                    className={`
                      font-heading
                      text-lg
                      font-bold
                      sm:text-xl
                      ${
                        isDarkMode
                          ? "text-brand-white"
                          : "text-brand-black"
                      }
                    `}
                  >
                    {testimonial.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-medium
                      text-brand-orange
                    "
                  >
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-3
                lg:absolute
                lg:bottom-8
                lg:right-10
                lg:mt-0
              "
            >
              {/* Previous */}
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    isDarkMode
                      ? "border border-white/30 bg-white/5 text-white hover:border-brand-orange hover:bg-brand-orange"
                      : "border border-gray-300 bg-white text-brand-black hover:border-brand-orange hover:bg-brand-orange hover:text-white"
                  }
                `}
              >
                <ChevronLeft size={21} />
              </button>

              {/* Next */}
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-brand-orange
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-orange-600
                "
              >
                <ChevronRight size={21} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-7 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                aria-label={`Go to testimonial ${index + 1}`}
                className={`
                  h-2
                  rounded-full
                  transition-all
                  duration-300
                  ${
                    current === index
                      ? "w-7 bg-brand-orange"
                      : isDarkMode
                        ? "w-2 bg-white/30"
                        : "w-2 bg-gray-300"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

