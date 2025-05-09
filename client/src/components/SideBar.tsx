import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="flex flex-col w-[100px] h-full rounded-e-2xl-[16px] bg-[#1F1D2B] text-[#EA7C69] items-center py-6">
            <Link to="/">
                <img src="/Logo.png" alt="Logo" className="hover:bg-[#2D303E] hover:rounded-xl p-4" />
            </Link>
            <ul className="flex flex-col items-center mt-16 h-3/4">
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <Link to="/home">
                        <img src="/Home.png" alt="Home" className=""/>
                    </Link>
                </li>
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <Link to="/discount">
                        <img src="/Discount.png" alt="Discount" className=""/>
                    </Link>
                </li>
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <Link to="/dashboard">
                        <img src="/Graph.png" alt="Dashboard" />
                    </Link>
                </li>
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <Link to="/messages">
                        <img src="/Message.png" alt="Messages" />
                    </Link>
                </li>
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <Link to="/notifications">
                        <img src="/Notification.png" alt="Notifications" />
                    </Link>
                </li>
                <li className="mb-6 flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                    <Link to="/settings">
                        <img src="/Setting.png" alt="Settings" />
                    </Link>
                </li>
            </ul>
            <div className="flex justify-center hover:bg-[#2D303E] hover:rounded-xl p-4">
                <Link to="/logout">
                    <img src="/Log Out.png" alt="LogOut" className=""/>
                </Link>
            </div>
        </div>
    );
};

export default SideBar;