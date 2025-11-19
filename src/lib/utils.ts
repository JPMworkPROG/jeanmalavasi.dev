import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ANIMATION_DELAYS = {
  SHORT: 0.2,
  MEDIUM: 0.3,
  NORMAL: 0.4,
  DEFAULT: 0.5,
  LONG: 0.6,
  BASE: 0.7,
} as const;

export function getAnimationDelay(base: number, index: number, increment: number = ANIMATION_DELAYS.SHORT): string {
  return `${base + index * increment}s`;
}

export function handleDownload(file: string, name: string): void {
  const link = document.createElement("a");
  link.href = file;
  link.download = name;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function handleView(file: string): void {
  window.open(file, "_blank", "noopener,noreferrer");
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function handleContactSubmit(
  formData: ContactFormData,
  method: "email" | "whatsapp",
  email: string,
  whatsappNumber: string
): void {
  if (method === "whatsapp") {
    const whatsappMessage = `*${formData.subject}*\n\nOlá, meu nome é ${formData.name} (${formData.email})\n\n${formData.message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, "_blank");
  } else {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`De: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  }
}