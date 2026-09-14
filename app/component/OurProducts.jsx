"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
ArrowLeft,
ArrowRight,
ArrowUpRight,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

const products = [
{
id: 1,
title: "Rubber Dust Cap",
category: "Rubber Components",
slug: "rubber-components",
material: "RUBBER",
description:
"Durable rubber dust caps designed to protect components from dust, dirt and contamination.",
image: "/rubber-dust-cap.png",
},
{
id: 2,
title: "Plastic Automobile Parts",
category: "Automobile Components",
slug: "automobile-components",
material: "PLASTIC",
description:
"Precision plastic components manufactured for automotive and OEM applications.",
image: "/plastic-automoblie-parts.jpg",
},
{
id: 3,
title: "Rubber O-Ring",
category: "Rubber Components",
slug: "rubber-components",
material: "RUBBER",
description:
"Precision rubber O-rings providing reliable sealing performance for industrial applications.",
image: "/rubber-o-ring.jpg",
},
{
id: 4,
title: "Plastic Centre Pull Plugs",
category: "Plastic Components",
slug: "plastic-components",
material: "PLASTIC",
description:
"Precision centre pull plugs designed for reliable protection and industrial applications.",
image: "/plastic-central-pull.png",
},
{
id: 5,
title: "Machinery & Hydraulic Rubber Parts",
category: "Rubber Components",
slug: "rubber-components",
material: "RUBBER",
description:
"Reliable rubber components developed for machinery, hydraulic and industrial applications.",
image: "/machinery-hydraulic-rubber-parts.jpg",
},
{
id: 6,
title: "Plastic Dust Cap",
category: "Plastic Components",
slug: "plastic-components",
material: "PLASTIC",
description:
"Protective plastic dust caps designed to prevent contamination and component damage.",
image: "/plastic-dust-cap.jpg",
},
{
id: 7,
title: "Electrical Rubber Parts",
category: "Electrical Components",
slug: "electrical-components",
material: "RUBBER",
description:
"Insulating and protective rubber components designed for electrical applications.",
image: "/electrical-rubber-parts.jpeg",
},
{
id: 8,
title: "Plastic Machinery & Hydraulic Parts",
category: "Plastic Components",
slug: "plastic-components",
material: "PLASTIC",
description:
"Engineering plastic components developed for machinery and hydraulic applications.",
image: "/plastic-machinery-hydraulic-parts.jpg",
},
{
id: 9,
title: "Automobile Rubber Parts",
category: "Automobile Components",
slug: "automobile-components",
material: "RUBBER",
description:
"Precision rubber components manufactured for automotive and OEM applications.",
image: "/automoblie-rubber-parts.jpg",
},
{
id: 10,
title: "Plastic Washer",
category: "Plastic Components",
slug: "plastic-components",
material: "PLASTIC",
description:
"Precision plastic washers manufactured for insulation, spacing and fastening applications.",
image: "/plastic-washer.png",
},
{
id: 11,
title: "Rubber Filter Cap",
category: "Rubber Components",
slug: "rubber-components",
material: "RUBBER",
description:
"Reliable rubber filter caps designed for protection, sealing and industrial applications.",
image: "/rubber-filter-cap.jpeg",
},
{
id: 12,
title: "Tapered Cap Plugs",
category: "Plastic Components",
slug: "plastic-components",
material: "PLASTIC",
description:
"Tapered plastic cap plugs designed for protection, finishing and industrial applications.",
image: "/tapered-cap-plugs.png",
},
{
id: 13,
title: "Tractor Rubber Parts",
category: "Automobile Components",
slug: "automobile-components",
material: "RUBBER",
description:
"Durable rubber components designed for tractors and agricultural equipment.",
image: "/tractor-rubber-parts.jpg",
},
{
id: 14,
title: "Side Pull Tabs",
category: "Plastic Components",
slug: "plastic-components",
material: "PLASTIC",
description:
"Easy-to-use side pull tabs designed for efficient removal and component protection.",
image: "/side-pull-tabs.png",
},
{
id: 15,
title: "Rubber Grommet",
category: "Rubber Components",
slug: "rubber-components",
material: "RUBBER",
description:
"Protective rubber grommets designed for cables, wires, panels and industrial assemblies.",
image: "/rubber-grommet.jpg",
},
{
id: 16,
title: "Nylon Bush & Washer",
category: "Plastic Components",
slug: "plastic-components",
material: "PLASTIC",
description:
"High-quality nylon bushes and washers providing insulation, spacing and wear resistance.",
image: "/nylon-bush-wash.png",
},
{
id: 17,
title: "Rubber Gaskets",
category: "Rubber Components",
slug: "rubber-components",
material: "RUBBER",
description:
"Precision rubber gaskets designed to provide reliable sealing and prevent leakage in industrial and OEM applications.",
image: "/rubber-gasket.jpg",
},
];

export default function OurProducts() {
const sliderRef = useRef(null);

const { isDarkMode } = useTheme();

const scrollProducts = (direction) => {
if (!sliderRef.current) return;

```
const slider = sliderRef.current;
const card = slider.querySelector("[data-product-card]");

if (!card) return;

const gap = 20;
const cardWidth = card.offsetWidth + gap;

slider.scrollBy({
  left: direction === "next" ? cardWidth : -cardWidth,
  behavior: "smooth",
});
```

};

return (
<section
className={`         py-16         transition-colors         duration-500         sm:py-20         lg:py-24         ${isDarkMode ? "bg-brand-black" : "bg-white"}       `}
>
<div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">

```
    {/* SECTION HEADER */}

    <div className="mb-9 flex flex-col gap-6 sm:mb-11 lg:flex-row lg:items-end lg:justify-between">

      <div className="max-w-2xl">

        <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-orange">
          Our Products
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
          Wide Range of{" "}
          <span className="text-brand-orange">
            Components
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
          High-quality plastic and rubber components manufactured
          with precision for OEMs, automotive, electrical and
          industrial applications.
        </p>

      </div>

      {/* CONTROLS */}

      <div className="flex items-center justify-between gap-5">

        <Link
          href="/products"
          className={`
            group
            hidden
            items-center
            gap-2
            text-sm
            font-semibold
            transition-colors
            sm:flex
            ${
              isDarkMode
                ? "text-white hover:text-brand-orange"
                : "text-brand-black hover:text-brand-orange"
            }
          `}
        >
          View All Products

          <ArrowRight
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>

        <div className="flex items-center gap-2">

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={() => scrollProducts("prev")}
            aria-label="Previous products"
            className={`
              flex
              h-10
              w-10
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              shadow-sm
              transition-all
              duration-300
              hover:border-brand-orange
              hover:bg-brand-orange
              hover:text-white
              active:scale-95
              ${
                isDarkMode
                  ? "border-white/30 bg-[#111111] text-white"
                  : "border-gray-200 bg-white text-brand-black"
              }
            `}
          >
            <ArrowLeft size={17} />
          </button>

          {/* NEXT */}

          <button
            type="button"
            onClick={() => scrollProducts("next")}
            aria-label="Next products"
            className={`
              flex
              h-10
              w-10
              cursor-pointer
              items-center
              justify-center
              rounded-full
              border
              shadow-sm
              transition-all
              duration-300
              hover:border-brand-orange
              hover:bg-brand-orange
              hover:text-white
              active:scale-95
              ${
                isDarkMode
                  ? "border-white/30 bg-[#111111] text-white"
                  : "border-gray-200 bg-white text-brand-black"
              }
            `}
          >
            <ArrowRight size={17} />
          </button>

        </div>
      </div>
    </div>

    {/* PRODUCTS CAROUSEL */}

    <div
      ref={sliderRef}
      className="
        flex
        gap-5
        overflow-x-auto
        pb-2
        scroll-smooth
        snap-x
        snap-mandatory
        overscroll-x-contain
        [scrollbar-width:none]
        [-ms-overflow-style:none]
        [&::-webkit-scrollbar]:hidden
      "
    >

      {products.map((product) => (

        <Link
          key={product.id}
          href={`/products/${product.slug}`}
          data-product-card
          className={`
            group
            relative
            min-w-[calc(100%-8px)]
            snap-start
            overflow-hidden
            rounded-2xl
            border
            shadow-md
            transition-all
            duration-500
            hover:-translate-y-1
            hover:shadow-xl
            sm:min-w-[calc(50%-10px)]
            lg:min-w-[calc(25%-15px)]
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
              aspect-[1.15/1]
              w-full
              overflow-hidden
              ${
                isDarkMode
                  ? "bg-[#181818]"
                  : "bg-gray-100"
              }
            `}
          >

            <Image
              src={product.image}
              alt={`${product.title} - Kalika Engineering`}
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

            {/* MATERIAL BADGE */}

            <div
              className="
                absolute
                right-3
                top-3
                z-10
                rounded-full
                bg-brand-orange
                px-3
                py-1.5
                text-[9px]
                font-bold
                tracking-[0.12em]
                text-white
                shadow-md
              "
            >
              {product.material}
            </div>

          </div>

          {/* CONTENT */}

          <div
            className="
              flex
              min-h-[160px]
              flex-col
              justify-between
              p-5
              sm:p-6
            "
          >

            <div>

              <h3
                className={`
                  font-heading
                  text-lg
                  font-bold
                  leading-snug
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
                {product.title}
              </h3>

              <p
                className={`
                  mt-2
                  line-clamp-2
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
                {product.description}
              </p>

            </div>

            {/* BOTTOM */}

            <div className="mt-5 flex items-center justify-between">

              <span
                className={`
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  ${
                    isDarkMode
                      ? "text-gray-500"
                      : "text-gray-400"
                  }
                `}
              >
                Explore Product
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
                <ArrowUpRight size={15} />
              </span>

            </div>

          </div>

        </Link>

      ))}

    </div>

    {/* MOBILE VIEW ALL */}

    <div className="mt-7 flex justify-center sm:hidden">

      <Link
        href="/products"
        className={`
          group
          inline-flex
          items-center
          gap-2
          text-sm
          font-semibold
          transition-colors
          ${
            isDarkMode
              ? "text-white hover:text-brand-orange"
              : "text-brand-black hover:text-brand-orange"
          }
        `}
      >
        View All Products

        <ArrowRight
          size={17}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />

      </Link>

    </div>

  </div>
</section>


);
}
