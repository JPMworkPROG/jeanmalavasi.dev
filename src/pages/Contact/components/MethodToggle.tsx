import { Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface MethodToggleProps {
  method: "email" | "whatsapp";
  onToggle: () => void;
}

export function MethodToggle({ method, onToggle }: MethodToggleProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Enviar por</label>
      <div className="flex items-center gap-3">
        <Mail className={`h-4 w-4 transition-colors ${method === "email" ? "text-primary" : "text-muted-foreground"}`} />
        <button
          type="button"
          role="switch"
          aria-checked={method === "whatsapp"}
          onClick={onToggle}
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-background shadow-sm transition-transform duration-200 ${
              method === "whatsapp" ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <SiWhatsapp className={`h-4 w-4 transition-colors ${method === "whatsapp" ? "text-primary" : "text-muted-foreground"}`} />
        <span className="text-sm text-muted-foreground ml-1">
          {method === "email" ? "E-mail" : "WhatsApp"}
        </span>
      </div>
      <input type="hidden" name="method" value={method} />
    </div>
  );
}

