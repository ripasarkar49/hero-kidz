"use client";
import Image from "next/image";
import { FaStar, FaShoppingCart, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { title, image, price, discount, ratings, reviews, sold } = product;
  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300 group">
      <figure className="relative h-48 w-full mt-4 px-4 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="rounded-xl object-contain group-hover:scale-105 transition-transform duration-300"
          priority={true} 
        />
      </figure>
      {/* Content Section */}
      <div className="card-body p-5 gap-1">
        <h2 className="card-title text-lg font-bold line-clamp-1">{title}</h2>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 mb-1">
          <div className="flex text-warning text-sm">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.floor(ratings) ? "fill-current" : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({reviews} Reviews)</span>
        </div>

        {/* Pricing & Sold Info */}
        <div className="flex justify-between items-center mt-2">
          <div>
            <span className="text-2xl font-bold text-primary">
              ৳{discountedPrice}
            </span>
            {discount > 0 && (
              <span className="ml-2 line-through text-gray-400 text-sm">
                ৳{price}
              </span>
            )}
          </div>
          <div className="text-xs font-medium text-gray-500 bg-base-200 px-2 py-1 rounded-md">
            {sold} Sold
          </div>
        </div>

        {/* Action Button */}
        <div className="card-actions mt-4">
          <button className="btn btn-primary w-full gap-2 hover:animate-pulse">
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Skeleton Component ---
const ProductSkeleton = () => {
  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl border border-base-200">
      <div className="p-4">
        <div className="skeleton h-48 w-full rounded-xl"></div>
      </div>
      <div className="card-body p-5 gap-3">
        <div className="skeleton h-6 w-3/4"></div>
        <div className="flex gap-2">
          <div className="skeleton h-4 w-20"></div>
          <div className="skeleton h-4 w-12"></div>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="skeleton h-8 w-24"></div>
          <div className="skeleton h-6 w-16"></div>
        </div>
        <div className="skeleton h-12 w-full mt-2"></div>
      </div>
    </div>
  );
};

export default ProductCard;
