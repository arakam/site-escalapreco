import Link from "next/link";
import { site, plans } from "@/lib/content";
import { CTAButton } from "./CTAButton";

export function PricingTable() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {plans.map((plan) => (
        <article
          key={plan.id}
          className={`relative flex flex-col rounded-2xl border-2 p-8 ${
            plan.highlighted
              ? "border-accent-500 bg-accent-50/50 shadow-lg ring-2 ring-accent-500/20"
              : "border-slate-200 bg-white"
          }`}
        >
          {plan.highlighted && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-3 py-0.5 text-xs font-medium text-white">
              Mais popular
            </span>
          )}
          <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
          <p className="mt-1 text-sm text-slate-600">{plan.description}</p>
          <div className="mt-6 flex items-baseline gap-1">
            <span className="text-3xl font-bold text-slate-900">{plan.price}</span>
            <span className="text-slate-600">{plan.period}</span>
          </div>
          <ul className="mt-6 flex-1 space-y-3">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CTAButton
              type="register"
              variant={plan.highlighted ? "primary" : "outline"}
              className="w-full"
            >
              {plan.cta}
            </CTAButton>
          </div>
        </article>
      ))}
    </div>
  );
}
