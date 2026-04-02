"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useId, useState, type FormEvent } from "react";
import { bg } from "./constants";
import { LoginFormPanel } from "./login-form-panel";
import { LoginHeroPanel } from "./login-hero-panel";
import { MobileMarketingTeaser } from "./mobile-marketing-teaser";

export function StreamlineHomeLogin() {
  const emailId = useId();
  const passwordId = useId();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    setIsLoading(true);
    setError(null);

    try {
      const { error: signError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (signError) throw signError;
      router.push("/admin");
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: bg }}>
      <div className="flex min-h-screen flex-col lg:flex-row lg:items-stretch">
        <LoginFormPanel
          emailId={emailId}
          passwordId={passwordId}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          remember={remember}
          setRemember={setRemember}
          error={error}
          isLoading={isLoading}
          onSubmit={handleLogin}
        />
        <LoginHeroPanel />
      </div>
      <MobileMarketingTeaser />
    </div>
  );
}
