"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FileText,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Users,
  Waypoints,
  type LucideIcon,
} from "lucide-react";

import type { AdminShellUser } from "@/components/admin/admin-app-shell";
import { LogoutButton } from "@/components/logout-button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const nav: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/projects", label: "Tous les projets", icon: FolderKanban },
  { href: "/admin/clients", label: "Clients", icon: Users },
  { href: "/admin/documents", label: "Documents", icon: FileText },
  { href: "/admin/settings", label: "Paramètres", icon: Settings },
];

function isNavActive(pathname: string, href: string) {
  if (href === "/admin/dashboard") {
    return (
      pathname === "/admin" ||
      pathname === "/admin/dashboard" ||
      pathname.startsWith("/admin/dashboard/")
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function AdminSidebarNav({ user }: { user: AdminShellUser }) {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader className="border-b border-streamline-accent/15 px-4 py-4 dark:border-white/10">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 rounded-md outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-streamline-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
        >
          <div
            className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-streamline-accent via-violet-600 to-indigo-700 shadow-lg shadow-streamline-accent/40"
            aria-hidden
          >
            <Waypoints className="size-5 text-white" />
          </div>
          <span className="truncate text-lg font-bold tracking-tight text-sidebar-foreground">
            StreamLine
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map(({ href, label, icon: Icon }) => {
                const isActive = isNavActive(pathname, href);

                return (
                  <SidebarMenuItem key={href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={label}
                      className={cn(
                        "relative min-h-9 rounded-lg border border-transparent transition-colors duration-150",
                        "hover:border-streamline-accent/25 hover:bg-streamline-accent/12 hover:text-sidebar-foreground dark:hover:border-white/10 dark:hover:bg-white/[0.07]",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-streamline-accent/45 focus-visible:ring-inset",
                        isActive &&
                          "border-streamline-accent/45 bg-gradient-to-r from-streamline-accent/18 to-indigo-600/10 font-semibold text-streamline-accent shadow-[0_0_22px_-10px_hsl(262_85%_50%/0.5)] dark:border-streamline-accent/55 dark:from-streamline-accent/25 dark:to-indigo-600/15 dark:text-streamline-soft dark:shadow-[0_0_28px_-8px_hsl(262_90%_55%/0.45)]",
                        isActive &&
                          "before:absolute before:left-0 before:top-1/2 before:h-7 before:w-[3px] before:-translate-y-1/2 before:rounded-r-full before:bg-gradient-to-b before:from-streamline-accent before:to-indigo-500 before:shadow-[0_0_12px_hsl(262_90%_55%/0.85)] before:content-[''] group-data-[collapsible=icon]:before:hidden",
                      )}
                    >
                      <Link href={href} aria-current={isActive ? "page" : undefined}>
                        <Icon
                          className={cn(
                            "size-4 shrink-0",
                            isActive &&
                              "text-streamline-accent dark:text-streamline-soft",
                          )}
                        />
                        <span>{label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-streamline-accent/15 p-2 dark:border-white/10">
        <div
          className={cn(
            "flex items-center gap-3 rounded-xl border border-sidebar-border/80 bg-sidebar-accent/40 p-2.5 dark:border-white/10 dark:bg-white/[0.06]",
            "group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:border-0 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:p-0",
          )}
        >
          <Avatar size="lg" className="shrink-0 ring-2 ring-streamline-accent/25 dark:ring-streamline-accent/35">
            <AvatarFallback className="bg-gradient-to-br from-streamline-accent to-indigo-700 text-sm font-semibold text-white">
              {user.initials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <p className="truncate text-sm font-medium text-sidebar-foreground">
              {user.displayName}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {user.subtitle}
            </p>
          </div>
        </div>
        <LogoutButton
          variant="outline"
          className="mt-2 w-full border-sidebar-border bg-white/40 text-sidebar-foreground hover:bg-white/60 dark:border-white/15 dark:bg-white/[0.04] dark:hover:bg-white/[0.09] group-data-[collapsible=icon]:hidden"
        />
      </SidebarFooter>
      <SidebarRail />
    </>
  );
}
