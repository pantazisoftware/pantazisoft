import { MediaKitPage, mediaKitMetadata } from "@/views/media-kit";

export const metadata = mediaKitMetadata("ro");

export default function Page() {
  return <MediaKitPage locale="ro" />;
}
