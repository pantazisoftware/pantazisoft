import { ServicesPage, servicesMetadata } from "@/views/services";

export const metadata = servicesMetadata("ro");

export default function Page() {
  return <ServicesPage locale="ro" />;
}
