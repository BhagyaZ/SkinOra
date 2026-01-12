import React, { useState, useEffect, useMemo } from 'react';
import { 
  Filter, Grid, List, ChevronDown, X, Star,
  ShoppingCart, Heart, Eye, Truck, Shield,
  RefreshCw, TrendingUp, Check
} from 'lucide-react';
import ProductCard from './ProductCard.js'; // We'll create this component
import './ShopAll.css';

function ShopAll() {
  // State for products and filters
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Filter states
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [skinTypes, setSkinTypes] = useState([]);
  const [countries, setCountries] = useState([]);

  // Load products and filters data
  useEffect(() => {
    const loadData = () => {
      // Simulate API call
      setTimeout(() => {
        // Categories
        const categoriesData = [
          { id: 1, name: 'Face Care', count: 45, icon: '😊' },
          { id: 2, name: 'Cleansers', count: 28, icon: '🧼' },
          { id: 3, name: 'Moisturizers', count: 32, icon: '💧' },
          { id: 4, name: 'Serums & Essences', count: 36, icon: '✨' },
          { id: 5, name: 'Sunscreens', count: 24, icon: '☀️' },
          { id: 6, name: 'Masks', count: 18, icon: '🎭' },
          { id: 7, name: 'Eye Care', count: 22, icon: '👁️' },
          { id: 8, name: 'Toners', count: 20, icon: '💦' },
          { id: 9, name: 'Body Care', count: 32, icon: '💪' },
          { id: 10, name: 'Hair Care', count: 28, icon: '💇' },
          { id: 11, name: 'Men\'s Grooming', count: 24, icon: '🧔' },
          { id: 12, name: 'Treatment', count: 36, icon: '⚕️' },
          { id: 13, name: 'Sets & Kits', count: 22, icon: '🎁' },
          { id: 14, name: 'Travel Size', count: 15, icon: '✈️' },
        ];

        // Brands
        const brandsData = [
          { id: 1, name: 'COSRX', count: 24, country: '🇰🇷 Korea', selected: false },
          { id: 2, name: 'AESOP', count: 18, country: '🇦🇺 Australia', selected: false },
          { id: 3, name: 'LA ROCHE-POSAY', count: 32, country: '🇫🇷 France', selected: false },
          { id: 4, name: 'SHISEIDO', count: 28, country: '🇯🇵 Japan', selected: false },
          { id: 5, name: 'BEAUTY OF JOSEON', count: 16, country: '🇰🇷 Korea', selected: false },
          { id: 6, name: 'KIEHL\'S', count: 22, country: '🇺🇸 USA', selected: false },
          { id: 7, name: 'THE ORDINARY', count: 35, country: '🇨🇦 Canada', selected: false },
          { id: 8, name: 'CERAVE', count: 26, country: '🇺🇸 USA', selected: false },
          { id: 9, name: 'INNISFREE', count: 19, country: '🇰🇷 Korea', selected: false },
          { id: 10, name: 'BIODERMA', count: 21, country: '🇫🇷 France', selected: false },
        ];

        // Skin Types
        const skinTypesData = [
          { id: 1, name: 'All Skin Types', count: 120 },
          { id: 2, name: 'Oily Skin', count: 45 },
          { id: 3, name: 'Dry Skin', count: 38 },
          { id: 4, name: 'Combination', count: 52 },
          { id: 5, name: 'Sensitive', count: 41 },
          { id: 6, name: 'Acne-Prone', count: 29 },
          { id: 7, name: 'Mature Skin', count: 33 },
        ];

        // Countries
        const countriesData = [
          { id: 1, name: 'Korea', count: 56, flag: '🇰🇷' },
          { id: 2, name: 'Japan', count: 42, flag: '🇯🇵' },
          { id: 3, name: 'France', count: 38, flag: '🇫🇷' },
          { id: 4, name: 'USA', count: 34, flag: '🇺🇸' },
          { id: 5, name: 'Australia', count: 22, flag: '🇦🇺' },
          { id: 6, name: 'Switzerland', count: 18, flag: '🇨🇭' },
          { id: 7, name: 'Germany', count: 26, flag: '🇩🇪' },
        ];

        // Products data
        const productsData = Array.from({ length: 48 }, (_, index) => {
          const categoriesList = ['Face Care', 'Cleansers', 'Moisturizers', 'Serums & Essences', 'Sunscreens', 'Body Care'];
          const brandsList = ['COSRX', 'AESOP', 'LA ROCHE-POSAY', 'SHISEIDO', 'BEAUTY OF JOSEON', 'KIEHL\'S', 'THE ORDINARY'];
          const countriesList = ['Korea', 'Japan', 'France', 'USA', 'Australia'];
          
          const randomCategory = categoriesList[Math.floor(Math.random() * categoriesList.length)];
          const randomBrand = brandsList[Math.floor(Math.random() * brandsList.length)];
          const randomCountry = countriesList[Math.floor(Math.random() * countriesList.length)];
          
          return {
            id: index + 1,
            name: `${randomBrand} ${getProductTypeByCategory(randomCategory)}`,
            brand: randomBrand,
            category: randomCategory,
            country: randomCountry,
            price: Math.floor(Math.random() * 150) + 10,
            originalPrice: Math.floor(Math.random() * 200) + 50,
            discount: Math.floor(Math.random() * 40) + 10,
            rating: (Math.random() * 1 + 4).toFixed(1),
            reviews: Math.floor(Math.random() * 500) + 50,
            image: `https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=${index % 10}`,
            isNew: Math.random() > 0.7,
            isBestSeller: Math.random() > 0.5,
            inStock: Math.random() > 0.1,
            skinType: ['All Skin Types', 'Oily Skin', 'Dry Skin', 'Combination', 'Sensitive'][Math.floor(Math.random() * 5)],
            description: `Premium ${randomCountry.toLowerCase()}n skincare formula designed for ${randomCategory.toLowerCase()}.`
          };
        });

        function getProductTypeByCategory(category) {
          const types = {
            'Face Care': ['Daily Cream', 'Treatment Serum', 'Essence', 'Face Oil'],
            'Cleansers': ['Foam Cleanser', 'Oil Cleanser', 'Micellar Water', 'Cleansing Balm'],
            'Moisturizers': ['Moisturizing Cream', 'Hydrating Gel', 'Night Cream', 'Day Cream'],
            'Serums & Essences': ['Vitamin C Serum', 'Hyaluronic Acid', 'Snail Mucin', 'Peptide Complex'],
            'Sunscreens': ['SPF 50+ Sunscreen', 'Mineral Sunscreen', 'Daily SPF', 'Sun Stick'],
            'Body Care': ['Body Lotion', 'Body Butter', 'Body Oil', 'Body Serum'],
          };
          const typeList = types[category] || ['Skincare Product'];
          return typeList[Math.floor(Math.random() * typeList.length)];
        }

        setCategories(categoriesData);
        setBrands(brandsData);
        setSkinTypes(skinTypesData);
        setCountries(countriesData);
        setProducts(productsData);
        setFilteredProducts(productsData);
        setLoading(false);
      }, 1000);
    };

    loadData();
  }, []);

  // Apply filters
  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => 
        selectedCategories.includes(product.category)
      );
    }

    // Brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(product => 
        selectedBrands.includes(product.brand)
      );
    }

    // Price filter
    filtered = filtered.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        // Simulate newest by id (higher id = newer)
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'discount':
        filtered.sort((a, b) => b.discount - a.discount);
        break;
      default: // 'featured'
        filtered.sort((a, b) => b.isBestSeller - a.isBestSeller || b.rating - a.rating);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategories, selectedBrands, priceRange, sortBy, products]);

  // Handle category selection
  const toggleCategory = (categoryName) => {
    setSelectedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName)
        : [...prev, categoryName]
    );
  };

  // Handle brand selection
  const toggleBrand = (brandName) => {
    setSelectedBrands(prev =>
      prev.includes(brandName)
        ? prev.filter(brand => brand !== brandName)
        : [...prev, brandName]
    );
  };

  // Handle skin type selection
  const [selectedSkinType, setSelectedSkinType] = useState('All Skin Types');
  
  // Handle country selection
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedSkinType('All Skin Types');
    setSelectedCountry(null);
    setPriceRange([0, 200]);
    setSortBy('featured');
  };

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Get active filter count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedCategories.length > 0) count += selectedCategories.length;
    if (selectedBrands.length > 0) count += selectedBrands.length;
    if (selectedSkinType !== 'All Skin Types') count += 1;
    if (selectedCountry) count += 1;
    if (priceRange[0] > 0 || priceRange[1] < 200) count += 1;
    return count;
  }, [selectedCategories, selectedBrands, selectedSkinType, selectedCountry, priceRange]);

  // Render loading skeleton
  if (loading) {
    return (
      <div className="shop-all">
        <div className="container">
          <div className="breadcrumb">
            <span>Home</span> <ChevronDown size={12} /> <span>Shop All</span>
          </div>
          <div className="loading-skeleton">
            <div className="filters-skeleton"></div>
            <div className="products-skeleton">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="product-card-skeleton"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-all">
      {/* Mobile Filter Overlay */}
      {showMobileFilters && (
        <div className="mobile-filters-overlay">
          <div className="mobile-filters-content">
            <div className="mobile-filters-header">
              <h3>Filters</h3>
              <button onClick={() => setShowMobileFilters(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="mobile-filters-body">
              {/* Mobile filter content */}
              <div className="filter-section">
                <h4>Categories</h4>
                <div className="filter-options">
                  {categories.map(category => (
                    <label key={category.id} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => toggleCategory(category.name)}
                      />
                      <span className="checkmark"></span>
                      <span className="filter-label">
                        {category.icon} {category.name}
                      </span>
                      <span className="filter-count">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="mobile-filters-footer">
              <button className="btn-clear" onClick={clearAllFilters}>
                Clear All
              </button>
              <button className="btn-apply" onClick={() => setShowMobileFilters(false)}>
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <a href="/">Home</a> <ChevronDown size={12} /> <span className="active">Shop All Products</span>
          <span className="product-count">{filteredProducts.length} products</span>
        </div>

        <div className="shop-header">
          <h1>Shop All Skincare</h1>
          <p>Discover our complete collection of international unisex skincare products</p>
        </div>

        {/* Filter Bar */}
        <div className="filter-bar">
          <div className="filter-left">
            <button 
              className="filter-toggle"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} />
              Filters {activeFilterCount > 0 && <span className="filter-badge">{activeFilterCount}</span>}
            </button>
            
            <button 
              className="mobile-filter-toggle"
              onClick={() => setShowMobileFilters(true)}
            >
              <Filter size={18} />
              Filters
            </button>

            {/* Active Filters Display */}
            <div className="active-filters">
              {selectedCategories.map(category => (
                <span key={category} className="active-filter">
                  {category}
                  <button onClick={() => toggleCategory(category)}>
                    <X size={12} />
                  </button>
                </span>
              ))}
              
              {selectedBrands.map(brand => (
                <span key={brand} className="active-filter">
                  {brand}
                  <button onClick={() => toggleBrand(brand)}>
                    <X size={12} />
                  </button>
                </span>
              ))}

              {selectedSkinType !== 'All Skin Types' && (
                <span className="active-filter">
                  Skin: {selectedSkinType}
                  <button onClick={() => setSelectedSkinType('All Skin Types')}>
                    <X size={12} />
                  </button>
                </span>
              )}

              {selectedCountry && (
                <span className="active-filter">
                  {selectedCountry}
                  <button onClick={() => setSelectedCountry(null)}>
                    <X size={12} />
                  </button>
                </span>
              )}

              {(priceRange[0] > 0 || priceRange[1] < 200) && (
                <span className="active-filter">
                  ${priceRange[0]} - ${priceRange[1]}
                  <button onClick={() => setPriceRange([0, 200])}>
                    <X size={12} />
                  </button>
                </span>
              )}

              {activeFilterCount > 0 && (
                <button className="clear-filters" onClick={clearAllFilters}>
                  Clear All
                </button>
              )}
            </div>
          </div>

          <div className="filter-right">
            <div className="view-toggle">
              <button 
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
              >
                <Grid size={20} />
              </button>
              <button 
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
              >
                <List size={20} />
              </button>
            </div>

            <div className="sort-dropdown">
              <label>Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="discount">Best Discount</option>
                <option value="bestseller">Best Sellers</option>
              </select>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>

        <div className="shop-content">
          {/* Filters Sidebar */}
          <div className={`filters-sidebar ${showFilters ? 'open' : ''}`}>
            <div className="filters-header">
              <h3>Filters</h3>
              <button className="close-filters" onClick={() => setShowFilters(false)}>
                <X size={20} />
              </button>
            </div>

            <div className="filters-body">
              {/* Categories Filter */}
              <div className="filter-section">
                <div className="filter-section-header">
                  <h4>Categories</h4>
                  {selectedCategories.length > 0 && (
                    <button 
                      className="clear-section"
                      onClick={() => setSelectedCategories([])}
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="filter-options">
                  {categories.map(category => (
                    <label key={category.id} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => toggleCategory(category.name)}
                      />
                      <span className="checkmark"></span>
                      <span className="filter-label">
                        {category.icon} {category.name}
                      </span>
                      <span className="filter-count">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands Filter */}
              <div className="filter-section">
                <div className="filter-section-header">
                  <h4>Brands</h4>
                  {selectedBrands.length > 0 && (
                    <button 
                      className="clear-section"
                      onClick={() => setSelectedBrands([])}
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="filter-options">
                  {brands.map(brand => (
                    <label key={brand.id} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand.name)}
                        onChange={() => toggleBrand(brand.name)}
                      />
                      <span className="checkmark"></span>
                      <span className="filter-label">{brand.name}</span>
                      <span className="filter-meta">{brand.country}</span>
                      <span className="filter-count">({brand.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="filter-section">
                <h4>Price Range</h4>
                <div className="price-filter">
                  <div className="price-inputs">
                    <div className="price-input">
                      <label>Min</label>
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                        min="0"
                        max="200"
                      />
                    </div>
                    <div className="price-input">
                      <label>Max</label>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 200])}
                        min="0"
                        max="500"
                      />
                    </div>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                    className="price-slider"
                  />
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="price-slider"
                  />
                  <div className="price-labels">
                    <span>$0</span>
                    <span>$100</span>
                    <span>$200+</span>
                  </div>
                </div>
              </div>

              {/* Skin Type Filter */}
              <div className="filter-section">
                <h4>Skin Type</h4>
                <div className="skin-type-filter">
                  {skinTypes.map(type => (
                    <button
                      key={type.id}
                      className={`skin-type-btn ${selectedSkinType === type.name ? 'active' : ''}`}
                      onClick={() => setSelectedSkinType(type.name)}
                    >
                      {type.name}
                      <span className="type-count">({type.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Country Filter */}
              <div className="filter-section">
                <div className="filter-section-header">
                  <h4>Country of Origin</h4>
                  {selectedCountry && (
                    <button 
                      className="clear-section"
                      onClick={() => setSelectedCountry(null)}
                    >
                      Clear
                    </button>
                  )}
                </div>
                <div className="country-filter">
                  {countries.map(country => (
                    <button
                      key={country.id}
                      className={`country-btn ${selectedCountry === country.name ? 'active' : ''}`}
                      onClick={() => setSelectedCountry(selectedCountry === country.name ? null : country.name)}
                    >
                      <span className="country-flag">{country.flag}</span>
                      <span className="country-name">{country.name}</span>
                      <span className="country-count">({country.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Offers Filter */}
              <div className="filter-section">
                <h4>Special Offers</h4>
                <div className="offer-filter">
                  <label className="filter-option">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="filter-label">On Sale</span>
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="filter-label">New Arrivals</span>
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="filter-label">Best Sellers</span>
                  </label>
                  <label className="filter-option">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    <span className="filter-label">In Stock</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="filters-footer">
              <button className="btn-apply-filters" onClick={() => setShowFilters(false)}>
                Apply Filters
              </button>
              <button className="btn-clear-filters" onClick={clearAllFilters}>
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Products Section */}
          <div className="products-section">
            {currentProducts.length === 0 ? (
              <div className="no-products">
                <div className="no-products-icon">😔</div>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
                <button className="btn-primary" onClick={clearAllFilters}>
                  Clear All Filters
                </button>
              </div>
            ) : (
              <>
                <div className={`products-container ${viewMode}`}>
                  {currentProducts.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      viewMode={viewMode}
                    />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="pagination">
                    <button
                      className="pagination-btn"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </button>
                    
                    <div className="pagination-numbers">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (currentPage <= 3) {
                          pageNum = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = currentPage - 2 + i;
                        }

                        return (
                          <button
                            key={pageNum}
                            className={`pagination-number ${currentPage === pageNum ? 'active' : ''}`}
                            onClick={() => setCurrentPage(pageNum)}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                      
                      {totalPages > 5 && currentPage < totalPages - 2 && (
                        <>
                          <span className="pagination-dots">...</span>
                          <button
                            className="pagination-number"
                            onClick={() => setCurrentPage(totalPages)}
                          >
                            {totalPages}
                          </button>
                        </>
                      )}
                    </div>
                    
                    <button
                      className="pagination-btn"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {/* Features Banner */}
        <div className="features-banner">
          <div className="feature-item">
            <Truck size={32} />
            <div>
              <h4>Free Shipping</h4>
              <p>On orders over $50</p>
            </div>
          </div>
          <div className="feature-item">
            <Shield size={32} />
            <div>
              <h4>100% Authentic</h4>
              <p>Guaranteed genuine products</p>
            </div>
          </div>
          <div className="feature-item">
            <RefreshCw size={32} />
            <div>
              <h4>Easy Returns</h4>
              <p>30-day return policy</p>
            </div>
          </div>
          <div className="feature-item">
            <TrendingUp size={32} />
            <div>
              <h4>Best Prices</h4>
              <p>Price match guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


  



export default ShopAll;