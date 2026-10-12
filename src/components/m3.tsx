import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function Icon({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span className={`material-symbols-outlined ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-8 items-center rounded-lg border border-primary px-3 text-xs font-medium text-on-surface">
      {children}
    </span>
  );
}

const filledClass =
  "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-on-primary transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

const outlinedClass =
  "inline-flex h-10 items-center justify-center gap-2 rounded-full border border-outline bg-surface px-6 text-sm font-medium text-on-surface transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black";

export function FilledLink({
  className = "",
  ...props
}: ComponentProps<typeof Link>) {
  return <Link className={`${filledClass} ${className}`} {...props} />;
}

export function OutlinedLink({
  className = "",
  ...props
}: ComponentProps<typeof Link>) {
  return <Link className={`${outlinedClass} ${className}`} {...props} />;
}

export function FilledButton({
  className = "",
  ...props
}: ComponentProps<"button">) {
  return <button className={`${filledClass} ${className}`} {...props} />;
}

export function OutlinedButton({
  className = "",
  ...props
}: ComponentProps<"button">) {
  return <button className={`${outlinedClass} ${className}`} {...props} />;
}
