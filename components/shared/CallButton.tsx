import { Phone } from "lucide-react";
import { telLink } from "@/lib/site-config";

export default function CallButton() {
  return (
    <a
      href={telLink()}
      aria-label="Call the salon"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-rose-600 shadow-lg transition-transform hover:scale-105"
    >
      <Phone className="h-6 w-6 text-white" fill="white" />
    </a>
  );
}
