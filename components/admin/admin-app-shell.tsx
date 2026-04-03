"use client";

import { AdminSidebarNav } from "@/components/admin/admin-sidebar-nav";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export type AdminShellUser = {
  displayName: string;
  subtitle: string;
  initials: string;
};

export function AdminAppShell({
  children,
  user,
}: {
  children: React.ReactNode;
  user: AdminShellUser;
}) {
  return (
    <div
      data-streamline-admin
      className="min-h-[100svh] bg-zinc-100 text-foreground dark:bg-transparent"
    >
      <SidebarProvider defaultOpen>
        <Sidebar
          collapsible="icon"
          variant="sidebar"
          className="border-r-0 shadow-none"
        >
          <AdminSidebarNav user={user} />
        </Sidebar>
        <SidebarInset className="border-l border-zinc-200/90 bg-white shadow-sm dark:border-white/[0.06] dark:bg-transparent dark:shadow-none md:rounded-tl-xl md:dark:shadow-sm">
          <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border bg-white/95 px-4 backdrop-blur-sm dark:border-white/[0.06] dark:bg-[hsl(262_22%_9%/0.82)] dark:backdrop-blur-md">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-6" />
            <span className="text-sm font-medium text-muted-foreground">
              Administration
            </span>
            <div className="ml-auto flex items-center pl-2">
              <ThemeSwitcher />
            </div>
          </header>
          <div className="flex flex-1 flex-col bg-zinc-50/70 text-foreground dark:bg-transparent">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
