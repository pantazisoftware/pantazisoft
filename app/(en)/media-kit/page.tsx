import { MediaKitPage, mediaKitMetadata } from "@/views/media-kit";

export const metadata = mediaKitMetadata("en");

export default function Page() {
  return <MediaKitPage locale="en" />;
}
