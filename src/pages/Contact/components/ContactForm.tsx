import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import { MethodToggle } from "./MethodToggle";
import type { FormData as FormDataType } from "../data";
import { handleContactSubmit } from "@/lib/utils";

interface ContactFormProps {
  formData: FormDataType;
}

export function ContactForm({ formData }: ContactFormProps) {
  const { t } = useTranslation();
  const [method, setMethod] = useState<"email" | "whatsapp">("email");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataObj = new FormData(e.currentTarget);
    const contactData = {
      name: formDataObj.get("name") as string,
      email: formDataObj.get("email") as string,
      subject: formDataObj.get("subject") as string,
      message: formDataObj.get("message") as string,
    };

    const whatsappMessage = t('contact.form.templates.whatsapp', {
      subject: contactData.subject,
      name: contactData.name,
      email: contactData.email,
      message: contactData.message,
    });

    const emailBody = t('contact.form.templates.emailBody', {
      name: contactData.name,
      email: contactData.email,
      message: contactData.message,
    });

    handleContactSubmit(contactData, method, formData.email, formData.whatsappNumber, {
      whatsapp: whatsappMessage,
      emailBody,
    });
  };

  return (
    <div className="opacity-0 animate-fade-in-up-scroll animation-delay-500">
      <Card className="border-border/60 bg-card p-4 sm:p-8 space-y-5">
        <div className="space-y-2 opacity-0 animate-fade-in animation-delay-700">
          <h2 className="text-2xl font-semibold">{formData.title}</h2>
          <p className="text-muted-foreground text-sm">{formData.description}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 opacity-0 animate-fade-in animation-delay-800">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              {t('contact.form.fields.name.label')}
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              required
              placeholder={t('contact.form.fields.name.placeholder')}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              {t('contact.form.fields.email.label')}
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              placeholder={t('contact.form.fields.email.placeholder')}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              {t('contact.form.fields.subject.label')}
            </label>
            <Input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder={t('contact.form.fields.subject.placeholder')}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              {t('contact.form.fields.message.label')}
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder={t('contact.form.fields.message.placeholder')}
            />
          </div>

          <MethodToggle method={method} onToggle={() => setMethod(method === "email" ? "whatsapp" : "email")} />

          <Button type="submit" className="w-full sm:w-auto">
            <Send className="mr-2 h-4 w-4" />
            {t('contact.form.sendButton')}
          </Button>
        </form>
      </Card>
    </div>
  );
}
