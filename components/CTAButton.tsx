import Link from "next/link";
import { site } from "@/lib/content";

type Variant = "primary" | "secondary" | "outline" | "white";

interface CTAButtonProps {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "login" | "register" | "custom";
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-accent-500 text-white hover:bg-accent-600 border-transparent shadow-sm hover:shadow",
  secondary: "bg-slate-800 text-white hover:bg-slate-700 border-transparent",
  outline:
    "bg-transparent border-2 border-slate-300 text-slate-700 hover:border-primary-500 hover:bg-primary-50/50",
  white:
    "bg-white text-accent-600 hover:bg-white/90 border-transparent shadow-sm",
};

export function CTAButton({
  variant = "primary",
  href,
  children,
  className = "",
  type,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2";
  const style = variantStyles[variant];

  let targetHref = href;
  if (type === "login") targetHref = site.appLogin;
  if (type === "register") targetHref = site.appRegistro;
  if (!targetHref) targetHref = site.appRegistro;

  return (
    <Link
      href={targetHref}
      className={`${base} ${style} ${className}`}
      target={targetHref.startsWith("http") ? "_blank" : undefined}
      rel={targetHref.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}
