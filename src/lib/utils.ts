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

export interface ContactSubmissionMessages {
  whatsapp: string;
  emailBody: string;
}

export function handleContactSubmit(
  formData: ContactFormData,
  method: "email" | "whatsapp",
  email: string,
  whatsappNumber: string,
  messages: ContactSubmissionMessages
): void {
  if (method === "whatsapp") {
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messages.whatsapp)}`;
    window.open(whatsappLink, "_blank");
  } else {
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(messages.emailBody)}`;
    window.location.href = mailtoLink;
  }
}
