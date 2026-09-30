import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/screens";

export const Route = createFileRoute("/groups")({
  head: () => ({ meta: [{ title: "Groups — BFM Email Management System" }, { name: "description", content: "Organize contacts and sender routing by approved BFM groups." }, { property: "og:title", content: "Groups — BFM Email Management System" }, { property: "og:description", content: "Organize contacts and sender routing by approved BFM groups." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CollectionPage kind="groups" />,
});
