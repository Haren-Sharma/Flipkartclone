const { createContext, useState, useContext } = require("react");

const ProductsCartContext = createContext([]);

export const ProductsCartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ProductsCartContext.Provider value={{cartProducts, setCartProducts}}>
      {children}
    </ProductsCartContext.Provider>
  );
};

export const getCartProducts = () => {
  return useContext(ProductsCartContext);
};
