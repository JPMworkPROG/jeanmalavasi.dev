import type { ComponentType } from "react";
import { Mail, MapPin, Clock, MessageCircle, Linkedin, Instagram } from "lucide-react";

export interface ContactHeader {
  label: string;
  title: string;
  description: string;
}

export const getContactHeader = (t: (key: string) => string): ContactHeader => ({
  label: t('contact.header.label'),
  title: t('contact.header.title'),
  description: t('contact.header.description'),
});

export interface ContactInfoItem {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}

export interface ContactInfo {
  title: string;
  description: string;
  items: ContactInfoItem[];
}

export const getContactInfo = (t: (key: string) => string): ContactInfo => ({
  title: t('contact.contactInfo.title'),
  description: t('contact.contactInfo.description'),
  items: [
    {
      icon: Mail,
      label: t('contact.contactInfo.email.label'),
      value: t('contact.contactInfo.email.value'),
      href: "mailto:jpm.work.prog@gmail.com",
    },
    {
      icon: MessageCircle,
      label: t('contact.contactInfo.whatsapp.label'),
      value: t('contact.contactInfo.whatsapp.value'),
      href: "https://wa.me/5527995892226",
    },
    {
      icon: Linkedin,
      label: t('contact.contactInfo.linkedin.label'),
      value: t('contact.contactInfo.linkedin.value'),
      href: "https://www.linkedin.com/in/jeanpintomalavasi/",
    },
    {
      icon: Instagram,
      label: t('contact.contactInfo.instagram.label'),
      value: t('contact.contactInfo.instagram.value'),
      href: "https://www.instagram.com/jpizi/",
    },
  ],
});

export interface LocationAndAvailabilityItems {
  icon: ComponentType<{ className?: string }>;
  label: string;
  href?: string;
  value?: string;
}

export interface LocationAndAvailability {
  title: string;
  description: string;
  items: LocationAndAvailabilityItems[];
}

export const getLocationAndAvailability = (t: (key: string) => string): LocationAndAvailability => ({
  title: t('contact.locationAndAvailability.title'),
  description: t('contact.locationAndAvailability.description'),
  items: [
    {
      icon: MapPin,
      label: t('contact.locationAndAvailability.location.label'),
      value: t('contact.locationAndAvailability.location.value'),
    },
    {
      icon: Clock,
      label: t('contact.locationAndAvailability.availability.label'),
      value: t('contact.locationAndAvailability.availability.value'),
    },
  ],
});

export interface FormData {
  title: string;
  description: string;
  email: string;
  whatsappNumber: string;
}

export const getFormData = (t: (key: string) => string): FormData => ({
  title: t('contact.form.title'),
  description: t('contact.form.description'),
  email: t('contact.form.email'),
  whatsappNumber: t('contact.form.whatsappNumber'),
});

