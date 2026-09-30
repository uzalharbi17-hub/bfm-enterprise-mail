import { createFileRoute } from "@tanstack/react-router";
import { Compose } from "@/components/screens";

export const Route = createFileRoute("/compose")({
  head: () => ({ meta: [{ title: "Compose Email — BFM Email Management System" }, { name: "description", content: "Prepare secure individual email delivery for approved recipient groups." }, { property: "og:title", content: "Compose Email — BFM Email Management System" }, { property: "og:description", content: "Prepare secure individual email delivery for approved recipient groups." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <Compose />,
});
