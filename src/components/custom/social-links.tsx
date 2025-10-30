import { cn } from "fumadocs-ui/utils/cn";
import { Github, Instagram, Linkedin, Mail, X } from "lucide-react";

import { Twitter } from "lucide-react";

import Link from "next/link";

export function SocialLinks() {
  const sharedClasses = "transition duration-300 ease-in-out group-hover:scale-110";
  return (
    <section className="flex gap-4">
      <Link href="https://www.linkedin.com/in/matthewpua/" aria-label="LinkedIn" className="group" target="_blank">
        <Linkedin className={cn(sharedClasses, "group-hover:fill-blue-600 group-hover:animate-wiggle group-hover:text-blue-600")} />
      </Link>
      <Link href="https://github.com/mattpua" aria-label="GitHub" className="group" target="_blank">
        <Github className={cn(sharedClasses, "group-hover:fill-gray-600 group-hover:animate-wiggle ")} />
      </Link>
      <Link href="https://x.com/yo_puaaa" aria-label="X (Twitter)" className="group" target="_blank">
        <Twitter className={cn(sharedClasses, "group-hover:fill-blue-600 group-hover:animate-wiggle group-hover:text-blue-600")} />
      </Link>
      <Link href="https://www.threads.com/@yo_puaaa" aria-label="Threads" className="group" target="_blank">
        <Instagram className={cn(sharedClasses, "group-hover:fill-pink-600 group-hover:animate-wiggle ")} />
      </Link>
      <Link href="mailto:contact@mattpua.com" aria-label="Email" className="group" target="_blank">
        <Mail className={cn(sharedClasses, "group-hover:animate-wiggle group-hover:text-green-500")} />
      </Link>
    </section>
  );
}