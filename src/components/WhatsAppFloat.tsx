import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919711331299";
const LABEL = "Chat with Early Intervention Studio on WhatsApp";
const WHATSAPP_MSG = encodeURIComponent(
  "Hello - I'd like to learn more about Early Intervention Studio for my child."
);

const WhatsAppFloat = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-whatsapp rounded-full"
      aria-label={LABEL}
    >
      <span aria-hidden="true" className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" />
      <span className="relative inline-flex items-center gap-2 bg-whatsapp text-white rounded-full pl-4 pr-5 min-h-12 min-w-12 shadow-elev hover:brightness-110 transition-all duration-300">
        <MessageCircle aria-hidden="true" className="h-5 w-5" />
        <span className="text-sm font-medium tracking-wide">WhatsApp us</span>
      </span>
    </a>
  );
};

export default WhatsAppFloat;
