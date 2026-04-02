import { StreamlineHomeLogin } from "@/components/streamline-home-login";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StreamLine — Connexion",
  description:
    "Connectez-vous à votre espace client. La plateforme pour agences web.",
};

export default function HomePage() {
  return <StreamlineHomeLogin />;
}
