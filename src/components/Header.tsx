"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FilledLink, Icon } from "@/components/m3";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-surface ${
        elevated ? "shadow-[0_1px_2px_rgba(0,0,0,0.12),0_1px_3px_rgba(0,0,0,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-[1.375rem] font-medium tracking-tight text-on-surface">
          <span className="h-3 w-3 rounded-full bg-primary" aria-hidden="true" />
          한다영
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="주요 메뉴">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex h-10 items-center rounded-full px-4 text-sm font-medium text-on-surface hover:bg-black/5"
            >
              {link.label}
            </Link>
          ))}
          <FilledLink href="/#contact" className="ml-2">
            문의하기
          </FilledLink>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-on-surface hover:bg-black/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-outline bg-surface px-4 py-3 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="모바일 메뉴">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-3 text-sm font-medium text-on-surface hover:bg-black/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <FilledLink href="/#contact" className="mt-2" onClick={() => setOpen(false)}>
              문의하기
            </FilledLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
