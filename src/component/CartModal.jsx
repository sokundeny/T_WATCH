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

                <div className="p-4 flex-1">
                    {
                        props.orders.map((order, index) => (
                            <div key={index} className="flex justify-between">
                                <h1>{order.product}</h1>
                                <h1>{order.quantity}</h1>
                            </div>
                        ))
                    }
                </div>

                <div className="py-4 px-6 w-full border-t border-black border-opacity-25">
                    <div className="flex justify-between mb-3">
                        <h1>Total Amount</h1>
                        <h1>$1000.01</h1>
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
