import { OrderList } from "./OrderList";

export const OrderReview = () => {
    return (
        <div className="bg-[#1F1D2B] w-1/3 h-full flex flex-col">
            <p className="text-white font-bold text-3xl pl-4 pt-8">Orders #34562</p>
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
                    <button className="bg-[#EA7C69] py-4 rounded-xl w-full">Continue to Payment</button>
                </div>
            </div>
        </div>
    );
}