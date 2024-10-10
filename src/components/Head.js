import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);
    const [showSearchDropdown, setShowSearchDropdown] = useState(false);

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            getSearchSuggestions();
        }, 200);
        return () => {
            clearInterval(timer);
        };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const response = await fetch(
            "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
                searchQuery
        );
        const data = await response.json();
        setSearchSuggestions(data[1]);
    };
    return (
        <div className="grid grid-flow-col p-2 shadow-lg">
            {/* Hamburger and Youtube Logo  */}
            <div className="flex flex-wrap col-span-2 my-auto w-fit space-x-2">
                <GiHamburgerMenu
                    className="my-auto cursor-pointer"
                    size={28}
                    onClick={() => toggleMenuHandler()}
                ></GiHamburgerMenu>
                <img
                    className="p-0 h-8 bg-yellow-300"
                    src="img/YoutubeLogo.jpg"
                    alt="youtubeLogo"
                />
            </div>
            {/* SearchBar */}
            <div className="flex col-span-8 justify-center">
                <div className="flex w-2/3">
                    <input
                        className="w-4/5 p-2 border rounded-l-full border-gray-400 "
                        type="text"
                        name=""
                        id=""
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
                    <button className="p-2 border border-gray-400 rounded-r-full">
                        <BsSearch size={24}></BsSearch>
                    </button>
                </div>
                <div className="fixed shadow-lg bg-white">
                    <ul>
                        {showSearchDropdown &&
                            searchSuggestions.map((value, index) => (
                                <li key={index}>{value}</li>
                            ))}
                    </ul>
                </div>
            </div>
            {/* UserProfile  */}
            <div className="flex col-span-2">
                <FaRegUserCircle
                    className="my-auto"
                    size={30}
                ></FaRegUserCircle>
            </div>
        </div>
    );
};

export default Head;
