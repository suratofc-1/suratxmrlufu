"use client";
import React, { useState, useRef, useEffect } from "react";

export default function Accordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const contentRefs = useRef([]);
  const lottiePlayers = useRef([]);
  const headerRefs = useRef([]);

  const loadLottieFor = async (idx, path) => {
    if (!path || !contentRefs.current[`lottie-${idx}`]) return;
    try {
      const lottie = await import("lottie-web");
      // destroy existing
      if (lottiePlayers.current[idx]) lottiePlayers.current[idx].destroy();
      // clear fallback content before mounting animation
      try {
        const container = contentRefs.current[`lottie-${idx}`];
        if (container) container.innerHTML = "";
      } catch (e) {
        // ignore
      }
      lottiePlayers.current[idx] = lottie.loadAnimation({
        container: contentRefs.current[`lottie-${idx}`],
        renderer: "svg",
        loop: true,
        autoplay: true,
        path,
      });
    } catch (err) {
      // log Lottie load errors for easier debugging
      // keep fallback SVG visible when load fails
      // eslint-disable-next-line no-console
      console.warn(`Lottie failed to load for idx=${idx} path=${path}`, err);
    }
  };

  const toggle = (i) => {
    setOpenIndex((prev) => {
      const next = prev === i ? -1 : i;
      if (next !== -1 && items[next] && items[next].lottie) {
        // load lottie only when opening
        loadLottieFor(next, items[next].lottie);
      }
      return next;
    });
  };

  // keyboard navigation for accordion headers
  const onHeaderKeyDown = (e, idx) => {
    const max = items.length - 1;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = idx === max ? 0 : idx + 1;
      headerRefs.current[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = idx === 0 ? max : idx - 1;
      headerRefs.current[prev]?.focus();
    } else if (e.key === "Home") {
      e.preventDefault();
      headerRefs.current[0]?.focus();
    } else if (e.key === "End") {
      e.preventDefault();
      headerRefs.current[max]?.focus();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(idx);
    }
  };

  useEffect(() => {
    return () => {
      // cleanup players
      lottiePlayers.current.forEach((p) => p && p.destroy && p.destroy());
    };
  }, []);

  const gradients = [
    "from-indigo-500 to-pink-500",
    "from-emerald-400 to-teal-500",
    "from-yellow-400 to-orange-500",
    "from-fuchsia-500 to-indigo-500",
    "from-sky-400 to-blue-600",
    "from-lime-400 to-emerald-600",
    "from-rose-400 to-pink-600",
    "from-cyan-400 to-sky-600",
  ];

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const mediaKey = `media-${idx}`;
        const grad = gradients[idx % gradients.length];

        return (
          <div key={item.question || idx} className="rounded-2xl overflow-hidden border border-slate-700/50 bg-slate-900/80 shadow-lg">
            <button
              ref={(el) => (headerRefs.current[idx] = el)}
              type="button"
              onClick={() => toggle(idx)}
              onKeyDown={(e) => onHeaderKeyDown(e, idx)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center gap-4 p-4 sm:p-5 text-left hover:bg-slate-800/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span id={`${panelId}-label`} className="text-sm font-semibold text-white">{item.question}</span>
                  {item.short && <span className="text-xs text-slate-300">{item.short}</span>}
                </div>
              </div>

              <div className="ml-auto flex items-center gap-3">
                <span className="text-sm text-slate-400 hidden sm:inline">{item.tag}</span>
                <div className={`h-5 w-5 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}>
                  {/* Chevron using CSS border trick (no inline SVG) */}
                  <div className={`transform ${isOpen ? "rotate-180" : "rotate-0"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 text-slate-200">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={panelId + "-label"}
              style={{
                maxHeight: isOpen ? `${contentRefs.current[idx]?.scrollHeight ?? 200}px` : "0px",
                transition: "max-height 320ms ease",
                overflow: "hidden",
              }}
              className="px-4 pb-4 text-slate-200 bg-slate-800/60"
              ref={(el) => (contentRefs.current[idx] = el)}
            >
              <div className="pt-2 text-sm leading-7">
                {item.answer}
                {/* render Lottie media inside the panel when available */}
                {item.lottie && (
                  <div
                    className="mt-3 h-36 w-full rounded-md bg-black/10 overflow-hidden flex items-center justify-center"
                    ref={(el) => (contentRefs.current[`lottie-${idx}`] = el)}
                    aria-hidden="true"
                  >
                    <svg className="h-16 w-16 text-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.14" />
                      <path d="M12 6v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M12 16v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M6 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M16 12h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </div>
                )}
                {item.cta && (
                  <div className="mt-3">
                    <a href={item.cta.href} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2" target="_blank" rel="noopener noreferrer">{item.cta.label}</a>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
