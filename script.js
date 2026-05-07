(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var nav = document.getElementById("site-nav");
  var toggle = document.querySelector(".nav-toggle");
  var yearEl = document.getElementById("year");

  function setNavOpen(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle("is-open", open);
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
    document.body.classList.toggle("nav-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNavOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 768px)").matches) {
          setNavOpen(false);
        }
      });
    });

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNavOpen(false);
    });

    window.addEventListener(
      "resize",
      function () {
        if (window.matchMedia("(min-width: 769px)").matches) setNavOpen(false);
      },
      { passive: true }
    );
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      var target = document.querySelector(id);
      if (!target || !header) return;
      e.preventDefault();
      var top =
        target.getBoundingClientRect().top + window.scrollY - header.offsetHeight;
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      if (toggle && nav && nav.classList.contains("is-open")) {
        setNavOpen(false);
      }
    });
  });

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var form = document.getElementById("contact-form");
  var statusEl = document.getElementById("form-status");

  function setFieldError(field, message) {
    var row =
      field.closest(".form-row") || field.parentElement;
    var hint = row && row.querySelector(".field-error");
    if (!hint) return;
    hint.textContent = message || "";
    if (row) row.classList.toggle("has-error", Boolean(message));
  }

  function clearErrors() {
    if (!form) return;
    form.querySelectorAll(".form-row").forEach(function (row) {
      row.classList.remove("has-error");
    });
    form.querySelectorAll(".field-error").forEach(function (el) {
      el.textContent = "";
    });
  }

  if (form && statusEl) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      clearErrors();
      statusEl.textContent = "";
      statusEl.classList.remove("is-error");

      var name = form.elements.namedItem("name");
      var email = form.elements.namedItem("email");
      var message = form.elements.namedItem("message");

      var ok = true;
      if (name && name.value.trim().length < 2) {
        setFieldError(name, "이름을 2자 이상 입력해 주세요.");
        ok = false;
      }
      if (email && !email.value.trim()) {
        setFieldError(email, "이메일을 입력해 주세요.");
        ok = false;
      } else if (
        email &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
      ) {
        setFieldError(email, "올바른 이메일 형식이 아닙니다.");
        ok = false;
      }
      if (message && message.value.trim().length < 10) {
        setFieldError(message, "메시지를 10자 이상 작성해 주세요.");
        ok = false;
      }

      if (!ok) {
        statusEl.textContent = "입력 내용을 확인해 주세요.";
        statusEl.classList.add("is-error");
        return;
      }

      statusEl.textContent = "메시지가 전송되었습니다. (데모: 실제 서버로는 전송되지 않습니다.)";
      form.reset();
    });
  }
})();
