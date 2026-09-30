import { createFileRoute } from "@tanstack/react-router";
import { Contacts } from "@/components/screens";

export const Route = createFileRoute("/contacts")({
  head: () => ({ meta: [{ title: "Contacts — BFM Email Management System" }, { name: "description", content: "Manage BFM recipients, departments, and group membership." }, { property: "og:title", content: "Contacts — BFM Email Management System" }, { property: "og:description", content: "Manage BFM recipients, departments, and group membership." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <Contacts />,
});
