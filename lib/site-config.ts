// Phone/WhatsApp number are still placeholders (UAE-formatted) — replace with the real number.
const address =
  "Crown Park Hotel, Burjuman, Shop 01, Ground Floor, Exit 4, Al Hamriya, Dubai, United Arab Emirates";

export const siteConfig = {
  name: "VR Unisex Salon",
  shortName: "VR Salon",
  description:
    "Premium unisex hair, skin and beauty salon offering expert stylists, luxury treatments and a hygienic, relaxing experience.",
  phone: "+971 50 123 4567",
  whatsappNumber: "971501234567",
  email: "info@vrunisexsalon.com",
  address,
  currency: "AED",
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`,
  mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  instagramUrl: "https://www.instagram.com/vrunisexsalon_dxb/",
  instagramHandle: "vrunisexsalon_dxb",
  facebookUrl: "https://facebook.com/",
  hours: [
    { day: "Saturday - Thursday", time: "10:00 AM - 10:00 PM" },
    { day: "Friday", time: "2:00 PM - 10:00 PM" },
  ],
  rating: 4.9,
  reviewCount: 500,
};

export function whatsappLink(message = "Hi, I'd like to book an appointment.") {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telLink() {
  return `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
}
