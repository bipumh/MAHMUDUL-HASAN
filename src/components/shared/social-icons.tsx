import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 8.5V7.5c0-.8.6-1.4 1.4-1.4H16V3.5h-2.2C11.7 3.5 10 5.2 10 7.4v1.1H8V11h2v9.5h3.5V11h2.6l.4-2.5h-3z" />
    </svg>
  );
}

export function TikTokIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.6 3.2c.4 1.4 1.4 2.6 2.9 3v3c-1.1 0-2.2-.3-3.1-.9v5.7a5.6 5.6 0 1 1-5.6-5.6c.3 0 .7 0 1 .1v3.1a2.6 2.6 0 1 0 1.6 2.4V3.2h3.2z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2.2a9.6 9.6 0 0 0-8.3 14.4L2.5 21.5l5-1.3A9.6 9.6 0 1 0 12 2.2zm0 1.9a7.7 7.7 0 1 1 0 15.4c-1.4 0-2.8-.4-4-1.1l-.5-.3-3 .8.8-2.9-.3-.5a7.6 7.6 0 0 1 7-11.4zm-2.9 4c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.9 4.5 3.9 2.2.9 2.7.7 3.2.7.5 0 1.5-.6 1.8-1.3.2-.6.2-1.1.1-1.2 0-.1-.2-.2-.5-.3l-1.7-.8c-.3-.1-.5-.2-.7.1-.2.2-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.1-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.2-.5 0-.2 0-.4-.1-.5l-.9-2c-.2-.6-.5-.6-.7-.6z" />
    </svg>
  );
}
