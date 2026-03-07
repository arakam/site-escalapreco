"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navLinks, site } from "@/lib/content";
import { CTAButton } from "./CTAButton";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-primary-100 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90">
          <Image
            src="/logo.png"
            alt={site.name}
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Menu principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <CTAButton type="login" variant="outline">Entrar</CTAButton>
          <CTAButton type="register" variant="primary">Criar conta</CTAButton>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Abrir menu</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`border-t border-slate-200 bg-white md:hidden ${open ? "block" : "hidden"}`}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-200 pt-4">
            <CTAButton type="login" variant="outline" className="w-full justify-center">Entrar</CTAButton>
            <CTAButton type="register" variant="primary" className="w-full justify-center">Criar conta</CTAButton>
          </div>
        </div>
      </div>
    </header>
  );
}
