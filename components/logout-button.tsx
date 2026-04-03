"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type LogoutButtonProps = Partial<
  Pick<React.ComponentProps<typeof Button>, "className" | "variant" | "size">
>;

export function LogoutButton({
  className,
  variant = "ghost",
  size = "sm",
}: LogoutButtonProps = {}) {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={logout}
    >
      Déconnexion
    </Button>
  );
}
