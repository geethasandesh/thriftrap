
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const navigation = {
    shop: {
      title: 'Shop',
      links: [
        { name: "Men's Product", href: '#' },
        { name: "Women's Product", href: '#' },
        { name: 'Winter Edition', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Discounts', href: '#' },
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About US', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'News', href: '#' },
        { name: 'purpose', href: '#' },
      ]
    },
    support: {
      title: 'Support',
      links: [
        { name: 'Order Status', href: '#' },
        { name: 'Shipping & Delivery', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Payment Option', href: '#' },
        { name: 'Contact', href: '#' },
      ]
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Fashion Yatra</h2>
            <p className="text-gray-400">
              Design amazing digital experiences that create more happy in the world.
            </p>
          </div>

          {/* Navigation Columns */}
          {Object.values(navigation).map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400">
            © 2023 Fashion Yatra. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;