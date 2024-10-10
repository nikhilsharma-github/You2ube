import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";


const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    return (
        <div className="grid grid-flow-col p-2 shadow-lg">
            {/* Hamburger and Youtube Logo  */}
            <div className="flex flex-wrap col-span-2 my-auto w-fit space-x-2">
                <GiHamburgerMenu
                    className='my-auto cursor-pointer'
                    size={28}
                    onClick={()=>toggleMenuHandler()}
                ></GiHamburgerMenu>
                <img
                    className="p-0 h-8 bg-yellow-300"
                    src="img/YoutubeLogo.jpg"
                    alt="youtubeLogo"
                />
            </div>
            {/* SearchBar */}
            <div className="flex col-span-8 justify-center">
                <input
                    className="w-2/3 p-2 border rounded-l-full border-gray-400 "
                    type="text"
                    name=""
                    id=""
                />
                <button className="p-2 border border-gray-400 rounded-r-full">
                    <BsSearch size={24}></BsSearch>
                </button>
            </div>
            {/* UserProfile  */}
            <div className="flex col-span-2">
                <FaRegUserCircle className="my-auto" size={30}></FaRegUserCircle>
            </div>
        </div>
    );
};

export default Head;
