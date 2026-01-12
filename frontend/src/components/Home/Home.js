import React, { useState, useEffect } from 'react';
import { 
  Search, ShoppingCart, User, Menu, X, 
  Star, ChevronRight, Filter, Truck, 
  Shield, RefreshCw, Phone, Mail, MapPin,
  Facebook, Instagram, Twitter, Youtube
} from 'lucide-react';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cartCount, setCartCount] = useState(3);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredBrands, setFeaturedBrands] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Load sample data
    const loadData = () => {
      // Categories
      const categoriesData = [
        { id: 1, name: 'Face Care', count: 45, icon: '😊' },
        { id: 2, name: 'Body Care', count: 32, icon: '💪' },
        { id: 3, name: 'Hair Care', count: 28, icon: '💇' },
        { id: 4, name: 'Men\'s Grooming', count: 24, icon: '🧔' },
        { id: 5, name: 'Sun Care', count: 18, icon: '☀️' },
        { id: 6, name: 'Treatment', count: 36, icon: '✨' },
        { id: 7, name: 'Sets & Kits', count: 22, icon: '🎁' },
        { id: 8, name: 'New Arrivals', count: 15, icon: '🆕' },
      ];

      // Products
      const productsData = [
        {
          id: 1,
          name: 'Korean Snail Mucin Essence',
          brand: 'COSRX',
          price: 24.99,
          originalPrice: 32.99,
          discount: 24,
          rating: 4.7,
          reviews: 128,
          image: 'https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          category: 'Face Care',
          isNew: true,
          isBestSeller: true
        },
        {
          id: 2,
          name: 'Japanese Rice Water Cleanser',
          brand: 'KIKUMASAMUNE',
          price: 18.50,
          originalPrice: 22.99,
          discount: 20,
          rating: 4.5,
          reviews: 89,
          image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          category: 'Face Care',
          isNew: false,
          isBestSeller: true
        },
        {
          id: 3,
          name: 'Swiss Vitamin C Serum',
          brand: 'LA PRAIRIE',
          price: 89.99,
          originalPrice: 129.99,
          discount: 31,
          rating: 4.9,
          reviews: 56,
          image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          category: 'Treatment',
          isNew: true,
          isBestSeller: false
        },
        {
          id: 4,
          name: 'Australian Clay Mask',
          brand: 'AESOP',
          price: 32.99,
          originalPrice: 39.99,
          discount: 18,
          rating: 4.6,
          reviews: 203,
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
          category: 'Face Care',
          isNew: false,
          isBestSeller: true
        },
        {
          id: 5,
          name: 'French Hyaluronic Acid Cream',
          brand: 'LA ROCHE-POSAY',
          price: 29.99,
          originalPrice: 36.99,
          discount: 19,
          rating: 4.8,
          reviews: 167,
          image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          category: 'Face Care',
          isNew: false,
          isBestSeller: true
        },
        {
          id: 6,
          name: 'Swedish Body Lotion',
          brand: 'L:A BRUKET',
          price: 26.50,
          originalPrice: 31.99,
          discount: 17,
          rating: 4.4,
          reviews: 78,
          image: 'https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70',
          category: 'Body Care',
          isNew: true,
          isBestSeller: false
        },
        {
          id: 7,
          name: 'Korean Sunscreen SPF 50+',
          brand: 'BEAUTY OF JOSEON',
          price: 21.99,
          originalPrice: 27.99,
          discount: 21,
          rating: 4.9,
          reviews: 312,
          image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70',
          category: 'Sun Care',
          isNew: false,
          isBestSeller: true
        },
        {
          id: 8,
          name: 'Japanese Hair Serum',
          brand: 'SHISEIDO',
          price: 34.99,
          originalPrice: 42.99,
          discount: 19,
          rating: 4.7,
          reviews: 94,
          image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70',
          category: 'Hair Care',
          isNew: false,
          isBestSeller: true
        }
      ];

      // Brands
      const brandsData = [
        { id: 1, name: 'COSRX', logo: '🇰🇷', productCount: 24 },
        { id: 2, name: 'AESOP', logo: '🇦🇺', productCount: 18 },
        { id: 3, name: 'LA ROCHE-POSAY', logo: '🇫🇷', productCount: 32 },
        { id: 4, name: 'SHISEIDO', logo: '🇯🇵', productCount: 28 },
        { id: 5, name: 'BEAUTY OF JOSEON', logo: '🇰🇷', productCount: 16 },
        { id: 6, name: 'KIEHL\'S', logo: '🇺🇸', productCount: 22 },
      ];

      setCategories(categoriesData);
      setProducts(productsData);
      setFeaturedBrands(brandsData);
    };

    loadData();
  }, []);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (productId) => {
    setCartCount(prev => prev + 1);
    // In a real app, you would update the cart in state/context
  };

  const quickView = (productId) => {
    // In a real app, this would open a quick view modal
    console.log('Quick view for product:', productId);
  };

  const bannerOffers = [
    { id: 1, text: 'Free Delivery on Orders Over $50', icon: <Truck size={18} /> },
    { id: 2, text: '30-Day Return Policy', icon: <RefreshCw size={18} /> },
    { id: 3, text: 'Secure Payment', icon: <Shield size={18} /> },
    { id: 4, text: 'Authentic Products', icon: <Star size={18} /> },
  ];

  return (
    <div className="home">
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
              <div className="search-input">
                <Search size={20} />
                <input 
                  type="text" 
                  placeholder="Search for skincare, brands, or categories..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="search-btn">Search</button>
            </div>

            <div className="header-actions">
              <button className="icon-btn">
                <User size={24} />
                <span>Account</span>
              </button>
              <button className="icon-btn cart-btn">
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
              <li className="nav-item active"><a href="#">Home</a></li>
              <li className="nav-item"><a href="#">Shop All</a></li>
              <li className="nav-item has-dropdown">
                <a href="#">Categories <ChevronRight size={16} /></a>
                <div className="dropdown">
                  {categories.map(cat => (
                    <a key={cat.id} href="#" className="dropdown-item">
                      <span className="dropdown-icon">{cat.icon}</span>
                      {cat.name} <span className="count">({cat.count})</span>
                    </a>
                  ))}
                </div>
              </li>
              <li className="nav-item"><a href="#">Brands</a></li>
              <li className="nav-item"><a href="#">Men's</a></li>
              <li className="nav-item"><a href="#">Sale</a></li>
              <li className="nav-item"><a href="#">New Arrivals</a></li>
              <li className="nav-item"><a href="#">Best Sellers</a></li>
              <li className="nav-item"><a href="#">Skincare Guide</a></li>
            </ul>
            
            <div className="nav-extra">
              <a href="#" className="nav-link">
                <Phone size={16} /> Contact: +1 (555) 123-4567
              </a>
              <a href="#" className="nav-link">
                <Mail size={16} /> support@globalglow.com
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Offers Banner */}
      <div className="offers-banner">
        <div className="container">
          {bannerOffers.map(offer => (
            <div key={offer.id} className="offer-item">
              {offer.icon}
              <span>{offer.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <section className="hero-banner">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h2>Global Skincare Delivered</h2>
                <h3>Discover Authentic Products From Around The World</h3>
                <p>From Korean serums to Swiss creams, we bring the world's best skincare to your doorstep.</p>
                <div className="hero-actions">
                  <button className="btn-primary">Shop Now</button>
                  <button className="btn-secondary">View All Brands</button>
                </div>
              </div>
              <div className="hero-image">
                <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Skincare Products" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Shop By Category</h2>
              <a href="#" className="view-all">View All <ChevronRight size={16} /></a>
            </div>
            <div className="categories-grid">
              {categories.map(category => (
                <div 
                  key={category.id} 
                  className={`category-card ${selectedCategory === category.name ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-info">
                    <h3>{category.name}</h3>
                    <p>{category.count} products</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured-products">
          <div className="container">
            <div className="section-header">
              <div>
                <h2 className="section-title">Featured Products</h2>
                <p className="section-subtitle">Best selling international skincare</p>
              </div>
              <div className="filter-options">
                <button className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`} onClick={() => setSelectedCategory('all')}>
                  All Products
                </button>
                <button className={`filter-btn ${selectedCategory === 'Face Care' ? 'active' : ''}`} onClick={() => setSelectedCategory('Face Care')}>
                  Face Care
                </button>
                <button className={`filter-btn ${selectedCategory === 'Treatment' ? 'active' : ''}`} onClick={() => setSelectedCategory('Treatment')}>
                  Treatments
                </button>
              </div>
            </div>

            <div className="products-grid">
              {filteredProducts.slice(0, 8).map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                    {product.discount > 0 && (
                      <div className="discount-badge">-{product.discount}%</div>
                    )}
                    {product.isNew && <div className="new-badge">NEW</div>}
                    {product.isBestSeller && <div className="bestseller-badge">BEST SELLER</div>}
                    <div className="product-actions">
                      <button className="action-btn" onClick={() => quickView(product.id)}>
                        Quick View
                      </button>
                      <button className="action-btn wishlist-btn">♥</button>
                    </div>
                  </div>
                  <div className="product-info">
                    <span className="product-brand">{product.brand}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            fill={i < Math.floor(product.rating) ? "#FFD700" : "#E0E0E0"}
                            color={i < Math.floor(product.rating) ? "#FFD700" : "#E0E0E0"}
                          />
                        ))}
                      </div>
                      <span className="rating-text">{product.rating} ({product.reviews})</span>
                    </div>
                    <div className="product-pricing">
                      <span className="current-price">${product.price.toFixed(2)}</span>
                      {product.originalPrice > product.price && (
                        <span className="original-price">${product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                    <button 
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product.id)}
                    >
                      <ShoppingCart size={16} /> Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="view-more">
              <button className="btn-secondary">View More Products</button>
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="brands-section">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Shop By Brand</h2>
              <p className="section-subtitle">Authentic international brands</p>
            </div>
            <div className="brands-grid">
              {featuredBrands.map(brand => (
                <div key={brand.id} className="brand-card">
                  <div className="brand-logo">{brand.logo}</div>
                  <h3>{brand.name}</h3>
                  <p>{brand.productCount} products</p>
                  <button className="brand-btn">Shop Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Banner */}
        <section className="features-banner">
          <div className="container">
            <div className="features-grid">
              <div className="feature-item">
                <Truck size={32} />
                <h3>Free Shipping</h3>
                <p>Free delivery on orders over $50</p>
              </div>
              <div className="feature-item">
                <Shield size={32} />
                <h3>100% Authentic</h3>
                <p>Guaranteed genuine products</p>
              </div>
              <div className="feature-item">
                <RefreshCw size={32} />
                <h3>Easy Returns</h3>
                <p>30-day return policy</p>
              </div>
              <div className="feature-item">
                <Phone size={32} />
                <h3>Expert Support</h3>
                <p>Skincare specialists available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter-section">
          <div className="container">
            <div className="newsletter-content">
              <h2>Stay Updated</h2>
              <p>Subscribe to get exclusive deals and skincare tips from around the world</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  required 
                />
                <button type="submit" className="btn-primary">Subscribe</button>
              </form>
              <p className="newsletter-note">By subscribing, you agree to our Privacy Policy</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3 className="footer-logo">SKIN<span>ORA</span></h3>
              <p className="footer-description">
                Your premier destination for authentic international skincare. 
                We bring the world's best unisex skincare products to your doorstep.
              </p>
              <div className="social-links">
                <a href="#"><Facebook size={20} /></a>
                <a href="#"><Instagram size={20} /></a>
                <a href="#"><Twitter size={20} /></a>
                <a href="#"><Youtube size={20} /></a>
              </div>
            </div>
            
            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop All</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Best Sellers</a></li>
                <li><a href="#">Sale</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Categories</h4>
              <ul>
                <li><a href="#">Face Care</a></li>
                <li><a href="#">Body Care</a></li>
                <li><a href="#">Hair Care</a></li>
                <li><a href="#">Men's Grooming</a></li>
                <li><a href="#">Sun Care</a></li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul className="contact-info">
                <li><MapPin size={16} /> 123 Beauty Street, Colombo 03, Sri Lanka</li>
                <li><Phone size={16} /> +94 77 123 4567</li>
                <li><Mail size={16} /> support@globalglow.com</li>
              </ul>
              <div className="payment-methods">
                <span>We accept:</span>
                <div className="payment-icons">
                  <span>💳</span>
                  <span>📱</span>
                  <span>🏦</span>
                  <span>📊</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SKINORA. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Shipping Policy</a>
              <a href="#">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;