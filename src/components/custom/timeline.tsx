"use client";

import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the item with the highest intersection ratio
        let maxRatio = 0;
        let activeItemIndex = activeIndex;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            const index = itemRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) {
              activeItemIndex = index;
            }
          }
        });

        // Only update if we found a better intersection
        if (maxRatio > 0) {
          setActiveIndex(activeItemIndex);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-30% 0px -30% 0px",
      },
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [activeIndex]);

  return (
    <div className={cn("relative flex flex-col gap-4", className)}>
      {displayItems.map((item, index) => (
        <div
          key={item.text}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          className={cn(
            "flex gap-2 relative group transition-colors duration-200 ease-in-out p-2 rounded-md",
            activeIndex === index ? "bg-fd-accent/50" : "hover:bg-fd-accent/50",
          )}
        >
          <div className="relative shrink-0 mt-1">
            <div
              className={cn(
                "size-3 rounded-full border-2 border-fd-background transition-colors duration-200 ease-in-out",
                activeIndex === index
                  ? "bg-fd-primary scale-125 animate-pulse"
                  : "bg-fd-secondary group-hover:bg-fd-primary/80",
              )}
              data-id="dot"
            />
          </div>
          <div
            className="absolute left-[14px] top-[25px] w-px h-[85%] bg-fd-muted"
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
