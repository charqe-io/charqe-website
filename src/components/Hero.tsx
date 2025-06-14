import React from 'react';
import { ChevronDown, Zap, Target, Users } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-300/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-500/15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-400/20 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="block mb-2">Charqe</span>
              <span className="text-2xl md:text-3xl font-normal text-blue-200">
                We are in charqe.
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Bilişim çözümlerinde 360 derece yaklaşımla, uygulamanın etki ettiği 
            tüm noktalara dokunarak kapsamlı ve etkili sistemler geliştiriyoruz.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="p-3 bg-blue-400/20 rounded-full">
                <Target className="w-8 h-8 text-blue-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">360° Yaklaşım</h3>
              <p className="text-blue-200 text-center text-sm">
                Tüm paydaşları düşünen kapsamlı çözümler
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="p-3 bg-blue-400/20 rounded-full">
                <Zap className="w-8 h-8 text-blue-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">Yenilikçi Teknoloji</h3>
              <p className="text-blue-200 text-center text-sm">
                Modern teknolojilerle güçlü uygulamalar
              </p>
            </div>

            <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="p-3 bg-blue-400/20 rounded-full">
                <Users className="w-8 h-8 text-blue-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">Kullanıcı Odaklı</h3>
              <p className="text-blue-200 text-center text-sm">
                Her kullanıcı grubuna özel deneyimler
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8">
            <button
              onClick={scrollToAbout}
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Daha Fazla Keşfet
              <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;