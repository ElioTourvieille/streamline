import { AdminAppShell, type AdminShellUser } from "@/components/admin/admin-app-shell";
import { createClient } from "@/lib/supabase/server";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Admin",
  description: "Espace d’administration StreamLine.",
};

const USER_FALLBACK: AdminShellUser = {
  displayName: "…",
  subtitle: "Chargement",
  initials: "…",
};

function userShellProps(user: {
  email?: string;
  user_metadata?: Record<string, unknown>;
} | null): AdminShellUser {
  if (!user) {
    return { displayName: "Invité", subtitle: "Non connecté", initials: "?" };
  }
  const email = user.email ?? "";
  const meta = user.user_metadata ?? {};
  const fullName =
    typeof meta.full_name === "string" ? meta.full_name.trim() : "";
  const displayName =
    fullName || (email ? email.split("@")[0] : "") || "Utilisateur";

  let initials = "?";
  if (fullName) {
    const parts = fullName.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      initials =
        `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
    } else if (parts[0]) {
      initials = parts[0].slice(0, 2).toUpperCase();
    }
  } else if (email) {
    initials = email.slice(0, 2).toUpperCase();
  }

  return { displayName, subtitle: "Admin", initials };
}

async function AdminLayoutWithUser({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <AdminAppShell user={userShellProps(user)}>{children}</AdminAppShell>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense
      fallback={
        <AdminAppShell user={USER_FALLBACK}>{children}</AdminAppShell>
      }
    >
      <AdminLayoutWithUser>{children}</AdminLayoutWithUser>
    </Suspense>
  );
}
