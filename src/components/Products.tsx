import React, { useState } from 'react';
import { 
  Smartphone, 
  Shield, 
  Users, 
  BarChart3, 
  Bell, 
  Settings,
  ArrowRight,
  CheckCircle,
  Fingerprint,
  Monitor
} from 'lucide-react';

const Products = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Yönetim Paneli',
      description: 'Yurt yöneticileri için kapsamlı yönetim sistemi',
      details: [
        'Öğrenci kayıt ve takip sistemi',
        'Oda atama ve yönetimi',
        'Ödeme takip ve faturalandırma',
        'Detaylı raporlama araçları'
      ]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Öğrenci Mobil Uygulaması',
      description: 'Öğrenciler için özel tasarlanmış mobil deneyim',
      details: [
        'Giriş-çıkış geçmişi görüntüleme',
        'Oda arkadaşları ile iletişim',
        'Etkinlik ve duyuru takibi',
        'Kişisel profil yönetimi'
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Veli Mobil Uygulaması',
      description: 'Veliler için özel tasarlanmış takip sistemi',
      details: [
        'Çocuğun giriş-çıkış durumu',
        'Anlık bildirimler',
        'Ödeme durumu takibi',
        'Yurt yönetimi ile iletişim'
      ]
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: 'Parmak İzi Entegrasyonu',
      description: 'Güvenli ve hızlı giriş-çıkış sistemi',
      details: [
        'Biyometrik güvenlik',
        'Anlık kayıt tutma',
        'Hızlı ve güvenli erişim',
        'Sahte kimlik engelleme'
      ]
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: 'Anlık Bildirim Sistemi',
      description: 'Tüm paydaşlar için özel bildirimler',
      details: [
        'Giriş-çıkış bildirimleri',
        'Acil durum uyarıları',
        'Etkinlik duyuruları',
        'Ödeme hatırlatmaları'
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analiz ve Raporlama',
      description: 'Detaylı analiz ve raporlama araçları',
      details: [
        'Kullanım istatistikleri',
        'Trend analizleri',
        'Performans raporları',
        'Özelleştirilebilir dashboardlar'
      ]
    }
  ];

  const benefits = [
    'Tüm paydaşlar için entegre çözüm',
    'Güvenli biyometrik erişim',
    'Anlık bildirim ve takip',
    'Kapsamlı raporlama',
    'Kolay kullanım',
    '7/24 teknik destek'
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            YurtApps - Kapsamlı Yurt Yönetim Sistemi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            360° yaklaşım felsefemizin en iyi örneği. Öğrenciler, veliler ve yurt yöneticileri 
            için tasarlanmış entegre bir ekosistem.
          </p>
        </div>

        {/* Main Product Showcase */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">YurtApps Ekosistemi</h3>
              </div>
              
              <p className="text-gray-700 text-lg">
                Yurt yönetiminde tüm süreçleri dijitalleştiren, her paydaş grubunun 
                ihtiyaçlarını karşılayan kapsamlı bir platform.
              </p>

              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
                Detayları İncele
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Platform Bileşenleri</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {features.slice(0, 4).map((feature, index) => (
                    <div 
                      key={index}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="text-blue-600 mb-2">{feature.icon}</div>
                      <h5 className="font-semibold text-gray-900 text-sm mb-1">{feature.title}</h5>
                      <p className="text-gray-600 text-xs">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Platform Özellikleri</h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`${activeFeature === index ? 'text-white' : 'text-blue-600'}`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{feature.title}</h4>
                      <p className={`text-sm ${
                        activeFeature === index ? 'text-blue-100' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg text-white">
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {features[activeFeature].title}
                </h3>
              </div>
              
              <p className="text-gray-600 text-lg mb-6">
                {features[activeFeature].description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features[activeFeature].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;