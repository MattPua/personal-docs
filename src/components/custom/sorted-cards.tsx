/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
import { IconDisplay } from "../ui/icon-display";
import { Card } from "fumadocs-ui/components/card";
import type { icons } from "lucide-react";
export function SortedCards({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: keyof typeof icons;
    description: string;
  }[];
}) {
  return items
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((item) => (
      <Card
        title={item.title}
        href={item.url}
        icon={<IconDisplay name={item.icon} />}
        key={item.title}
      >
        <div className="flex flex-col gap-4">
          <div dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      </Card>
    ));
}
