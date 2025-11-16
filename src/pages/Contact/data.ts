import type { ComponentType } from "react";
import { Mail, MapPin, Clock, MessageCircle, Linkedin, Instagram } from "lucide-react";

export interface ContactHeader {
  label: string;
  title: string;
  description: string;
}

export const contactHeader: ContactHeader = {
  label: "Entre em contato",
  title: "Vamos conversar?",
  description: "Estou aberto para discutir oportunidades, projetos ou apenas trocar uma ideia sobre tecnologia e desenvolvimento.",
};

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

export const contactInfo: ContactInfo = {
  title: "Informações de contato",
  description: "Você também pode me encontrar através destes canais.",
  items: [
    {
      icon: Mail,
      label: "E-mail",
      value: "jpm.work.prog@gmail.com",
      href: "mailto:jpm.work.prog@gmail.com",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+55 (27) 99589-2226",
      href: "https://wa.me/5527995892226",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jeanpintomalavasi",
      href: "https://www.linkedin.com/in/jeanpintomalavasi/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@jpizi",
      href: "https://www.instagram.com/jpizi/",
    },
  ],
};

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

export const locationAndAvailability: LocationAndAvailability = {
  title: "Localização e disponibilidade",
  description: "Entenda melhor meu contexto de trabalho e horário.",
  items: [
    {
      icon: MapPin,
      label: "Localização",
      value: "Espírito Santo, Brasil, GMT-3",
    },
    {
      icon: Clock,
      label: "Disponibilidade",
      value: "Remoto first • Disponível para syncs internacionais",
    },
  ],
};

export interface FormData {
  title: string;
  description: string;
  email: string;
  whatsappNumber: string;
}

export const formData: FormData = {
  title: "Envie uma mensagem",
  description: "Preencha o formulário abaixo e eu retornarei o mais breve possível.",
  email: "jpm.work.prog@gmail.com",
  whatsappNumber: "5527995892226",
};

