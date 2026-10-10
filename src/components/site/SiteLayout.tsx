import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { WhatsAppFab } from "./WhatsAppFab";
import studioBackground from "@/assets/studio-background.jpg";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="site-surface relative isolate flex min-h-screen flex-col bg-background">
      <div aria-hidden="true" className="studio-backdrop-lines pointer-events-none absolute inset-0 -z-10" />
      <img
        src={studioBackground}
        alt=""
        aria-hidden="true"
        width={1536}
        height={1024}
        decoding="async"
        className="studio-backdrop pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-auto w-full max-w-[1536px]"
      />
      <SiteHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </div>
  );
}
