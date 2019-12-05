import * as React from "react";
import { CartFooter, CartHeader, CartList, CartWrapper } from './Cart.style';

const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
</svg>;


const Cart = () => {
  
  return <CartWrapper>
    <CartHeader>
    </CartHeader>
    <hr/>
    <CartList>
    
    
    </CartList>
    <CartFooter>

      <span>
      </span>
      <span>
      </span>
    
    </CartFooter>
  
  </CartWrapper>
};
export default Cart;
