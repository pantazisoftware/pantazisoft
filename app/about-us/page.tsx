import Clear from "@/components/clear";
import { Button } from "@/components/ui/button";
import WhoWeAre from "@/components/whoweare";
import Numbers from "@/components/numbers";
import OurMission from "@/components/our-mission";
import {
  ChartSpline,
  Handshake,
  MousePointerClick,
  ChevronDown,
  Mouse,
  SwatchBook,
  Sparkles,
  FolderRoot,
  Users,
  MessageSquareCode,
} from "lucide-react";
import Image from "next/image";

export default function aboutUs() {
  return (
    <div>
      <WhoWeAre />
      <OurMission />
      <Numbers />
      <Clear />
    </div>
  );
}
