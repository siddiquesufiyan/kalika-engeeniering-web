"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const industries = [
{
id: 1,
title: "Automotive",
description:
"Components for automotive applications, designed for reliability, performance and long-term use.",
image: "/automotive-industry.jpg",
href: "/industries/automotive",
},
{
id: 2,
title: "Electrical",
description:
"Precision plastic and rubber components developed for electrical equipment and assemblies.",
image: "/electrical-industry.jpg",
href: "/industries/electrical",
},
{
id: 3,
title: "Agriculture",
description:
"Durable components manufactured for tractors, agricultural machinery and farming equipment.",
image: "/agriculture-industry.jpg",
href: "/industries/agriculture",
},
{
id: 4,
title: "Sanitaryware",
description:
"Quality components designed for sanitaryware applications with excellent fit and durability.",
image: "/sanitaryware-industry.jpg",
href: "/industries/sanitaryware",
},
];

export default function WeServe() {
const { isDarkMode } = useTheme();

return (
<section
className={`         py-16         transition-colors         duration-500         sm:py-20         lg:py-24         ${isDarkMode ? "bg-brand-black" : "bg-white"}       `}
>
<div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">


    {/* SECTION HEADING */}

    <div className="mb-10 max-w-2xl sm:mb-12">

      <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-orange">
        We Serve
      </span>

      <h2
        className={`
          font-heading
          text-3xl
          font-bold
          leading-tight
          transition-colors
          duration-500
          sm:text-4xl
          lg:text-[44px]
          ${isDarkMode ? "text-white" : "text-brand-black"}
        `}
      >
        Industries We{" "}
        <span className="text-brand-orange">
          Serve
        </span>
      </h2>

      <p
        className={`
          mt-4
          max-w-xl
          text-sm
          leading-6
          transition-colors
          duration-500
          sm:text-[15px]
          ${isDarkMode ? "text-gray-400" : "text-gray-600"}
        `}
      >
        We manufacture precision plastic and rubber components for
        multiple industries, delivering reliable solutions for OEMs and
        industrial applications.
      </p>

    </div>

    {/* INDUSTRY CARDS */}

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

      {industries.map((industry) => (

        <Link
          href={industry.href}
          key={industry.id}
          className={`
            group
            overflow-hidden
            rounded-2xl
            border
            shadow-md
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-xl
            ${
              isDarkMode
                ? "border-white/30 bg-[#111111]"
                : "border-gray-100 bg-white"
            }
          `}
        >

          {/* IMAGE */}

          <div
            className={`
              relative
              aspect-[1.35/1]
              overflow-hidden
              ${
                isDarkMode
                  ? "bg-[#181818]"
                  : "bg-gray-100"
              }
            `}
          >

            <Image
              src={industry.image}
              alt={`${industry.title} industry - Kalika Engineering`}
              fill
              sizes="
                (max-width: 640px) 90vw,
                (max-width: 1024px) 45vw,
                25vw
              "
              className="
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />

            {/* IMAGE OVERLAY */}

            <div
              className="
                absolute
                inset-0
                bg-black/0
                transition-all
                duration-500
                group-hover:bg-black/10
              "
            />

          </div>

          {/* CONTENT */}

          <div className="p-5 sm:p-6">

            <h3
              className={`
                font-heading
                text-lg
                font-bold
                transition-colors
                duration-300
                group-hover:text-brand-orange
                sm:text-xl
                ${
                  isDarkMode
                    ? "text-white"
                    : "text-brand-black"
                }
              `}
            >
              {industry.title}
            </h3>

            <p
              className={`
                mt-2
                line-clamp-3
                text-xs
                leading-5
                transition-colors
                duration-300
                sm:text-[13px]
                ${
                  isDarkMode
                    ? "text-gray-400"
                    : "text-gray-500"
                }
              `}
            >
              {industry.description}
            </p>

            {/* BOTTOM CTA */}

            <div className="mt-5 flex items-center justify-between">

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-brand-orange
                "
              >
                Learn More
              </span>

              <span
                className={`
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  transition-all
                  duration-300
                  group-hover:border-brand-orange
                  group-hover:bg-brand-orange
                  group-hover:text-white
                  ${
                    isDarkMode
                      ? "border-white/30 text-white"
                      : "border-gray-200 text-brand-black"
                  }
                `}
              >
                <ArrowRight
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                />
              </span>

            </div>

          </div>

        </Link>

      ))}

    </div>

  </div>
</section>


);
}
