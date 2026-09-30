import { createFileRoute } from "@tanstack/react-router";
import { Campaigns } from "@/components/screens";

export const Route = createFileRoute("/campaigns")({
  head: () => ({ meta: [{ title: "Campaigns — BFM Email Management System" }, { name: "description", content: "Plan, monitor, and control BFM corporate email campaigns." }, { property: "og:title", content: "Campaigns — BFM Email Management System" }, { property: "og:description", content: "Plan, monitor, and control BFM corporate email campaigns." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <Campaigns />,
});
