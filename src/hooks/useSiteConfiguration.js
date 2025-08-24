import { useState, useEffect } from 'react';

const useSiteConfiguration = () => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiBase = 'https://motaz-backend-api.onrender.com';

  useEffect(() => {
    fetchConfiguration();
  }, []);

  const fetchConfiguration = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${apiBase}/site-configuration`);
      
      // تحقق من نوع المحتوى للتأكد من أنه JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not JSON');
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setConfig(data);
    } catch (error) {
      console.warn('Failed to fetch site configuration, using defaults:', error.message);
      setError('Failed to load site configuration');
      // استخدم الإعدادات الافتراضية في حالة الخطأ
      setConfig(getDefaultConfig());
    } finally {
      setLoading(false);
    }
  };

  const getDefaultConfig = () => ({
    contact: {
      phone: "+32 469 11 91 19",
      phone_display: "0469 119 119",
      email: "motazladerlift@gmail.com",
      email_display: "motazladerlift@gmail.com",
      whatsapp: "https://wa.me/message/27GB2V4YVAZ4E1",
      whatsapp_number: "+32469119119"
    },
    address: {
      street: "Frans Adriaenssensstraat 25",
      city: "Antwerpen",
      postal_code: "2170",
      country: "België"
    },
    business_hours: {
      display: "24 uur / 7 dagen",
      availability: "24/7 Beschikbaar"
    },
    social_media: {
      facebook: "https://www.facebook.com/motaz.ladderlift",
      instagram: "https://www.instagram.com/motaz_ladderlift/",
      youtube: "https://www.youtube.com/@motazladderlift",
      tiktok: "https://www.tiktok.com/@motazladderlift"
    },
    company: {
      name: "Motaz Ladderlift",
      description: "Professionele verhuis- en ladderlift services in Antwerpen en omgeving.",
      tagline: "Uw betrouwbare partner voor verhuis en ladderlift services",
      founded_year: 2020
    }
  });

  return {
    config,
    loading,
    error,
    refetch: fetchConfiguration
  };
};

export default useSiteConfiguration;
