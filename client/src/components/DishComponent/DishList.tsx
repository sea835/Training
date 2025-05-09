import { DishCard } from "./DishCard"
import { useState } from "react"
import type { Dish } from "../../services/dishServices"
import { getDishes } from "../../services/dishServices"
import { useEffect } from "react"
import { OrderReview } from "../OrderComponents/OrderReview"

export const DishList = () => {
    const date: Date = new Date();
    const today:string = date.toLocaleDateString('en-En', { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'                      
    });     
    const [dishes, setDishes] = useState<Dish[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [showOrderReview, setShowOrderReview] = useState<boolean>(false);
    
    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const data = await getDishes();
                setDishes(data);
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
    
    const toggleOrderReview = () => {
        setShowOrderReview(!showOrderReview);
    };
    
    return (
        <>
            <div className="flex flex-col h-full w-full">  
                <div className="w-2/3 mx-auto">
                    <div className="flex justify-between items-center w-full h-1/6 mt-4">
                        <div className="flex flex-col">
                            <span className="text-3xl text-white font-bold">Jaegar Resto</span>
                            <span className="text-2xl text-[#989898] font-normoal ">{today}</span>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <button 
                                onClick={toggleOrderReview} 
                                className="bg-[#EA7C69] hover:bg-[#c76857] text-white p-3 rounded-lg flex items-center justify-center"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </button>
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
                        <div className="grid grid-cols-4 gap-4 w-full h-2/3 p-4 pt-10 overflow-y-auto scrollbar-none">  
                            {dishes.map((dish) => (
                                <DishCard key={dish.id} dish={dish}/>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <OrderReview visible={showOrderReview}/>
        </>
    )
}