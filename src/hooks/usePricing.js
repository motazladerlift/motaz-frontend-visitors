import { useState, useEffect } from 'react';

const usePricing = () => {
  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiBase = 'https://motaz-backend-api.onrender.com';

  useEffect(() => {
    fetchPricing();
  }, []);

  const fetchPricing = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${apiBase}/pricing`);
      
      // تحقق من نوع المحتوى للتأكد من أنه JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not JSON');
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // تحويل البيانات من API إلى الهيكل المطلوب للتطبيق
      const transformedData = transformApiData(data);
      setPricing(transformedData);
    } catch (error) {
      console.warn('Failed to fetch pricing, using defaults:', error.message);
      setError('Failed to load pricing');
      // استخدم الإعدادات الافتراضية في حالة الخطأ
      setPricing(getDefaultPricing());
    } finally {
      setLoading(false);
    }
  };

  // دالة لتحويل بيانات API إلى الهيكل المطلوب
  const transformApiData = (apiData) => {
    const { mainServices, additionalServices } = apiData;
    
    // تحويل الخدمات الرئيسية
    const ladderlift = {};
    mainServices.forEach((service, index) => {
      if (index === 0) ladderlift.basic = service;
      else if (index === 1) ladderlift.medium = service;
      else if (index === 2) ladderlift.high = service;
      else if (index === 3) ladderlift.veryHigh = service;
      else if (index === 4) ladderlift.extreme = service;
    });

    // تحويل الخدمات الإضافية
    const packages = {};
    const truck = {};
    
    additionalServices.forEach((service) => {
      if (service.category === 'package') {
        if (service.sort_order === 1) packages.package1 = service;
        else if (service.sort_order === 2) packages.package2 = service;
      } else if (service.category === 'truck') {
        truck.truck = service;
      }
    });

    return {
      ladderlift,
      packages,
      truck
    };
  };

  const getDefaultPricing = () => ({
    ladderlift: {
      basic: {
        price: '€60',
        period: '/ UUR',
        title: 'Ladderlift met bediener',
        features: [
          '1ste – 5de verdieping',
          'Extra half uur €30',
          'Geldig in Antwerpen (10km)',
          'per adres'
        ]
      },
      medium: {
        price: '€80',
        period: '/ UUR',
        title: 'Ladderlift met bediener',
        features: [
          '6de – 7de verdieping',
          'Extra half uur €40',
          'Geldig in Antwerpen (10km)',
          'per adres'
        ]
      },
      high: {
        price: '€120',
        period: '/ UUR',
        title: 'Ladderlift met bediener',
        features: [
          '8ste - 9de verdieping',
          'Extra half uur €60',
          'Geldig in Antwerpen (10km)',
          'per adres'
        ]
      }
    },
    packages: {
      package1: {
        price: '€250',
        period: '2 UUR',
        title: 'VERHUISPAKKET 1',
        features: [
          'Bijkomende halfuur €100',
          'LADDERLIFT TOT DE 5DE',
          'VERHUISWAGEN (22m3)',
          '2 ADRESSEN',
          '2 VERHUIZERS'
        ]
      },
      package2: {
        price: '€350',
        period: '3 UUR',
        title: 'VERHUISPAKKET 2',
        features: [
          'Bijkomende halfuur €100',
          'LADDERLIFT TOT DE 5DE',
          'VERHUISWAGEN (22m3)',
          '2 ADRESSEN',
          '2 VERHUIZERS'
        ]
      }
    },
    truck: {
      truck: {
        price: '€60',
        period: '/ PER UUR',
        title: 'VERHUISWAGEN MET CHAUFFEUR',
        features: [
          'Minimum 2 Uur',
          'VERHUISWAGEN (22m3)',
          '1 VERHUIZER',
          'Geldig rond Antwerpen (10km)',
          'per adres'
        ]
      }
    }
  });

  return {
    pricing,
    loading,
    error,
    refetch: fetchPricing
  };
};

export default usePricing;
