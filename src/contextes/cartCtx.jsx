import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Charger le panier sauvegardé dans le localStorage
  let savedCart
  if (localStorage.getItem('cart')!== null) {
    savedCart = JSON.parse(localStorage.getItem('cart'));
    //console.log("thi is saved "+savedCart)
  }

  const [cart, setCart] = useState(savedCart || []);
  

  // Charger les produits sauvegardés dans le localStorage
  const savedProducts = JSON.parse(localStorage.getItem('products'));
  const [products, setProducts] = useState(savedProducts || [
    { id: 1, name: 'Produit 1', price: 10, availableQuantity: 5 },
    { id: 2, name: 'Produit 2', price: 20, availableQuantity: 10 },
    { id: 3, name: 'Produit 3', price: 30, availableQuantity: 7 },
    { id: 4, name: 'Produit 4', price: 40, availableQuantity: 8 },
    { id: 5, name: 'Produit 5', price: 50, availableQuantity: 15 },
  ]);

  // Sauvegarder le panier dans le localStorage
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  // Sauvegarder les produits dans le localStorage
  const saveProductsToLocalStorage = (products) => {
    localStorage.setItem('products', JSON.stringify(products));
  };

  // Ajouter un produit au panier
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item._id === product._id);
    //let qtt = 1;
    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, cartQuantity: item.cartQuantity+1 } : item
      );
      console.log(updatedCart)
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, cartQuantity: 1 }];
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    }

  };

  // Retirer un produit du panier
  const removeFromCart = (productId) => {
    const existingProduct = cart.find((item) => item._id === productId);
    //let qtt = 1;
    if (existingProduct && existingProduct.cartQuantity>=1) {
      const updatedCart = cart.map((item) =>
        item._id === productId ? { ...item, cartQuantity: item.cartQuantity-1 } : item
      );
      console.log(updatedCart)
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    } else {
      if (cart.length>1) {
        const updatedCart = cart.filter(item=>item._id !== productId);
        setCart(updatedCart);
        saveCartToLocalStorage(updatedCart);
      }else{
        clearCart();
      }
      
    }
  };

  // Vider le panier
  const clearCart = () => {
    setCart([]);
    saveCartToLocalStorage([]);
  };

    // Vider le panier et remettre les produits en stock
    const resetCartAndRestock = () => {
        const updatedProducts = products.map((product) => {
          const itemInCart = cart.find((item) => item.id === product.id);
          if (itemInCart) {
            return { ...product, availableQuantity: product.availableQuantity + itemInCart.quantity };
          }
          return product;
        });

        setProducts(updatedProducts);
        saveProductsToLocalStorage(updatedProducts);
        clearCart();
        saveCartToLocalStorage([]);
      };

      return (
        <CartContext.Provider
          value={{
            addToCart,
            removeFromCart,
            clearCart,
            resetCartAndRestock,
            cart,
            products,
            setProducts,
          }}
        >
          {children}
        </CartContext.Provider>
      );
    };

    export default CartProvider;
