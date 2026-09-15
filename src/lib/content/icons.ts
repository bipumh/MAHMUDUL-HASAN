import {
  Landmark,
  ShieldCheck,
  Network,
  Server,
  Headset,
  Fingerprint,
  Handshake,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Icon registry for the editable "Expertise" groups. Content stores the icon
 * as a string key (serializable); the public section resolves it back to a
 * Lucide component here.
 */
export const COMPETENCY_ICONS: Record<string, LucideIcon> = {
  governance: Landmark,
  cybersecurity: ShieldCheck,
  networking: Network,
  infrastructure: Server,
  itsm: Headset,
  iam: Fingerprint,
  vendor: Handshake,
  leadership: Users,
};

export const COMPETENCY_ICON_KEYS = Object.keys(COMPETENCY_ICONS);
