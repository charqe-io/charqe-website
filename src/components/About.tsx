import React from 'react';
import { Circle, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const touchpoints = [
    { name: 'Yönetim Paneli', description: 'Yurt yöneticileri için' },
    { name: 'Öğrenci Mobil', description: 'Öğrenciler için' },
    { name: 'Veli Mobil', description: 'Veliler için' },
    { name: 'Parmak İzi', description: 'Giriş-çıkış sistemi' },
    { name: 'Raporlama', description: 'Analiz ve takip' },
    { name: 'Bildirimler', description: 'Anlık iletişim' }
  ];

  const principles = [
    'Tüm paydaş gruplarını düşünürüz',
    'Her kullanıcı deneyimini optimize ederiz',
    'Entegre sistemlerle verimliliği artırırız',
    'Güvenlik ve gizlilik önceliğimizdir'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            360° Yaklaşımımız
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Geliştirdiğimiz her uygulamada, sistemin etki ettiği tüm noktaları değerlendirip
            her paydaş için optimize edilmiş çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* 360 Degree Visualization */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">CHARQE</span>
              </div>
              
              {/* Touchpoint Circles */}
              {touchpoints.map((point, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`
                    }}
                  >
                    <div className="w-16 h-16 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md">
                      <Circle className="w-6 h-6 text-blue-600" fill="currentColor" />
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white p-2 rounded-lg shadow-lg border min-w-max">
                        <p className="text-sm font-semibold text-gray-900">{point.name}</p>
                        <p className="text-xs text-gray-600">{point.description}</p>
                      </div>
                    </div>
                    
                    {/* Connection Line */}
                    <div 
                      className="absolute w-0.5 bg-blue-300"
                      style={{
                        height: `${radius - 40}px`,
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'top center',
                        transform: `translate(-50%, -50%) rotate(${angle + Math.PI}rad)`
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Principles */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Çalışma Prensipleri</h3>
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-lg">{principle}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-900 mb-2">Neden 360°?</h4>
              <p className="text-blue-800">
                Çünkü başarılı bir uygulama, sadece teknik olarak çalışan bir sistem değil, 
                aynı zamanda tüm kullanıcı gruplarının ihtiyaçlarını karşılayan, 
                onları memnun eden ve değer katan bir ekosistemdir.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">360°</div>
            <p className="text-gray-600">Kapsamlı Yaklaşım</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-gray-600">Kullanıcı Odaklı</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-gray-600">Kesintisiz Hizmet</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
            <p className="text-gray-600">Sınırsız Destek</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;