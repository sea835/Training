import { DishList } from "../components/DishComponent/DishList";
import SideBar from "../components/SideBar";

export const HomePages = () => {
    return (
        <div className="bg-[#2D303E] w-screen h-screen rounded-2xl flex 
        justify-between items-center">
            <SideBar />
            <DishList />
        </div>
    );
}