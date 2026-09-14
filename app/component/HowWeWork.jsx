"use client";

import Image from "next/image";
import Link from "next/link";
import {
ClipboardCheck,
PencilRuler,
Factory,
ShieldCheck,
Truck,
ArrowRight,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const processSteps = [
{
id: "01",
title: "Requirement & Application",
description:
"We understand your component requirement, application, dimensions, material needs, drawings or samples before moving ahead.",
icon: ClipboardCheck,
},
{
id: "02",
title: "Design & Development",
description:
"Based on your requirements, we work on component development, tooling and moulding considerations for reliable production.",
icon: PencilRuler,
},
{
id: "03",
title: "Material & Manufacturing",
description:
"The suitable plastic or rubber material is selected and components are manufactured through controlled production processes.",
icon: Factory,
},
{
id: "04",
title: "Quality Inspection",
description:
"Components are checked for dimensions, fit, finish, consistency and other requirements before approval for delivery.",
icon: ShieldCheck,
},
{
id: "05",
title: "Packing & Delivery",
description:
"Once approved, finished components are packed carefully and dispatched according to the agreed quantity and delivery schedule.",
icon: Truck,
},
];

export default function HowWeWork() {
const { isDarkMode } = useTheme();

return (
<section
className={`         py-16         transition-colors         duration-500         sm:py-20         lg:py-24         ${isDarkMode ? "bg-brand-black" : "bg-white"}       `}
>
<div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">


    {/* SECTION HEADING */}

    <div className="mx-auto max-w-3xl text-center">

      <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-orange">
        How We Work
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
        From Your Requirement to a{" "}
        <span className="text-brand-orange">
          Reliable Component
        </span>
      </h2>

      <p
        className={`
          mx-auto
          mt-4
          max-w-2xl
          text-sm
          leading-6
          transition-colors
          duration-500
          sm:text-[15px]
          ${isDarkMode ? "text-gray-400" : "text-gray-600"}
        `}
      >
        Every component starts with understanding your requirement. We
        work closely with OEMs and businesses to develop, manufacture and
        deliver plastic and rubber components with consistent quality.
      </p>

    </div>

    {/* PROCESS STEPS */}

    <div className="relative mt-14 lg:mt-16">

      {/* Desktop Connecting Line */}

      <div
        className={`
          absolute
          left-[10%]
          right-[10%]
          top-[27px]
          hidden
          h-px
          lg:block
          ${
            isDarkMode
              ? "bg-white/30"
              : "bg-gray-200"
          }
        `}
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">

        {processSteps.map((step) => {
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              className="group relative"
            >

              {/* ICON */}

              <div
                className={`
                  relative
                  z-10
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  shadow-sm
                  transition-all
                  duration-300
                  group-hover:border-brand-orange
                  group-hover:bg-brand-orange
                  ${
                    isDarkMode
                      ? "border-white/30 bg-[#111111]"
                      : "border-gray-200 bg-white"
                  }
                `}
              >
                <Icon
                  size={21}
                  strokeWidth={1.8}
                  className="
                    text-brand-orange
                    transition-colors
                    duration-300
                    group-hover:text-white
                  "
                />
              </div>

              {/* STEP CONTENT */}

              <div className="mt-5 text-center">

                <span className="text-[10px] font-bold tracking-[0.15em] text-brand-orange">
                  STEP {step.id}
                </span>

                <h3
                  className={`
                    mt-2
                    font-heading
                    text-base
                    font-bold
                    leading-snug
                    transition-colors
                    duration-300
                    sm:text-lg
                    ${
                      isDarkMode
                        ? "text-white"
                        : "text-brand-black"
                    }
                  `}
                >
                  {step.title}
                </h3>

                <p
                  className={`
                    mx-auto
                    mt-2
                    max-w-[230px]
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
                  {step.description}
                </p>

              </div>

            </div>
          );
        })}

      </div>
    </div>

    {/* BOTTOM FEATURE BLOCK */}

    <div
      className={`
        mt-14
        grid
        overflow-hidden
        rounded-2xl
        border
        transition-colors
        duration-500
        lg:mt-16
        lg:grid-cols-[1.05fr_0.95fr]
        ${
          isDarkMode
            ? "border-white/30 bg-[#111111]"
            : "border-gray-200 bg-brand-black"
        }
      `}
    >

      {/* IMAGE */}

      <div
        className="
          relative
          min-h-[260px]
          overflow-hidden
          sm:min-h-[320px]
          lg:min-h-[350px]
        "
      >
        <Image
          src="/manufacturing-process.png"
          alt="Kalika Engineering manufacturing process"
          fill
          sizes="
            (max-width: 1024px) 100vw,
            55vw
          "
          className="
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* CONTENT */}

      <div
        className={`
          flex
          flex-col
          justify-center
          p-7
          transition-colors
          duration-500
          sm:p-10
          lg:p-12
          ${
            isDarkMode
              ? "bg-[#111111]"
              : "bg-brand-black"
          }
        `}
      >

        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-orange">
          Precision at Every Step
        </span>

        <h3 className="mt-3 max-w-lg font-heading text-2xl font-bold leading-tight text-white sm:text-3xl">
          Built Around Your{" "}
          <span className="text-brand-orange">
            Requirements
          </span>
        </h3>

        <p className="mt-4 max-w-lg text-sm leading-6 text-gray-300">
          From material selection and mould development to manufacturing
          and final inspection, our process is focused on producing
          components that meet your application and quality requirements.
        </p>

        {/* CTA */}

        <div className="mt-6">

          <Link
            href="/contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-brand-orange
              px-5
              py-3
              text-xs
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-white
              hover:text-brand-black
            "
          >
            Discuss Your Requirement

            <ArrowRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

      </div>

    </div>

  </div>
</section>


);
}
