import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/screens";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Dashboard — BFM Email Management System" }, { name: "description", content: "Monitor contacts, campaigns, sending activity, groups, and sender accounts." }, { property: "og:title", content: "Dashboard — BFM Email Management System" }, { property: "og:description", content: "Monitor contacts, campaigns, sending activity, groups, and sender accounts." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <Dashboard />,
});
