import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/index";

const Modal = (props) => {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state);

  const addItemHandler = () => {
    const item = {
      title: props.title,
      link: props.link,
      quantity: quantity,
      price: props.price,
      id: Math.random(),
    };
    dispatch(cartActions.addItem(item));
    console.log(cart);
    props.onClose();
  };

  //   const addItemHandler = () => {
  //     cartItems.push({
  //       title: props.title,
  //       link: props.link,
  //       quantity: quantity,
  //       price: props.price,
  //       id: Math.random()
  //     });
  //     console.log(cartItems);
  //     props.onClose();
  //   };

  if (!props.open) return null;

  return (
    <>
      <div className="bg-black bg-opacity-70 fixed top-0 right-0 bottom-0 left-0 z-50"></div>
      <div className=" bg-white flex flex-col gap-10 items-center p-12 rounded-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5/6 max-w-lg z-50">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <div className="flex flex-col items-center">
          <Image src={props.link} height={200} width={200} />

          <p>Total: ${props.price}</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-10">
          <button
            onClick={addItemHandler}
            className="rounded-lg w-fit p-3 bg-cyan-500 hover:bg-cyan-600 shadow-md shadow-slate-500 text-xl"
          >
            Add to Cart
          </button>
          <button
            onClick={props.onClose}
            className=" hover:bg-rose-600 text-xl rounded-lg bg-rose-500 w-fit p-3 shadow-md shadow-slate-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
