import { useTranslation } from "react-i18next";
import { ContactHeader } from "./components/ContactHeader";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
import { ContactLocationAndAvailability } from "./components/ContactLocationAndAvailability";
import { getContactHeader, getFormData, getContactInfo, getLocationAndAvailability } from "./data";

export default function Contact() {
  const { t, i18n } = useTranslation();

  return (
    <section className="container mx-auto px-6 py-16" key={i18n.language}>
      <ContactHeader header={getContactHeader(t)} />

      <div className="grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <ContactForm formData={getFormData(t)} />

        <div className="space-y-8 opacity-0 animate-fade-in-up-scroll animation-delay-600">
          <ContactInfo contactInfo={getContactInfo(t)} />
          <ContactLocationAndAvailability locationAndAvailability={getLocationAndAvailability(t)} />
        </div>
      </div>
    </section>
  );
}
