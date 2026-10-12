"use client";

import { FormEvent, useState } from "react";
import { FilledButton } from "@/components/m3";

const fieldClass =
  "h-14 w-full rounded border border-outline bg-surface px-4 text-base text-on-surface outline-none transition focus:border-2 focus:border-primary";

export function Contact() {
  const [status, setStatus] = useState("");
  const [invalid, setInvalid] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2 || !email.includes("@") || message.length < 10) {
      setInvalid(true);
      setStatus("이름, 이메일, 메시지를 확인해 주세요.");
      return;
    }

    setInvalid(false);
    setStatus("메시지가 준비되었습니다. 곧 회신 드리겠습니다.");
    form.reset();
  }

  return (
    <section id="contact" className="bg-surface-container" aria-labelledby="contact-title">
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 px-6 py-20 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-3 text-sm font-medium text-on-surface-variant">Let&apos;s talk</p>
          <h2
            id="contact-title"
            className="text-[2rem] font-medium leading-tight tracking-tight text-on-surface md:text-4xl"
          >
            Contact
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-on-surface">
            협업, 산학 프로젝트, 포트폴리오 관련 문의는 아래 양식으로 남겨 주세요.
          </p>
          <p className="mt-6 text-sm text-on-surface-variant">
            회신까지 <span className="bg-primary px-1 font-medium text-on-primary">48시간</span>
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-[24px] bg-surface p-6 shadow-[0_1px_2px_rgba(0,0,0,0.12)]" noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-xs font-medium text-on-surface-variant">
              이름
            </label>
            <input id="name" name="name" required className={fieldClass} placeholder="홍길동" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-xs font-medium text-on-surface-variant">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClass}
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-xs font-medium text-on-surface-variant">
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded border border-outline bg-surface px-4 py-3 text-base text-on-surface outline-none transition focus:border-2 focus:border-primary"
              placeholder="프로젝트 목적과 일정을 적어 주세요."
            />
          </div>
          <FilledButton type="submit">메시지 보내기</FilledButton>
          {status ? (
            <p
              className={`mt-4 rounded-lg px-3 py-2 text-sm ${
                invalid ? "bg-surface-container text-on-surface" : "bg-primary text-on-primary"
              }`}
              role="status"
            >
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
