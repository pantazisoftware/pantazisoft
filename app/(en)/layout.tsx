import { baseMetadata } from "@/lib/i18n";
import { Shell } from "@/views/shell";

export const metadata = baseMetadata("en");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Shell locale="en">{children}</Shell>;
}
