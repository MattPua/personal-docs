"use client";

import { Dribbble, Book, Box, Instagram, Plus } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/shadcn/card";

const links = [
  {
    title: "Dribbble",
    icon: Dribbble,
    href: "https://dribbble.com/mattpua",
    description: "Self taught digital art, using Affinity Designer",
  },
  {
    title: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/yo_designsss/",
    description:
      "All my art, digital + paper. I have posted publicly at least once a week, every week since Inktober 2019.",
  },
  {
    title: "Medium",
    icon: Book,
    href: "https://matthewpua.medium.com/",
    description: "I used to write some things here. Not a lot, but some.",
  },
  {
    title: "3D Warehouse",
    icon: Box,
    href: "https://3dwarehouse.sketchup.com/by/mattpua",
    description:
      "A short period of time where I was trying to learn 3D modeling, and just started modelling everything around me.",
  },
];

export function CreativeLinks() {
  return (
    <section data-id="creative-links" className="@container/creative-links">
      <div className="grid grid-cols-1 gap-4 @lg/creative-links:grid-cols-2">
        {links.map((link) => (
          <Link
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            key={link.title}
            className="no-underline group/card "
          >
            <Card title={link.title} className="h-full group-hover/card:scale-105 transition duration-200 ease-in-out bg-fd-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 group-hover/card:text-fd-primary transition duration-200 ease-in-out">
                  <link.icon size={14} />
                  {link.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="group-hover/card:text-fd-primary transition duration-200 ease-in-out">
                  {link.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
