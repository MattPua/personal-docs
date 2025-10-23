/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
import { cn } from "@/lib/cn";

interface TimelineItem {
  date: string;
  text: string;
}

interface TimelineProps {
  items: TimelineItem[];
  reverse?: boolean;
  className?: string;
}

export function Timeline({ items, reverse = false, className }: TimelineProps) {
  const displayItems = reverse ? [...items].reverse() : items;

  return (
    <div className={cn("relative flex flex-col gap-4", className)}>
      {displayItems.map((item, index) => (
        <div key={item.text} className="flex gap-2 relative">
          <div className="relative shrink-0 mt-1">
            <div className="size-3 rounded-full bg-primary border-2 border-background" />
          </div>
          <div
            className="absolute left-[5px] top-[17px] w-px h-full bg-fd-muted"
            data-id="line"
          />

          <div className="flex-1">
            <div className="text-xs text-muted-foreground">{item.date}</div>
            <div dangerouslySetInnerHTML={{ __html: item.text }} />
          </div>
        </div>
      ))}
    </div>
  );
}
