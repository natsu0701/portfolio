"use client";

import { FormEvent, useState } from "react";

export function Contact() {
  const [status, setStatus] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (name.length < 2 || !email.includes("@") || message.length < 10) {
      setStatus("이름, 이메일, 메시지를 확인해 주세요.");
      return;
    }

    setStatus("메시지가 준비되었습니다. 곧 회신 드리겠습니다.");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1280px] px-6 py-section"
      aria-labelledby="contact-title"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2
            id="contact-title"
            className="text-[32px] font-semibold leading-tight tracking-tight text-on-dark"
          >
            Contact
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-body">
            협업, 산학 프로젝트, 포트폴리오 관련 문의는 아래 양식으로 남겨
            주세요.
          </p>
          <p className="mt-6 font-mono text-sm text-muted">
            reply within <span className="text-primary">48h</span>
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-xl bg-card p-6"
          noValidate
        >
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-xs font-medium text-muted">
              이름
            </label>
            <input
              id="name"
              name="name"
              required
              className="h-10 w-full rounded-lg border border-hairline bg-canvas px-4 text-sm text-on-dark outline-none focus:border-primary"
              placeholder="홍길동"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-xs font-medium text-muted">
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="h-10 w-full rounded-lg border border-hairline bg-canvas px-4 text-sm text-on-dark outline-none focus:border-primary"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="mb-2 block text-xs font-medium text-muted">
              메시지
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-lg border border-hairline bg-canvas px-4 py-3 text-sm text-on-dark outline-none focus:border-primary"
              placeholder="프로젝트 목적과 일정을 적어 주세요."
            />
          </div>
          <button
            type="submit"
            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-active sm:w-auto"
          >
            메시지 보내기
          </button>
          {status ? (
            <p className="mt-4 text-sm text-primary" role="status">
              {status}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
