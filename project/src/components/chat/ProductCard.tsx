import React from 'react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{product.name}</h3>
          <p className="text-sm text-gray-600">${product.price}</p>
          <p className="text-xs text-gray-500">{product.description}</p>
        </div>
      </div>
    </div>
  );
};