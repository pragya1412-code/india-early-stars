import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919711331299";
const WHATSAPP_MSG = encodeURIComponent("Hello - I'd like to learn more about Early Intervention Studio for my child.");

const WhatsAppFloat = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp/30 animate-ping" />
      <span className="relative flex items-center gap-2 bg-ink text-cream rounded-full pl-3.5 pr-5 py-3 shadow-elev hover:bg-whatsapp transition-all duration-500">
        <MessageCircle className="h-4 w-4" />
        <span className="text-xs tracking-wide">WhatsApp us</span>
      </span>
    </a>
  );
};

export default WhatsAppFloat;
