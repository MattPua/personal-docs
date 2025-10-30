/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
import { IconDisplay } from "../ui/shadcn/icon-display";
import { Card } from "fumadocs-ui/components/card";
import type { icons } from "lucide-react";
import { Badge } from "../ui/shadcn/badge";
export function SortedCards({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: keyof typeof icons;
    description: string;
    tags?: string[];
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
          <div className="flex flex-wrap gap-2">
            {item.tags?.map((tag) => (
              <Badge variant="outline" key={tag}>
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    ));
}
