import { createFileRoute } from "@tanstack/react-router";
import { SettingsPage } from "@/components/screens";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — BFM Email Management System" }, { name: "description", content: "Configure platform behavior, security, and email infrastructure." }, { property: "og:title", content: "Settings — BFM Email Management System" }, { property: "og:description", content: "Configure platform behavior, security, and email infrastructure." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <SettingsPage />,
});
