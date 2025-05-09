import { OrderList } from "./OrderList";
import { useState, useEffect } from "react";

interface OrderReviewProps {
    visible: boolean;
}

export const OrderReview = ({visible}: OrderReviewProps) => {  
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setIsVisible(visible);
    }, [visible]);
    
    
    // If not visible, don't render
    if (!isVisible) {
        return null;
    }
    
    return (
        <div className="bg-[#1F1D2B] w-1/3 h-full flex flex-col rounded-s-2xl">
            <div className="flex justify-between items-center">
                <p className="text-white font-bold text-3xl pl-4 pt-8">Orders #34562</p>
                <button 
                    className="text-white mr-4 pt-8"
                    onClick={() => setIsVisible(false)}
                >
                    ✕
                </button>
            </div>
            <div className="flex justify-center items-center mt-16">
                <OrderList />
            </div>
            <div className="text-white font-semibold text-xl flex flex-col justify-center items-center mt-12">
                <div className="flex flex-row justify-between w-5/6">
                    <p className="font-normal">Discount:</p> <p>$0</p>
                </div>
                <div className="flex flex-row justify-between w-5/6">
                    <p className="font-normal">Total: </p> <p>$100</p>
                </div>
                <div className="mt-24 w-5/6">
                    <button className="bg-[#EA7C69] py-4 rounded-xl w-full hover:bg-[#efada2]">Continue to Payment</button>
                </div>
            </div>
        </div>
    );
}