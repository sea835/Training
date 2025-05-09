import type { Dish } from "../../services/dishServices";

type DishCardProps = {
    dish: Dish;
};

export const DishCard = ({ dish }: DishCardProps) => {
    // console.log("DishCard props:", dish);
    return (
        <div className="relative flex flex-col items-center w-[200px] h-[300px] rounded-[16px] transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="flex flex-col w-full h-[260px] rounded-[16px] bg-[#1F1D2B] text-white items-center shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="w-full h-1/2">
                    <img
                        src={`/${dish.image}`}
                        alt="Spicy seasoned seafood noodles"
                        className="absolute -top-6 left-1/2 transform -translate-x-1/2 object-cover rounded-full hover:brightness-110 transition-all duration-300"
                    />
                </div>
                <div className="flex flex-col items-center h-full w-2/3 justify-center text-center">
                    <p className="text-[16px] font-semibold mb-2">{dish.name}</p>
                    <p className="text-[14px] font-normal mb-1">$ {dish.price}</p>
                    <p className="text-[12px] text-[#ABBBC2]"> Available</p>
                </div>
            </div>
        </div>
    );
}