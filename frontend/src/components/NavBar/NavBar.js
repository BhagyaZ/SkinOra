import React, { useState } from 'react';
import { 
  Search, ShoppingCart, User, Menu, X, 
  ChevronRight, Phone, Mail
} from 'lucide-react';
import './NavBar.css';

function NavBar({ cartCount = 0, categories = [] }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Default categories if not provided
  const defaultCategories = [
    { id: 1, name: 'Face Care', count: 45, icon: '😊' },
    { id: 2, name: 'Body Care', count: 32, icon: '💪' },
    { id: 3, name: 'Hair Care', count: 28, icon: '💇' },
    { id: 4, name: 'Men\'s Grooming', count: 24, icon: '🧔' },
    { id: 5, name: 'Sun Care', count: 18, icon: '☀️' },
    { id: 6, name: 'Treatment', count: 36, icon: '✨' },
    { id: 7, name: 'Sets & Kits', count: 22, icon: '🎁' },
    { id: 8, name: 'New Arrivals', count: 15, icon: '🆕' },
  ];

  const navCategories = categories.length > 0 ? categories : defaultCategories;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <>
      {/* Top Banner */}
      <div className="top-banner">
        <div className="container">
          <p>🎉 Grand Opening Sale: Up to 50% Off International Skincare!</p>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-top">
            <div className="logo">
              <h1>SKIN<span>ORA</span></h1>
              <p className="tagline">International Unisex Skincare</p>
            </div>
            
            <div className="search-bar">
              <form onSubmit={handleSearch} className="search-form">
                <div className="search-input">
                  <Search size={20} />
                  <input 
                    type="text" 
                    placeholder="Search for skincare, brands, or categories..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button type="submit" className="search-btn">Search</button>
              </form>
            </div>

            <div className="header-actions">
              <button className="icon-btn" onClick={() => window.location.href = '/account'}>
                <User size={24} />
                <span>Account</span>
              </button>
              <button className="icon-btn cart-btn" onClick={() => window.location.href = '/cart'}>
                <ShoppingCart size={24} />
                <span>Cart</span>
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
              </button>
              <button 
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item active"><a href="/">Home</a></li>
              <li className="nav-item"><a href="/shopall">Shop All</a></li>
              <li className="nav-item has-dropdown">
                <a href="/categories">Categories <ChevronRight size={16} /></a>
                <div className="dropdown">
                  {navCategories.map(cat => (
                    <a key={cat.id} href={`/category/${cat.name.toLowerCase().replace(' ', '-')}`} className="dropdown-item">
                      <span className="dropdown-icon">{cat.icon}</span>
                      {cat.name} <span className="count">({cat.count})</span>
                    </a>
                  ))}
                </div>
              </li>
              <li className="nav-item"><a href="/brands">Brands</a></li>
              <li className="nav-item"><a href="/mens">Men's</a></li>
              <li className="nav-item"><a href="/sale">Sale</a></li>
              <li className="nav-item"><a href="/new-arrivals">New Arrivals</a></li>
              <li className="nav-item"><a href="/best-sellers">Best Sellers</a></li>
              <li className="nav-item"><a href="/guide">Skincare Guide</a></li>
            </ul>
            
            <div className="nav-extra">
              <a href="tel:+15551234567" className="nav-link">
                <Phone size={16} /> Contact: +1 (555) 123-4567
              </a>
              <a href="mailto:support@skinora.com" className="nav-link">
                <Mail size={16} /> support@skinora.com
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;