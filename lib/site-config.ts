const address =
  "Crown Park Hotel, Burjuman, Shop 01, Ground Floor, Exit 4, Al Hamriya, Dubai, United Arab Emirates";

export const siteConfig = {
  name: "VR Unisex Salon",
  shortName: "VR Salon",
  description:
    "Personalised beauty experiences, thoughtfully crafted for every style.",
  phone: "+971 55 956 6627",
  whatsappNumber: "971559566627",
  email: "info@vrunisexsalon.com",
  address,
  currency: "AED",
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`,
  mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
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

export function telLink() {
  return `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
}
