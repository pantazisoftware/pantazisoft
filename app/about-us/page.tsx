import Clear from "@/components/clear";
import WhoWeAre from "@/components/whoweare";
import Numbers from "@/components/numbers";
import OurMission from "@/components/our-mission";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About us",
};


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
