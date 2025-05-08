import { DishList } from "./components/DishComponent/DishList"
import { OrderReview } from "./components/OrderComponents/OrderReview"


import SideBar from "./components/SideBar"
function App() {
  // 
  return (
    <div className="bg-[#2D303E] w-screen h-screen rounded-2xl flex 
    justify-between items-center">
      <SideBar />
      <DishList />
      <OrderReview />
    </div>
  )
}

export default App
