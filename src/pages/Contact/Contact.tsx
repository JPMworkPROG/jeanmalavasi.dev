import { ContactHeader } from "./components/ContactHeader";
import { ContactForm } from "./components/ContactForm";
import { ContactInfo } from "./components/ContactInfo";
import { ContactLocationAndAvailability } from "./components/ContactLocationAndAvailability";
import { contactHeader, formData, contactInfo, locationAndAvailability } from "./data";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-16">
      <ContactHeader header={contactHeader} />

      <div className="grid gap-8 sm:gap-12 grid-cols-1 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <ContactForm formData={formData} />

        <div className="space-y-8 opacity-0 animate-fade-in-up-scroll animation-delay-600">
          <ContactInfo contactInfo={contactInfo} />
          <ContactLocationAndAvailability locationAndAvailability={locationAndAvailability} />
        </div>
      </div>
    </div>
  );
}
