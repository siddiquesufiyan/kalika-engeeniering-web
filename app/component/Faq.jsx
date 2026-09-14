
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const faqs = [
  {
    question: "What type of plastic and rubber components do you manufacture?",
    answer:
      "We manufacture a wide range of customized plastic and rubber components as per customer requirements. Components can be developed according to your drawing, sample, dimensions, application and material requirements.",
  },
  {
    question: "Can you manufacture a component as per our drawing or sample?",
    answer:
      "Yes. You can share your 2D drawing, 3D model, dimensions, technical specifications or even a physical sample. Our team can review the requirement and suggest a suitable manufacturing approach.",
  },
  {
    question: "How do you ensure the quality of manufactured components?",
    answer:
      "Components are manufactured according to the approved specifications and required dimensions. Quality checks can include dimensional inspection, visual inspection, material-related checks and application-specific requirements.",
  },
  {
    question: "Do you manufacture custom plastic parts?",
    answer:
      "Yes. We can manufacture customized plastic components according to customer drawings, samples, dimensions and application requirements. The final manufacturing process depends on the component design, material and required quantity.",
  },
  {
    question: "Do you manufacture custom rubber components?",
    answer:
      "Yes. Customized rubber components can be developed according to the required shape, dimensions, hardness, application and material specifications.",
  },
  {
    question: "Will the price be lower if I order in bulk?",
    answer:
      "Bulk quantities can generally provide better per-piece economics because production and tooling costs can be distributed across a larger quantity. The exact pricing depends on the component and order volume.",
  },
  {
    question: "Can you use an existing mould or tool?",
    answer:
      "If a suitable existing mould or tool is available and technically compatible with your component, it may be possible. This needs to be evaluated based on the actual component and tooling specifications.",
  },
  {
    question: "How long does it take to manufacture a custom component?",
    answer:
      "Lead time depends on the component complexity, material availability, tooling requirement, quantity and production schedule. After reviewing your requirement, we can provide an estimated production timeline.",
  },
  {
    question:
      "Can you manufacture components for automotive and industrial applications?",
    answer:
      "Yes. Customized plastic and rubber components can be developed for applications across automotive, electrical, agriculture, sanitaryware, industrial equipment and other sectors, subject to technical feasibility.",
  },
  {
    question: "How can I get a quotation?",
    answer:
      "Send us your drawing, sample details, dimensions, material requirement, expected quantity and application details. The more information you provide, the more accurately we can evaluate the requirement and prepare a quotation.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const { isDarkMode } = useTheme();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className={`
        py-16
        transition-colors
        duration-300
        sm:py-20
        lg:py-24
        ${isDarkMode ? "bg-brand-black" : "bg-white"}
      `}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
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
            Frequently Asked Questions
          </p>

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
            Your Questions, Answered
          </h2>

          <p
            className={`
              mx-auto
              mt-4
              max-w-2xl
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
            Have questions about plastic or rubber components, material,
            quality, pricing or custom manufacturing? Find the answers below.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  ${
                    isDarkMode
                      ? "border-white/30 bg-white/[0.04]"
                      : "border-gray-200 bg-gray-50"
                  }
                `}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span
                    className={`
                      text-sm
                      font-semibold
                      leading-6
                      sm:text-base
                      ${
                        isDarkMode
                          ? "text-brand-white"
                          : "text-brand-black"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* Arrow */}
                  <span
                    className={`
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "bg-brand-orange text-white"
                          : isDarkMode
                            ? "bg-white/10 text-white"
                            : "bg-white text-brand-black"
                      }
                    `}
                  >
                    <ChevronDown
                      size={18}
                      className={`
                        transition-transform
                        duration-300
                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div
                    className={`
                      border-t
                      ${
                        isDarkMode
                          ? "border-white/30"
                          : "border-gray-200"
                      }
                    `}
                  >
                    <p
                      className={`
                        px-5
                        pb-5
                        pt-4
                        text-sm
                        leading-7
                        sm:px-6
                        ${
                          isDarkMode
                            ? "text-gray-400"
                            : "text-gray-600"
                        }
                      `}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`
            mt-10
            rounded-2xl
            border
            px-6
            py-7
            text-center
            transition-colors
            duration-300
            sm:px-8
            ${
              isDarkMode
                ? "border-white/30 bg-white/[0.04]"
                : "border-brand-orange/20 bg-brand-orange/5"
            }
          `}
        >
          <h3
            className={`
              font-heading
              text-xl
              font-bold
              ${
                isDarkMode
                  ? "text-brand-white"
                  : "text-brand-black"
              }
            `}
          >
            Still have questions about your component?
          </h3>

          <p
            className={`
              mt-2
              text-sm
              leading-6
              ${
                isDarkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            `}
          >
            Share your drawing, sample or requirement with our team.
          </p>

          <a
            href="/contact"
            className="
              mt-5
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-brand-orange
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition
              duration-300
              hover:bg-orange-600
            "
          >
            Ask Our Team
          </a>
        </div>
      </div>
    </section>
  );
}

export default Faq;

