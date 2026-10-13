import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline bg-surface text-on-surface">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-8 px-6 py-14 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium">한다영</p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-on-surface-variant">
            시각영상디자인 · 기획 · UX/UI
          </p>
        </div>
        <nav aria-label="푸터 링크" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="/#work" className="hover:underline">
            Work
          </Link>
          <Link href="/#about" className="hover:underline">
            About
          </Link>
          <Link href="/#contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
      <div className="border-t border-outline">
        <p className="mx-auto max-w-[1120px] px-6 py-5 text-xs text-on-surface-variant">
          © {year} 한다영
        </p>
      </div>
    </footer>
  );
}
