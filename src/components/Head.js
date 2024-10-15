import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineVideoCall } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSearchDropdown, setShowSearchDropdown] = useState(false);

    const dispatch = useDispatch();
    const username = useSelector((store) => store.app.username);
    const searchCache = useSelector((store) => store.search);
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            getSearchSuggestions();
        }, 2000);
        return () => {
            clearInterval(timer);
        };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        if (searchCache[searchQuery]) {
            setSearchSuggestions(searchCache[searchQuery]);
        } else {
            const response = await fetch(
                "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
                    searchQuery
            );
            const data = await response.json();
            setSearchSuggestions(data[1]);
            dispatch(
                cacheResults({
                    [searchQuery]: data[1],
                })
            );
        }
    };
    return (
        <div className="sticky top-0 left-0 w-full grid grid-flow-col p-1 md:p-2 shadow-lg bg-gray-900">
            {/* Hamburger and Youtube Logo  */}
            <div className="flex flex-wrap col-span-2 my-auto w-fit space-x-2 md:col-span-1">
                <GiHamburgerMenu
                    className="my-auto cursor-pointer text-red-600 size-4 sm:size-6 md:size-8"
                    onClick={() => toggleMenuHandler()}
                ></GiHamburgerMenu>
                <Link to="/">
                    <img
                        className="p-0 h-4 sm:h-6 md:h-8 cursor-pointer"
                        src="img/YoutubeLogo.png"
                        alt="youtubeLogo"
                    />
                </Link>
            </div>
            {/* SearchBar */}
            <div className="flex col-span-8 justify-center md:col-span-6">
                <div className="flex p-0 w-10/12 sm:w-4/5 md:w-full">
                    <input
                        className="w-full px-1 text-xs md:text-lg sm:px-2 md:px-4 p-0 sm:py-1 md:py-2 border-0 rounded-l-full bg-gradient-to-b bg-slate-700 text-white"
                        type="text"
                        name=""
                        id=""
                        placeholder="Search for Videos"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                        onFocus={() => {
                            setShowSearchDropdown(true);
                        }}
                        onBlur={() => {
                            setShowSearchDropdown(false);
                        }}
                    />
                    <button className="px-2 sm:px-4 border-0  rounded-r-full bg-red-800 hover:bg-red-900 text-white">
                        <BsSearch className="size-4 md:size-6"></BsSearch>
                    </button>
                    <div className="fixed shadow-lg text-xs md:text-base top-10 sm:top-14 w-1/3 md:w-4/12 lg:w-7/12 text-white bg-slate-900">
                        <ul>
                            {showSearchDropdown &&
                                searchSuggestions.map((value, index) => (
                                    <li
                                        key={index}
                                        className="p-2 hover:bg-gray-100"
                                    >
                                        {value}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* UserProfile  */}
            <div className="flex col-span-2 me-0 sm:me-2 md:me-4 space-x-1 md:space-x-3 justify-end items-center md:col-span-1">
                <MdOutlineVideoCall className="my-auto size-6 sm:size-8 md:size-12 text-slate-500 " />
                <FaRegBell
                    className="my-auto size-4 sm:size-6 md:size-8 text-slate-500"
                    size={28}
                />
                <FaRegUserCircle
                    className="my-auto size-4 sm:size-6 md:size-8 text-slate-500"
                    size={28}
                ></FaRegUserCircle>
                <span className="m-0 sm:ml-2 p-1 rounded-lg font-thin sm:font-bold border-2 border-red-800 bg-slate-900 text-slate-500">
                    {username}
                </span>
            </div>
        </div>
    );
};

export default Head;
