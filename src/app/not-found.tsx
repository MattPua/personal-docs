import { RootProvider } from "fumadocs-ui/provider/next";
import { baseOptions } from "../lib/layout.shared";
import { DocsLayout } from "../components/layout/docs";
import { source } from "../lib/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "../components/layout/page";
import Link from "next/link";

export default function NotFound() {
  return (
    <RootProvider>
      <DocsLayout tree={source.pageTree} {...baseOptions()}>
        <DocsPage toc={[]} full={false}>
          <DocsTitle>Not Found</DocsTitle>
          <DocsDescription>
            Could not find the page you were looking for.
          </DocsDescription>
          <DocsBody>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
          </DocsBody>
        </DocsPage>
      </DocsLayout>
    </RootProvider>
  );
}
