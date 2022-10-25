import { useState } from 'react';

const FaqItem = (props) => {

const [isOpen, setIsOpen] = useState(false)

const toggle = () => {
    setIsOpen(!isOpen)
}

return (
        <div onClick={toggle} className="hover:bg-sky-500 cursor-pointer w-full border p-3 rounded-lg">
            <h1 className='faq-q text-2xl'>{props.question}</h1>
            {isOpen && <p className='faq-a border-t-2 text-lg mt-5'>{props.answer}</p>}
        </div>
)
}

export default FaqItem;