
"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

function Cta() {
  const { isDarkMode } = useTheme();

  return (
    <section
      className={`
        py-16
        transition-colors
        duration-300
        sm:py-20
        lg:py-24
        ${
          isDarkMode
            ? "bg-brand-black"
            : "bg-white"
        }
      `}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`
            rounded-3xl
            border
            px-6
            py-12
            text-center
            shadow-sm
            transition-all
            duration-300
            sm:px-10
            sm:py-14
            lg:px-16
            lg:py-16
            ${
              isDarkMode
                ? "border-white/30 bg-white/[0.03] shadow-black/20"
                : "border-gray-200 bg-gray-50 shadow-gray-200/50"
            }
          `}
        >
          {/* Small Label */}
          <p
            className="
              mb-3
              text-sm
              font-semibold
              uppercase
              tracking-widest
              text-brand-orange
            "
          >
            Let's Work Together
          </p>

          {/* Heading */}
          <h2
            className={`
              mx-auto
              max-w-3xl
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
            Have a Component Requirement?
          </h2>

          {/* Description */}
          <p
            className={`
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              sm:text-base
              sm:leading-8
              ${
                isDarkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            `}
          >
            Whether you need a plastic part, rubber component, automobile
            component, replacement part, or a customized manufacturing
            solution, share your requirement with our team. We will understand
            your application and help you with the right manufacturing
            solution.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="
              mt-8
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-brand-orange
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              shadow-md
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-brand-black
              hover:shadow-lg
              dark:hover:bg-white
              dark:hover:text-brand-black
              sm:px-8
            "
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>

          {/* Bottom Trust Line */}
          <p
            className={`
              mt-5
              text-xs
              font-medium
              sm:text-sm
              ${
                isDarkMode
                  ? "text-gray-500"
                  : "text-gray-500"
              }
            `}
          >
            OEMs · Automobile · Industrial · Workshops · Hardware · Local
            Businesses
          </p>
        </div>
      </div>
    </section>
  );
}

export default Cta;

