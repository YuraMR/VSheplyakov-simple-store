"use client";
import { Button } from "@mui/material";
import { Product } from "@/app/utils/types";
import { useCart } from "@/app/lib/providers/CartProvider/CartProvider";

export type BuyNowButtonProps = {
  product: Product;
};

const BuyNowButton: React.FC<BuyNowButtonProps> = ({ product }) => {
  const { addToCart, openCart } = useCart();

  const handleClick = () => {
    addToCart(product);
    openCart();
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Buy Now
    </Button>
  );
};

export default BuyNowButton;
