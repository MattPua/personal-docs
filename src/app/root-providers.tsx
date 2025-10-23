import { RootProvider as FumadocsRootProvider } from "fumadocs-ui/provider/next";

export function RootProviders({ children }: { children: React.ReactNode }) {
  return <FumadocsRootProvider>{children}</FumadocsRootProvider>;
}
