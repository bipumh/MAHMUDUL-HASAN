import { buildOgImage, imageContentType, imageSize } from "@/components/shared/og-image";

export const runtime = "nodejs";
export const dynamic = "force-static";
export const alt = "MD. Mahmudul Hasan — IT & Cybersecurity Leader";
export const size = imageSize;
export const contentType = imageContentType;

export default function OpengraphImage() {
  return buildOgImage();
}
