"use client";

import { useState } from "react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export function FAQ({ items, title = "Perguntas frequentes" }: FAQProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-16" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="sr-only">
        {title}
      </h2>
      <div className="mx-auto max-w-3xl">
        {items.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className="border-b border-slate-200 last:border-b-0"
            >
              <h3>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-slate-900 hover:text-accent-600"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${item.id}`}
                  id={`faq-question-${item.id}`}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  {item.question}
                  <span
                    className={`ml-2 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <svg
                      className="h-5 w-5 text-slate-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id={`faq-${item.id}`}
                role="region"
                aria-labelledby={`faq-question-${item.id}`}
                className={`overflow-hidden transition-all duration-200 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="pb-4 text-slate-600">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
