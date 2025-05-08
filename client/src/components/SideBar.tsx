const SideBar = () => {
    return (
        <div className="flex flex-col w-[100px] h-full rounded-[16px] bg-[#1F1D2B] text-[#EA7C69] items-center py-6">
            <img src="/Logo.png" alt="Logo" className="hover:bg-[#2D303E] hover:rounded-xl p-4" />
            <ul className="flex flex-col items-center mt-16 h-3/4">
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <img src="/Home.png" alt="" className=""/>
                </li>
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <img src="/Discount.png" alt="" className=""/>
                </li>
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <img src="/Graph.png" alt="" />
                </li>
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <img src="/Message.png" alt="" />
                </li>
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <img src="/Notification.png" alt="" />
                </li>
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <img src="/Setting.png" alt="" />
                </li>
            </ul>
            <div className="flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                <img src="/Log Out.png" alt="LogOut" className=""/>
            </div>
        </div>
    );
};

export default SideBar;