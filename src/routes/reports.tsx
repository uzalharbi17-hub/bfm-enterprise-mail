import { createFileRoute } from "@tanstack/react-router";
import { Reports } from "@/components/screens";

export const Route = createFileRoute("/reports")({
  head: () => ({ meta: [{ title: "Reports — BFM Email Management System" }, { name: "description", content: "Review real email delivery performance and operational trends." }, { property: "og:title", content: "Reports — BFM Email Management System" }, { property: "og:description", content: "Review real email delivery performance and operational trends." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <Reports />,
});
