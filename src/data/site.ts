export type NavLink = {
  label: string;
  href: string;
};

/**
 * Site-wide configuration.
 *
 * @note `url` is a placeholder canonical domain. Replace it with the real
 * public domain before deploying to avoid incorrect canonical/OG/sitemap URLs.
 *
 * @todo Place the CV PDF at /public/MD-Mahmudul-Hasan-CV.pdf.
 *   The download buttons across the site link to `cvHref`. Once the file is
 *   added, downloading works as-is; no code change is required.
 */
export const site = {
  name: "MD. Mahmudul Hasan",
  shortName: "MH",
  legalName: "MD. Mahmudul Hasan",
  title: "IT & Cybersecurity Leader",
  url: "https://mdmahmudulhasan.com",
  description:
    "MD. Mahmudul Hasan is an IT & Cybersecurity Leader with 13+ years directing enterprise IT infrastructure, network engineering, information security, IT service management, and multi-site technology operations across Bangladesh.",
  location: "Dhaka, Bangladesh",
  phone: "+880 1712-447013",
  phoneHref: "tel:+8801712447013",
  email: "bipu.mh@gmail.com",
  emailHref: "mailto:bipu.mh@gmail.com",
  linkedinHref: "https://linkedin.com/in/1bipu",
  linkedinLabel: "linkedin.com/in/1bipu",
  youtubeLabel: "Bipu IT Lab",
  youtubeHref: "https://youtube.com",
  cvHref: "/MD-Mahmudul-Hasan-CV.pdf",
  cvDownloadName: "MD-Mahmudul-Hasan-CV.pdf",
  foundedYear: 2013,
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const navCta = {
  label: "Download CV",
  href: site.cvHref,
};
