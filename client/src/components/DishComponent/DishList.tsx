import { DishCard } from "./DishCard"

export const DishList = () => {
    const date: Date = new Date();
    const today:string = date.toLocaleDateString('en-En', { 
        // vi-VN
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'          
    });     
    return (
        <div className="flex flex-col h-full">  
            <div className="flex justify-between items-center w-full h-1/6 mt-4">
                <div className="flex flex-col">
                    <span className="text-3xl text-white font-bold">Jaegar Resto</span>
                    <span className="text-2xl text-[#989898] font-normoal ">{today}</span>
                </div>
                <div className="flex flex-col items-center justify-center 1/3">
                    <input type="text" placeholder="Search for food, coffe, etc.." 
                    className="text-[#989898] bg-[#3A3D4B] rounded-2xl h-full py-4 px-16"/>
                </div>
            </div>
            <span className="text-2xl text-white font-bold mt-8 ml-4 pb-4">Choose Dishes</span>
            <div className="grid grid-cols-4 gap-8  w-full h-2/3 p-4 pt-10 overflow-y-auto scrollbar-none">  
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
                <DishCard />
            </div>  
        </div>
    )
}   