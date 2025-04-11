import { useModal } from "../ModalContext";
import { useNavigate } from 'react-router-dom';
import Button from "./Button";
import { useEffect, useState } from "react";

const CartModal = (props) => {
    const { isModalOpen, closeModal } = useModal();
    const navigate = useNavigate();
    const [isTransitioning, setIsTransitioning] = useState(false); 

    useEffect(() => {
        if (isModalOpen) {
            setIsTransitioning(true);
        }
    }, [isModalOpen]);

    const getTotal = () => {

        const total = props.orders.reduce((acc, product) =>{
            return acc + parseInt(product.price) * product.quantity
        }, 0)
        return total
    }

    const handleItemClick = (item) => {
        navigate(`/product/${item.name}`, {
            state: { product: item }
        });
    };

    const handleClose = () => {
        setIsTransitioning(false);
        setTimeout(closeModal, 300); 
    };

    const handleClick = () => {
        closeModal();
        navigate('/checkout', {
            state: { orders: props.orders}
        });
    };

    const handleDelete = (index) => {
        props.onDelete(index)
    }

    return (
        <div className={`fixed top-0 right-0 bottom-0 bg-opacity-50 flex justify-end 
                        items-center w-[400px] z-50 transition-all duration-300 transform 
                        ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <div className={`bg-white rounded-lg shadow-xl w-full max-w-sm h-full 
                            flex flex-col transition-all duration-300 
                            ${isTransitioning ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className="p-6 flex justify-between items-center border-b border-black border-opacity-25">
                    <Button onClick={handleClose}>
                        Close
                    </Button>

                    <h1 className="text-[32px]">
                        Cart
                    </h1>
                </div>

                <div className="py-4 flex-1 flex flex-col overflow-y-scroll">
                    {
                        props.orders.map((order, index) => (
                            <div key={index} 
                                 className="p-2 px-4 grid grid-cols-[125px,auto,28px] grid-rows-3 items-center gap-x-2
                                            hover:bg-[#F5F5F5] w-full cursor-pointer"
                                 onClick={() => handleItemClick(order)}
                            >
                                <div className="row-span-3">
                                    <img src={order.image} 
                                         alt="" 
                                         className="h-28 w-32"
                                    />
                                </div>
                                <h1 className="row-span-1 font-medium h-6 truncate">{order.name}</h1>

                                <button className="row-span-3 ml-2 flex w-full items-center hover:text-red-600" 
                                        onClick={() => handleDelete(order.index)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                         width="24" height="24" 
                                         viewBox="0 0 24 24"

                                    >
                                        <path fill="currentColor" d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3zM7 6h10v13H7zm2 2v9h2V8zm4 0v9h2V8z"/>
                                    </svg>    
                                </button>

                                <h1 className="row-span-1 font-semibold">${order.price}</h1>
                                <h1>x{order.quantity}</h1>
                                
                            </div>
                        ))
                    }
                </div>

                <div className="py-4 px-6 w-full border-t border-black border-opacity-25">
                    <div className="flex justify-between mb-3">
                        <h1>Total Amount</h1>
                        <h1>${getTotal()}</h1>
                    </div>

                    <Button 
                        onClick={handleClick}
                        style={{ 
                            width: `100%`,         
                            height: `60px`
                        }}
                    > 
                        CHECK OUT 
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
