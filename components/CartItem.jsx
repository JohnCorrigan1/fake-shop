import Image from "next/image";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../store/index";

const CartItem = (props) => {
  const [quantity, setQuantity] = useState(props.quantity);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state);

  const getTotal = () => {
    let newTotal = 0;
    cart.forEach((item) => {
      newTotal += item.quantity * item.price;
    });
    props.setTotal(newTotal);
  };

  const removeHandler = () => {
    dispatch(cartActions.removeItem(props.id));
  };

  const quantityHandler = (e) => {
    let params = { quantity: e.target.value, id: props.id };
    dispatch(cartActions.updateQuantity(params));
    setQuantity(e.target.value);
  };

  return (
    <div className="mt-5 flex items-center border-2 gap-5 w-full justify-between p-5">
      <Image src={props.link} height={150} width={150} />
      <div className="flex-col text-black">
        <h1 className="text-xl font-bold">Dalle Runners</h1>
        <div className="">
          <p className="font-bold">
            Quantity:{" "}
            <select
              value={quantity}
              onChange={quantityHandler}
              className="cursor-pointer"
            >
              <option className="text-center" value="1">
                1
              </option>
              <option className="text-center" value="2">
                2
              </option>
              <option className="text-center" value="3">
                3
              </option>
              <option className="text-center" value="4">
                4
              </option>
              <option className="text-center" value="5">
                5
              </option>
              <option className="text-center" value="6">
                6
              </option>
              <option className="text-center" value="7">
                7
              </option>
              <option className="text-center" value="8">
                8
              </option>
              <option className="text-center" value="9">
                9
              </option>
              <option className="text-center" value="10">
                10
              </option>
            </select>
          </p>
          <p>Total: ${props.price * quantity}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10">
        <button
          onClick={removeHandler}
          className="active:scale-95 hover:bg-rose-600 text-lg rounded-lg bg-rose-500 w-fit p-2 shadow-md shadow-slate-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
