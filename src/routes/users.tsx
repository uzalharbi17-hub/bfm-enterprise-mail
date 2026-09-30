import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/screens";

export const Route = createFileRoute("/users")({
  head: () => ({ meta: [{ title: "Users & Roles — BFM Email Management System" }, { name: "description", content: "Control system access with defined enterprise roles." }, { property: "og:title", content: "Users & Roles — BFM Email Management System" }, { property: "og:description", content: "Control system access with defined enterprise roles." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CollectionPage kind="users" />,
});
