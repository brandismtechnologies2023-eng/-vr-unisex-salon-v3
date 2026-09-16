export const siteConfig = {
  name: "VR Unisex Salon",
  shortName: "VR Salon",
  description:
    "Personalised beauty experiences, thoughtfully crafted for every style.",
  whatsappNumber: "971559566627",
  currency: "AED",
  instagramUrl: "https://www.instagram.com/vrunisexsalon_dxb/",
  instagramHandle: "vrunisexsalon_dxb",
  facebookUrl: "https://facebook.com/",
  // Placeholder search link — swap for the real Google Business Profile
  // review link (e.g. a g.page/r/.../review short link) once available.
  googleReviewsUrl:
    "https://www.google.com/search?q=VR+Unisex+Salon+Burjuman+Dubai+reviews",
  hours: [
    { day: "Saturday - Thursday", time: "10:00 AM - 10:00 PM" },
    { day: "Friday", time: "2:00 PM - 10:00 PM" },
  ],
  rating: 4.9,
  reviewCount: 200,
};

export function whatsappLink(message = "Hi, I'd like to book an appointment.") {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function mapEmbedUrl(address: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

export function mapLink(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
