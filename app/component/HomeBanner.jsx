"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  MapPinned,
  Settings,
  ArrowRight,
} from "lucide-react";

const stats = [
  {
    icon: Award,
    title: "20+ Years",
    subtitle: "of Manufacturing Experience",
  },
  {
    icon: ShieldCheck,
    title: "OEM Quality",
    subtitle: "Precision & Consistency",
  },
  {
    icon: MapPinned,
    title: "Pan-India Supply",
    subtitle: "Reliable Delivery Network",
  },
  {
    icon: Settings,
    title: "Custom Components",
    subtitle: "As per Your Requirements",
  },
];

function HomeBanner() {
  return (
    <section className="w-full ">

      {/* =====================================================
          HERO
      ===================================================== */}
      <div className="relative isolate min-h-[470px] overflow-hidden sm:min-h-[500px] lg:min-h-[535px]">

        {/* Background Image */}
        <Image
          src="/hero-main-banner.png"
          alt="Plastic and rubber components manufactured by Kalika Engineering"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-brand-black/45" />

        {/* Stronger left-side gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/95 via-brand-black/75 to-brand-black/10" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-black/60 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex min-h-[470px] max-w-7xl items-center px-5 py-16 sm:min-h-[500px] sm:px-8 sm:py-20 lg:min-h-[535px] lg:px-8">

          <div className="max-w-xl">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2 sm:mb-5">
              <span className="h-[2px] w-8 bg-brand-orange sm:w-10" />

              <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-brand-white sm:text-xs sm:tracking-[0.25em]">
                Precision
              </p>

              <span className="text-brand-white/40">|</span>

              <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-brand-white sm:text-xs sm:tracking-[0.25em]">
                Quality
              </p>

              <span className="text-brand-white/40">|</span>

              <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-brand-white sm:text-xs sm:tracking-[0.25em]">
                Reliability
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-brand-white sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[62px]">
              Plastic &amp; Rubber
              <span className="block text-brand-orange">
                Components
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-lg font-body text-sm leading-6 text-brand-white/80 sm:mt-6 sm:text-base sm:leading-7">
              High-quality manufacturing solutions for OEMs and
              industrial applications. Precision-engineered components
              built for performance, durability and reliability.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">

              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-orange px-6 py-3 font-body text-xs font-bold text-brand-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange/90 sm:text-sm"
              >
                Request a Quote

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/products"
                className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand-white/50 bg-brand-black/20 px-6 py-3 font-body text-xs font-semibold text-brand-white backdrop-blur-sm transition-all duration-300 hover:border-brand-orange hover:bg-brand-orange sm:text-sm"
              >
                Explore Products

                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

            </div>

          </div>
        </div>

        {/* Small orange accent */}
        <div className="absolute bottom-0 left-0 z-20 h-1 w-24 bg-brand-orange sm:w-32" />

      </div>


      {/* =====================================================
          STATS STRIP
      ===================================================== */}
      <div className="relative z-20 border-b border-black/10 bg-brand-white">

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">

          <div className="grid grid-cols-2 divide-x divide-black/10 sm:grid-cols-4">

            {stats.map(({ icon: Icon, title, subtitle }) => (
              <div
                key={title}
                className="flex min-h-[105px] items-center gap-3 px-3 py-5 sm:min-h-[120px] sm:gap-4 sm:px-5 lg:px-7"
              >

                {/* Icon Box */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-orange/20 bg-brand-orange/10 sm:h-12 sm:w-12">
                  <Icon
                    className="h-5 w-5 text-brand-orange sm:h-6 sm:w-6"
                    strokeWidth={1.7}
                  />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <h2 className="font-heading text-xs font-extrabold text-brand-black sm:text-sm lg:text-base">
                    {title}
                  </h2>

                  <p className="mt-1 font-body text-[10px] leading-4 text-black/55 sm:text-xs sm:leading-5">
                    {subtitle}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}

export default HomeBanner;