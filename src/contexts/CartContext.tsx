import { createContext, useState, ReactNode } from 'react';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextProps = {
  cart: CartItem[];
  totalItems: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
};

export const CartContext = createContext<CartContextProps>({
  cart: [],
  totalItems: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  // initialize other functions
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState<number>(1);
  
  const updateTotalItems = () => {
    const total = cart.reduce((count, item) => count + item.quantity, 0);
    setTotalItems(total);
  };

  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.id === newItem.id);
      if (existingItem) {
        // Increase quantity of existing item
        return prevCart.map(item => 
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new item
        return [...prevCart, newItem];
      }
    });
    updateTotalItems();
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    updateTotalItems();
  };

  return (
    <CartContext.Provider value={{ cart, totalItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
