import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999";
const WHATSAPP_MSG = encodeURIComponent("Hi, I want to know more about autism therapy for my child.");

const WhatsAppFloat = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp text-primary-foreground rounded-full p-4 shadow-2xl hover:shadow-xl hover:scale-110 transition-all animate-pulse-gentle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppFloat;
