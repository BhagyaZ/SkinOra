import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar.js';
import Footer from '../Footer/Footer.js';
import {
  ChevronRight, Search, Heart, Shield, Sun,
  Droplets, Wind, Zap, Moon, Clock,
  TrendingUp, Award, Users, BookOpen,
  Video, Download, Share2, Bookmark,
  CheckCircle, AlertCircle, ExternalLink
} from 'lucide-react';
import './SkinCareGuide.css';

function SkinCareGuide() {
  const [activeTab, setActiveTab] = useState('basics');
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(3);
  const [savedArticles, setSavedArticles] = useState([]);

  const categories = [
    { id: 1, name: 'Face Care', count: 45, icon: '😊' },
    { id: 2, name: 'Body Care', count: 32, icon: '💪' },
    { id: 3, name: 'Hair Care', count: 28, icon: '💇' },
  ];

  const guideTabs = [
    { id: 'basics', label: 'Skincare Basics', icon: '📚' },
    { id: 'routines', label: 'Daily Routines', icon: '🔄' },
    { id: 'ingredients', label: 'Key Ingredients', icon: '🧪' },
    { id: 'skin-types', label: 'Skin Types', icon: '👁️' },
    { id: 'concerns', label: 'Skin Concerns', icon: '🎯' },
    { id: 'international', label: 'Global Beauty', icon: '🌍' },
  ];

  const popularArticles = [
    {
      id: 1,
      title: 'The Complete Korean Skincare Routine',
      description: 'Learn the famous 10-step Korean skincare routine and why it works',
      readTime: '8 min read',
      category: 'routines',
      image: 'https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      author: 'Dr. Ji-Hoon Kim',
      date: 'Mar 15, 2024',
      saved: true
    },
    {
      id: 2,
      title: 'Understanding Hyaluronic Acid',
      description: 'Everything you need to know about this powerhouse hydrator',
      readTime: '6 min read',
      category: 'ingredients',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      author: 'Sarah Chen',
      date: 'Mar 12, 2024',
      saved: false
    },
    {
      id: 3,
      title: 'Sun Protection: Myths vs Facts',
      description: 'Debunking common sunscreen misconceptions',
      readTime: '5 min read',
      category: 'basics',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      author: 'Dr. Elena Rodriguez',
      date: 'Mar 10, 2024',
      saved: true
    },
    {
      id: 4,
      title: 'French Pharmacy Secrets',
      description: 'Why French skincare products are world-renowned',
      readTime: '7 min read',
      category: 'international',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      author: 'Marie Dubois',
      date: 'Mar 8, 2024',
      saved: false
    },
  ];

  const skincareBasics = [
    {
      title: 'Cleansing',
      description: 'The foundation of any skincare routine',
      icon: <Droplets size={24} />,
      steps: [
        'Use a gentle, pH-balanced cleanser',
        'Cleanse twice daily (morning & night)',
        'Remove makeup before cleansing',
        'Use lukewarm water, not hot'
      ]
    },
    {
      title: 'Moisturizing',
      description: 'Lock in hydration for healthy skin',
      icon: <Wind size={24} />,
      steps: [
        'Apply to damp skin for better absorption',
        'Choose based on your skin type',
        'Don\'t forget your neck and décolletage',
        'Use different formulas for day and night'
      ]
    },
    {
      title: 'Sun Protection',
      description: 'The most important anti-aging step',
      icon: <Sun size={24} />,
      steps: [
        'Use SPF 30+ daily, even indoors',
        'Apply 15 minutes before sun exposure',
        'Reapply every 2 hours when outdoors',
        'Use enough product (1/4 tsp for face)'
      ]
    },
    {
      title: 'Treatment',
      description: 'Target specific concerns',
      icon: <Zap size={24} />,
      steps: [
        'Apply serums after cleansing, before moisturizing',
        'Start with lower concentrations',
        'Patch test new products',
        'Be patient - results take time'
      ]
    }
  ];

  const skinTypes = [
    {
      type: 'Normal',
      description: 'Balanced skin with few concerns',
      characteristics: ['Smooth texture', 'Minimal pores', 'Few breakouts', 'Even tone'],
      recommendations: ['Gentle cleanser', 'Lightweight moisturizer', 'Weekly exfoliation'],
      icon: '😊'
    },
    {
      type: 'Oily',
      description: 'Excess sebum production',
      characteristics: ['Shiny appearance', 'Enlarged pores', 'Prone to acne', 'Makeup fades quickly'],
      recommendations: ['Oil-free products', 'Salicylic acid', 'Clay masks', 'Mattifying primer'],
      icon: '💧'
    },
    {
      type: 'Dry',
      description: 'Lacks natural oils',
      characteristics: ['Flaky patches', 'Tight feeling', 'Dull appearance', 'Fine lines visible'],
      recommendations: ['Cream cleansers', 'Rich moisturizers', 'Hyaluronic acid', 'Face oils'],
      icon: '🍂'
    },
    {
      type: 'Combination',
      description: 'Oily T-zone, dry cheeks',
      characteristics: ['Oily forehead/nose', 'Dry cheeks', 'Enlarged nose pores', 'Variable texture'],
      recommendations: ['Multi-masking', 'Gel moisturizers', 'Zone-specific treatments', 'Balancing toners'],
      icon: '🎭'
    },
    {
      type: 'Sensitive',
      description: 'Easily irritated skin',
      characteristics: ['Redness', 'Itching', 'Burning sensation', 'Reacts to products'],
      recommendations: ['Fragrance-free', 'Minimal ingredients', 'Calming ingredients', 'Patch test everything'],
      icon: '❤️'
    },
    {
      type: 'Acne-Prone',
      description: 'Frequent breakouts',
      characteristics: ['Blackheads/whiteheads', 'Inflamed pimples', 'Oiliness', 'Post-acne marks'],
      recommendations: ['Non-comedogenic', 'Benzoyl peroxide', 'Retinoids', 'Oil-control'],
      icon: '🎯'
    }
  ];

  const internationalBeauty = [
    {
      country: 'Korea',
      icon: '🇰🇷',
      philosophy: 'Prevention over correction',
      keyProducts: ['Essences', 'Sheet masks', 'BB creams', 'Cushion compacts'],
      famousFor: '10-step routines, glass skin, innovative packaging'
    },
    {
      country: 'Japan',
      icon: '🇯🇵',
      philosophy: 'Simplicity and efficacy',
      keyProducts: ['Cleansing oils', 'Sunscreens', 'Emulsions', 'Lotions'],
      famousFor: 'Double cleansing, rice water, camellia oil'
    },
    {
      country: 'France',
      icon: '🇫🇷',
      philosophy: 'Pharmacy-grade science',
      keyProducts: ['Thermal water', 'Micellar water', 'Anti-aging serums', 'Medical creams'],
      famousFor: 'Bioderma, La Roche-Posay, thermal spring water'
    },
    {
      country: 'USA',
      icon: '🇺🇸',
      philosophy: 'Clinical results',
      keyProducts: ['Retinoids', 'Vitamin C serums', 'Chemical exfoliants', 'Drugstore favorites'],
      famousFor: 'Dermatologist brands, active ingredients, accessibility'
    },
    {
      country: 'Australia',
      icon: '🇦🇺',
      philosophy: 'Sun protection first',
      keyProducts: ['Mineral sunscreens', 'Natural oils', 'Zinc-based creams', 'After-sun care'],
      famousFor: 'Strong sun protection, natural ingredients, surf culture'
    },
    {
      country: 'Sweden',
      icon: '🇸🇪',
      philosophy: 'Clean and minimal',
      keyProducts: ['Organic oils', 'Cold-pressed formulas', 'Simple routines', 'Eco-friendly packaging'],
      famousFor: 'Clean beauty, sustainability, minimalist approach'
    }
  ];

  const handleSaveArticle = (articleId) => {
    setSavedArticles(prev => {
      if (prev.includes(articleId)) {
        return prev.filter(id => id !== articleId);
      } else {
        return [...prev, articleId];
      }
    });
  };

  const filteredArticles = popularArticles.filter(article => {
    if (!searchQuery) return true;
    return article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
           article.category.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="skincare-guide">
      {/* Navigation */}
      <NavBar cartCount={cartCount} categories={categories} />

      <div className="guide-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Your Complete Skincare Guide</h1>
              <p>Expert advice, international beauty secrets, and science-backed routines for healthy, glowing skin</p>
              <div className="hero-stats">
                <div className="stat">
                  <Users size={20} />
                  <span>50,000+</span>
                  <p>Readers Helped</p>
                </div>
                <div className="stat">
                  <BookOpen size={20} />
                  <span>200+</span>
                  <p>Articles</p>
                </div>
                <div className="stat">
                  <Award size={20} />
                  <span>25</span>
                  <p>Expert Dermatologists</p>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Skincare Products" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Search Bar */}
        <div className="guide-search">
          <div className="search-container">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search skincare topics, ingredients, or concerns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn">Search</button>
          </div>
          <div className="search-tags">
            <span>Popular:</span>
            <button onClick={() => setSearchQuery('anti-aging')}>Anti-Aging</button>
            <button onClick={() => setSearchQuery('acne')}>Acne</button>
            <button onClick={() => setSearchQuery('hydration')}>Hydration</button>
            <button onClick={() => setSearchQuery('sunscreen')}>Sunscreen</button>
            <button onClick={() => setSearchQuery('vitamin C')}>Vitamin C</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="guide-content">
          {/* Sidebar */}
          <div className="guide-sidebar">
            <div className="sidebar-section">
              <h3>Guide Categories</h3>
              <div className="category-tabs">
                {guideTabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`category-tab ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span className="tab-icon">{tab.icon}</span>
                    <span>{tab.label}</span>
                    <ChevronRight size={16} />
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Quick Tips</h3>
              <div className="quick-tips">
                <div className="tip">
                  <CheckCircle size={16} />
                  <span>Always patch test new products</span>
                </div>
                <div className="tip">
                  <CheckCircle size={16} />
                  <span>Apply products thinnest to thickest</span>
                </div>
                <div className="tip">
                  <CheckCircle size={16} />
                  <span>SPF is non-negotiable, even on cloudy days</span>
                </div>
                <div className="tip">
                  <CheckCircle size={16} />
                  <span>Give products 4-6 weeks to show results</span>
                </div>
                <div className="tip">
                  <CheckCircle size={16} />
                  <span>Listen to your skin - adjust as needed</span>
                </div>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Download Resources</h3>
              <div className="resources">
                <button className="resource-btn">
                  <Download size={16} />
                  Skincare Routine Template
                </button>
                <button className="resource-btn">
                  <Download size={16} />
                  Ingredient Glossary
                </button>
                <button className="resource-btn">
                  <Download size={16} />
                  Skin Type Quiz
                </button>
                <button className="resource-btn">
                  <Video size={16} />
                  Video Tutorials
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="guide-main">
            {/* Featured Articles */}
            <section className="featured-articles">
              <div className="section-header">
                <h2>Featured Articles</h2>
                <button className="view-all">
                  View All <ChevronRight size={16} />
                </button>
              </div>
              
              <div className="articles-grid">
                {filteredArticles.map(article => (
                  <div key={article.id} className="article-card">
                    <div className="article-image">
                      <img src={article.image} alt={article.title} />
                      <div className="article-category">{article.category}</div>
                      <button 
                        className={`save-btn ${savedArticles.includes(article.id) ? 'saved' : ''}`}
                        onClick={() => handleSaveArticle(article.id)}
                      >
                        <Bookmark size={18} fill={savedArticles.includes(article.id) ? "currentColor" : "none"} />
                      </button>
                    </div>
                    <div className="article-content">
                      <div className="article-meta">
                        <span className="author">{article.author}</span>
                        <span className="date">{article.date}</span>
                        <span className="read-time">{article.readTime}</span>
                      </div>
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <button className="read-more">
                        Read Article <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skincare Basics */}
            {activeTab === 'basics' && (
              <section className="basics-section">
                <h2>Skincare Basics 101</h2>
                <p className="section-intro">Master the fundamentals for healthy, glowing skin. These four pillars form the foundation of any effective skincare routine.</p>
                
                <div className="basics-grid">
                  {skincareBasics.map((basic, index) => (
                    <div key={index} className="basic-card">
                      <div className="basic-header">
                        <div className="basic-icon">
                          {basic.icon}
                        </div>
                        <div>
                          <h3>{basic.title}</h3>
                          <p className="basic-description">{basic.description}</p>
                        </div>
                      </div>
                      <div className="basic-steps">
                        <h4>Key Steps:</h4>
                        <ul>
                          {basic.steps.map((step, stepIndex) => (
                            <li key={stepIndex}>
                              <CheckCircle size={14} />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Skin Types */}
            {activeTab === 'skin-types' && (
              <section className="skin-types-section">
                <h2>Understanding Your Skin Type</h2>
                <p className="section-intro">Identify your skin type to choose products that work best for your unique needs.</p>
                
                <div className="skin-types-grid">
                  {skinTypes.map((skin, index) => (
                    <div key={index} className="skin-type-card">
                      <div className="skin-header">
                        <span className="skin-icon">{skin.icon}</span>
                        <div>
                          <h3>{skin.type}</h3>
                          <p className="skin-description">{skin.description}</p>
                        </div>
                      </div>
                      
                      <div className="skin-details">
                        <div className="detail-section">
                          <h4>Characteristics:</h4>
                          <div className="characteristics">
                            {skin.characteristics.map((char, i) => (
                              <span key={i} className="characteristic">{char}</span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="detail-section">
                          <h4>Recommended Products:</h4>
                          <ul>
                            {skin.recommendations.map((rec, i) => (
                              <li key={i}>
                                <CheckCircle size={14} />
                                {rec}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* International Beauty */}
            {activeTab === 'international' && (
              <section className="international-section">
                <h2>Global Beauty Philosophies</h2>
                <p className="section-intro">Discover skincare secrets from around the world and how different cultures approach beauty.</p>
                
                <div className="countries-grid">
                  {internationalBeauty.map((country, index) => (
                    <div key={index} className="country-card">
                      <div className="country-header">
                        <span className="country-flag">{country.icon}</span>
                        <h3>{country.country}</h3>
                      </div>
                      
                      <div className="country-philosophy">
                        <h4>Philosophy:</h4>
                        <p>"{country.philosophy}"</p>
                      </div>
                      
                      <div className="country-products">
                        <h4>Key Products:</h4>
                        <div className="products-list">
                          {country.keyProducts.map((product, i) => (
                            <span key={i} className="product-tag">{product}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="country-famous">
                        <h4>Famous For:</h4>
                        <p>{country.famousFor}</p>
                      </div>
                      
                      <button className="explore-btn">
                        Explore {country.country}n Brands <ExternalLink size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Daily Routines */}
            {activeTab === 'routines' && (
              <section className="routines-section">
                <h2>Daily Skincare Routines</h2>
                <div className="routines-tabs">
                  <button className="routine-tab active">Morning</button>
                  <button className="routine-tab">Evening</button>
                  <button className="routine-tab">Weekly</button>
                  <button className="routine-tab">Seasonal</button>
                </div>
                
                <div className="routine-steps">
                  <div className="routine-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>Cleanse</h3>
                      <p>Start with a gentle cleanser to remove overnight buildup without stripping natural oils.</p>
                      <div className="step-products">
                        <span className="product-recommendation">Recommended: Gel or foam cleanser</span>
                        <span className="product-time"><Clock size={14} /> 1 minute</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="routine-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>Tone</h3>
                      <p>Balance skin pH and prepare for better absorption of subsequent products.</p>
                      <div className="step-products">
                        <span className="product-recommendation">Recommended: Hydrating or exfoliating toner</span>
                        <span className="product-time"><Clock size={14} /> 30 seconds</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="routine-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Treat</h3>
                      <p>Apply serums and treatments targeted to your specific skin concerns.</p>
                      <div className="step-products">
                        <span className="product-recommendation">Recommended: Vitamin C serum, hyaluronic acid</span>
                        <span className="product-time"><Clock size={14} /> 1 minute</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="routine-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h3>Moisturize</h3>
                      <p>Lock in hydration and create a protective barrier for your skin.</p>
                      <div className="step-products">
                        <span className="product-recommendation">Recommended: Lightweight moisturizer</span>
                        <span className="product-time"><Clock size={14} /> 1 minute</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="routine-step">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h3>Protect</h3>
                      <p>Apply sunscreen as the final step in your morning routine.</p>
                      <div className="step-products">
                        <span className="product-recommendation">Recommended: SPF 30+ broad spectrum</span>
                        <span className="product-time"><Clock size={14} /> 1 minute</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Newsletter */}
            <section className="guide-newsletter">
              <div className="newsletter-content">
                <Shield size={40} />
                <h3>Get Expert Skincare Advice</h3>
                <p>Subscribe to our newsletter for weekly tips, new research, and exclusive guides from dermatologists worldwide.</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Enter your email" />
                  <button type="submit">Subscribe</button>
                </form>
                <p className="privacy-note">By subscribing, you agree to our Privacy Policy. No spam, ever.</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SkinCareGuide;