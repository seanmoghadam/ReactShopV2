import * as React from "react";
import { CartFooter, CartHeader, CartList, CartWrapper, CartListItem } from './Cart.style';

const deleteIcon = <svg xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24">
  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
</svg>;


const Cart = (props) => {
  
  let totalPrice = 0;
  
  return <CartWrapper>
    <CartHeader>
      Warenkorb
    </CartHeader>
    <hr/>
    <CartList>
      {props.cart.map((cartItem, index) => {
        
        totalPrice += cartItem.price;
        
        return <CartListItem key={cartItem.isbn + index }>
          <p>{cartItem.title} - <strong>{cartItem.price} €</strong></p>
          <button onClick={() => props.removeItemFromCart(index)}>
            {deleteIcon}
          </button>
        </CartListItem>
      })}
    </CartList>
    <CartFooter>

      <span>
        Preis:
      </span>
      <span>
        
        {totalPrice.toFixed(2)} €
      
      </span>
    
    </CartFooter>
  
  </CartWrapper>
};


export default Cart;
