import { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import CartItem from "./CartItem";
// import { cartItems } from "../data/cartItems";
import { cartActions } from "./../store/index";

const CartModal = (props) => {

    const cart = useSelector(state => state)

//   const [cartData, setCartData] = useState(cartItems)
  const getTotal = () => {
    let newTotal = 0;
    cart.forEach(item => {
      newTotal += (item.price * item.quantity)
    })
   return newTotal
  }
  const [total, setTotal] = useState(getTotal);

  
  if (!props.open) return null;

  return (
    <>
      <div className="modal bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-50"></div>
      <div className="cart overflow-y-scroll bg-white flex flex-col gap-10 items-center p-12 rounded-xl fixed right-0 w-5/6 max-w-2xl h-5/6 mt-20 z-50">
        <div className="absolute top-5 left-5 ">
          <Image
            onClick={props.onClose}
            className="cursor-pointer"
            src="/arrowRight.svg"
            height={40}
            width={40}
          />
        </div>
        {cart.map(item =>
          <CartItem
          setTotal={setTotal}
          key={item.id}
          id={item.id}
          price={item.price}
          link={item.link}
          quantity={item.quantity}
          />
        )}
      <div className="text-black absolute bottom-0">
        <p>Total: ${total}</p>
        <button>Checkout</button>
      </div>
      </div>
    </>
  );
};

export default CartModal;
