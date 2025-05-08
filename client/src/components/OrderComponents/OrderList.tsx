import { OrderItem } from "./OrderItem";

export const OrderList = () => {
    return (
        <div className="flex flex-col w-fit gap-4 overflow-y-auto max-h-[500px] scrollbar-none">
            <ul className="flex flex-row text-white mb-4">
                <li className="w-8/12">Item</li>
                <li className="w-2/12 text-center">Qty</li>
                <li className="w-2/12 text-center">Price</li>
            </ul>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </div>
    );
}