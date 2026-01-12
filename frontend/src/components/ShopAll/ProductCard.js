// src/components/ShopAll/ProductCard.js
import React, { useState } from 'react';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import './ShopAll.css'; // or create a ProductCard-specific CSS

function ProductCard({ product, viewMode }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const addToCart = () => console.log('Added to cart:', product.id);
  const toggleWishlist = () => setIsWishlisted(!isWishlisted);
  const quickView = () => console.log('Quick view:', product.id);

  if (viewMode === 'list') {
    return (
      <div className="product-card list-view">
        {/* list view markup */}
      </div>
    );
  }

  return (
    <div className="product-card grid-view">
      {/* grid view markup */}
    </div>
  );
}

export default ProductCard;
