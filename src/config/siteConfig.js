/**
 * Site Configuration
 * This file contains all the basic information about the website in one place.
 * Update this file to change information across the entire site.
 */

const siteConfig = {
  // Basic Site Information
  siteName: "Motaz Ladderlift",
  siteDescription: "Professionele verhuis- en ladderlift services in Antwerpen en omgeving.",
  siteTagline: "Uw betrouwbare partner voor verhuis en ladderlift services",
  
  // Contact Information
  contact: {
    phone: "+32 469 11 91 19",
    phoneDisplay: "0469 119 119",
    email: "motazladerlift@gmail.com",
    emailDisplay: "motazladerlift@gmail.com",
    whatsapp: "https://wa.me/message/27GB2V4YVAZ4E1",
    whatsappNumber: "+32469119119",
  },
  
  // Address Information
  address: {
    street: "Frans Adriaenssensstraat 25",
    city: "Antwerpen",
    postalCode: "2170",
    country: "België",
  },
  
  // Business Hours
  businessHours: {
    display: "24 uur / 7 dagen",
    availability: "24/7 Beschikbaar",
  },
  
  // Social Media Links
  socialMedia: {
    facebook: "https://www.facebook.com/motaz.ladderlift",
    instagram: "https://www.instagram.com/motaz_ladderlift/",
    youtube: "https://www.youtube.com/@motazladderlift",
    tiktok: "https://www.tiktok.com/@motazladderlift",
  },
  
  // Company Information
  company: {
    foundedYear: 2020,
    registrationNumber: "", // Add if available
    vatNumber: "", // Add if available
  },
  
  // Logo Paths
  logos: {
    light: "/images/FurnitureTransport.png",
    dark: "/images/FurnitureTransport.png",
  },
  
  // Form Messages
  formMessages: {
    success: "Uw bericht is succesvol verzonden! We nemen zo snel mogelijk contact met u op.",
    error: "Er is een fout opgetreden bij het verzenden van uw bericht. Probeer het later opnieuw.",
  },
  
  // SEO Information
  seo: {
    defaultTitle: "Motaz Ladderlift | Verhuislift Verhuur in Antwerpen",
    defaultDescription: "Professionele verhuis- en ladderlift services in Antwerpen en omgeving. 24/7 beschikbaar voor al uw verhuisbehoeften.",
    siteUrl: "https://motazladderlift.be", // Update with actual URL
    ogImage: "/images/og-image.jpg", // Update with actual Open Graph image
  },
  
  // Navigation Links (for reference)
  navigation: [
    { name: "Home", path: "/" },
    { name: "Ladderlift", path: "/ladder-lift" },
    { name: "Verhuizen", path: "/verhuizen" },
    { name: "Prijzen", path: "/prijzen" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ],
  
  // Copyright Information
  copyright: {
    text: "Motaz Ladderlift | All Rights Reserved",
    designedBy: {
      name: "Mihwar Al Arab",
      url: "https://mihwaralarab.com/",
    },
  },
};

export default siteConfig;
