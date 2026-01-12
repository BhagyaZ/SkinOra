import React from 'react';
import { 
  Facebook, Instagram, Twitter, Youtube,
  MapPin, Phone, Mail, Truck, Shield, 
  RefreshCw, CreditCard, Globe, Heart
} from 'lucide-react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop All', href: '/shop' },
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Sale', href: '/sale' },
    { name: 'Gift Cards', href: '/gift-cards' },
  ];

  const categories = [
    { name: 'Face Care', href: '/category/face-care' },
    { name: 'Body Care', href: '/category/body-care' },
    { name: 'Hair Care', href: '/category/hair-care' },
    { name: 'Men\'s Grooming', href: '/category/mens-grooming' },
    { name: 'Sun Care', href: '/category/sun-care' },
    { name: 'Treatments', href: '/category/treatments' },
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
    { name: 'Blog', href: '/blog' },
    { name: 'Affiliate Program', href: '/affiliate' },
    { name: 'Store Locator', href: '/stores' },
  ];

  const helpLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns & Exchanges', href: '/returns' },
    { name: 'Order Tracking', href: '/track-order' },
    { name: 'Size Guide', href: '/size-guide' },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://facebook.com/skinora', name: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/skinora', name: 'Instagram' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com/skinora', name: 'Twitter' },
    { icon: <Youtube size={20} />, href: 'https://youtube.com/skinora', name: 'YouTube' },
  ];

  const paymentMethods = [
    { icon: '💳', name: 'Visa' },
    { icon: '💳', name: 'MasterCard' },
    { icon: '💳', name: 'American Express' },
    { icon: '📱', name: 'Apple Pay' },
    { icon: '📱', name: 'Google Pay' },
    { icon: '🏦', name: 'PayPal' },
  ];

  const features = [
    {
      icon: <Truck size={20} />,
      title: 'Free Shipping',
      description: 'On orders over $50'
    },
    {
      icon: <Shield size={20} />,
      title: '100% Authentic',
      description: 'Guaranteed genuine products'
    },
    {
      icon: <RefreshCw size={20} />,
      title: 'Easy Returns',
      description: '30-day return policy'
    },
    {
      icon: <CreditCard size={20} />,
      title: 'Secure Payment',
      description: 'SSL encrypted checkout'
    },
    {
      icon: <Globe size={20} />,
      title: 'Worldwide Shipping',
      description: 'To 50+ countries'
    },
    {
      icon: <Heart size={20} />,
      title: 'Cruelty-Free',
      description: 'All products are cruelty-free'
    }
  ];

  return (
    <footer className="footer">
      {/* Features Bar */}
      <div className="features-bar">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-icon">{feature.icon}</div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-col">
              <div className="footer-brand">
                <h3 className="footer-logo">SKIN<span>ORA</span></h3>
                <p className="footer-tagline">International Unisex Skincare</p>
                <p className="footer-description">
                  Your premier destination for authentic international skincare. 
                  We bring the world's best unisex skincare products to your doorstep.
                </p>
              </div>
              
              <div className="newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Get exclusive deals and skincare tips</p>
                <form className="newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                  />
                  <button type="submit" className="newsletter-btn">
                    Subscribe
                  </button>
                </form>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href}
                      className="social-icon"
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories Column */}
            <div className="footer-col">
              <h4>Categories</h4>
              <ul className="footer-links">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href={category.href}>{category.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="footer-col">
              <h4>Company</h4>
              <ul className="footer-links">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help Column */}
            <div className="footer-col">
              <h4>Help & Support</h4>
              <ul className="footer-links">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li>
                  <MapPin size={16} />
                  <div>
                    <strong>Address</strong>
                    <p>123 Beauty Street, Colombo 03, Sri Lanka</p>
                  </div>
                </li>
                <li>
                  <Phone size={16} />
                  <div>
                    <strong>Phone</strong>
                    <p>+94 77 123 4567</p>
                  </div>
                </li>
                <li>
                  <Mail size={16} />
                  <div>
                    <strong>Email</strong>
                    <p>support@skinora.com</p>
                  </div>
                </li>
              </ul>
              
              <div className="business-hours">
                <h5>Business Hours</h5>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p>Sat - Sun: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} SKINORA. All rights reserved.</p>
              <p className="made-with">
                Made with <Heart size={12} fill="#ff6b6b" color="#ff6b6b" /> in Sri Lanka
              </p>
            </div>
            
            <div className="payment-methods">
              <span>We accept:</span>
              <div className="payment-icons">
                {paymentMethods.map((method, index) => (
                  <span key={index} className="payment-icon" title={method.name}>
                    {method.icon}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="footer-legal">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-service">Terms of Service</a>
              <a href="/shipping-policy">Shipping Policy</a>
              <a href="/refund-policy">Refund Policy</a>
              <a href="/cookie-policy">Cookie Policy</a>
            </div>
          </div>
          
          <div className="certifications">
            <div className="certification-item">
              <Shield size={16} />
              <span>SSL Secure Checkout</span>
            </div>
            <div className="certification-item">
              <Heart size={16} />
              <span>Cruelty-Free Certified</span>
            </div>
            <div className="certification-item">
              <Globe size={16} />
              <span>International Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;