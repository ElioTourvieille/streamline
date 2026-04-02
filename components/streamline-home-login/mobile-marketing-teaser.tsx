"use client";

import { bg, muted } from "./constants";

export function MobileMarketingTeaser() {
  return (
    <div
      className="border-t border-white/10 px-6 py-10 lg:hidden"
      style={{ backgroundColor: bg }}
    >
      <h2 className="text-xl font-bold leading-tight text-white">
        Optimisez vos workflows de développement
      </h2>
      <p className="mt-3 text-sm leading-relaxed" style={{ color: muted }}>
        La plateforme de référence pour les agences qui exigent
        l&apos;excellence opérationnelle et une collaboration transparente.
      </p>
    </div>
  );
}
