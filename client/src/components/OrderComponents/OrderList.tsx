import { OrderItem } from "./OrderItem";

export const OrderList = () => {
    return (        
        <div className="w-5/6 h-full flex flex-col">
            <ul className="flex flex-row text-white mb-4 justify-between text-2xl font-normal">
                <li className="w-8/12">Item</li>
                <li className="w-2/12 text-center">Qty</li>
                <li className="w-2/12 text-center">Price</li>
            </ul>
            <div className="flex flex-col w-full gap-4 overflow-y-auto max-h-[500px] scrollbar-none">   
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </div>
        </div>
    );
}