import { baseMetadata } from "@/lib/i18n";
import { Shell } from "@/views/shell";

export const metadata = baseMetadata("ro");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <Shell locale="ro">{children}</Shell>;
}
