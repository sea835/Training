export const DishCard = () => {
    return (
        <div className="relative flex flex-col items-center w-[200px] h-[300px] rounded-[16px]">
            <div className="flex flex-col w-full h-[260px] rounded-[16px] bg-[#1F1D2B] text-white items-center shadow-lg">
                <div className="w-full h-1/2">
                    <img 
                    src="/Dish1.png" 
                    alt="Spicy seasoned seafood noodles" 
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 object-cover rounded-full" 
                    />
                </div>
                <div className="flex flex-col items-center h-full w-2/3 justify-center text-center">
                    <p className="text-[16px] font-normal mb-2">Spicy seasoned seafood noodles</p>
                    <p className="text-[14px] font-normal mb-1">$ 2.29</p>
                    <p className="text-[12px] text-[#ABBBC2]">20 Bowls available</p>
                </div>
            </div>
        </div>
    );
}