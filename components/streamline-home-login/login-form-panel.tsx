"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight, Eye, EyeOff, Waypoints } from "lucide-react";
import Link from "next/link";
import type { Dispatch, FormEvent, SetStateAction } from "react";
import { accent, bg, muted } from "./constants";

export type LoginFormPanelProps = {
  emailId: string;
  passwordId: string;
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
  remember: boolean;
  setRemember: (v: boolean) => void;
  error: string | null;
  isLoading: boolean;
  onSubmit: (e: FormEvent) => void;
};

export function LoginFormPanel({
  emailId,
  passwordId,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  remember,
  setRemember,
  error,
  isLoading,
  onSubmit,
}: LoginFormPanelProps) {
  return (
    <aside
      className="relative z-[2] flex min-h-0 w-full shrink-0 flex-col justify-between overflow-x-clip bg-[#0B0B15] px-6 py-8 sm:px-10 sm:py-10 lg:w-[40%] lg:min-w-0 lg:px-10 lg:py-12 xl:px-14"
      style={{ backgroundColor: bg }}
    >
      <header className="flex items-center gap-3">
        <div
          className="flex size-10 shrink-0 items-center justify-center rounded-lg shadow-lg shadow-violet-900/40"
          style={{ backgroundColor: accent }}
          aria-hidden
        >
         <Waypoints className="size-5 text-white" />
        </div>
        <span className="text-lg font-bold tracking-tight">StreamLine</span>
      </header>

      <div className="mx-auto w-full max-w-md flex-1 flex flex-col justify-center py-10 lg:py-0">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Bienvenue
        </h1>
        <p className="mt-2 text-[15px]" style={{ color: muted }}>
          Connectez-vous à votre espace client.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor={emailId}
              className="text-sm font-normal"
              style={{ color: muted }}
            >
              Adresse Email
            </Label>
            <input
              id={emailId}
              type="email"
              autoComplete="email"
              required
              placeholder="nom@agence.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "h-12 w-full rounded-xl border bg-[#12121f] px-4 text-sm text-white placeholder:text-gray-500",
                "outline-none transition-[box-shadow,border-color]",
                "focus-visible:border-[#6322EF] focus-visible:ring-2 focus-visible:ring-[#6322EF]/25",
              )}
              style={{ borderColor: "rgba(99, 34, 239, 0.35)" }}
            />
          </div>

          <div className="space-y-2">
            <Label
              htmlFor={passwordId}
              className="text-sm font-normal"
              style={{ color: muted }}
            >
              Mot de passe
            </Label>
            <div className="relative">
              <input
                id={passwordId}
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={cn(
                  "h-12 w-full rounded-xl border bg-[#12121f] pr-12 pl-4 text-sm text-white",
                  "outline-none transition-[box-shadow,border-color]",
                  "focus-visible:border-[#6322EF] focus-visible:ring-2 focus-visible:ring-[#6322EF]/25",
                )}
                style={{ borderColor: "rgba(99, 34, 239, 0.35)" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-gray-400 transition hover:bg-white/5 hover:text-white"
                aria-label={
                  showPassword
                    ? "Masquer le mot de passe"
                    : "Afficher le mot de passe"
                }
              >
                {showPassword ? (
                  <EyeOff className="size-5" />
                ) : (
                  <Eye className="size-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={(v) => setRemember(v === true)}
                className="border-gray-500 data-[state=checked]:border-[#6322EF] data-[state=checked]:bg-[#6322EF]"
              />
              <Label
                htmlFor="remember"
                className="cursor-pointer text-sm font-normal text-gray-300"
              >
                Se souvenir de moi
              </Label>
            </div>
            <Link
              href="/auth/forgot-password"
              className="text-sm font-medium transition hover:opacity-90"
              style={{ color: accent }}
            >
              Mot de passe oublié ?
            </Link>
          </div>

          {error ? (
            <p className="text-sm text-red-400" role="alert">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white",
              "shadow-lg shadow-violet-600/25 transition hover:brightness-110",
              "disabled:pointer-events-none disabled:opacity-50",
            )}
            style={{ backgroundColor: accent }}
          >
            {isLoading ? "Connexion…" : "Se connecter"}
            {!isLoading ? <ArrowRight className="size-4" /> : null}
          </button>
        </form>

        <p className="mt-8 text-center text-sm" style={{ color: muted }}>
          Nouveau client ?{" "}
          <span className="font-medium" style={{ color: accent }}>
            Contactez votre chargé de compte
          </span>
        </p>
      </div>

      <footer className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-wider text-gray-500">
        <Link href="/support" className="hover:text-gray-400">
          Support
        </Link>
        <Link href="/confidentialite" className="hover:text-gray-400">
          Confidentialité
        </Link>
        <Link href="/mentions-legales" className="hover:text-gray-400">
          Mentions légales
        </Link>
      </footer>
    </aside>
  );
}
