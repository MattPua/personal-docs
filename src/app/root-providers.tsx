import { RootProvider as FumadocsRootProvider } from "fumadocs-ui/provider/next";
import { Analytics } from "@vercel/analytics/next";

export function RootProviders({ children }: { children: React.ReactNode }) {
  return (
    <FumadocsRootProvider>
      <Analytics />
      {children}
    </FumadocsRootProvider>
  );
}
