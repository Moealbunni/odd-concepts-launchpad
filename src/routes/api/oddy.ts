import { createFileRoute } from "@tanstack/react-router";
import { handleOddyChat } from "@/lib/ai/oddy.server";

export const Route = createFileRoute("/api/oddy")({
  server: { handlers: { POST: ({ request }) => handleOddyChat(request) } },
});
