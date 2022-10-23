import Image from "next/image";
import Modal from "../../../components/Modal"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


const CategoryCard = (props) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    const [open, setOpen] = useState(false);

    const addHandler = () => {
        setOpen(true)
    }


    return(
        <div className="p-5 bg-slate-100 rounded-xl shadow-lg">
            <div className="flex justify-center">
            <Image className="mr-auto ml-auto" src={props.link} height={200} width={200}/>
            </div>
            <Modal price={props.price} link={props.link} open={open} onClose={() => setOpen(false)} title={props.title}/>
            <div className="mr-auto ml-auto">
                <h1 className="text-center">{props.title}</h1>
                <div className="flex gap-3 justify-center">
                    <p>${props.price}</p>
                    <Image onClick={addHandler} className="cursor-pointer" src="/add_shopping_cart.svg" width={25} height={25} />
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;