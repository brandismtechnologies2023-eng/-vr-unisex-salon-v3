// Placeholder business details — replace with real values before launch.
export const siteConfig = {
  name: "VR Unisex Salon",
  shortName: "VR Salon",
  description:
    "Premium unisex hair, skin and beauty salon offering expert stylists, luxury treatments and a hygienic, relaxing experience.",
  phone: "+91 98765 43210",
  whatsappNumber: "919876543210",
  email: "info@vrunisexsalon.com",
  address: "123 MG Road, Near City Mall, Ahmedabad, Gujarat 380001",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Ahmedabad,Gujarat&output=embed",
  mapLink: "https://maps.google.com/?q=VR+Unisex+Salon+Ahmedabad",
  instagramUrl: "https://instagram.com/",
  facebookUrl: "https://facebook.com/",
  hours: [
    { day: "Monday - Saturday", time: "10:00 AM - 8:30 PM" },
    { day: "Sunday", time: "11:00 AM - 6:00 PM" },
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
