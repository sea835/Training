// import { DishCard } from "./components/DishCard"

import { OrderItem } from "./components/OrderComponents/OrderItem"

// import SideBar from "./components/SideBar"
function App() {
  // bg-[#2D303E]
  return (
    <div className="bg-gray-300 w-[1200px] h-screen rounded-2xl flex justify-center items-center">
      {/* <SideBar /> */}
      {/* <DishCard /> */}
      <OrderItem />
    </div>
  )
}

export default App
