"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { WORKFLOW_HERO_SRC } from "./constants";

export function LoginHeroPanel() {
  return (
    <section
      className={cn(
        "workflow-gradient relative isolate hidden min-h-screen w-full shrink-0 overflow-hidden lg:block lg:w-[60%]",
      )}
      aria-label="Présentation"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={WORKFLOW_HERO_SRC}
          alt="Illustration workflows futuristes, lignes numériques"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
          sizes="60vw"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-[1] opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative h-full w-full min-h-[480px]">
          <div
            className="absolute top-1/4 right-1/4 size-64 rounded-full bg-streamline-accent/30 blur-[100px]"
            aria-hidden
          />
          <div
            className="absolute bottom-1/4 left-1/4 size-96 rounded-full bg-fuchsia-600/20 blur-[120px]"
            aria-hidden
          />

          <div
            className={cn(
              "absolute top-1/2 left-1/2 flex w-[min(500px,92%)] max-w-[500px] -translate-x-1/2 -translate-y-1/2 flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl",
              "min-h-[280px] sm:h-[350px]",
            )}
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-red-500/50" />
                <div className="size-3 rounded-full bg-yellow-500/50" />
                <div className="size-3 rounded-full bg-green-500/50" />
              </div>
              <div className="h-2 w-1/3 rounded-full bg-white/20" />
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-white/10" />
                <div className="h-2 w-5/6 rounded-full bg-white/10" />
                <div className="h-2 w-4/6 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-20 w-1/3 rounded-xl border border-streamline-accent/30 bg-streamline-accent/20" />
              <div className="h-20 w-1/3 rounded-xl border border-white/10 bg-white/5" />
              <div className="h-20 w-1/3 rounded-xl border border-white/10 bg-white/5" />
            </div>
            <div
              className="absolute -bottom-6 -right-6 size-32 rounded-full bg-streamline-accent/40 blur-2xl"
              aria-hidden
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 z-20 max-w-lg sm:bottom-16 sm:left-10 lg:bottom-20 lg:left-20">
        <h2 className="mb-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
          Optimisez vos workflows de développement
        </h2>
        <p className="text-lg text-slate-300">
          La plateforme de référence pour les agences qui exigent
          l&apos;excellence opérationnelle et une collaboration transparente.
        </p>
      </div>
    </section>
  );
}
