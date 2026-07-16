import { WhatsAppIcon } from "@/components/shared/SocialIcons";
import { whatsappLink } from "@/lib/site-config";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
    </a>
  );
}
