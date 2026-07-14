import { siteConfig } from "@/config/site";

/**
 * Floating WhatsApp button — fixed bottom-right on every page.
 * Uses safe-area insets so it clears mobile home indicators.
 */
export function WhatsAppFab() {
  return (
    <a
      href={siteConfig.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Message us on WhatsApp"
      className="fixed z-40 flex size-14 items-center justify-center rounded-full shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] ring-1 ring-black/10 transition-transform duration-200 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:scale-100"
      style={{
        backgroundColor: "#25D366",
        right: "max(1rem, env(safe-area-inset-right))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7"
        fill="#FFFFFF"
      >
        <path d="M19.11 17.36c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.28-.73.91-.9 1.1-.16.19-.33.21-.61.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.13-.12.28-.33.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.87-2.08-.23-.55-.46-.48-.63-.49l-.54-.01c-.19 0-.49.07-.75.35-.26.28-.98.96-.98 2.34 0 1.38 1 2.72 1.14 2.9.14.19 1.97 3.01 4.77 4.22.67.29 1.19.46 1.59.59.67.21 1.28.18 1.76.11.54-.08 1.66-.68 1.9-1.34.23-.66.23-1.22.16-1.34-.07-.12-.26-.19-.54-.33zM16.02 5.33c-5.9 0-10.7 4.79-10.7 10.68 0 1.88.49 3.72 1.43 5.34L5 27l5.79-1.72a10.66 10.66 0 0 0 5.23 1.34h.01c5.9 0 10.7-4.79 10.7-10.68 0-2.85-1.11-5.53-3.12-7.54a10.63 10.63 0 0 0-7.59-3.07zm0 19.5h-.01a8.85 8.85 0 0 1-4.52-1.24l-.32-.19-3.44 1.02 1.03-3.35-.21-.34a8.83 8.83 0 0 1-1.36-4.72c0-4.89 3.99-8.87 8.89-8.87 2.37 0 4.6.92 6.27 2.6a8.8 8.8 0 0 1 2.6 6.28c0 4.89-3.99 8.81-8.89 8.81z" />
      </svg>
    </a>
  );
}