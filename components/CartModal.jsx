import { useState, useEffect } from "react";
import Image from "next/image";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartModal = (props) => {
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state);

  useEffect(() => {
    let newTotal = 0;
    cart.forEach((item) => {
      newTotal += item.price * item.quantity;
    });
    setTotal(newTotal);
  }),
    [cart];

  if (!props.open) return null;

  return (
    <>
      <div className="modal bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-50"></div>
      <div className={`${props.active ? 'cart-in' : 'cart-out'} overflow-y-scroll bg-white flex flex-col gap-10 items-center p-12 rounded-xl fixed right-0 w-5/6 max-w-2xl h-5/6 mt-20 z-50`}>
        <div className="absolute top-5 left-5 ">
          <Image
            onClick={props.onClose}
            className="cursor-pointer"
            src="/arrowRight.svg"
            height={40}
            width={40}
          />
        </div>
        {cart.length < 1 ? (
          <h1 className=" m-auto text-2xl text-slate-400">Cart Empty...</h1>
        ) : (
          cart.map((item) => (
            <CartItem
              setTotal={setTotal}
              key={item.id}
              id={item.id}
              price={item.price}
              link={item.link}
              quantity={item.quantity}
            />
          ))
        )}
        <div className="text-black mt-auto bottom-0">
          <p>Total: ${Math.round(total * 100) / 100}</p>
          <button className=" active:scale-95 bg-cyan-400 p-2 pr-5 pl-5 rounded-lg shadow-md shadow-slate-400 hover:bg-cyan-500">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartModal;
