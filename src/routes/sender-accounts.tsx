import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/screens";

export const Route = createFileRoute("/sender-accounts")({
  head: () => ({ meta: [{ title: "Sender Accounts — BFM Email Management System" }, { name: "description", content: "Manage SMTP infrastructure and sender routing securely." }, { property: "og:title", content: "Sender Accounts — BFM Email Management System" }, { property: "og:description", content: "Manage SMTP infrastructure and sender routing securely." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: () => <CollectionPage kind="senders" />,
});
