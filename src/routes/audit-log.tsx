import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/screens";

export const Route = createFileRoute("/audit-log")({
  head: () => ({ meta: [{ title: "Audit Log — BFM Email Management System" }, { name: "description", content: "Review security-sensitive and administrative activity." }, { property: "og:title", content: "Audit Log — BFM Email Management System" }, { property: "og:description", content: "Review security-sensitive and administrative activity." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CollectionPage kind="audit" />,
});
