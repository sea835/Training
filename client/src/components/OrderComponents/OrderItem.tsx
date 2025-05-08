export const OrderItem = () => {
    return (
        <div className="flex flex-col min-w-[360px] h-fit text-white font-semibold">
            <div className="flex justify-between mb-4 h-[50p]">
                <div className="w-5/6 flex flex-row items-center justify-start h-full">
                    <div className="w-3/4 flex flex-row items-center justify-start h-full">
                        <img src="Dish1.png" alt="" className="w-[40px] h-[40px] my-auto"/>
                        <div className="flex flex-col pl-2 h-full justify-between">
                            <p className="text-[16px]">Spicy seasoned sea...</p>
                            <p className="text-[#ABBBC2]">$20,00</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-end h-[50px] w-1/4">
                        <div className="flex flex-row items-center justify-center h-full w-2/3 bg-[#393C49] rounded-lg">
                            <p className="text-sm">2</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-center w-1/6 h-full pl-2 my-auto">
                    <span className="text-sm">$40,00</span>
                </div>
            </div>
            <div className="flex flex-row h-[50px]">
                <input type="text" className="bg-[#393C49] rounded-lg w-5/6 h-full pl-4" placeholder="Order Note..."/>
                <img src="DeleteBut.png" alt="" className="h-full pl-2"/>
            </div>
        </div>
    );
}