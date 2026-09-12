"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  FiChevronDown,
  FiPhone,
  FiMenu,
  FiX,
  FiArrowRight,
} from "react-icons/fi";

import { useTheme } from "./ThemeProvider";

function Navbar() {
  // =========================================================
  // GLOBAL THEME
  // ThemeProvider is the single source of truth
  // =========================================================

  const { isDarkMode, toggleTheme } = useTheme();

  // =========================================================
  // NAVIGATION STATES
  // =========================================================

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);

  const [isMobileProductsOpen, setIsMobileProductsOpen] =
    useState(false);

  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] =
    useState(false);

  const pathname = usePathname();

  const productsRef = useRef(null);
  const industriesRef = useRef(null);

  // =========================================================
  // PRODUCTS
  // =========================================================

  const products = [
    {
      name: "Plastic Components",
      href: "/products/plastic-components",
    },
    {
      name: "Rubber Components",
      href: "/products/rubber-components",
    },
    {
      name: "O-Rings & Seals",
      href: "/products/o-rings-seals",
    },
    {
      name: "Gaskets",
      href: "/products/gaskets",
    },
    {
      name: "Bushes & Washers",
      href: "/products/bushes-washers",
    },
    {
      name: "Automobile Parts",
      href: "/products/automobile-parts",
    },
    {
      name: "Electrical Parts",
      href: "/products/electrical-parts",
    },
  ];

  // =========================================================
  // INDUSTRIES
  // =========================================================

  const industries = [
    {
      name: "Automotive",
      href: "/industries/automotive",
    },
    {
      name: "Electrical",
      href: "/industries/electrical",
    },
    {
      name: "Agriculture",
      href: "/industries/agriculture",
    },
    {
      name: "Sanitaryware",
      href: "/industries/sanitaryware",
    },
  ];

  // =========================================================
  // MAIN NAV LINKS
  // =========================================================

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about",
    },
  ];

  // =========================================================
  // ACTIVE LINK
  // =========================================================

  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname?.startsWith(href);

  // =========================================================
  // CLOSE DROPDOWNS
  // =========================================================

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target)
      ) {
        setIsProductsOpen(false);
      }

      if (
        industriesRef.current &&
        !industriesRef.current.contains(event.target)
      ) {
        setIsIndustriesOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsProductsOpen(false);
        setIsIndustriesOpen(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, []);

  // =========================================================
  // PREVENT BODY SCROLL WHEN MOBILE MENU IS OPEN
  // =========================================================

  useEffect(() => {
    document.body.style.overflow = isMenuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // =========================================================
  // CLOSE MOBILE MENU
  // =========================================================

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileProductsOpen(false);
    setIsMobileIndustriesOpen(false);
  };

  // =========================================================
  // NAV TEXT
  // =========================================================

  const navTextClass = (active) => `
    group
    relative
    inline-flex
    items-center
    gap-1.5
    py-2

    font-heading
    text-[14px]
    lg:text-[15px]
    font-medium
    tracking-[0.01em]

    transition-colors
    duration-300

    ${
      active
        ? "text-brand-orange"
        : isDarkMode
          ? "text-brand-white/90 hover:text-brand-orange"
          : "text-brand-black/85 hover:text-brand-orange"
    }
  `;

  // =========================================================
  // DESKTOP UNDERLINE
  // =========================================================

  const navUnderline = `
    after:absolute
    after:left-0
    after:right-0
    after:bottom-0
    after:h-[2px]
    after:origin-left
    after:rounded-full
    after:bg-brand-orange
    after:transition-transform
    after:duration-300
    after:ease-out
  `;

  return (
    <>
      {/* =====================================================
          NAVBAR
      ====================================================== */}

      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full

          border-b

          transition-all
          duration-500
          ease-out

          ${
            isDarkMode
              ? `
                border-brand-white/10
                bg-brand-black
                shadow-[0_8px_30px_rgba(0,0,0,0.22)]
              `
              : `
                border-brand-black/10
                bg-brand-white
                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
              `
          }
        `}
      >
        <nav
          className="
            mx-auto
            flex
            h-[68px]
            w-full
            max-w-7xl
            items-center
            justify-between

            px-4

            sm:h-[72px]
            sm:px-6

            lg:px-8
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}

      <Link
  href="/"
  aria-label="Kalika Engineering Home"
  onClick={closeMenu}
  className="
    group
    flex
    shrink-0
    items-center
    gap-2.5
  "
>
  {/* Logo */}
  <div
    className={`
      flex
      h-10
      w-[92px]
      shrink-0
      items-center
      justify-center
      overflow-hidden
      rounded-md
      px-1.5
      transition-all
      duration-300
      sm:h-11
      sm:w-[100px]
      ${
        isDarkMode
          ? "bg-white"
          : "bg-transparent"
      }
    `}
  >
    <Image
      src={assets.logo}
      alt="Kalika Engineering"
      width={200}
      height={70}
      priority
      sizes="100px"
      className="
        block
        h-auto
        w-full
        max-h-full
        object-contain
        transition-transform
        duration-300
        group-hover:scale-[1.02]
      "
    />
  </div>

  {/* Brand Name */}
  <span className="flex flex-col leading-none">
    <span
      className={`
        font-heading
        text-[16px]
        font-extrabold
        tracking-tight
        transition-colors
        duration-300
        sm:text-[17px]
        ${
          isDarkMode
            ? "text-brand-white"
            : "text-brand-black"
        }
      `}
    >
      KALIKA
    </span>

    <span
      className="
        font-heading
        text-[8px]
        font-semibold
        tracking-[0.2em]
        text-brand-orange
        sm:text-[9px]
      "
    >
      ENGINEERING
    </span>
  </span>
</Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <ul
            className="
              hidden
              items-center
              gap-4

              font-heading

              md:flex
              lg:gap-8
            "
          >
            {/* HOME + ABOUT */}

            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`
                      ${navTextClass(active)}
                      ${navUnderline}

                      ${
                        active
                          ? "after:scale-x-100"
                          : "after:scale-x-0 hover:after:scale-x-100"
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* =================================================
                PRODUCTS DROPDOWN
            ================================================== */}

            <li
              ref={productsRef}
              className="relative"
            >
              <button
                type="button"
                onClick={() => {
                  setIsProductsOpen((prev) => !prev);
                  setIsIndustriesOpen(false);
                }}
                aria-expanded={isProductsOpen}
                className={`
                  ${navTextClass(
                    isActive("/products") ||
                      isProductsOpen
                  )}

                  ${navUnderline}

                  ${
                    isActive("/products") ||
                    isProductsOpen
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  }

                  cursor-pointer
                `}
              >
                Products

                <FiChevronDown
                  size={15}
                  strokeWidth={2.25}
                  className={`
                    transition-transform
                    duration-300

                    ${
                      isProductsOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {/* Dropdown */}

              <div
                className={`
                  absolute
                  left-1/2
                  top-full
                  mt-4
                  w-[270px]
                  -translate-x-1/2

                  origin-top

                  rounded-2xl
                  border
                  p-2

                  shadow-[0_24px_60px_rgba(0,0,0,0.16)]

                  transition-all
                  duration-300
                  ease-out

                  ${
                    isDarkMode
                      ? `
                        border-brand-white/10
                        bg-brand-black
                      `
                      : `
                        border-brand-black/10
                        bg-brand-white
                      `
                  }

                  ${
                    isProductsOpen
                      ? `
                        visible
                        translate-y-0
                        scale-100
                        opacity-100
                      `
                      : `
                        invisible
                        pointer-events-none
                        -translate-y-2
                        scale-[0.98]
                        opacity-0
                      `
                  }
                `}
              >
                {products.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() =>
                      setIsProductsOpen(false)
                    }
                    className={`
                      group
                      flex
                      items-center
                      justify-between

                      rounded-xl

                      px-3.5
                      py-2.5

                      font-body
                      text-sm

                      transition-all
                      duration-200

                      ${
                        isDarkMode
                          ? `
                            text-brand-white/80
                            hover:bg-brand-white/10
                            hover:text-brand-white
                          `
                          : `
                            text-brand-black/80
                            hover:bg-brand-black
                            hover:text-brand-white
                          `
                      }
                    `}
                  >
                    {item.name}

                    <FiArrowRight
                      size={14}
                      className="
                        text-brand-orange/50

                        transition-all
                        duration-200

                        group-hover:translate-x-1
                        group-hover:text-brand-orange
                      "
                    />
                  </Link>
                ))}
              </div>
            </li>

            {/* =================================================
                INDUSTRIES DROPDOWN
            ================================================== */}

            <li
              ref={industriesRef}
              className="relative"
            >
              <button
                type="button"
                onClick={() => {
                  setIsIndustriesOpen((prev) => !prev);
                  setIsProductsOpen(false);
                }}
                aria-expanded={isIndustriesOpen}
                className={`
                  ${navTextClass(
                    isActive("/industries") ||
                      isIndustriesOpen
                  )}

                  ${navUnderline}

                  ${
                    isActive("/industries") ||
                    isIndustriesOpen
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  }

                  cursor-pointer
                `}
              >
                Industries

                <FiChevronDown
                  size={15}
                  strokeWidth={2.25}
                  className={`
                    transition-transform
                    duration-300

                    ${
                      isIndustriesOpen
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              {/* Dropdown */}

              <div
                className={`
                  absolute
                  left-1/2
                  top-full
                  mt-4
                  w-[230px]
                  -translate-x-1/2

                  origin-top

                  rounded-2xl
                  border
                  p-2

                  shadow-[0_24px_60px_rgba(0,0,0,0.16)]

                  transition-all
                  duration-300
                  ease-out

                  ${
                    isDarkMode
                      ? `
                        border-brand-white/10
                        bg-brand-black
                      `
                      : `
                        border-brand-black/10
                        bg-brand-white
                      `
                  }

                  ${
                    isIndustriesOpen
                      ? `
                        visible
                        translate-y-0
                        scale-100
                        opacity-100
                      `
                      : `
                        invisible
                        pointer-events-none
                        -translate-y-2
                        scale-[0.98]
                        opacity-0
                      `
                  }
                `}
              >
                {industries.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() =>
                      setIsIndustriesOpen(false)
                    }
                    className={`
                      group
                      flex
                      items-center
                      justify-between

                      rounded-xl

                      px-3.5
                      py-2.5

                      font-body
                      text-sm

                      transition-all
                      duration-200

                      ${
                        isDarkMode
                          ? `
                            text-brand-white/80
                            hover:bg-brand-white/10
                            hover:text-brand-white
                          `
                          : `
                            text-brand-black/80
                            hover:bg-brand-black
                            hover:text-brand-white
                          `
                      }
                    `}
                  >
                    {item.name}

                    <FiArrowRight
                      size={14}
                      className="
                        text-brand-orange/50

                        transition-all
                        duration-200

                        group-hover:translate-x-1
                        group-hover:text-brand-orange
                      "
                    />
                  </Link>
                ))}
              </div>
            </li>

            {/* =================================================
                MANUFACTURING
            ================================================== */}

            <li>
              <Link
                href="/manufacturing-process"
                className={`
                  ${navTextClass(
                    isActive(
                      "/manufacturing-process"
                    )
                  )}

                  ${navUnderline}

                  ${
                    isActive(
                      "/manufacturing-process"
                    )
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  }
                `}
              >
                Manufacturing
              </Link>
            </li>

            {/* =================================================
                CONTACT
            ================================================== */}

            <li>
              <Link
                href="/contact"
                className={`
                  ${navTextClass(
                    isActive("/contact")
                  )}

                  ${navUnderline}

                  ${
                    isActive("/contact")
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  }
                `}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* =================================================
              RIGHT ACTIONS
          ================================================== */}

          <div
            className="
              flex
              items-center
              gap-2

              sm:gap-3
            "
          >
            {/* =================================================
                THEME TOGGLE
            ================================================== */}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDarkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              aria-pressed={isDarkMode}
              className={`
                group
                relative
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                overflow-hidden

                rounded-full
                border

                transition-all
                duration-300

                hover:-translate-y-0.5

                ${
                  isDarkMode
                    ? `
                      border-brand-white/15
                      bg-brand-white
                      text-brand-black

                      hover:bg-brand-orange
                      hover:text-brand-white
                    `
                    : `
                      border-brand-black/10
                      bg-brand-white
                      text-brand-black

                      hover:border-brand-orange
                      hover:bg-brand-orange
                      hover:text-brand-white
                    `
                }
              `}
            >
              {/* SUN */}

              <span
                className={`
                  absolute
                  inset-0

                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${
                    isDarkMode
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }
                `}
              >
                <Image
                  src={assets.sun_icon}
                  alt=""
                  width={18}
                  height={18}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[18px]
                    w-[18px]

                    -translate-x-1/2
                    -translate-y-1/2

                    object-contain
                  "
                />
              </span>

              {/* MOON */}

              <span
                className={`
                  absolute
                  inset-0
                  
                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.22,1,0.36,1)]

                  ${
                    isDarkMode
                      ? "-translate-y-full opacity-0"
                      : "translate-y-0 opacity-100"
                  }
                `}
              >
                <Image
                  src={assets.moon_icon}
                  alt=""
                  width={18}
                  height={18}
                  className="
                    absolute
                    left-1/2
                    top-1/2

                    h-[18px]
                    w-[18px]

                    -translate-x-1/2
                    -translate-y-1/2

                    object-contain
                  "
                />
              </span>
            </button>

            {/* =================================================
                DESKTOP CTA
            ================================================== */}

            <Link
              href="/contact"
              className="
                hidden
                items-center
                gap-2

                rounded-full

                bg-brand-orange

                px-5
                py-2.5

                font-heading
                text-sm
                font-semibold
                text-brand-white

                shadow-[0_8px_20px_rgba(255,101,1,0.16)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-brand-black
                hover:shadow-[0_12px_24px_rgba(0,0,0,0.16)]

                md:flex
              "
            >
              <FiPhone
                size={15}
                strokeWidth={2.25}
              />

              Request a Quote
            </Link>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                bg-brand-orange
                text-brand-white

                shadow-[0_8px_20px_rgba(255,101,1,0.16)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-brand-black

                md:hidden
              "
            >
              <FiMenu
                size={19}
                strokeWidth={2.25}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[60]

          bg-brand-black/50
          backdrop-blur-[3px]

          transition-opacity
          duration-300

          md:hidden

          ${
            isMenuOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }
        `}
      />

      {/* =====================================================
          MOBILE SIDE MENU
      ====================================================== */}

      <aside
        aria-hidden={!isMenuOpen}
        className={`
          fixed
          right-0
          top-0
          z-[70]

          h-[100dvh]
          w-[320px]
          max-w-[90vw]

          border-l

          shadow-[-24px_0_60px_rgba(0,0,0,0.24)]

          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          md:hidden

          ${
            isDarkMode
              ? `
                border-brand-white/10
                bg-brand-black
              `
              : `
                border-brand-black/10
                bg-brand-white
              `
          }

          ${
            isMenuOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* =================================================
            MOBILE HEADER
        ================================================== */}

        <div
          className={`
            flex
            h-[76px]
            items-center
            justify-between

            border-b

            px-5

            sm:px-6

            ${
              isDarkMode
                ? "border-brand-white/10"
                : "border-brand-black/10"
            }
          `}
        >
          {/* Logo */}

          <Link
            href="/"
            onClick={closeMenu}
            className="
              flex
              items-center
              gap-2.5
            "
          >
            <Image
              src={assets.logo}
              alt="Kalika Engineering"
              className="
                h-9
                w-9
                object-contain
              "
            />

            <span className="flex flex-col leading-none">
              <span
                className={`
                  font-heading
                  text-[15px]
                  font-extrabold

                  ${
                    isDarkMode
                      ? "text-brand-white"
                      : "text-brand-black"
                  }
                `}
              >
                KALIKA
              </span>

              <span
                className="
                  font-heading
                  text-[8px]
                  font-semibold
                  tracking-[0.2em]
                  text-brand-orange
                "
              >
                ENGINEERING
              </span>
            </span>
          </Link>

          {/* Mobile Header Actions */}

          <div className="flex items-center gap-2">

            {/* Theme */}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                isDarkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className={`
                relative
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full
                border

                transition-all
                duration-300

                ${
                  isDarkMode
                    ? `
                      border-brand-white/10
                      bg-brand-white
                    `
                    : `
                      border-brand-black/10
                      bg-brand-white
                    `
                }
              `}
            >
              {/* Sun */}

              <span
                className={`
                  absolute

                  transition-all
                  duration-300

                  ${
                    isDarkMode
                      ? "rotate-0 scale-100 opacity-100"
                      : "rotate-90 scale-0 opacity-0"
                  }
                `}
              >
                <Image
                  src={assets.sun_icon}
                  alt=""
                  width={18}
                  height={18}
                  className="
                    h-[18px]
                    w-[18px]
                    object-contain
                  "
                />
              </span>

              {/* Moon */}

              <span
                className={`
                  absolute

                  transition-all
                  duration-300

                  ${
                    isDarkMode
                      ? "rotate-90 scale-0 opacity-0"
                      : "rotate-0 scale-100 opacity-100"
                  }
                `}
              >
                <Image
                  src={assets.moon_icon}
                  alt=""
                  width={18}
                  height={18}
                  className="
                    h-[18px]
                    w-[18px]
                    object-contain
                  "
                />
              </span>
            </button>

            {/* Close */}

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                transition-all
                duration-300

                ${
                  isDarkMode
                    ? `
                      bg-brand-white/10
                      text-brand-white

                      hover:bg-brand-orange
                    `
                    : `
                      bg-brand-black/5
                      text-brand-black

                      hover:bg-brand-orange
                      hover:text-brand-white
                    `
                }
              `}
            >
              <FiX size={19} />
            </button>
          </div>
        </div>

        {/* =================================================
            MOBILE NAV CONTENT
        ================================================== */}

        <div
          className="
            h-[calc(100dvh-76px)]

            overflow-y-auto
            overscroll-contain

            px-4
            py-5

            sm:px-5
            sm:py-6
          "
        >
          <ul
            className="
              space-y-1

              font-heading
              text-[15px]
              font-medium
            "
          >
            {/* HOME + ABOUT */}

            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`
                      group
                      relative
                      flex
                      items-center
                      justify-between

                      rounded-xl

                      px-4
                      py-3.5

                      transition-all
                      duration-300

                      ${
                        active
                          ? "text-brand-orange"
                          : isDarkMode
                            ? `
                              text-brand-white/90
                              hover:bg-brand-white/5
                              hover:text-brand-orange
                            `
                            : `
                              text-brand-black/85
                              hover:bg-brand-black/5
                              hover:text-brand-orange
                            `
                      }
                    `}
                  >
                    {link.name}

                    <span
                      className={`
                        absolute
                        bottom-2.5
                        left-4

                        h-[2px]

                        rounded-full
                        bg-brand-orange

                        transition-all
                        duration-300

                        ${
                          active
                            ? "w-8"
                            : "w-0 group-hover:w-8"
                        }
                      `}
                    />
                  </Link>
                </li>
              );
            })}

            {/* =================================================
                MOBILE PRODUCTS
            ================================================== */}

            <li>
              <button
                type="button"
                onClick={() =>
                  setIsMobileProductsOpen(
                    (prev) => !prev
                  )
                }
                aria-expanded={
                  isMobileProductsOpen
                }
                className={`
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-between

                  rounded-xl

                  px-4
                  py-3.5

                  transition-all
                  duration-300

                  ${
                    isDarkMode
                      ? `
                        text-brand-white/90
                        hover:bg-brand-white/5
                        hover:text-brand-orange
                      `
                      : `
                        text-brand-black/85
                        hover:bg-brand-black/5
                        hover:text-brand-orange
                      `
                  }
                `}
              >
                Products

                <FiChevronDown
                  size={16}
                  className={`
                    transition-transform
                    duration-300

                    ${
                      isMobileProductsOpen
                        ? "rotate-180 text-brand-orange"
                        : ""
                    }
                  `}
                />

                <span
                  className={`
                    absolute
                    bottom-2.5
                    left-4

                    h-[2px]

                    rounded-full
                    bg-brand-orange

                    transition-all
                    duration-300

                    ${
                      isMobileProductsOpen
                        ? "w-8"
                        : "w-0 group-hover:w-8"
                    }
                  `}
                />
              </button>

              {/* Product List */}

              <div
                className={`
                  grid
                  overflow-hidden

                  transition-[grid-template-rows,opacity]
                  duration-300
                  ease-out

                  ${
                    isMobileProductsOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="min-h-0">
                  <div
                    className={`
                      ml-3
                      mt-1
                      space-y-1

                      border-l
                      pl-3

                      ${
                        isDarkMode
                          ? "border-brand-white/10"
                          : "border-brand-black/10"
                      }
                    `}
                  >
                    {products.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className={`
                          group
                          flex
                          items-center
                          gap-2

                          rounded-lg

                          px-3
                          py-2.5

                          font-body
                          text-sm

                          transition-colors
                          duration-200

                          ${
                            isDarkMode
                              ? `
                                text-brand-white/65
                                hover:text-brand-orange
                              `
                              : `
                                text-brand-black/65
                                hover:text-brand-orange
                              `
                          }
                        `}
                      >
                        <span
                          className="
                            h-1
                            w-1
                            shrink-0

                            rounded-full

                            bg-brand-orange/50

                            transition-transform
                            duration-200

                            group-hover:scale-125
                          "
                        />

                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* =================================================
                MOBILE INDUSTRIES
            ================================================== */}

            <li>
              <button
                type="button"
                onClick={() =>
                  setIsMobileIndustriesOpen(
                    (prev) => !prev
                  )
                }
                aria-expanded={
                  isMobileIndustriesOpen
                }
                className={`
                  group
                  relative
                  flex
                  w-full
                  items-center
                  justify-between

                  rounded-xl

                  px-4
                  py-3.5

                  transition-all
                  duration-300

                  ${
                    isDarkMode
                      ? `
                        text-brand-white/90
                        hover:bg-brand-white/5
                        hover:text-brand-orange
                      `
                      : `
                        text-brand-black/85
                        hover:bg-brand-black/5
                        hover:text-brand-orange
                      `
                  }
                `}
              >
                Industries

                <FiChevronDown
                  size={16}
                  className={`
                    transition-transform
                    duration-300

                    ${
                      isMobileIndustriesOpen
                        ? "rotate-180 text-brand-orange"
                        : ""
                    }
                  `}
                />

                <span
                  className={`
                    absolute
                    bottom-2.5
                    left-4

                    h-[2px]

                    rounded-full
                    bg-brand-orange

                    transition-all
                    duration-300

                    ${
                      isMobileIndustriesOpen
                        ? "w-8"
                        : "w-0 group-hover:w-8"
                    }
                  `}
                />
              </button>

              {/* Industry List */}

              <div
                className={`
                  grid
                  overflow-hidden

                  transition-[grid-template-rows,opacity]
                  duration-300
                  ease-out

                  ${
                    isMobileIndustriesOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="min-h-0">
                  <div
                    className={`
                      ml-3
                      mt-1
                      space-y-1

                      border-l
                      pl-3

                      ${
                        isDarkMode
                          ? "border-brand-white/10"
                          : "border-brand-black/10"
                      }
                    `}
                  >
                    {industries.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className={`
                          group
                          flex
                          items-center
                          gap-2

                          rounded-lg

                          px-3
                          py-2.5

                          font-body
                          text-sm

                          transition-colors
                          duration-200

                          ${
                            isDarkMode
                              ? `
                                text-brand-white/65
                                hover:text-brand-orange
                              `
                              : `
                                text-brand-black/65
                                hover:text-brand-orange
                              `
                          }
                        `}
                      >
                        <span
                          className="
                            h-1
                            w-1
                            shrink-0

                            rounded-full

                            bg-brand-orange/50

                            transition-transform
                            duration-200

                            group-hover:scale-125
                          "
                        />

                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            {/* =================================================
                MANUFACTURING PROCESS
            ================================================== */}

            <li>
              <Link
                href="/manufacturing-process"
                onClick={closeMenu}
                className={`
                  group
                  relative
                  flex
                  items-center
                  justify-between

                  rounded-xl

                  px-4
                  py-3.5

                  transition-all
                  duration-300

                  ${
                    isActive(
                      "/manufacturing-process"
                    )
                      ? "text-brand-orange"
                      : isDarkMode
                        ? `
                          text-brand-white/90
                          hover:bg-brand-white/5
                          hover:text-brand-orange
                        `
                        : `
                          text-brand-black/85
                          hover:bg-brand-black/5
                          hover:text-brand-orange
                        `
                  }
                `}
              >
                Manufacturing Process

                <span
                  className={`
                    absolute
                    bottom-2.5
                    left-4

                    h-[2px]

                    rounded-full
                    bg-brand-orange

                    transition-all
                    duration-300

                    ${
                      isActive(
                        "/manufacturing-process"
                      )
                        ? "w-8"
                        : "w-0 group-hover:w-8"
                    }
                  `}
                />
              </Link>
            </li>

            {/* =================================================
                CONTACT
            ================================================== */}

            <li>
              <Link
                href="/contact"
                onClick={closeMenu}
                className={`
                  group
                  relative
                  flex
                  items-center
                  justify-between

                  rounded-xl

                  px-4
                  py-3.5

                  transition-all
                  duration-300

                  ${
                    isActive("/contact")
                      ? "text-brand-orange"
                      : isDarkMode
                        ? `
                          text-brand-white/90
                          hover:bg-brand-white/5
                          hover:text-brand-orange
                        `
                        : `
                          text-brand-black/85
                          hover:bg-brand-black/5
                          hover:text-brand-orange
                        `
                  }
                `}
              >
                Contact

                <span
                  className={`
                    absolute
                    bottom-2.5
                    left-4

                    h-[2px]

                    rounded-full
                    bg-brand-orange

                    transition-all
                    duration-300

                    ${
                      isActive("/contact")
                        ? "w-8"
                        : "w-0 group-hover:w-8"
                    }
                  `}
                />
              </Link>
            </li>
          </ul>

          {/* =================================================
              MOBILE CTA
          ================================================== */}

          <div className="mt-6 px-1">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2

                rounded-xl

                bg-brand-orange

                px-5
                py-3.5

                font-heading
                text-sm
                font-semibold
                text-brand-white

                shadow-[0_10px_24px_rgba(255,101,1,0.18)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-brand-black
              "
            >
              <FiPhone size={16} />

              Request a Quote
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;