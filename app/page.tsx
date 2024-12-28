import Capabilities from "@/components/capabilities2";
import Industries from "@/components/industries2";
import CTA from "@/components/cta2";
import Models from "@/components/models2";
import FAQ from "@/components/faq";
import Clear from "@/components/clear";

export default function Home() {
  return (
    <div>
      <CTA />
      <Capabilities />
      <Industries />

      <Models />
      <FAQ />
      <Clear />
    </div>
  );
}
