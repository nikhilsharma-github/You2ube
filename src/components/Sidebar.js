import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { RiPlayList2Fill } from "react-icons/ri";
import { BiSolidLike } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";
import { RiVideoDownloadFill } from "react-icons/ri";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    if (!isMenuOpen) return null;

    return (
        <div className={`fixed h-screen z-10  p-3 bg-slate-950 text-white ${isMenuOpen ? 'animate-slideIn' : 'animate-slideOut'}`}>
            <ul className="my-2 space-y-2  ">
                <Link to="/">
                    <li className="flex items-center hover:bg-slate-900 rounded-lg p-1">
                        <MdHomeFilled></MdHomeFilled>
                        <span className="p-1">Home</span>
                    </li>
                </Link>
                <li className="flex items-center hover:bg-slate-900 rounded-lg p-1">
                    <SiYoutubeshorts></SiYoutubeshorts>
                    <span className="p-1">Shorts</span>
                </li>
                <li className="flex items-center hover:bg-slate-900 rounded-lg p-1">
                    <MdSubscriptions></MdSubscriptions>
                    <span className="p-1">Subscriptions</span>
                </li>
            </ul>
            <ul className="my-2 space-y-2 ">
                <li className="flex items-center hover:bg-slate-900 rounded-lg p-1">
                    <BsFillCollectionPlayFill></BsFillCollectionPlayFill>
                    <span className="p-1">Channel</span>
                </li>
                <li className="flex items-center hover:bg-slate-900 rounded-lg p-1">
                    <FaHistory></FaHistory>
                    <span className="p-1">History</span>
                </li>
                <li className="flex items-center hover:bg-slate-900 rounded-lg p-1">
                    <RiPlayList2Fill></RiPlayList2Fill>
                    <span className="p-1">Playlist</span>
                </li>
                <li className="flex items-center hover:bg-slate-900 rounded-lg p-1">
                    <BiSolidLike></BiSolidLike>
                    <span className="p-1">Liked</span>
                </li>
                <li className="flex items-center hover:bg-slate-900 rounded-lg p-1">
                    <MdWatchLater></MdWatchLater>
                    <span className="p-1">Watch Later</span>
                </li>
                <li className="flex items-center hover:bg-slate-900 rounded-lg p-1">
                    <RiVideoDownloadFill></RiVideoDownloadFill>{" "}
                    <span className="p-1">Downloads</span>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
