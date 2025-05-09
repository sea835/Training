import { DishCard } from "./DishCard"
import { useState } from "react"
import type { Dish } from "../../services/dishServices"
import { getDishes } from "../../services/dishServices"
import { useEffect } from "react"   

export const DishList = () => {
    const date: Date = new Date();
    const today:string = date.toLocaleDateString('en-En', { 
        // vi-VN
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'                      
    });     
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const data = await getDishes();
                setDishes(data);
                // console.log("Fetched dishes:", data);
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                setError(errorMessage);
                console.error("Error fetching dishes:", errorMessage);
            } finally {
                setLoading(false);
            }
        };
        fetchDishes();
    }, []); 
    
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
            
            {loading ? (
                <div className="flex justify-center items-center w-full h-2/3">
                    <span className="text-white text-xl">Loading dishes...</span>
                </div>
            ) : error ? (
                <div className="flex justify-center items-center w-full h-2/3">
                    <span className="text-red-500 text-xl">Error: {error}</span>
                </div>
            ) : (
                <div className="grid grid-cols-4 gap-8 w-full h-2/3 p-4 pt-10 overflow-y-auto scrollbar-none">  
                    {dishes.map((dish) => (
                        <DishCard dish={dish}/>
                    ))}
                </div>
            )}
        </div>
    )
}