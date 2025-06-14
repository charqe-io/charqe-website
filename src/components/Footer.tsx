import React from 'react';
import { Heart, Code, Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Charqe</h3>
            <p className="text-gray-300">
              We are in charqe. - Bilişim çözümlerinde 360° yaklaşımla 
              kapsamlı ve etkili sistemler geliştiriyoruz.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
              <span>and</span>
              <Code className="w-4 h-4 text-blue-400" />
              <span>in Istanbul</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Hizmetlerimiz</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Özel Yazılım Geliştirme</li>
              <li>Mobil Uygulama Geliştirme</li>
              <li>Web Uygulamaları</li>
              <li>Sistem Entegrasyonu</li>
              <li>Teknik Destek</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">İletişim</h4>
            <div className="space-y-2 text-gray-300">
              <p>info@charqe.com</p>
              <p>+90 539 852 2341</p>
              <p>İstanbul, Türkiye</p>
            </div>
            <div className="flex items-center space-x-2 text-blue-400">
              <Zap className="w-4 h-4" />
              <span className="text-sm">360° Yaklaşım</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Charqe. Tüm hakları saklıdır.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            We are in charqe.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;