
import { createContext, useState, ReactNode } from 'react';

// Define type of a cart item
type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

// Define type of the CartContext
type CartContextProps = {
  cart: CartItem[]; // Array of cart items
  totalItems: number; // Total number of items in the cart
  addToCart: (item: CartItem) => void; // Function to add an item to the cart
  removeFromCart: (itemId: string) => void; // Function to remove an item from the cart
};

// Create the CartContext with default values
export const CartContext = createContext<CartContextProps>({
  cart: [], // Empty array as the initial cart
  totalItems: 0, // Initial total items count is 0
  addToCart: () => {}, // Empty function as the default addToCart function
  removeFromCart: () => {}, // Empty function as the default removeFromCart function
});

// Create the CartProvider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]); // State for the cart items
  const [totalItems, setTotalItems] = useState<number>(0); // State for the total items count

  // Function to update the total items count
  const updateTotalItems = () => {
    const total = cart.reduce((count, item) => count + item.quantity, 0);
    setTotalItems(total);
  };

  // Function to add an item to the cart
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

  // Function to remove an item from the cart
  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
    updateTotalItems();
  };

  // Render the CartProvider component with the CartContext.Provider
  return (
    <CartContext.Provider value={{ cart, totalItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
