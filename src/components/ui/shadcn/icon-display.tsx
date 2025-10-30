import * as LucideIcons from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface IconDisplayProps {
  name: keyof typeof LucideIcons;
  className?: string;
  size?: number;
}

export const IconDisplay = ({
  name,
  className = "size-6",
  size,
}: IconDisplayProps) => {
  const IconComponent = LucideIcons[name] as LucideIcon;

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} size={size} />;
};
