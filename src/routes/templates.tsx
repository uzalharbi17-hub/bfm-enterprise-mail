import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/screens";

export const Route = createFileRoute("/templates")({
  head: () => ({ meta: [{ title: "Templates — BFM Email Management System" }, { name: "description", content: "Create and maintain reusable corporate email layouts." }, { property: "og:title", content: "Templates — BFM Email Management System" }, { property: "og:description", content: "Create and maintain reusable corporate email layouts." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CollectionPage kind="templates" />,
});
