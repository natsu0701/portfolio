import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-footer text-ink">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-6 py-16 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">HaMong · 한다영</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#707a8a]">
            시각영상디자인 · 기획 · 디자인
          </p>
        </div>

        <nav aria-label="푸터 링크" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="/#projects" className="text-ink hover:underline">
            Projects
          </Link>
          <Link href="/#about" className="text-ink hover:underline">
            About
          </Link>
          <Link href="/#contact" className="text-ink hover:underline">
            Contact
          </Link>
        </nav>
      </div>
      <div className="border-t border-[#eaecef]">
        <p className="mx-auto max-w-[1280px] px-6 py-6 font-mono text-xs text-[#707a8a]">
          © {year} HaMong Portfolio
        </p>
      </div>
    </footer>
  );
}
