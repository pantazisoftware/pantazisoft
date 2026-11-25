import {
  LayoutDashboard,
  Rocket,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ServiceSlug } from "@/lib/services";

/** One mark per service, shared by the header menu and the home page. */
export const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  "mvp-development": Rocket,
  "custom-applications": LayoutDashboard,
  "mobile-app-development": Smartphone,
  "ai-integration": Sparkles,
};
