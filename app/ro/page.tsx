import { HomePage, homeMetadata } from "@/views/home";

export const metadata = homeMetadata("ro");

export default function Page() {
  return <HomePage locale="ro" />;
}
